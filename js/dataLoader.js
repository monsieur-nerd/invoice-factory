/**
 * DATA LOADER - Charge les données CSV
 * Gère le chargement des entreprises, clients et produits
 */

class DataLoader {
  constructor() {
    this.data = {
      entreprises: [],
      clientsRetail: [],
      clientsBusiness: [],
      products: []
    };
    this.loaded = false;
  }

  async loadAll() {
    if (this.loaded) return;
    
    try {
      // Charger les entreprises
      await this.loadEntreprises();
      
      // Charger les clients
      await this.loadClients();
      
      this.loaded = true;
      console.log('📊 Données chargées:', this.data);
    } catch (error) {
      console.warn('⚠️ Erreur chargement données:', error);
      this.loadDefaultData();
    }
  }

  async loadEntreprises() {
    try {
      console.log('📂 Chargement societes.csv...');
      const response = await fetch('data/societes.csv');
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const csv = await response.text();
      console.log('✅ CSV chargé, lignes:', csv.split('\n').length);
      
      this.data.entreprises = this.parseCSV(csv).map((row, idx) => ({
        id: row[0] || `SOC${String(idx + 1).padStart(3, '0')}`,
        name: row[1] || `Entreprise ${idx + 1}`,
        sector: this.mapSector(row[2] || 'retail'),
        address: `${row[4] || 'Rue inconnue'}, ${row[5] || '1000'} ${row[6] || 'Bruxelles'}`,
        vat: row[10] || `BE ${Math.floor(Math.random() * 900000000) + 100000000}`,
        logo: row[13] || null
      }));
      console.log('✅ Entreprises chargées:', this.data.entreprises.length, 'ex:', this.data.entreprises[0]);
    } catch (e) {
      console.error('❌ Erreur chargement societes.csv:', e.message);
      this.data.entreprises = [];
    }
  }

  async loadClients() {
    try {
      // Clients particuliers
      const retailResponse = await fetch('data/clients_retail.csv');
      const retailCSV = await retailResponse.text();
      this.data.clientsRetail = this.parseCSV(retailCSV).map((row, idx) => ({
        id: `r${idx + 1}`,
        name: `${row[1] || 'Client'} ${row[2] || idx + 1}`,
        type: 'retail',
        address: `${row[3] || 'Rue inconnue'}, ${row[4] || '1000'} ${row[5] || 'Bruxelles'}`
      }));

      // Clients entreprises
      const businessResponse = await fetch('data/clients_business.csv');
      const businessCSV = await businessResponse.text();
      this.data.clientsBusiness = this.parseCSV(businessCSV).map((row, idx) => ({
        id: `b${idx + 1}`,
        name: row[1] || `Entreprise Client ${idx + 1}`,
        type: 'business',
        address: `${row[3] || 'Rue inconnue'}, ${row[4] || '1000'} ${row[5] || 'Bruxelles'}`,
        vat: row[9] || `BE ${Math.floor(Math.random() * 900000000) + 100000000}`
      }));
    } catch (e) {
      console.log('Pas de fichiers clients, utilisation des données par défaut');
    }
  }

  parseCSV(csv) {
    const lines = csv.trim().split('\n');
    // Ignorer l'en-tête
    return lines.slice(1).map(line => {
      // Gestion simple des guillemets
      const result = [];
      let current = '';
      let inQuotes = false;
      
      for (let i = 0; i < line.length; i++) {
        const char = line[i];
        if (char === '"') {
          inQuotes = !inQuotes;
        } else if (char === ',' && !inQuotes) {
          // Enlever les guillemets de début et fin
          let value = current.trim();
          if (value.startsWith('"') && value.endsWith('"')) {
            value = value.slice(1, -1);
          }
          result.push(value);
          current = '';
        } else {
          current += char;
        }
      }
      // Dernier champ
      let value = current.trim();
      if (value.startsWith('"') && value.endsWith('"')) {
        value = value.slice(1, -1);
      }
      result.push(value);
      return result;
    });
  }

  mapSector(sector) {
    const mapping = {
      'Alimentation': 'food',
      'Restauration': 'food',
      'Boulangerie': 'food',
      'Technologie': 'tech',
      'Informatique': 'tech',
      'Commerce': 'retail',
      'Mode': 'retail',
      'Services': 'services',
      'Construction': 'construction',
      'BTP': 'construction',
      'Alimentation': 'bakery',
      'Boulangerie': 'bakery',
      'Pâtisserie': 'bakery',
      'Santé': 'health',
      'Bien-être': 'health',
      'Automobile': 'automotive',
      'Menuiserie': 'carpentry',
      'Nettoyage': 'cleaning',
      'Restaurant': 'restaurant',
      'Café': 'restaurant'
    };
    return mapping[sector] || 'retail';
  }

  loadDefaultData() {
    this.data.entreprises = [
      { id: 'SOC007', name: 'Boulangerie Dupont', sector: 'food', address: '8 Rue du Commerce, 1000 Bruxelles', vat: 'BE 0776405277', logo: 'assets/logos/societe_soc007.svg' },
      { id: 'SOC001', name: 'AutoPro Service', sector: 'automotive', address: '25 Rue du Commerce, 1000 Bruxelles', vat: 'BE 0242143461', logo: 'assets/logos/societe_soc001.svg' },
      { id: 'SOC013', name: 'Menuiserie Bois', sector: 'carpentry', address: '39 Rue du Commerce, 7000 Mons', vat: 'BE 0601648406', logo: 'assets/logos/societe_soc013.svg' }
    ];
    
    this.data.clientsRetail = [
      { id: 'r1', name: 'Jean Dupont', type: 'retail', address: '12 Rue du Client, 1000 Bruxelles' },
      { id: 'r2', name: 'Marie Martin', type: 'retail', address: '78 Rue Résidentielle, 1150 Woluwe' }
    ];
    
    this.data.clientsBusiness = [
      { id: 'b1', name: 'Entreprise ABC SA', type: 'business', address: '45 Avenue Corporate, 1200 Woluwe', vat: 'BE 0111.222.333' },
      { id: 'b2', name: 'Société XYZ NV', type: 'business', address: '90 Boulevard Business, 1000 Bruxelles', vat: 'BE 0444.555.666' }
    ];
  }

  getAllEntreprises() {
    return this.data.entreprises;
  }

  getAllClients() {
    return [...this.data.clientsRetail, ...this.data.clientsBusiness];
  }

  getAllClientsRetail() {
    return this.data.clientsRetail;
  }

  getAllClientsBusiness() {
    return this.data.clientsBusiness;
  }

  getClient(id) {
    return this.getAllClients().find(c => c.id === id);
  }

  getEntreprise(id) {
    return this.data.entreprises.find(e => e.id === id);
  }

  /**
   * Charge les produits depuis le CSV
   * Retourne une structure { secteur: { lang: [produits] } }
   */
  async loadProducts() {
    if (this.data.products && Object.keys(this.data.products).length > 0) {
      return this.data.products;
    }
    
    try {
      const response = await fetch('data/products_sectors.csv');
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const csv = await response.text();
      
      this.data.products = this.parseProductsCSV(csv);
      console.log('✅ Produits chargés depuis CSV');
      return this.data.products;
    } catch (e) {
      console.warn('⚠️ Impossible de charger les produits depuis CSV:', e.message);
      this.loadDefaultProducts();
      return this.data.products;
    }
  }
  
  parseProductsCSV(csv) {
    const lines = csv.trim().split('\n');
    const headers = lines[0].split(';');
    const products = {};
    
    for (let i = 1; i < lines.length; i++) {
      const line = lines[i].trim();
      if (!line) continue;
      
      const cols = line.split(';');
      if (cols.length < 6) continue;
      
      const [secteur, langue, nom, prix, unite, etiquette] = cols;
      
      if (!products[secteur]) {
        products[secteur] = {};
      }
      if (!products[secteur][langue]) {
        products[secteur][langue] = [];
      }
      
      products[secteur][langue].push({
        name: nom,
        unitPrice: parseFloat(prix.replace(',', '.')),
        unit: unite,
        unitLabel: etiquette
      });
    }
    
    return products;
  }
  
  loadDefaultProducts() {
    // Fallback si le CSV n'est pas disponible
    this.data.products = {
      bakery: {
        fr: [{ name: "Baguette", unitPrice: 1.20, unit: "pc", unitLabel: "pièce" }],
        nl: [{ name: "Stokbrood", unitPrice: 1.20, unit: "pc", unitLabel: "stuk" }],
        de: [{ name: "Baguette", unitPrice: 1.20, unit: "pc", unitLabel: "Stück" }],
        en: [{ name: "Baguette", unitPrice: 1.20, unit: "pc", unitLabel: "piece" }]
      }
    };
  }
  
  getProducts(sector, lang) {
    if (!this.data.products || !this.data.products[sector]) {
      return null;
    }
    return this.data.products[sector][lang] || this.data.products[sector]['fr'] || null;
  }
}

// Instance globale
const dataLoader = new DataLoader();
