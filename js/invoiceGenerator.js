/**
 * INVOICE GENERATOR - Générateur de factures pédagogiques
 * Crée des factures réalistes avec ou sans erreurs
 */

class InvoiceGenerator {
  constructor() {
    this.data = {
      entreprises: [],
      clients: [],
      products: {}
    };
    this.templates = {
      vatRates: [6, 12, 21],
      paymentTerms: [8, 15, 30, 45]
    };
    
    // Mapping des taux de TVA selon le secteur (réglementation belge)
    // Sources: https://www.myfid.be/ressources/comptabilite/taux-tva/
    //          https://www.accountable.eu/fr-be/blog/taux-tva-belgique/
    this.vatRatesBySector = {
      // Taux réduit 6%: produits alimentaires de base, médicaments, livres
      'food': 6,           // Alimentation (viande, poisson, lait, œufs, légumes, fruits...)
      'bakery': 6,         // Boulangerie (pain, viennoiseries...)
      'health': 6,         // Santé (médicaments, dispositifs médicaux)
      'retail': 21,        // Commerce de détail général (21% sauf livres/médicaments)
      
      // Taux intermédiaire 12%: restauration sur place, certains logements sociaux
      'services': 12,      // Services de restauration (repas sur place)
      'carpentry': 21,     // Menuiserie (taux standard)
      'construction': 6,   // Travaux immobiliers sur logements de +10 ans
      'cleaning': 21,      // Nettoyage (taux standard)
      
      // Taux normal 21%: par défaut
      'automotive': 21,    // Automobile, garages
      'tech': 21,          // Technologie, informatique
      'default': 21        // Par défaut
    };
  }

  /**
   * Ajoute des jours à une date (format DD/MM/YYYY)
   * @param {string} dateStr - Date au format DD/MM/YYYY
   * @param {number} days - Nombre de jours à ajouter (peut être négatif)
   * @returns {string} - Nouvelle date au format DD/MM/YYYY
   */
  addDays(dateStr, days) {
    const [day, month, year] = dateStr.split('/').map(Number);
    const date = new Date(year, month - 1, day);
    date.setDate(date.getDate() + days);
    return date.toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit', year: 'numeric' });
  }

  /**
   * Calcule le nombre maximum d'erreurs possible selon les types sélectionnés
   * @param {number} lineCount - Nombre de lignes de la facture (défaut: 5)
   * @param {Array<string>} errorTypes - Types d'erreurs sélectionnés
   * @returns {number} - Nombre maximum d'erreurs possibles
   */
  getMaxErrors(lineCount = 5, errorTypes = ['calculation', 'vat', 'date', 'missing']) {
    const calculationAvailable = errorTypes.includes('calculation');
    const vatAvailable = errorTypes.includes('vat');
    const dateAvailable = errorTypes.includes('date');
    const missingAvailable = errorTypes.includes('missing');
    
    // Calculer le max:
    // - Date: 3 types différents (due_date_same, due_date_short, due_date_past)
    // - Missing: 5 types différents (client_vat, client_name, client_address, invoice_number, invoice_date)
    // - VAT: 1 (total) + lineCount (taux sur chaque ligne)
    // - Calculation: lineCount
    return (dateAvailable ? 3 : 0) + 
           (missingAvailable ? 5 : 0) + 
           (vatAvailable ? 1 + lineCount : 0) +
           (calculationAvailable ? lineCount : 0);
  }

  async loadData() {
    // Charger les données CSV si disponibles
    if (typeof dataLoader !== 'undefined') {
      await dataLoader.loadAll();
      this.data.entreprises = dataLoader.getAllEntreprises?.() || [];
      this.data.clients = dataLoader.getAllClients?.() || [];
    }
    
    // Données par défaut si pas de CSV ou pas de produits
    if (this.data.entreprises.length === 0 || Object.keys(this.data.products).length === 0) {
      this.loadDefaultData();
    }
  }

  loadDefaultData() {
    this.data.products = {
      retail: [
        { name: 'Livre pédagogique', price: 24.99 },
        { name: 'Cahier d\'exercices', price: 8.50 },
        { name: 'Stylos (lot de 3)', price: 5.99 },
        { name: 'Cartable', price: 45.00 }
      ],
      bakery: [
        { name: 'Baguette tradition', price: 1.20 },
        { name: 'Croissant au beurre', price: 1.50 },
        { name: 'Pain de mie', price: 2.80 },
        { name: 'Tarte aux pommes', price: 12.50 }
      ],
      tech: [
        { name: 'Clavier sans fil', price: 45.00 },
        { name: 'Souris optique', price: 25.99 },
        { name: 'Câble USB-C (2m)', price: 15.00 },
        { name: 'Support écran', price: 35.00 }
      ],
      services: [
        { name: 'Consultation 1h', price: 75.00 },
        { name: 'Dépannage urgent', price: 120.00 },
        { name: 'Maintenance mensuelle', price: 150.00 },
        { name: 'Formation 2h', price: 200.00 }
      ],
      construction: [
        { name: 'Main d\'œuvre (heure)', price: 55.00 },
        { name: 'Matériel divers', price: 85.00 },
        { name: 'Déplacement', price: 25.00 },
        { name: 'Conseil technique', price: 90.00 }
      ]
    };
    
    this.data.entreprises = [
      { id: 'SOC007', name: 'Boulangerie Dupont', sector: 'food', address: '8 Rue du Commerce, 1000 Bruxelles', vat: 'BE 0776405277', logo: 'assets/logos/societe_soc007.svg' },
      { id: 'SOC001', name: 'AutoPro Service', sector: 'automotive', address: '25 Rue du Commerce, 1000 Bruxelles', vat: 'BE 0242143461', logo: 'assets/logos/societe_soc001.svg' },
      { id: 'SOC013', name: 'Menuiserie Bois', sector: 'carpentry', address: '39 Rue du Commerce, 7000 Mons', vat: 'BE 0601648406', logo: 'assets/logos/societe_soc013.svg' },
      { id: 'SOC019', name: 'NetPro Services', sector: 'cleaning', address: '90 Rue du Commerce, 1000 Bruxelles', vat: 'BE 0843259803', logo: 'assets/logos/societe_soc019.svg' },
      { id: 'SOC025', name: 'Bâtisseurs Pro', sector: 'construction', address: '72 Rue du Commerce, 7000 Mons', vat: 'BE 0790077046', logo: 'assets/logos/societe_soc025.svg' }
    ];
    
    this.data.clients = [
      { id: 1, name: 'Jean Dupont', type: 'retail', address: '12 Rue du Client, 1000 Bruxelles' },
      { id: 2, name: 'Entreprise ABC SA', type: 'business', address: '45 Avenue Corporate, 1200 Woluwe', vat: 'BE 0111.222.333' },
      { id: 3, name: 'Marie Martin', type: 'retail', address: '78 Rue Résidentielle, 1150 Woluwe-Saint-Pierre' },
      { id: 4, name: 'Société XYZ NV', type: 'business', address: '90 Boulevard Business, 1000 Bruxelles', vat: 'BE 0444.555.666' }
    ];
    
    this.data.products = {
      retail: [
        { name: 'Livre pédagogique', price: 24.99 },
        { name: 'Cahier d\'exercices', price: 8.50 },
        { name: 'Stylos (lot de 3)', price: 5.99 },
        { name: 'Cartable', price: 45.00 }
      ],
      food: [
        { name: 'Baguette tradition', price: 1.20 },
        { name: 'Croissant au beurre', price: 1.50 },
        { name: 'Pain de mie', price: 2.80 },
        { name: 'Tarte aux pommes', price: 12.50 }
      ],
      tech: [
        { name: 'Clavier sans fil', price: 45.00 },
        { name: 'Souris optique', price: 25.99 },
        { name: 'Câble USB-C (2m)', price: 15.00 },
        { name: 'Support écran', price: 35.00 }
      ],
      services: [
        { name: 'Consultation 1h', price: 75.00 },
        { name: 'Dépannage urgent', price: 120.00 },
        { name: 'Maintenance mensuelle', price: 150.00 },
        { name: 'Formation 2h', price: 200.00 }
      ],
      construction: [
        { name: 'Main d\'œuvre (heure)', price: 55.00 },
        { name: 'Matériel divers', price: 85.00 },
        { name: 'Déplacement', price: 25.00 },
        { name: 'Conseil technique', price: 90.00 }
      ]
    };
  }

  /**
   * Génère une facture
   * @param {Object} options - Options de génération
   */
  async generate(options = {}) {
    const mode = options.mode || 'quick';
    const lang = options.invoiceLang || options.lang || 'fr';
    
    // Charger les produits si pas déjà fait
    if (typeof dataLoader !== 'undefined' && dataLoader.loadProducts) {
      await dataLoader.loadProducts();
    }
    
    // Sélectionner entreprise et client
    const entreprise = this.selectEntreprise(options.entreprise);
    const client = this.selectClient(options.client, options.clientType);
    
    // Générer les lignes avec la langue
    const lines = await this.generateLines(entreprise.sector, options.lineCount || 5, lang);
    
    // Calculer les totaux
    const calculations = this.calculateTotals(lines);
    
    // Générer les dates
    const invoiceDate = this.generateDate();
    const operationDate = this.generateOperationDate(invoiceDate);
    
    // Créer la facture
    const invoice = {
      number: this.generateInvoiceNumber(),
      date: invoiceDate,
      operationDate: operationDate,  // Date de livraison/prestation (obligatoire si différente)
      dueDate: this.generateDueDate(),
      company: entreprise,
      client: client,
      lines: lines,
      subtotal: calculations.subtotal,
      vatAmount: calculations.vatAmount,
      total: calculations.total,
      vatBreakdown: calculations.vatBreakdown,
      paymentTerms: this.templates.paymentTerms[Math.floor(Math.random() * this.templates.paymentTerms.length)]
    };
    
    // Introduire des erreurs si mode exercice
    if (mode === 'exercise' || mode === 'errors') {
      this.introduceErrors(invoice, options.errorCount || 3, options.errorTypes);
    }
    
    return invoice;
  }

  /**
   * Génère un lot de factures
   */
  async generateBatch(count, options = {}) {
    const invoices = [];
    for (let i = 0; i < count; i++) {
      invoices.push(await this.generate(options));
    }
    return invoices;
  }

  selectEntreprise(specific) {
    if (specific) {
      return this.data.entreprises.find(e => e.id === specific || e.name === specific) || this.data.entreprises[0];
    }
    return this.data.entreprises[Math.floor(Math.random() * this.data.entreprises.length)];
  }

  selectClient(specific, type = 'all') {
    let clients = this.data.clients;
    if (type !== 'all') {
      clients = clients.filter(c => c.type === type);
    }
    if (clients.length === 0) clients = this.data.clients;
    
    if (specific) {
      return clients.find(c => c.id === specific || c.name === specific) || clients[0];
    }
    return clients[Math.floor(Math.random() * clients.length)];
  }

  async generateLines(sector, count, lang = 'fr') {
    let products = null;
    
    // Mapping des secteurs internes vers la base de données
    const sectorMapping = {
      'food': 'bakery',
      'automotive': 'automotive',
      'carpentry': 'carpentry',
      'cleaning': 'cleaning',
      'construction': 'construction'
    };
    const mappedSector = sectorMapping[sector] || sector;
    
    // 1. Essayer dataLoader (CSV)
    if (typeof dataLoader !== 'undefined' && dataLoader.getProducts) {
      products = dataLoader.getProducts(mappedSector, lang);
    }
    
    // 2. Essayer getProducts du fichier products.js
    if (!products && typeof getProducts === 'function') {
      products = getProducts(mappedSector, lang);
    }
    
    // 3. Fallback sur les données internes
    if (!products) {
      products = this.data.products[sector] || this.data.products.retail;
    }
    
    const lines = [];
    
    // Taux de TVA par défaut selon le secteur
    const baseVatRate = this.vatRatesBySector[sector] || this.vatRatesBySector['default'];
    
    for (let i = 0; i < count; i++) {
      const product = products[Math.floor(Math.random() * products.length)];
      const qty = Math.floor(Math.random() * 10) + 1;
      
      // Le taux de TVA est déterminé par le type de produit (cohérent)
      // Pas de variation aléatoire pour le même produit
      const productName = product.name || product.description;
      const vatRate = this.getProductVatRate(productName, baseVatRate);
      
      lines.push({
        id: i + 1,
        description: product.name,
        qty: qty,
        unitPrice: product.unitPrice || product.price,
        vatRate: vatRate,
        total: parseFloat((qty * (product.unitPrice || product.price)).toFixed(2))
      });
    }
    
    return lines;
  }

  /**
   * Détermine le taux de TVA d'un produit selon son nom
   * Cohérent : un même produit a toujours le même taux
   */
  getProductVatRate(productName, defaultRate) {
    const name = productName.toLowerCase();
    
    // Produits à 6% (alimentation, médicaments, livres, eau, électricité...)
    const taux6 = ['pain', 'baguette', 'croissant', 'lait', 'œuf', 'oeuf', 'viande', 
                   'poisson', 'légume', 'fruit', 'farine', 'beurre', 'fromage', 
                   'livre', 'médicament', 'eau', 'pain de mie', 'tarte', 'éclair',
                   'macaron', 'brioche', 'quiche', 'pomme'];
    
    // Produits à 12% (restauration sur place - pas applicable ici)
    // La plupart des produits utilisent le taux du secteur ou 21%
    
    if (taux6.some(keyword => name.includes(keyword))) {
      return 6;
    }
    
    // Retourner le taux par défaut du secteur
    return defaultRate;
  }

  calculateTotals(lines) {
    let subtotal = 0;
    let vatAmount = 0;
    const vatBreakdown = {};
    
    lines.forEach(line => {
      subtotal += line.total;
      const lineVat = line.total * (line.vatRate / 100);
      vatAmount += lineVat;
      
      if (!vatBreakdown[line.vatRate]) {
        vatBreakdown[line.vatRate] = { base: 0, vat: 0 };
      }
      vatBreakdown[line.vatRate].base += line.total;
      vatBreakdown[line.vatRate].vat += lineVat;
    });
    
    return {
      subtotal: parseFloat(subtotal.toFixed(2)),
      vatAmount: parseFloat(vatAmount.toFixed(2)),
      total: parseFloat((subtotal + vatAmount).toFixed(2)),
      vatBreakdown
    };
  }

  generateInvoiceNumber() {
    const year = new Date().getFullYear();
    const random = Math.floor(Math.random() * 9000) + 1000;
    return `F-${year}-${random}`;
  }

  generateDate() {
    const date = new Date();
    date.setDate(date.getDate() - Math.floor(Math.random() * 30));
    return date.toLocaleDateString('fr-FR');
  }

  generateDueDate() {
    const date = new Date();
    date.setDate(date.getDate() + 30);
    return date.toLocaleDateString('fr-FR');
  }

  generateOperationDate(invoiceDate) {
    // Date de l'opération (livraison/prestation) : entre 1 et 10 jours avant la facture
    const date = new Date();
    date.setDate(date.getDate() - Math.floor(Math.random() * 10) - 1);
    return date.toLocaleDateString('fr-FR');
  }

  /**
   * Introduit des erreurs pédagogiques dans la facture
   */
  introduceErrors(invoice, count, types) {
    const availableTypes = types || ['calculation', 'vat', 'date', 'missing'];
    const errors = [];
    
    // Types d'erreurs qui ne peuvent être appliqués qu'une seule fois (modifient des données globales)
    const globalErrorTypes = ['vat', 'date', 'missing'];
    const usedGlobalErrors = new Set();
    const usedCalculationLines = new Set();
    const usedVatLines = new Set();
    
    // Calculer combien d'erreurs on peut générer au maximum
    const calculationAvailable = availableTypes.includes('calculation');
    const vatAvailable = availableTypes.includes('vat');
    const dateAvailable = availableTypes.includes('date');
    const missingAvailable = availableTypes.includes('missing');
    
    // Calculer le max d'erreurs possibles:
    // - Date: 3 types différents (due_date_same, due_date_short, due_date_past)
    // - Missing: 5 types différents (client_vat, client_name, client_address, invoice_number, invoice_date)
    // - VAT: 1 (total) + nombre de lignes (taux sur chaque ligne)
    // - Calculation: nombre de lignes
    const maxPossibleErrors = (dateAvailable ? 3 : 0) + 
                              (missingAvailable ? 5 : 0) + 
                              (vatAvailable ? 1 + invoice.lines.length : 0) +
                              (calculationAvailable ? invoice.lines.length : 0);
    
    // Limiter le nombre d'erreurs demandées au maximum possible
    if (count > maxPossibleErrors) {
      console.warn(`[InvoiceGenerator] Demande de ${count} erreurs mais maximum possible est ${maxPossibleErrors}. Limite fixée.`);
      count = maxPossibleErrors;
    }
    
    // Utiliser une boucle while pour garantir qu'on génère exactement 'count' erreurs
    let attempts = 0;
    const maxAttempts = count * 20; // Éviter une boucle infinie
    
    while (errors.length < count && attempts < maxAttempts) {
      attempts++;
      
      // Déterminer quel type d'erreur appliquer
      let type;
      
      // D'abord, essayer d'utiliser les types globaux non encore utilisés
      // VAT, date et missing ont plusieurs sous-types possibles
      const unusedGlobalTypes = availableTypes.filter(t => {
        if (t === 'vat') {
          // VAT peut être utilisé si le total n'est pas encore modifié ou s'il reste des lignes
          const vatTotalUsed = usedGlobalErrors.has('vat_total');
          const allLinesUsed = usedVatLines.size >= invoice.lines.length;
          return !vatTotalUsed || !allLinesUsed;
        }
        if (t === 'date') {
          // Date a 3 sous-types possibles
          const dateSubTypes = ['due_date_same', 'due_date_short', 'due_date_past'];
          return dateSubTypes.some(st => !usedGlobalErrors.has(st));
        }
        if (t === 'missing') {
          // Missing a 5 sous-types possibles
          const missingSubTypes = ['client_vat', 'client_name', 'client_address', 'invoice_number', 'invoice_date'];
          return missingSubTypes.some(st => !usedGlobalErrors.has(st));
        }
        return false;
      });
      
      if (unusedGlobalTypes.length > 0) {
        // Utiliser un type global non utilisé
        type = unusedGlobalTypes[Math.floor(Math.random() * unusedGlobalTypes.length)];
      } else if (calculationAvailable) {
        // Sinon utiliser 'calculation' (peut être appliqué plusieurs fois sur différentes lignes)
        type = 'calculation';
      } else {
        // Si pas de calculation disponible et tous les globaux sont utilisés, on arrête
        console.warn('[InvoiceGenerator] Plus de types d\'erreurs disponibles.');
        break;
      }
      
      switch(type) {
        case 'calculation':
          // Erreur de calcul sur une ligne (éviter de réutiliser la même ligne)
          let lineIdx;
          let attempts = 0;
          do {
            lineIdx = Math.floor(Math.random() * invoice.lines.length);
            attempts++;
          } while (usedCalculationLines.has(lineIdx) && attempts < 10);
          
          usedCalculationLines.add(lineIdx);
          
          const originalTotal = invoice.lines[lineIdx].total;
          invoice.lines[lineIdx].total = parseFloat((originalTotal * 1.1).toFixed(2));
          const expectedTotal = invoice.lines[lineIdx].qty * invoice.lines[lineIdx].unitPrice;
          errors.push({ 
            type: 'calculation', 
            subtype: 'line_total',
            line: lineIdx + 1,
            shownAmount: invoice.lines[lineIdx].total.toFixed(2),
            qty: invoice.lines[lineIdx].qty,
            unitPrice: invoice.lines[lineIdx].unitPrice.toFixed(2),
            expectedAmount: expectedTotal.toFixed(2),
            severity: 'grave'
          });
          break;
          
        case 'vat':
          // Plusieurs types d'erreurs VAT possibles
          const vatErrorType = Math.random();
          let vatErrorApplied = false;
          
          if (vatErrorType < 0.4 && !usedGlobalErrors.has('vat_total')) {
            // Erreur de calcul du total TVA (une seule fois)
            usedGlobalErrors.add('vat_total');
            const originalVat = invoice.vatAmount;
            invoice.vatAmount = parseFloat((originalVat * 0.9).toFixed(2));
            const expectedVat = Object.entries(invoice.vatBreakdown).reduce((sum, [rate, data]) => sum + data.vat, 0);
            invoice.total = parseFloat((invoice.subtotal + invoice.vatAmount).toFixed(2));
            errors.push({ 
              type: 'vat',
              subtype: 'total',
              shownVat: invoice.vatAmount.toFixed(2),
              expectedVat: expectedVat.toFixed(2),
              severity: 'grave'
            });
            vatErrorApplied = true;
          } else if (usedVatLines.size < invoice.lines.length) {
            // Erreur de taux sur une ligne spécifique (peut être appliquée plusieurs fois sur différentes lignes)
            let lineIdx;
            let attempts = 0;
            do {
              lineIdx = Math.floor(Math.random() * invoice.lines.length);
              attempts++;
            } while (usedVatLines.has(lineIdx) && attempts < 10);
            
            if (attempts < 10) {
              usedVatLines.add(lineIdx);
              const originalRate = invoice.lines[lineIdx].vatRate;
              
              // Changer le taux de TVA (ex: 6% -> 21% ou 21% -> 6%)
              const newRate = originalRate === 6 ? 21 : 6;
              invoice.lines[lineIdx].vatRate = newRate;
              invoice.lines[lineIdx].vat = parseFloat((invoice.lines[lineIdx].total * newRate / 100).toFixed(2));
              
              errors.push({ 
                type: 'vat',
                subtype: 'rate',
                line: lineIdx + 1,
                description: `Taux de TVA incorrect sur la ligne ${lineIdx + 1}`,
                detail: `Le produit "${invoice.lines[lineIdx].description}" utilise un taux de TVA de ${newRate}% alors qu'il devrait être à ${originalRate}%. ${newRate === 21 ? 'Ce taux est réservé aux produits de luxe, pas aux produits de première nécessité.' : 'Ce taux réduit s\'applique aux produits de première nécessité (nourriture, livres...).'}`,
                severity: 'grave'
              });
              vatErrorApplied = true;
            }
          }
          
          // Si aucune erreur VAT n'a pu être appliquée, la boucle continuera avec un autre type
          break;
          break;
          
        case 'date': {
          // Plusieurs types d'erreurs de date possibles
          const dateErrorTypes = ['due_date_same', 'due_date_short', 'due_date_past'];
          const availableDateErrors = dateErrorTypes.filter(t => !usedGlobalErrors.has(t));
          
          if (availableDateErrors.length === 0) {
            break; // Toutes les erreurs de date sont utilisées
          }
          
          // Choisir un type d'erreur de date au hasard parmi les disponibles
          const dateErrorType = availableDateErrors[Math.floor(Math.random() * availableDateErrors.length)];
          usedGlobalErrors.add(dateErrorType);
          
          switch(dateErrorType) {
            case 'due_date_same':
              // Date d'échéance = date de facture
              invoice.dueDate = invoice.date;
              errors.push({ 
                type: 'date',
                subtype: 'due_date_same',
                dueDate: invoice.dueDate,
                severity: 'moyenne'
              });
              break;
              
            case 'due_date_short':
              // Date d'échéance trop courte (< 15 jours)
              invoice.dueDate = this.addDays(invoice.date, 7); // 7 jours seulement
              errors.push({ 
                type: 'date',
                subtype: 'due_date_short',
                dueDate: invoice.dueDate,
                daysAllowed: 7,
                severity: 'moyenne'
              });
              break;
              
            case 'due_date_past':
              // Date d'échéance déjà passée (avant la date de facture)
              invoice.dueDate = this.addDays(invoice.date, -5); // 5 jours avant
              errors.push({ 
                type: 'date',
                subtype: 'due_date_past',
                dueDate: invoice.dueDate,
                daysBefore: 5,
                severity: 'grave'
              });
              break;
          }
          break;
        }
          
        case 'missing': {
          // Plusieurs types d'erreurs de champs manquants possibles
          const missingErrorTypes = ['client_vat', 'client_name', 'client_address', 'invoice_number', 'invoice_date'];
          const availableMissingErrors = missingErrorTypes.filter(t => !usedGlobalErrors.has(t));
          
          if (availableMissingErrors.length === 0) {
            break; // Toutes les erreurs de champs manquants sont utilisées
          }
          
          // Choisir un type au hasard parmi les disponibles
          const missingErrorType = availableMissingErrors[Math.floor(Math.random() * availableMissingErrors.length)];
          usedGlobalErrors.add(missingErrorType);
          
          switch(missingErrorType) {
            case 'client_vat':
              invoice.client.vat = undefined;
              errors.push({ 
                type: 'missing', 
                subtype: 'client_vat',
                field: 'clientVAT',
                severity: 'moyenne'
              });
              break;
              
            case 'client_name':
              const originalName = invoice.client.name;
              invoice.client.name = '';
              errors.push({ 
                type: 'missing', 
                subtype: 'client_name',
                field: 'clientName',
                severity: 'grave'
              });
              break;
              
            case 'client_address':
              invoice.client.address = '';
              errors.push({ 
                type: 'missing', 
                subtype: 'client_address',
                field: 'clientAddress',
                severity: 'moyenne'
              });
              break;
              
            case 'invoice_number':
              invoice.number = '';
              errors.push({ 
                type: 'missing', 
                subtype: 'invoice_number',
                field: 'invoiceNumber',
                severity: 'grave'
              });
              break;
              
            case 'invoice_date':
              invoice.date = '';
              errors.push({ 
                type: 'missing', 
                subtype: 'invoice_date',
                field: 'invoiceDate',
                severity: 'grave'
              });
              break;
          }
          break;
        }
      }
    }
    
    invoice.errors = errors;
    invoice.hasErrors = true;
    invoice.errorCount = errors.length;
  }

  /**
   * Rendu HTML de la facture
   * @param {Object} invoice - La facture à rendre
   * @param {string} lang - Langue de la facture (fr, nl, de, en)
   */
  renderHTML(invoice, lang = 'fr') {
    // Utiliser les traductions si disponibles
    const t = (key, params = {}) => {
      if (typeof i18n !== 'undefined') {
        // Sauvegarder la langue courante
        const currentLang = i18n.current;
        // Définir temporairement la langue de la facture
        i18n.current = lang;
        // Récupérer la traduction
        let text = i18n.t(key);
        // Restaurer la langue courante
        i18n.current = currentLang;
        // Remplacer les paramètres
        Object.entries(params).forEach(([k, v]) => {
          text = text.replace(`{${k}}`, v);
        });
        return text;
      }
      // Fallback si i18n n'est pas disponible
      const fallbacks = {
        'invTitle': 'FACTURE',
        'invNumber': 'N°',
        'invDate': 'Date facture',
        'invOperationDate': 'Date opération',
        'invDueDate': 'Échéance',
        'invEmitter': 'ÉMETTEUR',
        'invClient': 'CLIENT',
        'invDescription': 'Description',
        'invQty': 'Qté',
        'invUnitPrice': 'Prix unit.',
        'invVat': 'TVA',
        'invTotal': 'Total',
        'invSubtotal': 'Sous-total HT',
        'invVatTotal': 'Total TVA',
        'invGrandTotal': 'TOTAL TTC',
        'invPaymentTerms': 'Paiement à',
        'invDays': 'jours',
        'invVatMention': 'TVA applicable selon la législation en vigueur',
        'invId': 'N°',
        'invVatBreakdown': `TVA ${params.rate}% (base ${params.base} €)`,
        'errorBadge': 'Cette facture contient des erreurs intentionnelles à détecter',
        'clientIndividual': 'Client particulier'
      };
      return fallbacks[key] || key;
    };
    
    // Utiliser le logo de l'entreprise (toujours présent)
    const logoUrl = invoice.company.logo;
    
    // Logo grand format au-dessus du titre FACTURE
    const logoHeaderHtml = logoUrl 
      ? `<div style="margin-bottom: 32px;"><img src="${logoUrl}" alt="${invoice.company.name}" style="width: 200px; height: 200px; border-radius: 16px; object-fit: contain; box-shadow: 0 4px 16px rgba(0,0,0,0.15); background: white; padding: 8px; border: 2px solid #e5e7eb;"></div>`
      : '';
    
    // Petit logo dans la section émetteur
    const logoEmetteurHtml = logoUrl 
      ? `<img src="${logoUrl}" alt="${invoice.company.name}" style="width: 48px; height: 48px; border-radius: 8px; object-fit: contain; box-shadow: 0 2px 8px rgba(0,0,0,0.1); background: white; padding: 4px; border: 1px solid #e5e7eb; margin-right: 12px; vertical-align: middle;">`
      : '';
    
    // Format de date selon la langue
    const dateLocale = { 'fr': 'fr-BE', 'nl': 'nl-BE', 'de': 'de-BE', 'en': 'en-GB' }[lang] || 'fr-BE';
    const formatDate = (dateStr) => {
      if (typeof dateStr === 'string' && dateStr.match(/^\d{2}\/\d{2}\/\d{4}$/)) {
        return dateStr;
      }
      try {
        const date = new Date(dateStr);
        if (isNaN(date.getTime())) return dateStr;
        return date.toLocaleDateString(dateLocale, { day: '2-digit', month: '2-digit', year: 'numeric' });
      } catch (e) {
        return dateStr;
      }
    };
    
    // Badge erreurs
    const errorBadge = invoice.hasErrors 
      ? `<div style="background: #FEF2F2; color: #991B1B; padding: 12px 20px; border-radius: 8px; font-size: 13px; font-weight: 600; display: flex; align-items: center; gap: 8px; margin-bottom: 24px; border-left: 4px solid #EF4444;">
          <span>⚠️</span>
          <span>${t('errorBadge')}</span>
         </div>` 
      : '';
    
    return `
      <div class="invoice-pro" style="background: #ffffff; border-radius: 12px; box-shadow: 0 4px 24px rgba(0,0,0,0.06); overflow: hidden; font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif; color: #1f2937; border: 1px solid #e5e7eb;">
        <div style="padding: 48px;">
          ${errorBadge}
          
          <!-- Header avec logo AU-DESSUS de FACTURE -->
          <div style="margin-bottom: 48px;">
            ${logoHeaderHtml}
            <div style="display: flex; justify-content: space-between; align-items: flex-start;">
              <div>
                <div style="font-size: 11px; font-weight: 700; color: #D4A853; text-transform: uppercase; letter-spacing: 2.5px; margin-bottom: 6px;">${t('invTitle')}</div>
                <div style="font-size: 15px; color: #6b7280; font-weight: 500;">${t('invNumber')} ${invoice.number}</div>
              </div>
            </div>
            <div style="text-align: right; background: #f9fafb; padding: 16px 24px; border-radius: 10px;">
              <div style="font-size: 14px; color: #374151; margin-bottom: 6px;"><strong style="color: #111827;">${t('invDate')}:</strong> ${formatDate(invoice.date)}</div>
              <div style="font-size: 14px; color: #374151; margin-bottom: 6px;"><strong style="color: #111827;">${t('invOperationDate')}:</strong> ${formatDate(invoice.operationDate)}</div>
              <div style="font-size: 14px; color: #374151;"><strong style="color: #111827;">${t('invDueDate')}:</strong> ${formatDate(invoice.dueDate)}</div>
            </div>
          </div>
          
          <!-- Entreprises - Émetteur et Client -->
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 48px; margin-bottom: 48px; padding: 28px; background: linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%); border-radius: 14px; border: 1px solid #e5e7eb;">
            <!-- Émetteur -->
            <div>
              <div style="font-size: 10px; text-transform: uppercase; letter-spacing: 0.08em; color: #9ca3af; font-weight: 700; margin-bottom: 16px;">${t('invEmitter')}</div>
              <div style="font-weight: 700; font-size: 17px; margin-bottom: 8px; color: #111827;">${invoice.company.name}</div>
              <div style="font-size: 14px; color: #4b5563; line-height: 1.7;">
                ${invoice.company.address}<br>
                <span style="color: #374151; font-weight: 600; background: #f3f4f6; padding: 2px 8px; border-radius: 4px; display: inline-block; margin-top: 6px;">TVA: ${invoice.company.vat}</span>
              </div>
            </div>
            
            <!-- Client -->
            <div>
              <div style="font-size: 10px; text-transform: uppercase; letter-spacing: 0.08em; color: #9ca3af; font-weight: 700; margin-bottom: 16px; margin-top: 6px;">${t('invClient')}</div>
              <div style="font-weight: 700; font-size: 17px; margin-bottom: 8px; color: #111827;">${invoice.client.name}</div>
              <div style="font-size: 14px; color: #4b5563; line-height: 1.7;">
                ${invoice.client.address}<br>
                ${invoice.client.vat ? `<span style="color: #374151; font-weight: 600; background: #f3f4f6; padding: 2px 8px; border-radius: 4px; display: inline-block; margin-top: 6px;">TVA: ${invoice.client.vat}</span>` : `<span style="color: #6b7280; font-style: italic; background: #f3f4f6; padding: 2px 8px; border-radius: 4px; display: inline-block; margin-top: 6px;">${t('clientIndividual')}</span>`}
              </div>
            </div>
          </div>
          
          <!-- Tableau des items -->
          <table style="width: 100%; border-collapse: separate; border-spacing: 0; margin-bottom: 40px;">
            <thead>
              <tr>
                <th style="text-align: left; padding: 16px 12px; font-size: 11px; text-transform: uppercase; letter-spacing: 0.06em; color: #6b7280; font-weight: 700; border-bottom: 2px solid #d1d5db; background: #f9fafb;">${t('invId')}</th>
                <th style="text-align: left; padding: 16px 12px; font-size: 11px; text-transform: uppercase; letter-spacing: 0.06em; color: #6b7280; font-weight: 700; border-bottom: 2px solid #d1d5db; background: #f9fafb;">${t('invDescription')}</th>
                <th style="text-align: center; padding: 16px 12px; font-size: 11px; text-transform: uppercase; letter-spacing: 0.06em; color: #6b7280; font-weight: 700; border-bottom: 2px solid #d1d5db; background: #f9fafb;">${t('invQty')}</th>
                <th style="text-align: right; padding: 16px 12px; font-size: 11px; text-transform: uppercase; letter-spacing: 0.06em; color: #6b7280; font-weight: 700; border-bottom: 2px solid #d1d5db; background: #f9fafb;">${t('invUnitPrice')}</th>
                <th style="text-align: center; padding: 16px 12px; font-size: 11px; text-transform: uppercase; letter-spacing: 0.06em; color: #6b7280; font-weight: 700; border-bottom: 2px solid #d1d5db; background: #f9fafb;">${t('invVat')}</th>
                <th style="text-align: right; padding: 16px 12px; font-size: 11px; text-transform: uppercase; letter-spacing: 0.06em; color: #6b7280; font-weight: 700; border-bottom: 2px solid #d1d5db; background: #f9fafb;">${t('invTotal')}</th>
              </tr>
            </thead>
            <tbody>
              ${invoice.lines.map((line, i) => {
                return `
                  <tr style="${i % 2 === 0 ? 'background: #ffffff;' : 'background: #fafafa;'} transition: background 0.2s;">
                    <td style="padding: 16px 12px; font-size: 14px; color: #9ca3af; font-weight: 600; border-bottom: 1px solid #e5e7eb;">${line.id}</td>
                    <td style="padding: 16px 12px; font-size: 14px; color: #1f2937; font-weight: 500; border-bottom: 1px solid #e5e7eb;">${line.description}</td>
                    <td style="padding: 16px 12px; font-size: 14px; text-align: center; color: #374151; font-weight: 600; border-bottom: 1px solid #e5e7eb;">${line.qty}</td>
                    <td style="padding: 16px 12px; font-size: 14px; text-align: right; font-family: 'SF Mono', Monaco, 'Cascadia Code', monospace; color: #374151; border-bottom: 1px solid #e5e7eb;">${line.unitPrice.toFixed(2)} €</td>
                    <td style="padding: 16px 12px; font-size: 14px; text-align: center; color: #374151; font-weight: 600; border-bottom: 1px solid #e5e7eb;">${line.vatRate}%</td>
                    <td style="padding: 16px 12px; font-size: 15px; text-align: right; font-family: 'SF Mono', Monaco, 'Cascadia Code', monospace; color: #111827; font-weight: 700; border-bottom: 1px solid #e5e7eb;">${line.total.toFixed(2)} €</td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
          
          <!-- Totaux avec ventilation TVA par taux (obligatoire en Belgique) -->
          <div style="display: flex; justify-content: flex-end; margin-bottom: 40px;">
            <div style="width: 400px; background: linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%); padding: 28px; border-radius: 14px; border: 1px solid #e5e7eb;">
              <div style="display: flex; justify-content: space-between; padding: 12px 0; border-bottom: 1px solid #d1d5db;">
                <span style="color: #6b7280; font-size: 14px;">${t('invSubtotal')}</span>
                <span style="font-family: 'SF Mono', Monaco, monospace; font-weight: 600; color: #374151; font-size: 15px;">${invoice.subtotal.toFixed(2)} €</span>
              </div>
              
              <!-- Ventilation de la TVA par taux (mention obligatoire) -->
              ${Object.entries(invoice.vatBreakdown).sort((a, b) => a[0] - b[0]).map(([rate, data]) => `
                <div style="display: flex; justify-content: space-between; padding: 8px 0; font-size: 13px;">
                  <span style="color: #6b7280;">${t('invVatBreakdown', { rate, base: data.base.toFixed(2) })}</span>
                  <span style="font-family: 'SF Mono', Monaco, monospace; color: #374151;">${data.vat.toFixed(2)} €</span>
                </div>
              `).join('')}
              
              <div style="display: flex; justify-content: space-between; padding: 12px 0; border-bottom: 2px solid #d1d5db; border-top: 1px solid #e5e7eb; margin-top: 8px;">
                <span style="color: #6b7280; font-size: 14px; font-weight: 600;">${t('invVatTotal')}</span>
                <span style="font-family: 'SF Mono', Monaco, monospace; font-weight: 600; color: #374151; font-size: 15px;">${invoice.vatAmount.toFixed(2)} €</span>
              </div>
              <div style="display: flex; justify-content: space-between; padding: 18px 0 0 0; margin-top: 6px;">
                <span style="font-weight: 800; font-size: 17px; color: #111827;">${t('invGrandTotal')}</span>
                <span style="font-family: 'SF Mono', Monaco, monospace; font-weight: 800; font-size: 22px; color: #D4A853; letter-spacing: -0.5px;">${invoice.total.toFixed(2)} €</span>
              </div>
            </div>
          </div>
          
          <!-- Footer -->
          <div style="margin-top: 40px; padding-top: 28px; border-top: 1px solid #e5e7eb; font-size: 12px; color: #9ca3af; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px;">
            <p style="margin: 0;">${t('invVatMention')} • ${t('pdfIssuedInBelgium') || 'Facture émise en Belgique'}</p>
            <p style="margin: 0; font-weight: 600; color: #6b7280; background: #f3f4f6; padding: 6px 14px; border-radius: 20px;">${t('invPaymentTerms')}: ${invoice.paymentTerms} ${t('invDays')}</p>
          </div>
        </div>
      </div>
    `;
  }
}

// Instance globale
const invoiceGenerator = new InvoiceGenerator();
