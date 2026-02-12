// ============================================
// Générateur de Factures Pédagogiques
// Copyright (C) 2025  monsieur-nerd
// License: GNU GPL v3 - https://www.gnu.org/licenses/gpl-3.0
// ============================================
// SYSTÈME DE TRADUCTION MULTILINGUE
// ============================================

const translations = {
  fr: {
    // Général
    title: "Générateur de Factures Pédagogiques",
    subtitle: "Créez des factures d'exemple pour vos exercices",
    generate: "Générer la facture",
    download: "Télécharger PDF",
    print: "Imprimer",
    reset: "Réinitialiser",
    
    // Paramètres
    settings: "Paramètres",
    language: "Langue",
    schoolLevel: "Niveau scolaire",
    
    // Niveaux scolaires
    levelLower: "Secondaire inférieur (11-14 ans)",
    levelUpper: "Secondaire supérieur (15-18 ans)",
    levelHigher: "Enseignement supérieur (18+ ans)",
    
    // Secteur d'activité
    sector: "Secteur d'activité",
    sectorPlaceholder: "Sélectionnez ou saisissez un secteur",
    sectorCustom: "Autre (saisie manuelle)",
    sectorCustomLabel: "Nom du secteur personnalisé",
    
    // Secteurs prédéfinis
    bakery: "Boulangerie-Pâtisserie",
    restaurant: "Restaurant-Café",
    retail: "Commerce de détail",
    it: "Informatique-Technologie",
    consulting: "Conseil-Consulting",
    construction: "Bâtiment-Construction",
    health: "Santé-Médical",
    education: "Éducation-Formation",
    automotive: "Automobile-Réparation",
    beauty: "Beauté-Coiffure",
    agriculture: "Agriculture-Élevage",
    arts: "Arts-Culture",
    finance: "Finance-Assurance",
    legal: "Juridique-Notaire",
    tourism: "Tourisme-Hôtellerie",
    transport: "Transport-Logistique",
    energy: "Énergie-Environnement",
    sports: "Sport-Loisirs",
    realEstate: "Immobilier",
    
    // Options de génération
    generationOptions: "Options de génération",
    invoiceType: "Type de document",
    typeInvoice: "Facture",
    typeQuote: "Devis",
    typeOrder: "Bon de commande",
    typeExpense: "Note de frais",
    
    // Mode facture parfaite
    perfectMode: "Génération automatique parfaite",
    perfectModeHelp: "Génère automatiquement une facture complète et conforme sans erreur",
    quickGenerate: "Générer ma facture parfaite",
    quickErrorGenerate: "Générer une facture avec erreurs",
    
    // Édition et export/import
    editInvoice: "Modifier",
    editHistory: "Modifier",
    editLoaded: "Facture chargée pour édition",
    exportJSON: "Exporter JSON",
    exportHistory: "Exporter",
    exportSuccess: "Facture exportée avec succès",
    noInvoiceToExport: "Aucune facture à exporter",
    importTitle: "Importer une facture",
    importHelp: "Sélectionnez un fichier .invoice.json précédemment exporté",
    importJSON: "Choisir un fichier...",
    importCompatibility: "Compatible avec toutes les versions exportées",
    importErrors: "Erreurs de validation:",
    importContinue: "Voulez-vous essayer d'importer quand même?",
    importSuccess: "Facture importée avec succès",
    importError: "Erreur lors de l'import:",
    
    perfectModeTooltip: "Cette fonction génère automatiquement une facture belge parfaitement conforme avec :",
    perfectFeature1: "Tous les éléments légaux requis (numéro, date, TVA, IBAN...)",
    perfectFeature2: "Des produits réalistes avec les bons taux de TVA",
    perfectFeature3: "Des calculs exacts (sous-totaux, TVA, totaux TTC)",
    perfectFeature4: "Une entreprise et un client fictifs mais crédibles",
    perfectFeature5: "Signature et tampon professionnels",
    perfectFeature6: "L'enseignant n'a rien à saisir - tout est généré automatiquement !",
    
    // Mode erreur
    errorMode: "Mode exercice avec erreurs",
    errorModeHelp: "Génère une facture contenant des erreurs pédagogiques à détecter",
    errorCount: "Nombre d'erreurs à inclure",
    errorCountHelp: "Entre 1 et 15 erreurs seront réparties dans la facture",
    errorModeTooltip: "Cette fonction génère une facture avec des erreurs intentionnelles pour exercer les élèves :",
    errorFeature1: "Erreurs de calcul (sous-totaux, TVA, totaux incorrects)",
    errorFeature2: "Taux de TVA inappropriés (21% sur de la nourriture, etc.)",
    errorFeature3: "Données légales manquantes (pas de numéro TVA, IBAN...)",
    errorFeature4: "Unités incohérentes (kg au lieu de pièce, heures mal calculées)",
    errorFeature5: "Dates incorrectes (facture datée dans le futur, échéance avant la facture)",
    errorFeature6: "Produits/services incohérents avec le secteur d'activité",
    errorFeature7: "Quantités ou prix négatifs, montants suspects",
    errorFeature8: "Mentions légales manquantes ou incorrectes",
    errorFeature9: "Signature/tampon absents ou non conformes",
    errorFeature10: "QR code ne correspondant pas aux données",
    errorFeature11: "Les élèves doivent identifier et corriger toutes les erreurs !",
    
    // Logo
    logo: "Logo de l'entreprise",
    logoPredefined: "Icône prédéfinie",
    logoUpload: "Téléverser mon logo",
    logoPrompt: "Description du logo à générer",
    
    // Champs entreprise
    company: "Informations de l'entreprise",
    companyName: "Nom de l'entreprise",
    companyAddress: "Adresse",
    companyZip: "Code postal",
    companyCity: "Ville",
    companyCountry: "Pays",
    companyPhone: "Téléphone",
    companyEmail: "Email",
    companySiret: "N° SIRET / TVA",
    
    // Champs client
    client: "Informations du client",
    clientName: "Nom du client",
    clientAddress: "Adresse",
    clientZip: "Code postal",
    clientCity: "Ville",
    clientCountry: "Pays",
    
    // Champs facture
    invoice: "Détails de la facture",
    invoiceNumber: "Numéro de facture",
    invoiceDate: "Date de facturation",
    dueDate: "Date d'échéance",
    paymentMethod: "Mode de paiement",
    paymentCash: "Espèces",
    paymentCard: "Carte bancaire",
    paymentTransfer: "Virement",
    paymentCheck: "Chèque",
    
    // Articles
    items: "Articles / Prestations",
    addItem: "Ajouter un article",
    removeItem: "Supprimer",
    itemDescription: "Description",
    itemQuantity: "Qté",
    itemUnitPrice: "Prix unitaire",
    itemTotal: "Total",
    
    // Totaux
    subtotal: "Sous-total HT",
    vat: "TVA",
    vatRate: "Taux de TVA",
    vatTotal: "Total TVA",
    total: "Total TTC",
    
    // Notes
    notes: "Notes / Conditions particulières",
    notesPlaceholder: "Conditions de paiement, remises, mentions légales...",
    
    // Génération
    generating: "Génération en cours...",
    generateSuccess: "Facture générée avec succès !",
    generateError: "Erreur lors de la génération",
    
    // Champs obligatoires
    required: "Champ obligatoire",
    optional: "Champ facultatif",
    
    // Aperçu
    preview: "Aperçu de la facture",
    noPreview: "Remplissez le formulaire et cliquez sur 'Générer'",
    
    // Historique
    history: "Historique",
    noHistory: "Aucune facture dans l'historique",
    loadHistory: "Charger cette facture",
    deleteHistory: "Supprimer",
    
    // Mentions légales
    legalNotice: "Mention obligatoire : Facture générée à des fins pédagogiques uniquement.",
    
    // Signature et Tampon
    signatureStamp: "Signature & Tampon",
    signatureHelp: "Comment utiliser ?",
    signatureType: "Type de validation",
    sigNone: "Aucun",
    sigSignatureOnly: "Signature uniquement",
    sigStampOnly: "Tampon uniquement",
    sigBoth: "Signature + Tampon",
    signatureSource: "Source de la signature",
    sigSourceText: "Ligne de signature (texte)",
    sigSourceUpload: "Image uploadée",
    sigUploadLabel: "Image de signature",
    sigUploadHelp: "PNG avec fond transparent recommandé",
    sigLabel1: "Label gauche",
    sigLabel2: "Label droite",
    sigDefaultLabel1: "Pour acquit, le fournisseur",
    sigDefaultLabel2: "Bon pour accord, le client",
    stampText: "Texte du tampon",
    stampDefaultText: "PAYÉ",
    stampColor: "Couleur",
    stampDate: "Ajouter la date",
    yes: "Oui",
    no: "Non",
    stampPosition: "Position",
    stampBottomRight: "En bas à droite",
    stampBottomLeft: "En bas à gauche",
    stampOverTotal: "Sur le total",
    signaturePreview: "Aperçu",
    signatureModalTitle: "✍️ Idées pédagogiques avec Signature & Tampon",
    sigIdeaContractTitle: "Valeur contractuelle",
    sigIdeaContractDesc: "La signature transforme la facture en document contractuel engageant. Sans signature, la facture n'a pas la même valeur juridique. Les élèves apprennent l'importance de signer les documents importants.",
    sigIdeaContractExercise: "Exercice : 'Cette facture est-elle valable sans signature ?' - Discuter de la valeur juridique et des risques.",
    sigIdeaPaidTitle: "Circuit comptable : Facture payée",
    sigIdeaPaidDesc: "Le tampon 'PAYÉ' avec date indique que la facture a été réglée. C'est crucial pour éviter les doubles paiements. Les élèves comprennent le cycle : émission → réception → validation → paiement → archivage.",
    sigIdeaPaidExercise: "Exercice : Créer deux factures identiques, une avec tampon 'PAYÉ' et une sans. Demander aux élèves d'identifier laquelle nécessite un règlement.",
    sigIdeaProformaTitle: "📄 Facture proforma vs définitive",
    sigIdeaProformaDesc: "Une facture proforma (devis) n'est pas signée et porte souvent la mention 'Proforma - Sans valeur comptable'. Une fois acceptée et signée, elle devient commande ferme puis facture définitive.",
    sigIdeaProformaExercise: "Exercice : Présenter 3 documents (devis, commande, facture) avec/sans signatures. Faire classer les élèves selon l'avancement du processus commercial.",
    sigIdeaFraudTitle: "Détection de fraude",
    sigIdeaFraudDesc: "Une facture avec une signature suspecte (photocopiée, scanée de mauvaise qualité) ou un tampon mal placé peut indiquer une falsification. Les experts-comptables vérifient ces détails.",
    sigIdeaFraudExercise: "Exercice : Mode 'erreurs' : générer une facture avec une signature pixelisée ou un tampon 'PAYÉ' sur un montant incorrect. Les élèves doivent identifier l'anomalie.",
    sigIdeaValidationTitle: "Circuit de validation interne",
    sigIdeaValidationDesc: "Dans une entreprise, une facture peut nécessiter plusieurs signatures : responsable d'équipe (validation prestation), chef comptable (validation montant), directeur (validation stratégique).",
    sigIdeaValidationExercise: "Exercice : Créer une facture avec plusieurs espaces de signature. Demander aux élèves d'attribuer les rôles (chef d'équipe, comptable, DG) et d'expliquer pourquoi chacun doit signer.",
    sigIdeaProfessionalTitle: "Image professionnelle",
    sigIdeaProfessionalDesc: "Un tampon personnalisé avec le logo renforce l'identité visuelle et la crédibilité. Les élèves découvrent l'importance de la communication visuelle dans les documents commerciaux.",
    sigIdeaProfessionalExercise: "Exercice : Comparer deux factures (une avec tampon professionnel, une sans). Faire noter aux élèves quelle entreprise inspire plus confiance et pourquoi.",
    
    // Langues
    interfaceLanguageLabel: "Langue:",
    aboutLink: "À propos",
    invoiceLanguage: "Langue de la facture",
    invoiceLanguageHelp: "Langue dans laquelle la facture sera rédigée",
    
    // QR Code
    qrCode: "QR Code",
    qrHelp: "Comment utiliser ?",
    qrType: "Type de QR Code",
    qrNone: "Aucun",
    qrPayment: "Paiement instantané (montant + IBAN)",
    qrVerification: "Vérification d'authenticité",
    qrDetails: "Détails de la facture (URL)",
    qrContact: "Carte de visite (vCard)",
    qrCustom: "Personnalisé (URL ou texte)",
    qrCustomValue: "Contenu du QR Code",
    qrPreview: "Aperçu du QR Code",
    qrModalTitle: "📱 Idées pédagogiques avec le QR Code",
    qrIdeaPaymentTitle: "Paiement instantané",
    qrIdeaPaymentDesc: "Le QR code contient toutes les informations de paiement (bénéficiaire, IBAN, montant, référence). Les élèves peuvent scanner avec leur téléphone pour comprendre comment fonctionnent les paiements modernes type Payconiq ou Bancontact.",
    qrIdeaPaymentExercise: "Exercice : Vérifier que le montant encodé correspond bien au total TTC de la facture.",
    qrIdeaVerifyTitle: "Vérification d'authenticité",
    qrIdeaVerifyDesc: "Le QR code redirige vers une page web de 'vérification officielle' où les élèves peuvent confirmer que la facture est authentique et non falsifiée.",
    qrIdeaVerifyExercise: "Exercice : En mode 'facture avec erreurs', le QR code peut ne pas fonctionner ou rediriger vers une page d'avertissement = signe de fraude potentielle.",
    qrIdeaDetailsTitle: "Détails de la facture",
    qrIdeaDetailsDesc: "Le QR code donne accès à une page avec les conditions générales de vente, les détails de garantie, ou l'historique complet de la commande.",
    qrIdeaDetailsExercise: "Exercice : Comparer les informations du QR code avec celles imprimées sur la facture pour vérifier la cohérence.",
    qrIdeaContactTitle: "Carte de visite (vCard)",
    qrIdeaContactDesc: "Le QR code contient les coordonnées complètes de l'entreprise (nom, adresse, téléphone, email). En le scannant, les élèves peuvent directement ajouter le contact dans leur répertoire.",
    qrIdeaContactExercise: "Exercice : Vérifier que toutes les coordonnées du QR correspondent bien aux informations en-tête de la facture.",
    qrIdeaMathTitle: "Mathématiques & Calcul",
    qrIdeaMathDesc: "Le QR code peut contenir la solution d'un calcul caché ou les étapes intermédiaires d'un problème.",
    qrIdeaMathExercise: "Exercice : Les élèves calculent le montant de la TVA, scannent le QR et vérifient leur réponse. Parfait pour l'auto-évaluation !",
    qrIdeaSecureTitle: "Sécurité & Fraude",
    qrIdeaSecureDesc: "Dans un exercice de détection de fraude, le QR code peut contenir des indices ou des informations contradictoires avec la facture.",
    qrIdeaSecureExercise: "Exercice : 'Cette facture est-elle authentique ?' - Analyser le QR, comparer les données, identifier les anomalies.",
    
    // IBAN/BIC
    companyIban: "IBAN",
    companyBic: "BIC/SWIFT",
    
    // Éléments obligatoires
    requiredElements: "Éléments obligatoires (Belgique)",
    showHide: "Afficher/Masquer",
    req1: "Numéro d'ordre séquentiel",
    req2: "Vos coordonnées (nom, adresse, BCE, TVA)",
    req3: "Coordonnées client (nom, adresse, TVA)",
    req4: "Date d'émission et date du service",
    req5: "Identification du bien/service",
    req6: "Prix unitaire et quantité",
    req7: "Montant hors TVA",
    req8: "Taux de TVA (6%, 12% ou 21%)",
    req9: "Mention légale si exonération TVA",
    req10: "Montant total TTC",
    requirementsNote: "💡 Recommandé : Date d'échéance, IBAN/BIC, email, conditions générales",
    
    // Mentions légales TVA
    vatMention: "Mention légale TVA (si exonération)",
    vatExemptionType: "Type d'exonération",
    vatNone: "Aucune (TVA applicable)",
    vatFranchise: "Franchise TVA (CA < 25.000€)",
    vatImmobiler: "Travaux immobiliers B2B (0%)",
    vatServiceB2B: "Services B2B intra-UE (0%)",
    vatBienB2B: "Biens intra-UE (0%)",
    vatExport: "Export hors UE (0%)",
    vatMentionPreview: "Mention qui apparaîtra sur la facture",
    
    // Produits prédéfinis
    predefinedProduct: "Produit prédéfini du secteur",
    selectProduct: "-- Choisir un produit --",
    productHelp: "Sélectionnez un produit ou ajoutez un article manuellement",
    addPredefinedProduct: "Ajouter ce produit",
    unitPrice: "Prix unitaire",
    quantity: "Quantité",
    total: "Total",
    
    // Conditions générales
    termsConditions: "Conditions générales",
    resetDefault: "Par défaut",
    termsHelp: "Ces conditions apparaîtront en bas de la facture",
    
    // Mode Lot
    batchMode: "Mode Lot",
    batchModeDescription: "Générez jusqu'à 50 factures différentes d'un coup pour vos évaluations ou exercices de groupe.",
    batchConfigure: "Configurer",
    batchCount: "Nombre de factures",
    batchCountHelp: "Entre 2 et 50 factures",
    batchModeLabel: "Mode",
    batchModePerfect: "Factures correctes",
    batchModeErrors: "Avec erreurs (exercice)",
    batchGenerate: "Générer le lot",
    batchGenerated: "factures générées",
    batchNumber: "Lot",
    batchTotal: "Total du lot",
    batchInvoices: "Factures du lot",
    
    // Synthèse des erreurs
    errorSynthesis: "Synthèse des erreurs",
    errorSynthesisPrint: "Imprimer la synthèse",
    errorSynthesisClose: "Fermer",
    errorSynthesisSeverityHigh: "Erreur grave",
    errorSynthesisSeverityMedium: "Erreur moyenne",
    errorSynthesisInvoice: "Facture",
    errorSynthesisError: "erreur",
    errorSynthesisErrors: "erreurs",
    noErrorsToShow: "Aucune erreur à afficher pour cette facture",
    
    // Types d'erreurs (pour la synthèse)
    errorTypeCalculation: "Erreur de calcul sur la ligne {line}",
    errorTypeVatTotal: "Erreur de calcul de la TVA",
    errorTypeVatRate: "Taux de TVA incorrect sur la ligne {line}",
 errorTypeDateSame: "Date d'échéance incohérente",
    errorTypeDateShort: "Délai de paiement trop court",
    errorTypeDatePast: "Date d'échéance antérieure",
    errorTypeMissingClientVat: "Numéro de TVA client manquant",
    errorTypeMissingClientName: "Nom du client manquant",
    errorTypeMissingClientAddress: "Adresse du client manquante",
    errorTypeMissingInvoiceNumber: "Numéro de facture manquant",
    errorTypeMissingInvoiceDate: "Date de facture manquante",
    
    // Détails des erreurs
    errorDetailVatTotal: "Le montant de TVA affiché ({shown}) est incorrect. Le montant correct devrait être {expected}. Le total TTC est donc également erroné.",
    errorDetailVatRate: "Le produit \"{product}\" utilise un taux de TVA de {wrongRate}% alors qu'il devrait être à {correctRate}%. {explanation}",
    errorDetailDateSame: "La date d'échéance ({dueDate}) est identique à la date de facture ({invoiceDate}). Une échéance normale devrait être à 30 jours minimum après la date de facture.",
    errorDetailDateShort: "La date d'échéance ({dueDate}) ne permet qu'un délai de 7 jours. Les délais de paiement standards sont généralement de 30, 45 ou 60 jours selon les conventions commerciales.",
    errorDetailDatePast: "La date d'échéance ({dueDate}) est antérieure à la date de facture ({invoiceDate}). C'est impossible car la facture serait déjà en retard dès son émission.",
    errorDetailMissingClientVat: "Le numéro de TVA du client est absent alors que le client est une entreprise ({client}). Pour une facture entre professionnels (B2B), ce numéro est obligatoire.",
    errorDetailMissingClientName: "Le nom du client est absent de la facture. Toute facture doit comporter l'identité complète du client (nom ou raison sociale).",
    errorDetailMissingClientAddress: "L'adresse du client est absente. Une facture doit indiquer l'adresse complète du client pour des raisons fiscales et légales.",
    errorDetailMissingInvoiceNumber: "Le numéro de facture est absent. Chaque facture doit avoir un numéro unique et séquentiel pour garantir sa traçabilité comptable.",
    errorDetailMissingInvoiceDate: "La date de facture est absente. La date d'émission est obligatoire pour déterminer la période comptable et le délai de paiement.",
    errorDetailCalculation: "Le total affiché ({shown}) ne correspond pas au calcul correct : {qty} × {unitPrice} = {expected}",
    vatExplanationHigh: "Ce taux est réservé aux produits de luxe, pas aux produits de première nécessité.",
    vatExplanationLow: "Ce taux réduit s'applique aux produits de première nécessité (nourriture, livres...).",
    
    // Modal historique
    historyViewInvoice: "Voir la facture",
    historyViewBatch: "Voir les factures du lot",
    historyDownloadPDF: "Télécharger PDF",
    historyDelete: "Supprimer",
    historyErrorSynthesis: "Synthèse des erreurs",
    
    // Boutons généraux
    btnCancel: "Annuler",
    btnGenerate: "Générer",
    btnDelete: "Supprimer",
    btnView: "Voir",
    btnErrorSynthesis: "Synthèse des erreurs",
    
    // Messages Toast
    toastGeneratingInvoice: "Génération de la facture...",
    toastInvoiceGenerated: "Facture générée avec succès !",
    toastGenerationError: "Erreur lors de la génération",
    toastExerciseMode: "Mode exercice - Génération...",
    toastInvoiceWithErrors: "Facture avec {count} erreur(s) générée !",
    toastGeneratingBatch: "Génération du lot de factures...",
    toastBatchGenerated: "{count} factures générées dans le lot {batchNumber} !",
    toastDemoMode: "Mode démo - Fonctionnalité complète disponible avec données",
    toastCustomGenerated: "Facture personnalisée générée !",
    toastNoInvoice: "Aucune facture à exporter",
    toastGeneratingPDF: "Génération du PDF...",
    toastPDFDownloaded: "PDF téléchargé !",
    toastPDFError: "Erreur lors de l'export PDF",
    toastGeneratingBatchPDF: "Génération du PDF pour le lot de {count} factures...",
    toastBatchPDFDownloaded: "PDF du lot {batchNumber} téléchargé !",
    toastBatchPDFError: "Erreur lors de l'export PDF du lot",
    toastJSONDownloaded: "JSON téléchargé !",
    toastNoInvoiceEdit: "Aucune facture à modifier",
    toastBatchEditError: "L'édition n'est pas disponible pour les lots de factures",
    toastInvoiceDeleted: "Facture supprimée",
    toastHistoryCleared: "Historique effacé",
    toastDarkMode: "Mode sombre activé",
    toastLightMode: "Mode clair activé",
    toastLanguageChanged: "Langue: {lang}",
    toastSettingsSaved: "Paramètres sauvegardés",

    
    // Batch et synthèse
    batchContainsErrors: "Contient des erreurs",
    batchInvoicesLabel: "factures",
    batchInvoiceLabel: "Facture",
    batchErrorsLabel: "Erreurs",
    batchOf: "Lot de",
    batchTotalLabel: "Total",
    batchCount: "Nombre de factures",
    batchDate: "Date de génération",
    batchTotalAmount: "Montant total",
    
    // Export PDF
    pdfIssuedInBelgium: "Facture émise en Belgique",
    pdfContainsErrors: "⚠️ Ce lot contient {count} erreur(s) intentionnelle(s)",
    pdfErrorSynthesis: "Page de synthèse des erreurs",
    pdfErrorOnInvoice: "{description} (Facture {invoiceNumber})",
    
    // Placeholders
    placeholderArchiveName: "Ex: Facture exercice mars 2025",
    
    // Navigation & Hero
    navCreate: "Créer",
    navHistory: "Historique",
    navSettings: "Paramètres",
    navAbout: "À propos",
    langFr: "Français",
    langNl: "Nederlands",
    langDe: "Deutsch",
    langEn: "English",
    heroTitle: "Générateur de factures pédagogiques",
    heroDescription: "Créez des factures réalistes et personnalisées pour vos exercices de comptabilité, mathématiques ou économie. Multilingue, adapté à tous les niveaux scolaires et conforme aux règles de facturation belges.",
    heroCta: "Commencer à créer",
    heroAbout: "En savoir plus",
    heroBadge: "Outil pédagogique gratuit",
    
    // Modes de génération
    modeQuick: "Mode Rapide",
    modeQuickDesc: "Générez une facture parfaite en un clic. Idéal pour les exercices standards avec des données réalistes.",
    modeExercise: "Mode Exercice",
    modeExerciseDesc: "Créez des factures avec erreurs intentionnelles pour exercer vos élèves à l'analyse critique.",
    modeBatch: "Mode Lot",
    modeBatchDesc: "Générez jusqu'à 50 factures différentes d'un coup pour vos évaluations ou exercices de groupe.",
    modeCustom: "Personnaliser",
    modeCustomDesc: "Contrôlez chaque aspect : entreprise, client, produits et options d'export.",
    
    // Boutons
    generate: "Générer",
    configure: "Configurer",
    customize: "Personnaliser",
    cancel: "Annuler",
    save: "Sauvegarder",
    close: "Fermer",
    edit: "Modifier",
    export: "Exporter",
    
    // Édition de facture
    editInvoiceTitle: "Modifier la facture",
    archiveName: "Nom pour l'archivage de la facture",
    archiveNameHint: "Donnez un nom personnalisé pour retrouver facilement cette facture dans l'historique",
    editEmitter: "Émetteur",
    editClient: "Client",
    editDates: "Dates",
    editLines: "Lignes de facture",
    editTotals: "Totaux",
    addLine: "Ajouter",
    itemDescription: "Description",
    itemQuantity: "Qté",
    itemUnitPrice: "Prix unit.",
    itemVatRate: "TVA %",
    itemTotal: "Total",
    companyName: "Nom",
    companyVat: "TVA",
    companyAddress: "Adresse",
    clientName: "Nom",
    clientVat: "TVA",
    clientAddress: "Adresse",
    subtotal: "Sous-total HT",
    vatAmount: "Montant TVA",
    total: "Total TTC",
    saveEdit: "Sauvegarder les modifications",
    editSaved: "Modifications sauvegardées avec succès",
    editedBadge: "Modifiée",
    editHistory: "Modifier",
    
    // Workflow
    stepConfigure: "Configurer",
    stepConfigureDesc: "Choisissez vos options",
    stepPreview: "Prévisualiser",
    stepPreviewDesc: "Vérifiez la facture",
    stepGenerate: "Générer",
    stepGenerateDesc: "Exportez en PDF",
    
    // Paramètres modal exercice
    modalExerciseTitle: "Configurer le Mode Exercice",
    errorCount: "Nombre d'erreurs",
    error1: "1 erreur",
    error2: "2 erreurs",
    error3: "3 erreurs",
    error4: "4 erreurs",
    error5: "5 erreurs",
    errorTypes: "Types d'erreurs",
    errorCalc: "Calcul",
    errorVat: "TVA",
    errorDate: "Date",
    errorMissing: "Champ manquant",
    errorMaxReached: "Nombre maximum atteint",
    errorMaxReachedMessage: "Avec les types sélectionnés, le maximum est de {max} erreur(s). Veuillez réduire le nombre demandé ou ajouter d'autres types d'erreurs.",
    
    // Paramètres modal lot
    modalBatchTitle: "Configurer le Mode Lot",
    batchCount: "Nombre de factures",
    batchHint: "Entre 2 et 50 factures",
    batchMode: "Mode",
    batchModeCorrect: "Factures correctes",
    batchModeError: "Avec erreurs (exercice)",
    generateBatch: "Générer le lot",
    
    // Paramètres modal custom
    modalCustomTitle: "Configurer la Facture",
    company: "Entreprise",
    client: "Client",
    random: "Aléatoire",
    retail: "Particulier",
    business: "Entreprise",
    lineCount: "Nombre de lignes",
    mode: "Mode",
    invoiceCorrect: "Facture correcte",
    invoiceWithErrors: "Avec erreurs",
    invoiceLanguage: "Langue de la facture",
    
    // Synthèse des erreurs
    errorSynthesisTitle: "Synthèse des erreurs",
    printSynthesis: "Imprimer la synthèse",
    
    // Preview section
    previewTitle: "Aperçu de la facture",
    noInvoiceTitle: "Aucune facture générée",
    noInvoiceDesc: "Sélectionnez un mode ci-dessus et cliquez sur Générer pour créer une facture.",
    
    // Labels de facture (FR)
    errorBadge: "Cette facture contient des erreurs intentionnelles à détecter",
    clientIndividual: "Client particulier",
    invTitle: "FACTURE",
    invNumber: "N°",
    invDate: "Date facture",
    invOperationDate: "Date opération",
    invDueDate: "Échéance",
    invEmitter: "ÉMETTEUR",
    invClient: "CLIENT",
    invDescription: "Description",
    invQty: "Qté",
    invUnitPrice: "Prix unit.",
    invVat: "TVA",
    invTotal: "Total",
    invSubtotal: "Sous-total HT",
    invVatTotal: "Total TVA",
    invGrandTotal: "TOTAL TTC",
    invPaymentTerms: "Paiement à",
    invDays: "jours",
    invEmitter: "ÉMETTEUR",
    invDueDateLabel: "Échéance:",
    invVatMention: "TVA applicable selon la législation en vigueur",
    invId: "N°",
    invVatBreakdown: "TVA {rate}% (base {base} €)",
    
    // Pages
    aboutTitle: "À propos",
    aboutDesc: "Un outil pédagogique libre et gratuit pour les enseignants et leurs élèves.",
    aboutMission: "Notre mission",
    aboutMissionText: "Invoice Factory est né du besoin d'outils pédagogiques simples et efficaces pour l'enseignement de la comptabilité et des mathématiques appliquées.",
    aboutOpenSource: "Open Source",
    aboutOpenSourceText: "Ce projet est libre et open source sous licence GPL v3. Chacun peut l'utiliser, le modifier et le partager librement.",
    
    // Features section (FR)
    aboutFeatures: "Fonctionnalités",
    feat4LangsTitle: "4 langues",
    feat4LangsDesc: "Français, néerlandais, allemand et anglais pour un usage international.",
    feat20SectorsTitle: "20+ secteurs",
    feat20SectorsDesc: "Boulangerie, restaurant, IT, construction, santé et bien plus.",
    featExerciseModeTitle: "Mode exercice",
    featExerciseModeDesc: "Générez des factures avec erreurs intentionnelles pour vos exercices.",
    featBelgianRulesTitle: "Conforme aux règles belges",
    featBelgianRulesDesc: "Respecte la législation belge en vigueur : mentions obligatoires, TVA, échéances et ventilation fiscale.",
    featPDFExportTitle: "Export PDF",
    featPDFExportDesc: "Téléchargez vos factures au format PDF prêtes à imprimer.",
    featBatchModeTitle: "Mode lot",
    featBatchModeDesc: "Générez jusqu'à 50 factures différentes en une seule fois.",
    featPWATitle: "PWA",
    featPWADesc: "Installez l'application sur votre appareil et utilisez-la hors ligne. Le lien est en bas de page.",
    
    // Stats (FR)
    statLangs: "Langues",
    statSectors: "Secteurs",
    statInvoices: "Factures",
    statPrice: "Gratuit",
    
    // License (FR)
    aboutLicense: "Licence",
    aboutLicenseText: "Ce projet est sous licence GNU GPL v3. Vous êtes libre de l'utiliser, le modifier et le distribuer.",
    aboutLicenseLink: "Voir la licence",
    
    // Settings page (FR)
    settingsTabGeneral: "Général",
    settingsTabInvoice: "Facture",
    settingsCardGeneralTitle: "Paramètres généraux",
    settingsCardGeneralDesc: "Configurez les préférences de l'interface et de l'expérience utilisateur.",
    settingsDefaultLang: "Langue par défaut",
    settingsTheme: "Thème",
    settingsThemeLight: "Clair",
    settingsThemeDark: "Sombre",
    settingsThemeAuto: "Auto",
    settingsAutoSave: "Sauvegarder automatiquement les factures dans l'historique",
    settingsSaveBtn: "Sauvegarder",
    settingsCardInvoiceTitle: "Paramètres des factures",
    settingsCardInvoiceDesc: "Personnalisez les options par défaut pour la génération des factures.",
    settingsCurrency: "Devise par défaut",
    settingsVat: "TVA par défaut (%)",
    settingsDateFormat: "Format de date",
    settingsInvoiceLang: "Langue de la facture",
    settingsInvoiceLangHint: "Langue par défaut pour les factures générées",
    
    settingsTitle: "Paramètres",
    settingsDesc: "Personnalisez votre expérience et configurez les options de génération.",
    historyTitle: "Historique",
    historyDesc: "Consultez et retéléchargez vos factures précédemment générées.",
    settingsCompany: "Entreprise",
    settingsClient: "Client",
    settingsRandom: "Aléatoire",
    settingsRetail: "Particulier",
    settingsBusiness: "Entreprise",
    settingsLineCount: "Nombre de lignes",
    settingsMode: "Mode",
    settingsPerfect: "Facture correcte",
    settingsWithErrors: "Avec erreurs",
    
    // Footer (FR)
    footerHome: "Accueil",
    footerHistory: "Historique",
    footerSettings: "Paramètres",
    footerAbout: "À propos",
    footerPrivacy: "Confidentialité",
    footerLicense: "Licence",
    footerMadeWith: "Conçu avec",
    footerBy: "par",
    installAppBtn: "Installer",
    installAppTitle: "Installer l'application",
    themeToggle: "Changer de thème",
    
    // Privacy Policy (FR)
    privacyTitle: "Politique de confidentialité",
    privacyDesc: "Votre vie privée est notre priorité. Découvrez comment nous protégeons vos données.",
    privacyPromiseTitle: "Notre engagement",
    privacyPromiseText: "Invoice Factory respecte votre vie privée. Nous ne collectons aucune donnée personnelle. Toutes vos factures et préférences restent exclusivement sur votre appareil.",
    privacyDataTitle: "Données collectées",
    privacyNoneTitle: "Aucune donnée personnelle",
    privacyNoneText: "Nous ne collectons aucune information personnelle identifiable. Pas d'email, pas de nom, pas de numéro de téléphone.",
    privacyLocalTitle: "Stockage 100% local",
    privacyLocalText: "Vos factures et préférences sont stockées uniquement dans le localStorage de votre navigateur, sur votre appareil uniquement.",
    privacyNoServerTitle: "Pas de serveur",
    privacyNoServerText: "Notre application n'a pas de backend. Aucune donnée n'est transmise à des serveurs distants.",
    privacyNoTrackTitle: "Pas de tracking",
    privacyNoTrackText: "Nous n'utilisons aucun cookie de tracking, ni Google Analytics, ni aucun outil d'analyse tierce.",
    privacyTechTitle: "Détails techniques",
    privacyStorageTitle: "Stockage local (localStorage)",
    privacyStorageDesc: "Nous utilisons le localStorage du navigateur pour sauvegarder :",
    privacyStorage1: "Vos préférences (thème, langue)",
    privacyStorage2: "Votre historique de factures (limité à 20 éléments)",
    privacyStorage3: "L'état d'installation de l'application (PWA)",
    privacyStorageNote: "Ces données ne quittent jamais votre appareil et sont entièrement sous votre contrôle.",
    privacyRightsTitle: "Vos droits",
    privacyRightDeleteTitle: "Droit à l'effacement",
    privacyRightDeleteText: "Vous pouvez supprimer votre historique à tout moment depuis la page Historique ou en vidant le localStorage de votre navigateur.",
    privacyRightAccessTitle: "Droit d'accès",
    privacyRightAccessText: "Toutes vos données sont visibles directement dans l'application. Vous pouvez exporter vos factures en JSON à tout moment.",
    privacyRightPortabilityTitle: "Droit à la portabilité",
    privacyRightPortabilityText: "Exportez vos factures en format JSON ou PDF et emportez-les où vous voulez.",
    privacyContactTitle: "Contact",
    privacyContactText: "Pour toute question concernant la protection de vos données, vous pouvez nous contacter :",
    privacyUpdate: "Dernière mise à jour : 12 février 2026",
    
    // RGPD Section (FR)
    aboutRGPDTitle: "Conforme au RGPD",
    aboutRGPDDesc: "Votre vie privée est notre priorité. Invoice Factory ne collecte aucune donnée personnelle et stocke toutes vos informations exclusivement sur votre appareil.",
    aboutRGPDPoint1: "Aucune donnée personnelle collectée",
    aboutRGPDPoint2: "Stockage 100% local",
    aboutRGPDPoint3: "Pas de cookies de tracking",
    aboutRGPDButton: "En savoir plus"
  },
  
  nl: {
    title: "Educatieve Factuur Generator",
    subtitle: "Maak voorbeeldfacturen voor uw oefeningen",
    generate: "Factuur genereren",
    download: "PDF downloaden",
    print: "Afdrukken",
    reset: "Resetten",
    
    settings: "Instellingen",
    language: "Taal",
    schoolLevel: "Schoolniveau",
    
    levelLower: "Onderbouw secundair (11-14 jaar)",
    levelUpper: "Bovenbouw secundair (15-18 jaar)",
    levelHigher: "Hoger onderwijs (18+ jaar)",
    
    sector: "Bedrijfssector",
    sectorPlaceholder: "Selecteer of voer een sector in",
    sectorCustom: "Anders (handmatige invoer)",
    sectorCustomLabel: "Naam aangepaste sector",
    
    bakery: "Bakkerij-Patisserie",
    restaurant: "Restaurant-Café",
    retail: "Detailhandel",
    it: "Informatica-Technologie",
    consulting: "Advies-Consulting",
    construction: "Bouw-Constructie",
    health: "Gezondheid-Medisch",
    education: "Onderwijs-Training",
    automotive: "Auto-Reparatie",
    beauty: "Schoonheid-Kapper",
    agriculture: "Landbouw-Veehouderij",
    arts: "Kunst-Cultuur",
    finance: "Financiën-Verzekeringen",
    legal: "Juridisch-Notaris",
    tourism: "Toerisme-Hotel",
    transport: "Vervoer-Logistiek",
    energy: "Energie-Milieu",
    sports: "Sport-Vrije tijd",
    realEstate: "Onroerend goed",
    
    generationOptions: "Generatieopties",
    invoiceType: "Documenttype",
    typeInvoice: "Factuur",
    typeQuote: "Offerte",
    typeOrder: "Bestelbon",
    typeExpense: "Onkostennota",
    
    // Perfecte modus
    perfectMode: "Perfecte automatische generatie",
    perfectModeHelp: "Genereert automatisch een complete en conforme factuur zonder fouten",
    quickGenerate: "Genereer mijn perfecte factuur",
    quickErrorGenerate: "Genereer een factuur met fouten",
    
    // Bewerken en importeren/exporteren
    editInvoice: "Bewerken",
    editHistory: "Bewerken",
    editLoaded: "Factuur geladen voor bewerking",
    exportJSON: "Exporteren JSON",
    exportHistory: "Exporteren",
    exportSuccess: "Factuur succesvol geëxporteerd",
    noInvoiceToExport: "Geen factuur om te exporteren",
    importTitle: "Factuur importeren",
    importHelp: "Selecteer een eerder geëxporteerd .invoice.json bestand",
    importJSON: "Bestand kiezen...",
    importCompatibility: "Compatibel met alle geëxporteerde versies",
    importErrors: "Validatiefouten:",
    importContinue: "Wilt u toch proberen te importeren?",
    importSuccess: "Factuur succesvol geïmporteerd",
    importError: "Fout bij importeren:",
    
    perfectModeTooltip: "Deze functie genereert automatisch een perfect conforme Belgische factuur met:",
    perfectFeature1: "Alle wettelijk verplichte elementen (nummer, datum, BTW, IBAN...)",
    perfectFeature2: "Realistische producten met de juiste BTW-tarieven",
    perfectFeature3: "Exacte berekeningen (subtotalen, BTW, totalen inclusief)",
    perfectFeature4: "Een fictief maar geloofwaardig bedrijf en klant",
    perfectFeature5: "Professionele handtekening en stempel",
    perfectFeature6: "De docent hoeft niets in te voeren - alles wordt automatisch gegenereerd!",
    
    // Fouten modus
    errorMode: "Oefenmodus met fouten",
    errorModeHelp: "Genereert een factuur met pedagogische fouten om te detecteren",
    errorCount: "Aantal fouten",
    errorCountHelp: "Tussen 1 en 15 fouten worden verspreid over de factuur",
    errorModeTooltip: "Deze functie genereert een factuur met opzettelijke fouten om leerlingen te trainen:",
    errorFeature1: "Berekeningsfouten (subtotalen, BTW, totalen incorrect)",
    errorFeature2: "Onjuiste BTW-tarieven (21% op voedsel, etc.)",
    errorFeature3: "Ontbrekende wettelijke gegevens (geen BTW-nummer, IBAN...)",
    errorFeature4: "Inconsistente eenheden (kg in plaats van stuk, uren verkeerd berekend)",
    errorFeature5: "Incorrecte data (factuur in de toekomst, vervaldatum voor factuur)",
    errorFeature6: "Producten/diensten inconsistent met de bedrijfssector",
    errorFeature7: "Negatieve hoeveelheden of prijzen, verdachte bedragen",
    errorFeature8: "Ontbrekende of incorrecte wettelijke vermeldingen",
    errorFeature9: "Ontbrekende of non-conforme handtekening/stempel",
    errorFeature10: "QR-code komt niet overeen met de gegevens",
    errorFeature11: "Leerlingen moeten alle fouten identificeren en corrigeren!",
    
    logo: "Bedrijfslogo",
    logoPredefined: "Vooraf gedefinieerd pictogram",
    logoUpload: "Mijn logo uploaden",
    logoPrompt: "Beschrijving van te genereren logo",
    
    company: "Bedrijfsinformatie",
    companyName: "Bedrijfsnaam",
    companyAddress: "Adres",
    companyZip: "Postcode",
    companyCity: "Stad",
    companyCountry: "Land",
    companyPhone: "Telefoon",
    companyEmail: "E-mail",
    companySiret: "BTW-nummer",
    
    client: "Klantinformatie",
    clientName: "Klantnaam",
    clientAddress: "Adres",
    clientZip: "Postcode",
    clientCity: "Stad",
    clientCountry: "Land",
    
    invoice: "Factuurgegevens",
    invoiceNumber: "Factuurnummer",
    invoiceDate: "Factuurdatum",
    dueDate: "Vervaldatum",
    paymentMethod: "Betalingsmethode",
    paymentCash: "Contant",
    paymentCard: "Bankkaart",
    paymentTransfer: "Overschrijving",
    paymentCheck: "Cheque",
    
    items: "Artikelen / Diensten",
    addItem: "Artikel toevoegen",
    removeItem: "Verwijderen",
    itemDescription: "Omschrijving",
    itemQuantity: "Aantal",
    itemUnitPrice: "Stukprijs",
    itemTotal: "Totaal",
    
    subtotal: "Subtotaal excl. BTW",
    vat: "BTW",
    vatRate: "BTW-tarief",
    vatTotal: "Totaal BTW",
    total: "Totaal incl. BTW",
    
    notes: "Opmerkingen / Bijzondere voorwaarden",
    notesPlaceholder: "Betalingsvoorwaarden, kortingen, wettelijke vermeldingen...",
    
    generating: "Bezig met genereren...",
    generateSuccess: "Factuur succesvol gegenereerd!",
    generateError: "Fout bij genereren",
    
    required: "Verplicht veld",
    optional: "Optioneel veld",
    
    preview: "Factuurvoorbeeld",
    noPreview: "Vul het formulier in en klik op 'Genereren'",
    
    history: "Geschiedenis",
    noHistory: "Geen facturen in geschiedenis",
    loadHistory: "Deze factuur laden",
    deleteHistory: "Verwijderen",
    
    legalNotice: "Verplichte vermelding: Factuur uitsluitend voor educatieve doeleinden gegenereerd.",
    
    // Signature et Tampon
    signatureStamp: "Handtekening & Stempel",
    signatureHelp: "Hoe te gebruiken?",
    signatureType: "Type validatie",
    sigNone: "Geen",
    sigSignatureOnly: "Alleen handtekening",
    sigStampOnly: "Alleen stempel",
    sigBoth: "Handtekening + Stempel",
    signatureSource: "Bron van handtekening",
    sigSourceText: "Handtekening lijn (tekst)",
    sigSourceUpload: "Geüploade afbeelding",
    sigUploadLabel: "Handtekening afbeelding",
    sigUploadHelp: "PNG met transparante achtergrond aanbevolen",
    sigLabel1: "Link label",
    sigLabel2: "Rechts label",
    sigDefaultLabel1: "Voor ontvangst, de leverancier",
    sigDefaultLabel2: "Goedgekeurd, de klant",
    stampText: "Stempel tekst",
    stampDefaultText: "BETAALD",
    stampColor: "Kleur",
    stampDate: "Datum toevoegen",
    yes: "Ja",
    no: "Nee",
    stampPosition: "Positie",
    stampBottomRight: "Rechts onder",
    stampBottomLeft: "Links onder",
    stampOverTotal: "Over het totaal",
    signaturePreview: "Voorbeeld",
    signatureModalTitle: "✍️ Pédagogische ideeën met Handtekening & Stempel",
    sigIdeaContractTitle: "Contractuele waarde",
    sigIdeaContractDesc: "De handtekening maakt van de factuur een bindend contract. Zonder handtekening heeft de factuur niet dezelfde juridische waarde. Leerlingen leren het belang van ondertekening.",
    sigIdeaContractExercise: "Oefening: 'Is deze factuur geldig zonder handtekening?' - Bespreek juridische waarde en risico's.",
    sigIdeaPaidTitle: "Boekhoudkundige cyclus: Factuur betaald",
    sigIdeaPaidDesc: "De stempel 'BETAALD' met datum geeft aan dat de factuur is voldaan. Dit is cruciaal om dubbele betalingen te voorkomen. Leerlingen begrijpen de cyclus: uitgifte → ontvangst → validatie → betaling → archivering.",
    sigIdeaPaidExercise: "Oefening: Maak twee identieke facturen, één met 'BETAALD' stempel en één zonder. Vraag leerlingen welke betaling nodig heeft.",
    sigIdeaProformaTitle: "📄 Proforma vs definitieve factuur",
    sigIdeaProformaDesc: "Een proforma factuur (offerte) is niet ondertekend en draagt vaak 'Proforma - Zonder boekhoudwaarde'. Eenmaal geaccepteerd en ondertekend wordt het een vaste bestelling en definitieve factuur.",
    sigIdeaProformaExercise: "Oefening: Presenteer 3 documenten (offerte, bestelling, factuur) met/zonder handtekeningen. Laat leerlingen classificeren volgens voortgang.",
    sigIdeaFraudTitle: "Fraude detectie",
    sigIdeaFraudDesc: "Een factuur met een verdachte handtekening (gekopieerd, slechte scan) of verkeerd geplaatste stempel kan vervalsing aangeven. Accountants controleren deze details.",
    sigIdeaFraudExercise: "Oefening: 'Fouten' modus: genereer factuur met gepixelde handtekening of 'BETAALD' stempel op verkeerd bedrag. Leerlingen moeten afwijking vinden.",
    sigIdeaValidationTitle: "Intern validatieproces",
    sigIdeaValidationDesc: "In een bedrijf kan een factuur meerdere handtekeningen nodig hebben: teamleider (validatie dienst), hoofdboekhouder (validatie bedrag), directeur (strategische validatie).",
    sigIdeaValidationExercise: "Oefening: Maak factuur met meerdere handtekening ruimtes. Vraag leerlingen rollen toe te wijzen en uit te leggen waarom elk moet ondertekenen.",
    sigIdeaProfessionalTitle: "Professionele imago",
    sigIdeaProfessionalDesc: "Een gepersonaliseerde stempel met logo versterkt visuele identiteit en geloofwaardigheid. Leerlingen ontdekken het belang van visuele communicatie.",
    sigIdeaProfessionalExercise: "Oefening: Vergelijk twee facturen (één met professionele stempel, één zonder). Laat leerlingen noteren welk bedrijf meer vertrouwen inspireert.",
    
    // Langues
    interfaceLanguageLabel: "Taal:",
    aboutLink: "Over",
    invoiceLanguage: "Factuurtaal",
    invoiceLanguageHelp: "Taal waarin de factuur wordt opgesteld",
    
    // QR Code
    qrCode: "QR Code",
    qrHelp: "Hoe te gebruiken?",
    qrType: "Type QR Code",
    qrNone: "Geen",
    qrPayment: "Instant betaling (bedrag + IBAN)",
    qrVerification: "Authenticiteitsverificatie",
    qrDetails: "Factuur details (URL)",
    qrContact: "Visitekaartje (vCard)",
    qrCustom: "Aangepast (URL of tekst)",
    qrCustomValue: "QR Code inhoud",
    qrPreview: "QR Code voorbeeld",
    qrModalTitle: "📱 Pédagogische ideeën met QR Code",
    qrIdeaPaymentTitle: "Instant betaling",
    qrIdeaPaymentDesc: "De QR code bevat alle betalingsinformatie (begunstigde, IBAN, bedrag, referentie). Leerlingen kunnen scannen met hun telefoon om te begrijpen hoe moderne betalingen werken zoals Payconiq of Bancontact.",
    qrIdeaPaymentExercise: "Oefening: Controleer of het gecodeerde bedrag overeenkomt met het totaal van de factuur.",
    qrIdeaVerifyTitle: "Authenticiteitsverificatie",
    qrIdeaVerifyDesc: "De QR code leidt naar een 'officiële verificatie' pagina waar leerlingen kunnen bevestigen dat de factuur authentiek is.",
    qrIdeaVerifyExercise: "Oefening: In 'factuur met fouten' modus kan de QR code niet werken = teken van mogelijke fraude.",
    qrIdeaDetailsTitle: "Factuur details",
    qrIdeaDetailsDesc: "De QR code geeft toegang tot een pagina met algemene voorwaarden, garantie details of ordergeschiedenis.",
    qrIdeaDetailsExercise: "Oefening: Vergelijk QR code informatie met de afgedrukte factuur om consistentie te controleren.",
    qrIdeaContactTitle: "Visitekaartje (vCard)",
    qrIdeaContactDesc: "De QR code bevat complete bedrijfsgegevens (naam, adres, telefoon, email). Bij scannen direct toevoegen aan contacten.",
    qrIdeaContactExercise: "Oefening: Controleer of alle QR contactgegevens overeenkomen met de factuur header.",
    qrIdeaMathTitle: "Wiskunde & Berekening",
    qrIdeaMathDesc: "De QR code kan de oplossing bevatten van een berekening of tussenstappen van een probleem.",
    qrIdeaMathExercise: "Oefening: Leerlingen berekenen BTW, scannen QR en controleren hun antwoord. Perfect voor zelfevaluatie!",
    qrIdeaSecureTitle: "Veiligheid & Fraude",
    qrIdeaSecureDesc: "In een fraude-detectie oefening kan de QR code aanwijzingen of tegenstrijdige informatie bevatten.",
    qrIdeaSecureExercise: "Oefening: 'Is deze factuur authentiek?' - Analyseer QR, vergelijk gegevens, identificeer afwijkingen.",
    
    // IBAN/BIC
    companyIban: "IBAN",
    companyBic: "BIC/SWIFT",
    
    // Éléments obligatoires
    requiredElements: "Verplichte elementen (België)",
    showHide: "Toon/Verberg",
    req1: "Sequentieel factuurnummer",
    req2: "Uw gegevens (naam, adres, KBO, BTW)",
    req3: "Klantgegevens (naam, adres, BTW)",
    req4: "Datum van uitgifte en datum van dienst",
    req5: "Identificatie van goed/dienst",
    req6: "Eenheidsprijs en hoeveelheid",
    req7: "Bedrag exclusief BTW",
    req8: "BTW-tarief (6%, 12% of 21%)",
    req9: "Wettelijke vermelding indien BTW-vrijgesteld",
    req10: "Totaalbedrag inclusief BTW",
    requirementsNote: "💡 Aanbevolen: Vervaldatum, IBAN/BIC, email, algemene voorwaarden",
    
    // Mentions légales TVA
    vatMention: "Wettelijke BTW-vermelding (indien vrijgesteld)",
    vatExemptionType: "Type vrijstelling",
    vatNone: "Geen (BTW van toepassing)",
    vatFranchise: "BTW-franchise (omzet < €25.000)",
    vatImmobiler: "Vastgoedwerken B2B (0%)",
    vatServiceB2B: "B2B-diensten intra-EU (0%)",
    vatBienB2B: "Goederen intra-EU (0%)",
    vatExport: "Export buiten EU (0%)",
    vatMentionPreview: "Vermelding die op factuur verschijnt",
    
    // Produits prédéfinis
    predefinedProduct: "Voorgedefinieerd product van sector",
    selectProduct: "-- Kies een product --",
    productHelp: "Selecteer een product of voeg handmatig een artikel toe",
    addPredefinedProduct: "Dit product toevoegen",
    unitPrice: "Eenheidsprijs",
    quantity: "Hoeveelheid",
    total: "Totaal",
    
    // Conditions générales
    termsConditions: "Algemene voorwaarden",
    resetDefault: "Standaard",
    termsHelp: "Deze voorwaarden verschijnen onderaan de factuur",
    
    // Mode Lot (NL)
    batchMode: "Batch Modus",
    batchModeDescription: "Genereer tot 50 verschillende facturen tegelijk voor uw evaluaties of groepsoefeningen.",
    batchConfigure: "Configureren",
    batchCount: "Aantal facturen",
    batchCountHelp: "Tussen 2 en 50 facturen",
    batchModeLabel: "Modus",
    batchModePerfect: "Correcte facturen",
    batchModeErrors: "Met fouten (oefening)",
    batchGenerate: "Batch genereren",
    batchGenerated: "facturen gegenereerd",
    batchNumber: "Batch",
    batchTotal: "Batch totaal",
    batchInvoices: "Batch facturen",
    
    // Synthèse des erreurs (NL)
    errorSynthesis: "Foutensynthese",
    errorSynthesisPrint: "Synthese afdrukken",
    errorSynthesisClose: "Sluiten",
    errorSynthesisSeverityHigh: "Ernstige fout",
    errorSynthesisSeverityMedium: "Middelmatige fout",
    errorSynthesisInvoice: "Factuur",
    errorSynthesisError: "fout",
    errorSynthesisErrors: "fouten",
    noErrorsToShow: "Geen fouten om te tonen voor deze factuur",
    
    // Types d'erreurs (NL)
    errorTypeCalculation: "Berekeningsfout op regel {line}",
    errorTypeVatTotal: "BTW-berekeningsfout",
    errorTypeVatRate: "Incorrect BTW-tarief op regel {line}",
    errorTypeDateSame: "Inconsistente vervaldatum",
    errorTypeDateShort: "Te korte betalingstermijn",
    errorTypeDatePast: "Vervaldatum in het verleden",
    errorTypeMissingClientVat: "BTW-nummer klant ontbreekt",
    errorTypeMissingClientName: "Klantnaam ontbreekt",
    errorTypeMissingClientAddress: "Klantadres ontbreekt",
    errorTypeMissingInvoiceNumber: "Factuurnummer ontbreekt",
    errorTypeMissingInvoiceDate: "Factuurdatum ontbreekt",
    
    // Détails des erreurs (NL)
    errorDetailVatTotal: "Het getoonde BTW-bedrag ({shown}) is incorrect. Het correcte bedrag zou {expected} moeten zijn. Het totaal is dus ook verkeerd.",
    errorDetailVatRate: "Het product \"{product}\" gebruikt een BTW-tarief van {wrongRate}% terwijl het {correctRate}% zou moeten zijn. {explanation}",
    errorDetailDateSame: "De vervaldatum ({dueDate}) is identiek aan de factuurdatum ({invoiceDate}). Een normale termijn zou minimaal 30 dagen na de factuurdatum moeten zijn.",
    errorDetailDateShort: "De vervaldatum ({dueDate}) staat maar 7 dagen later. Standaard betalingstermijnen zijn meestal 30, 45 of 60 dagen.",
    errorDetailDatePast: "De vervaldatum ({dueDate}) ligt vóór de factuurdatum ({invoiceDate}). Dit is onmogelijk want de factuur zou al achterstallig zijn.",
    errorDetailMissingClientVat: "Het BTW-nummer van de klant ontbreekt terwijl de klant een bedrijf is ({client}). Voor B2B-facturen is dit nummer verplicht.",
    errorDetailMissingClientName: "De klantnaam ontbreekt op de factuur. Elke factuur moet de complete identiteit van de klant bevatten.",
    errorDetailMissingClientAddress: "Het adres van de klant ontbreekt. Een factuur moet het volledige adres van de klant vermelden om fiscale redenen.",
    errorDetailMissingInvoiceNumber: "Het factuurnummer ontbreekt. Elke factuur moet een uniek sequentieel nummer hebben voor traceerbaarheid.",
    errorDetailMissingInvoiceDate: "De factuurdatum ontbreekt. De datum van afgifte is verplicht om de boekhoudperiode te bepalen.",
    errorDetailCalculation: "Het getoonde totaal ({shown}) komt niet overeen met de correcte berekening: {qty} × {unitPrice} = {expected}",
    vatExplanationHigh: "Dit tarief is voorbehouden aan luxeproducten, niet aan producten van eerste noodzaak.",
    vatExplanationLow: "Dit verlaagde tarief geldt voor producten van eerste noodzaak (voedsel, boeken...).",
    
    // Modal historique (NL)
    historyViewInvoice: "Factuur bekijken",
    historyViewBatch: "Batch facturen bekijken",
    historyDownloadPDF: "PDF downloaden",
    historyDelete: "Verwijderen",
    historyErrorSynthesis: "Foutensynthese",
    
    // Boutons généraux (NL)
    btnCancel: "Annuleren",
    btnGenerate: "Genereren",
    btnDelete: "Verwijderen",
    btnView: "Bekijken",
    btnErrorSynthesis: "Foutensynthese",
    
    // Messages Toast (NL)
    toastGeneratingInvoice: "Factuur genereren...",
    toastInvoiceGenerated: "Factuur succesvol gegenereerd!",
    toastGenerationError: "Fout bij genereren",
    toastExerciseMode: "Oefenmodus - Genereren...",
    toastInvoiceWithErrors: "Factuur met {count} fout(en) gegenereerd!",
    toastGeneratingBatch: "Batch facturen genereren...",
    toastBatchGenerated: "{count} facturen gegenereerd in batch {batchNumber}!",
    toastDemoMode: "Demomodus - Volledige functionaliteit beschikbaar met gegevens",
    toastCustomGenerated: "Aangepaste factuur gegenereerd!",
    toastNoInvoice: "Geen factuur om te exporteren",
    toastGeneratingPDF: "PDF genereren...",
    toastPDFDownloaded: "PDF gedownload!",
    toastPDFError: "Fout bij PDF-export",
    toastGeneratingBatchPDF: "PDF genereren voor batch van {count} facturen...",
    toastBatchPDFDownloaded: "PDF van batch {batchNumber} gedownload!",
    toastBatchPDFError: "Fout bij PDF-export van batch",
    toastJSONDownloaded: "JSON gedownload!",
    toastNoInvoiceEdit: "Geen factuur om te bewerken",
    toastBatchEditError: "Bewerken is niet beschikbaar voor batch facturen",
    toastInvoiceDeleted: "Factuur verwijderd",
    toastHistoryCleared: "Geschiedenis gewist",
    toastDarkMode: "Donkere modus geactiveerd",
    toastLightMode: "Lichte modus geactiveerd",
    toastLanguageChanged: "Taal: {lang}",
    toastSettingsSaved: "Instellingen opgeslagen",

    
    // Batch et synthèse (NL)
    batchContainsErrors: "Bevat fouten",
    batchInvoicesLabel: "facturen",
    batchInvoiceLabel: "Factuur",
    batchErrorsLabel: "Fouten",
    batchOf: "Batch van",
    batchTotalLabel: "Totaal",
    batchCount: "Aantal facturen",
    batchDate: "Generatiedatum",
    batchTotalAmount: "Totaalbedrag",
    
    // Export PDF (NL)
    pdfIssuedInBelgium: "Factuur uitgegeven in België",
    pdfContainsErrors: "⚠️ Deze batch bevat {count} opzettelijke fout(en)",
    pdfErrorSynthesis: "Foutensynthese pagina",
    pdfErrorOnInvoice: "{description} (Factuur {invoiceNumber})",
    
    // Placeholders (NL)
    placeholderArchiveName: "Bijv: Factuur oefening maart 2025",
    
    // Navigation (NL)
    navCreate: "Maken",
    navHistory: "Geschiedenis",
    navSettings: "Instellingen",
    navAbout: "Over",
    langFr: "Français",
    langNl: "Nederlands",
    langDe: "Deutsch",
    langEn: "English",
    heroTitle: "Educatieve factuurgenerator",
    heroDescription: "Maak realistische en gepersonaliseerde facturen voor uw boekhoud-, wiskunde- of economieoefeningen. Meertalig, geschikt voor alle schoolniveaus en conform de Belgische factureringsregels.",
    heroCta: "Begin met creëren",
    heroAbout: "Meer informatie",
    heroBadge: "Gratis educatief tool",
    
    // Modes de génération (NL)
    modeQuick: "Snelle Modus",
    modeQuickDesc: "Genereer een perfecte factuur met één klik. Ideaal voor standaardoefeningen met realistische gegevens.",
    modeExercise: "Oefenmodus",
    modeExerciseDesc: "Creëer facturen met opzettelijke fouten om leerlingen te trainen in kritische analyse.",
    modeBatch: "Batch Modus",
    modeBatchDesc: "Genereer tot 50 verschillende facturen tegelijk voor uw evaluaties of groepsoefeningen.",
    modeCustom: "Aanpassen",
    modeCustomDesc: "Controleer elk aspect: bedrijf, klant, producten en exportopties.",
    
    // Boutons (NL)
    generate: "Genereren",
    configure: "Configureren",
    customize: "Aanpassen",
    cancel: "Annuleren",
    save: "Opslaan",
    close: "Sluiten",
    edit: "Bewerken",
    export: "Exporteren",
    
    // Édition de facture (NL)
    editInvoiceTitle: "Factuur bewerken",
    archiveName: "Naam voor archivering van de factuur",
    archiveNameHint: "Geef een aangepaste naam op om deze factuur gemakkelijk terug te vinden in de geschiedenis",
    editEmitter: "Afzender",
    editClient: "Klant",
    editDates: "Datums",
    editLines: "Factuurregels",
    editTotals: "Totalen",
    addLine: "Toevoegen",
    itemDescription: "Omschrijving",
    itemQuantity: "Aantal",
    itemUnitPrice: "Prijs per stuk",
    itemVatRate: "BTW %",
    itemTotal: "Totaal",
    companyName: "Naam",
    companyVat: "BTW",
    companyAddress: "Adres",
    clientName: "Naam",
    clientVat: "BTW",
    clientAddress: "Adres",
    subtotal: "Subtotaal excl. BTW",
    vatAmount: "BTW-bedrag",
    total: "Totaal incl. BTW",
    saveEdit: "Wijzigingen opslaan",
    editSaved: "Wijzigingen succesvol opgeslagen",
    editedBadge: "Bewerkt",
    editHistory: "Bewerken",
    
    // Workflow (NL)
    stepConfigure: "Configureren",
    stepConfigureDesc: "Kies uw opties",
    stepPreview: "Voorbeeld",
    stepPreviewDesc: "Controleer de factuur",
    stepGenerate: "Genereren",
    stepGenerateDesc: "Exporteer als PDF",
    
    // Paramètres modal exercice (NL)
    modalExerciseTitle: "Oefenmodus configureren",
    errorCount: "Aantal fouten",
    error1: "1 fout",
    error2: "2 fouten",
    error3: "3 fouten",
    error4: "4 fouten",
    error5: "5 fouten",
    errorTypes: "Type fouten",
    errorCalc: "Berekening",
    errorVat: "BTW",
    errorDate: "Datum",
    errorMissing: "Ontbrekend veld",
    errorMaxReached: "Maximum aantal bereikt",
    errorMaxReachedMessage: "Met de geselecteerde types is het maximum {max} fout(en). Verminder het aantal of voeg meer fouttypes toe.",
    
    // Paramètres modal lot (NL)
    modalBatchTitle: "Batchmodus configureren",
    batchCount: "Aantal facturen",
    batchHint: "Tussen 2 en 50 facturen",
    batchMode: "Modus",
    batchModeCorrect: "Correcte facturen",
    batchModeError: "Met fouten (oefening)",
    generateBatch: "Batch genereren",
    
    // Paramètres modal custom (NL)
    modalCustomTitle: "Factuur configureren",
    company: "Bedrijf",
    client: "Klant",
    random: "Willekeurig",
    retail: "Particulier",
    business: "Bedrijf",
    lineCount: "Aantal regels",
    mode: "Modus",
    invoiceCorrect: "Correcte factuur",
    invoiceWithErrors: "Met fouten",
    invoiceLanguage: "Factuurtaal",
    
    // Synthèse des erreurs (NL)
    errorSynthesisTitle: "Foutenoverzicht",
    printSynthesis: "Overzicht afdrukken",
    
    // Preview section (NL)
    previewTitle: "Factuurvoorbeeld",
    noInvoiceTitle: "Geen factuur gegenereerd",
    noInvoiceDesc: "Selecteer een modus hierboven en klik op Genereren om een factuur te maken.",
    
    // Labels de facture (NL)
    errorBadge: "Deze factuur bevat opzettelijke fouten om te detecteren",
    clientIndividual: "Particuliere klant",
    invTitle: "FACTUUR",
    invNumber: "Nr.",
    invDate: "Factuurdatum",
    invOperationDate: "Operatiedatum",
    invDueDate: "Vervaldatum",
    invEmitter: "AFZENDER",
    invClient: "KLANT",
    invDescription: "Omschrijving",
    invQty: "Aantal",
    invUnitPrice: "Prijs",
    invVat: "BTW",
    invTotal: "Totaal",
    invSubtotal: "Subtotaal excl.",
    invVatTotal: "Totaal BTW",
    invGrandTotal: "TOTAAL INCL.",
    invPaymentTerms: "Betaling binnen",
    invDays: "dagen",
    invEmitter: "AFZENDER",
    invDueDateLabel: "Vervaldatum:",
    invVatMention: "BTW toepasbaar volgens de geldende wetgeving",
    invId: "Nr.",
    invVatBreakdown: "BTW {rate}% (basis {base} €)",
    
    // Pages (NL)
    aboutTitle: "Over",
    aboutDesc: "Een gratis educatief tool voor leerkrachten en leerlingen.",
    aboutMission: "Onze missie",
    aboutMissionText: "Invoice Factory is ontstaan uit de behoefte aan eenvoudige en efficiënte tools voor het onderwijzen van boekhouding en toegepaste wiskunde.",
    aboutOpenSource: "Open Source",
    aboutOpenSourceText: "Dit project is vrij en open source onder GPL v3 licentie. Iedereen kan het vrij gebruiken, aanpassen en delen.",
    
    // Features section (NL)
    aboutFeatures: "Functies",
    feat4LangsTitle: "4 talen",
    feat4LangsDesc: "Frans, Nederlands, Duits en Engels voor internationaal gebruik.",
    feat20SectorsTitle: "20+ sectoren",
    feat20SectorsDesc: "Bakkerij, restaurant, IT, bouw, gezondheid en meer.",
    featExerciseModeTitle: "Oefenmodus",
    featExerciseModeDesc: "Genereer facturen met opzettelijke fouten voor uw oefeningen.",
    featBelgianRulesTitle: "Conform Belgische regels",
    featBelgianRulesDesc: "Voldoet aan de Belgische wetgeving: verplichte vermeldingen, BTW, vervaldatums en fiscale verdeling.",
    featPDFExportTitle: "PDF-export",
    featPDFExportDesc: "Download uw facturen in PDF-formaat klaar om af te drukken.",
    featBatchModeTitle: "Batchmodus",
    featBatchModeDesc: "Genereer tot 50 verschillende facturen tegelijk.",
    featPWATitle: "PWA",
    featPWADesc: "Installeer de applicatie op uw apparaat en gebruik deze offline.",
    
    // Stats (NL)
    statLangs: "Talen",
    statSectors: "Sectoren",
    statInvoices: "Facturen",
    statPrice: "Gratis",
    
    // License (NL)
    aboutLicense: "Licentie",
    aboutLicenseText: "Dit project is gelicentieerd onder GNU GPL v3. U bent vrij om het te gebruiken, aan te passen en te distribueren.",
    aboutLicenseLink: "Bekijk licentie",
    
    // Settings page (NL)
    settingsTabGeneral: "Algemeen",
    settingsTabInvoice: "Factuur",
    settingsCardGeneralTitle: "Algemene instellingen",
    settingsCardGeneralDesc: "Configureer de interface- en gebruikerservaringvoorkeuren.",
    settingsDefaultLang: "Standaard taal",
    settingsTheme: "Thema",
    settingsThemeLight: "Licht",
    settingsThemeDark: "Donker",
    settingsThemeAuto: "Auto",
    settingsAutoSave: "Facturen automatisch opslaan in geschiedenis",
    settingsSaveBtn: "Opslaan",
    settingsCardInvoiceTitle: "Factuurinstellingen",
    settingsCardInvoiceDesc: "Pas de standaardopties voor factuurgeneratie aan.",
    settingsCurrency: "Standaard valuta",
    settingsVat: "Standaard BTW (%)",
    settingsDateFormat: "Datumformaat",
    settingsInvoiceLang: "Factuurtaal",
    settingsInvoiceLangHint: "Standaardtaal voor gegenereerde facturen",
    
    settingsTitle: "Instellingen",
    settingsDesc: "Pas uw ervaring aan en configureer de generatieopties.",
    historyTitle: "Geschiedenis",
    historyDesc: "Bekijk en download uw eerder gegenereerde facturen.",
    historyClearAll: "Alles wissen",
    historyEmptyTitle: "Geen facturen in geschiedenis",
    historyEmptyDesc: "Facturen die u genereert, verschijnen hier voor snelle toegang later.",
    historyCreateBtn: "Factuur maken",
    historyModalTitle: "Factuurvoorbeeld",
    settingsErrorMissing: "Ontbrekend veld",
    settingsCompany: "Bedrijf",
    settingsClient: "Klant",
    settingsRandom: "Willekeurig",
    settingsRetail: "Particulier",
    settingsBusiness: "Bedrijf",
    settingsLineCount: "Aantal regels",
    settingsMode: "Modus",
    settingsPerfect: "Correcte factuur",
    settingsWithErrors: "Met fouten",
    
    // Footer (NL)
    footerHome: "Startpagina",
    footerHistory: "Geschiedenis",
    footerSettings: "Instellingen",
    footerAbout: "Over",
    footerMadeWith: "Gemaakt met",
    footerBy: "door",
    footerPrivacy: "Privacy",
    footerLicense: "Licentie",
    installAppBtn: "Installeren",
    installAppTitle: "Installeer de app",
    themeToggle: "Thema wijzigen",
    
    // Privacy Policy (NL)
    privacyTitle: "Privacybeleid",
    privacyDesc: "Uw privacy is onze prioriteit. Ontdek hoe we uw gegevens beschermen.",
    privacyPromiseTitle: "Onze toezegging",
    privacyPromiseText: "Invoice Factory respecteert uw privacy. We verzamelen geen persoonlijke gegevens. Al uw facturen en voorkeuren blijven exclusief op uw apparaat.",
    privacyDataTitle: "Verzamelde gegevens",
    privacyNoneTitle: "Geen persoonlijke gegevens",
    privacyNoneText: "We verzamelen geen identificeerbare persoonlijke informatie. Geen e-mail, geen naam, geen telefoonnummer.",
    privacyLocalTitle: "100% lokale opslag",
    privacyLocalText: "Uw facturen en voorkeuren worden alleen opgeslagen in de localStorage van uw browser, uitsluitend op uw apparaat.",
    privacyNoServerTitle: "Geen server",
    privacyNoServerText: "Onze applicatie heeft geen backend. Geen gegevens worden verzonden naar externe servers.",
    privacyNoTrackTitle: "Geen tracking",
    privacyNoTrackText: "We gebruiken geen tracking cookies, geen Google Analytics, geen analysetools van derden.",
    privacyTechTitle: "Technische details",
    privacyStorageTitle: "Lokale opslag (localStorage)",
    privacyStorageDesc: "We gebruiken de browser localStorage om op te slaan:",
    privacyStorage1: "Uw voorkeuren (thema, taal)",
    privacyStorage2: "Uw factuurgeschiedenis (maximaal 20 items)",
    privacyStorage3: "De installatiestatus van de app (PWA)",
    privacyStorageNote: "Deze gegevens verlaten nooit uw apparaat en zijn volledig onder uw controle.",
    privacyRightsTitle: "Uw rechten",
    privacyRightDeleteTitle: "Recht op verwijdering",
    privacyRightDeleteText: "U kunt uw geschiedenis op elk moment verwijderen vanaf de Geschiedenis pagina of door de localStorage van uw browser te wissen.",
    privacyRightAccessTitle: "Recht op toegang",
    privacyRightAccessText: "Al uw gegevens zijn direct zichtbaar in de applicatie. U kunt uw facturen op elk moment exporteren naar JSON.",
    privacyRightPortabilityTitle: "Recht op overdraagbaarheid",
    privacyRightPortabilityText: "Exporteer uw facturen naar JSON of PDF formaat en neem ze mee waar u wilt.",
    privacyContactTitle: "Contact",
    privacyContactText: "Voor vragen over gegevensbescherming kunt u contact met ons opnemen:",
    privacyUpdate: "Laatste update: 12 februari 2026",
    
    // RGPD Section (NL)
    aboutRGPDTitle: "GDPR-conform",
    aboutRGPDDesc: "Uw privacy is onze prioriteit. Invoice Factory verzamelt geen persoonlijke gegevens en slaat al uw informatie exclusief op uw apparaat op.",
    aboutRGPDPoint1: "Geen persoonlijke gegevens verzameld",
    aboutRGPDPoint2: "100% lokale opslag",
    aboutRGPDPoint3: "Geen tracking cookies",
    aboutRGPDButton: "Meer informatie"
  },
  
  de: {
    title: "Pädagogischer Rechnungsgenerator",
    subtitle: "Erstellen Sie Beispielrechnungen für Ihre Übungen",
    generate: "Rechnung erstellen",
    download: "PDF herunterladen",
    print: "Drucken",
    reset: "Zurücksetzen",
    
    settings: "Einstellungen",
    language: "Sprache",
    schoolLevel: "Schulstufe",
    
    levelLower: "Unterstufe Sekundarstufe (11-14 Jahre)",
    levelUpper: "Oberstufe Sekundarstufe (15-18 Jahre)",
    levelHigher: "Hochschulbildung (18+ Jahre)",
    
    sector: "Wirtschaftssektor",
    sectorPlaceholder: "Wählen oder geben Sie einen Sektor ein",
    sectorCustom: "Andere (manuelle Eingabe)",
    sectorCustomLabel: "Name des benutzerdefinierten Sektors",
    
    bakery: "Bäckerei-Konditorei",
    restaurant: "Restaurant-Café",
    retail: "Einzelhandel",
    it: "Informatik-Technologie",
    consulting: "Beratung-Consulting",
    construction: "Bau-Baugewerbe",
    health: "Gesundheit-Medizin",
    education: "Bildung-Training",
    automotive: "Kfz-Reparatur",
    beauty: "Schönheit-Friseur",
    agriculture: "Landwirtschaft-Viehzucht",
    arts: "Kunst-Kultur",
    finance: "Finanzen-Versicherungen",
    legal: "Recht-Notar",
    tourism: "Tourismus-Hotel",
    transport: "Transport-Logistik",
    energy: "Energie-Umwelt",
    sports: "Sport-Freizeit",
    realEstate: "Immobilien",
    
    generationOptions: "Generierungsoptionen",
    invoiceType: "Dokumenttyp",
    typeInvoice: "Rechnung",
    typeQuote: "Angebot",
    typeOrder: "Bestellschein",
    typeExpense: "Spesenabrechnung",
    
    // Perfekter Modus
    perfectMode: "Perfekte automatische Generierung",
    perfectModeHelp: "Erstellt automatisch eine vollständige und konforme Rechnung ohne Fehler",
    quickGenerate: "Meine perfekte Rechnung erstellen",
    quickErrorGenerate: "Rechnung mit Fehlern erstellen",
    
    // Bearbeiten und Import/Export
    editInvoice: "Bearbeiten",
    editHistory: "Bearbeiten",
    editLoaded: "Rechnung zum Bearbeiten geladen",
    exportJSON: "JSON exportieren",
    exportHistory: "Exportieren",
    exportSuccess: "Rechnung erfolgreich exportiert",
    noInvoiceToExport: "Keine Rechnung zum Exportieren",
    importTitle: "Rechnung importieren",
    importHelp: "Wählen Sie eine zuvor exportierte .invoice.json Datei",
    importJSON: "Datei auswählen...",
    importCompatibility: "Kompatibel mit allen exportierten Versionen",
    importErrors: "Validierungsfehler:",
    importContinue: "Möchten Sie trotzdem versuchen zu importieren?",
    importSuccess: "Rechnung erfolgreich importiert",
    importError: "Fehler beim Import:",
    
    perfectModeTooltip: "Diese Funktion erstellt automatisch eine perfekt konforme belgische Rechnung mit:",
    perfectFeature1: "Allen gesetzlich vorgeschriebenen Elementen (Nummer, Datum, MwSt., IBAN...)",
    perfectFeature2: "Realistischen Produkten mit den richtigen MwSt.-Sätzen",
    perfectFeature3: "Exakten Berechnungen (Zwischensummen, MwSt., Bruttosummen)",
    perfectFeature4: "Einem fiktiven aber glaubwürdigen Unternehmen und Kunden",
    perfectFeature5: "Professioneller Unterschrift und Stempel",
    perfectFeature6: "Der Lehrer muss nichts eingeben - alles wird automatisch generiert!",
    
    // Fehler-Modus
    errorMode: "Übungsmodus mit Fehlern",
    errorModeHelp: "Erstellt eine Rechnung mit pädagogischen Fehlern zur Erkennung",
    errorCount: "Anzahl der Fehler",
    errorCountHelp: "Zwischen 1 und 15 Fehlern werden in der Rechnung verteilt",
    errorModeTooltip: "Diese Funktion erstellt eine Rechnung mit absichtlichen Fehlern zum Üben:",
    errorFeature1: "Berechnungsfehler (Zwischensummen, MwSt., Summen falsch)",
    errorFeature2: "Unangemessene MwSt.-Sätze (21% auf Lebensmittel usw.)",
    errorFeature3: "Fehlende gesetzliche Daten (keine USt-IdNr., IBAN...)",
    errorFeature4: "Inkonsistente Einheiten (kg statt Stück, Stunden falsch berechnet)",
    errorFeature5: "Falsche Daten (Rechnung in der Zukunft, Fälligkeit vor Rechnung)",
    errorFeature6: "Produkte/Dienstleistungen inkonsistent mit der Branche",
    errorFeature7: "Negative Mengen oder Preise, verdächtige Beträge",
    errorFeature8: "Fehlende oder falsche gesetzliche Hinweise",
    errorFeature9: "Fehlende oder non-konforme Unterschrift/Stempel",
    errorFeature10: "QR-Code stimmt nicht mit den Daten überein",
    errorFeature11: "Schüler müssen alle Fehler identifizieren und korrigieren!",
    
    logo: "Firmenlogo",
    logoPredefined: "Vordefiniertes Symbol",
    logoUpload: "Mein Logo hochladen",
    logoPrompt: "Beschreibung des zu erstellenden Logos",
    
    company: "Unternehmensinformationen",
    companyName: "Firmenname",
    companyAddress: "Adresse",
    companyZip: "Postleitzahl",
    companyCity: "Stadt",
    companyCountry: "Land",
    companyPhone: "Telefon",
    companyEmail: "E-Mail",
    companySiret: "USt-IdNr.",
    
    client: "Kundeninformationen",
    clientName: "Kundenname",
    clientAddress: "Adresse",
    clientZip: "Postleitzahl",
    clientCity: "Stadt",
    clientCountry: "Land",
    
    invoice: "Rechnungsdetails",
    invoiceNumber: "Rechnungsnummer",
    invoiceDate: "Rechnungsdatum",
    dueDate: "Fälligkeitsdatum",
    paymentMethod: "Zahlungsmethode",
    paymentCash: "Bar",
    paymentCard: "Karte",
    paymentTransfer: "Überweisung",
    paymentCheck: "Scheck",
    
    items: "Artikel / Leistungen",
    addItem: "Artikel hinzufügen",
    removeItem: "Entfernen",
    itemDescription: "Beschreibung",
    itemQuantity: "Menge",
    itemUnitPrice: "Einzelpreis",
    itemTotal: "Gesamt",
    
    subtotal: "Zwischensumme netto",
    vat: "MwSt.",
    vatRate: "MwSt.-Satz",
    vatTotal: "MwSt. gesamt",
    total: "Gesamtsumme brutto",
    
    notes: "Hinweise / Besondere Bedingungen",
    notesPlaceholder: "Zahlungsbedingungen, Rabatte, gesetzliche Hinweise...",
    
    generating: "Wird generiert...",
    generateSuccess: "Rechnung erfolgreich erstellt!",
    generateError: "Fehler beim Erstellen",
    
    required: "Pflichtfeld",
    optional: "Optionales Feld",
    
    preview: "Rechnungsvorschau",
    noPreview: "Füllen Sie das Formular aus und klicken Sie auf 'Erstellen'",
    
    history: "Verlauf",
    noHistory: "Keine Rechnungen im Verlauf",
    loadHistory: "Diese Rechnung laden",
    deleteHistory: "Löschen",
    
    legalNotice: "Pflichtangabe: Rechnung ausschließlich für pädagogische Zwecke erstellt.",
    
    // Signature et Tampon
    signatureStamp: "Unterschrift & Stempel",
    signatureHelp: "Wie verwenden?",
    signatureType: "Validierungstyp",
    sigNone: "Keine",
    sigSignatureOnly: "Nur Unterschrift",
    sigStampOnly: "Nur Stempel",
    sigBoth: "Unterschrift + Stempel",
    signatureSource: "Unterschriftsquelle",
    sigSourceText: "Unterschriftslinie (Text)",
    sigSourceUpload: "Hochgeladenes Bild",
    sigUploadLabel: "Unterschriftsbild",
    sigUploadHelp: "PNG mit transparentem Hintergrund empfohlen",
    sigLabel1: "Linkes Label",
    sigLabel2: "Rechtes Label",
    sigDefaultLabel1: "Zur Annahme, der Lieferant",
    sigDefaultLabel2: "Genehmigt, der Kunde",
    stampText: "Stempeltext",
    stampDefaultText: "BEZAHLT",
    stampColor: "Farbe",
    stampDate: "Datum hinzufügen",
    yes: "Ja",
    no: "Nein",
    stampPosition: "Position",
    stampBottomRight: "Unten rechts",
    stampBottomLeft: "Unten links",
    stampOverTotal: "Über dem Gesamtbetrag",
    signaturePreview: "Vorschau",
    signatureModalTitle: "✍️ Pädagogische Ideen mit Unterschrift & Stempel",
    sigIdeaContractTitle: "Vertragswert",
    sigIdeaContractDesc: "Die Unterschrift macht die Rechnung zu einem bindenden Vertrag. Ohne Unterschrift hat die Rechnung nicht denselben rechtlichen Wert. Schüler lernen die Wichtigkeit der Unterzeichnung.",
    sigIdeaContractExercise: "Übung: 'Ist diese Rechnung ohne Unterschrift gültig?' - Diskutieren Sie rechtlichen Wert und Risiken.",
    sigIdeaPaidTitle: "Buchhaltungszyklus: Rechnung bezahlt",
    sigIdeaPaidDesc: "Der Stempel 'BEZAHLT' mit Datum zeigt an, dass die Rechnung beglichen ist. Dies ist entscheidend zur Vermeidung von Doppelzahlungen. Schüler verstehen den Zyklus: Ausstellung → Empfang → Validierung → Zahlung → Archivierung.",
    sigIdeaPaidExercise: "Übung: Erstellen Sie zwei identische Rechnungen, eine mit 'BEZAHLT' Stempel, eine ohne. Fragen Sie Schüler, welche Zahlung nötig ist.",
    sigIdeaProformaTitle: "📄 Proforma vs endgültige Rechnung",
    sigIdeaProformaDesc: "Eine Proforma-Rechnung (Angebot) ist nicht unterschrieben und trägt oft 'Proforma - Ohne Buchungswert'. Einmal akzeptiert und unterschrieben wird sie zu fester Bestellung und endgültiger Rechnung.",
    sigIdeaProformaExercise: "Übung: Präsentieren Sie 3 Dokumente (Angebot, Bestellung, Rechnung) mit/ohne Unterschriften. Lassen Sie Schüler nach Fortschritt klassifizieren.",
    sigIdeaFraudTitle: "Betrugserkennung",
    sigIdeaFraudDesc: "Eine Rechnung mit verdächtiger Unterschrift (kopiert, schlechter Scan) oder falsch platziertem Stempel kann Fälschung anzeigen. Buchhalter prüfen diese Details.",
    sigIdeaFraudExercise: "Übung: 'Fehler' Modus: generieren Sie Rechnung mit pixelierter Unterschrift oder 'BEZAHLT' Stempel auf falschem Betrag. Schüler müssen Anomalie finden.",
    sigIdeaValidationTitle: "Interner Validierungsprozess",
    sigIdeaValidationDesc: "In einem Unternehmen kann eine Rechnung mehrere Unterschriften benötigen: Teamleiter (Leistungsvalidierung), Chefbuchhalter (Betragsvalidierung), Geschäftsführer (strategische Validierung).",
    sigIdeaValidationExercise: "Übung: Erstellen Sie Rechnung mit mehreren Unterschriftsfeldern. Bitten Sie Schüler, Rollen zuzuweisen und zu erklären, warum jeder unterschreiben muss.",
    sigIdeaProfessionalTitle: "Professionelles Image",
    sigIdeaProfessionalDesc: "Ein personalisierter Stempel mit Logo stärkt visuelle Identität und Glaubwürdigkeit. Schüler entdecken die Bedeutung visueller Kommunikation.",
    sigIdeaProfessionalExercise: "Übung: Vergleichen Sie zwei Rechnungen (eine mit professionellem Stempel, eine ohne). Lassen Sie Schüler notieren, welches Unternehmen mehr Vertrauen inspiriert.",
    
    // Langues
    interfaceLanguageLabel: "Sprache:",
    aboutLink: "Über",
    invoiceLanguage: "Rechnungssprache",
    invoiceLanguageHelp: "Sprache, in der die Rechnung erstellt wird",
    
    // QR Code
    qrCode: "QR Code",
    qrHelp: "Wie verwenden?",
    qrType: "QR Code Typ",
    qrNone: "Keiner",
    qrPayment: "Sofortzahlung (Betrag + IBAN)",
    qrVerification: "Authentizitätsprüfung",
    qrDetails: "Rechnungsdetails (URL)",
    qrContact: "Visitenkarte (vCard)",
    qrCustom: "Benutzerdefiniert (URL oder Text)",
    qrCustomValue: "QR Code Inhalt",
    qrPreview: "QR Code Vorschau",
    qrModalTitle: "📱 Pädagogische Ideen mit QR Code",
    qrIdeaPaymentTitle: "Sofortzahlung",
    qrIdeaPaymentDesc: "Der QR Code enthält alle Zahlungsinformationen (Begünstigter, IBAN, Betrag, Referenz). Schüler können mit dem Handy scannen, um moderne Zahlungen zu verstehen.",
    qrIdeaPaymentExercise: "Übung: Überprüfen Sie, ob der kodierte Betrag mit dem Rechnungstotal übereinstimmt.",
    qrIdeaVerifyTitle: "Authentizitätsprüfung",
    qrIdeaVerifyDesc: "Der QR Code leitet zu einer 'offiziellen Verifizierungsseite' weiter, wo Schüler die Echtheit bestätigen können.",
    qrIdeaVerifyExercise: "Übung: Im 'Rechnung mit Fehlern' Modus funktioniert der QR Code nicht = Zeichen möglichen Betrugs.",
    qrIdeaDetailsTitle: "Rechnungsdetails",
    qrIdeaDetailsDesc: "Der QR Code bietet Zugang zu AGB, Garantiedetails oder vollständiger Bestellhistorie.",
    qrIdeaDetailsExercise: "Übung: Vergleichen Sie QR-Code-Informationen mit der gedruckten Rechnung auf Konsistenz.",
    qrIdeaContactTitle: "Visitenkarte (vCard)",
    qrIdeaContactDesc: "Der QR Code enthält vollständige Firmendaten (Name, Adresse, Telefon, Email). Beim Scannen direkt zu Kontakten hinzufügen.",
    qrIdeaContactExercise: "Übung: Überprüfen Sie, ob alle QR-Kontaktdaten mit dem Rechnungskopf übereinstimmen.",
    qrIdeaMathTitle: "Mathematik & Berechnung",
    qrIdeaMathDesc: "Der QR Code kann die Lösung einer Berechnung oder Zwischenschritte enthalten.",
    qrIdeaMathExercise: "Übung: Schüler berechnen MwSt., scannen QR und prüfen ihre Antwort. Perfekt zur Selbsteinschätzung!",
    qrIdeaSecureTitle: "Sicherheit & Betrug",
    qrIdeaSecureDesc: "In einer Betrugserkennungsübung kann der QR Code Hinweise oder widersprüchliche Informationen enthalten.",
    qrIdeaSecureExercise: "Übung: 'Ist diese Rechnung echt?' - Analysieren Sie QR, vergleichen Daten, identifizieren Anomalien.",
    
    // IBAN/BIC
    companyIban: "IBAN",
    companyBic: "BIC/SWIFT",
    
    // Éléments obligatoires
    requiredElements: "Pflichtangaben (Belgien)",
    showHide: "Anzeigen/Verbergen",
    req1: "Aufeinanderfolgende Rechnungsnummer",
    req2: "Ihre Angaben (Name, Adresse, USt-IdNr., Steuernummer)",
    req3: "Kundenangaben (Name, Adresse, USt-IdNr.)",
    req4: "Ausstellungsdatum und Leistungsdatum",
    req5: "Bezeichnung der Ware/Dienstleistung",
    req6: "Einzelpreis und Menge",
    req7: "Betrag ohne MwSt.",
    req8: "MwSt.-Satz (6%, 12% oder 21%)",
    req9: "Gesetzlicher Hinweis bei MwSt.-Befreiung",
    req10: "Gesamtbetrag einschließlich MwSt.",
    requirementsNote: "💡 Empfohlen: Fälligkeitsdatum, IBAN/BIC, E-Mail, AGB",
    
    // Mentions légales TVA
    vatMention: "MwSt.-Rechtshinweis (bei Befreiung)",
    vatExemptionType: "Art der Befreiung",
    vatNone: "Keine (MwSt. anwendbar)",
    vatFranchise: "Kleinunternehmerregelung (Umsatz < €25.000)",
    vatImmobiler: "Immobilienarbeiten B2B (0%)",
    vatServiceB2B: "B2B-Dienstleistungen innerhalb EU (0%)",
    vatBienB2B: "Waren innerhalb EU (0%)",
    vatExport: "Export außerhalb EU (0%)",
    vatMentionPreview: "Hinweis, der auf der Rechnung erscheint",
    
    // Produits prédéfinis
    predefinedProduct: "Vordefiniertes Produkt des Sektors",
    selectProduct: "-- Produkt auswählen --",
    productHelp: "Wählen Sie ein Produkt oder fügen Sie manuell einen Artikel hinzu",
    addPredefinedProduct: "Dieses Produkt hinzufügen",
    unitPrice: "Einzelpreis",
    quantity: "Menge",
    total: "Gesamt",
    
    // Conditions générales
    termsConditions: "Allgemeine Geschäftsbedingungen",
    resetDefault: "Standard",
    termsHelp: "Diese Bedingungen erscheinen unten auf der Rechnung",
    
    // Mode Lot (DE)
    batchMode: "Batch-Modus",
    batchModeDescription: "Generieren Sie bis zu 50 verschiedene Rechnungen auf einmal für Ihre Bewertungen oder Gruppenübungen.",
    batchConfigure: "Konfigurieren",
    batchCount: "Anzahl der Rechnungen",
    batchCountHelp: "Zwischen 2 und 50 Rechnungen",
    batchModeLabel: "Modus",
    batchModePerfect: "Korrekte Rechnungen",
    batchModeErrors: "Mit Fehlern (Übung)",
    batchGenerate: "Batch generieren",
    batchGenerated: "Rechnungen generiert",
    batchNumber: "Batch",
    batchTotal: "Batch-Gesamtsumme",
    batchInvoices: "Batch-Rechnungen",
    
    // Synthèse des erreurs (DE)
    errorSynthesis: "Fehlerübersicht",
    errorSynthesisPrint: "Übersicht drucken",
    errorSynthesisClose: "Schließen",
    errorSynthesisSeverityHigh: "Schwerer Fehler",
    errorSynthesisSeverityMedium: "Mittlerer Fehler",
    errorSynthesisInvoice: "Rechnung",
    errorSynthesisError: "Fehler",
    errorSynthesisErrors: "Fehler",
    noErrorsToShow: "Keine Fehler für diese Rechnung anzuzeigen",
    
    // Types d'erreurs (DE)
    errorTypeCalculation: "Berechnungsfehler in Zeile {line}",
    errorTypeVatTotal: "MwSt-Berechnungsfehler",
    errorTypeVatRate: "Falscher MwSt-Satz in Zeile {line}",
    errorTypeDateSame: "Inkonsistentes Fälligkeitsdatum",
    errorTypeDateShort: "Zu kurze Zahlungsfrist",
    errorTypeDatePast: "Fälligkeitsdatum in der Vergangenheit",
    errorTypeMissingClientVat: "MwSt-Nummer des Kunden fehlt",
    errorTypeMissingClientName: "Kundenname fehlt",
    errorTypeMissingClientAddress: "Kundenadresse fehlt",
    errorTypeMissingInvoiceNumber: "Rechnungsnummer fehlt",
    errorTypeMissingInvoiceDate: "Rechnungsdatum fehlt",
    
    // Détails des erreurs (DE)
    errorDetailVatTotal: "Der angezeigte MwSt-Betrag ({shown}) ist falsch. Der korrekte Betrag sollte {expected} sein. Die Gesamtsumme ist daher ebenfalls falsch.",
    errorDetailVatRate: "Das Produkt \"{product}\" verwendet einen MwSt-Satz von {wrongRate}% statt {correctRate}%. {explanation}",
    errorDetailDateSame: "Das Fälligkeitsdatum ({dueDate}) ist identisch mit dem Rechnungsdatum ({invoiceDate}). Eine normale Frist sollte mindestens 30 Tage nach dem Rechnungsdatum liegen.",
    errorDetailDateShort: "Das Fälligkeitsdatum ({dueDate}) erlaubt nur 7 Tage. Standard-Zahlungsfristen sind normalerweise 30, 45 oder 60 Tage.",
    errorDetailDatePast: "Das Fälligkeitsdatum ({dueDate}) liegt vor dem Rechnungsdatum ({invoiceDate}). Das ist unmöglich, da die Rechnung sofort überfällig wäre.",
    errorDetailMissingClientVat: "Die MwSt-Nummer des Kunden fehlt, obwohl der Kunde ein Unternehmen ist ({client}). Für B2B-Rechnungen ist diese Nummer Pflicht.",
    errorDetailMissingClientName: "Der Kundenname fehlt auf der Rechnung. Jede Rechnung muss die vollständige Identität des Kunden enthalten.",
    errorDetailMissingClientAddress: "Die Adresse des Kunden fehlt. Eine Rechnung muss aus steuerlichen Gründen die vollständige Adresse des Kunden angeben.",
    errorDetailMissingInvoiceNumber: "Die Rechnungsnummer fehlt. Jede Rechnung muss eine eindeutige fortlaufende Nummer haben.",
    errorDetailMissingInvoiceDate: "Das Rechnungsdatum fehlt. Das Ausstellungsdatum ist erforderlich, um die Buchungsperiode zu bestimmen.",
    errorDetailCalculation: "Die angezeigte Summe ({shown}) stimmt nicht mit der korrekten Berechnung überein: {qty} × {unitPrice} = {expected}",
    vatExplanationHigh: "Dieser Satz ist für Luxusprodukte reserviert, nicht für Produkte des täglichen Bedarfs.",
    vatExplanationLow: "Dieser ermäßigte Satz gilt für Produkte des täglichen Bedarfs (Lebensmittel, Bücher...).",
    
    // Modal historique (DE)
    historyViewInvoice: "Rechnung ansehen",
    historyViewBatch: "Batch-Rechnungen ansehen",
    historyDownloadPDF: "PDF herunterladen",
    historyDelete: "Löschen",
    historyErrorSynthesis: "Fehlerübersicht",
    
    // Boutons généraux (DE)
    btnCancel: "Abbrechen",
    btnGenerate: "Generieren",
    btnDelete: "Löschen",
    btnView: "Ansehen",
    btnErrorSynthesis: "Fehlerübersicht",
    
    // Messages Toast (DE)
    toastGeneratingInvoice: "Rechnung wird erstellt...",
    toastInvoiceGenerated: "Rechnung erfolgreich erstellt!",
    toastGenerationError: "Fehler beim Erstellen",
    toastExerciseMode: "Übungsmodus - Erstellen...",
    toastInvoiceWithErrors: "Rechnung mit {count} Fehler(n) erstellt!",
    toastGeneratingBatch: "Batch-Rechnungen werden erstellt...",
    toastBatchGenerated: "{count} Rechnungen in Batch {batchNumber} erstellt!",
    toastDemoMode: "Demo-Modus - Vollständige Funktionalität mit Daten verfügbar",
    toastCustomGenerated: "Benutzerdefinierte Rechnung erstellt!",
    toastNoInvoice: "Keine Rechnung zum Exportieren",
    toastGeneratingPDF: "PDF wird erstellt...",
    toastPDFDownloaded: "PDF heruntergeladen!",
    toastPDFError: "Fehler beim PDF-Export",
    toastGeneratingBatchPDF: "PDF für Batch von {count} Rechnungen wird erstellt...",
    toastBatchPDFDownloaded: "PDF von Batch {batchNumber} heruntergeladen!",
    toastBatchPDFError: "Fehler beim PDF-Export des Batches",
    toastJSONDownloaded: "JSON heruntergeladen!",
    toastNoInvoiceEdit: "Keine Rechnung zum Bearbeiten",
    toastBatchEditError: "Bearbeiten nicht verfügbar für Batch-Rechnungen",
    toastInvoiceDeleted: "Rechnung gelöscht",
    toastHistoryCleared: "Verlauf gelöscht",
    toastDarkMode: "Dunkelmodus aktiviert",
    toastLightMode: "Hellmodus aktiviert",
    toastLanguageChanged: "Sprache: {lang}",
    toastSettingsSaved: "Einstellungen gespeichert",

    
    // Batch et synthèse (DE)
    batchContainsErrors: "Enthält Fehler",
    batchInvoicesLabel: "Rechnungen",
    batchInvoiceLabel: "Rechnung",
    batchErrorsLabel: "Fehler",
    batchOf: "Batch von",
    batchTotalLabel: "Gesamt",
    batchCount: "Anzahl Rechnungen",
    batchDate: "Erstellungsdatum",
    batchTotalAmount: "Gesamtbetrag",
    
    // Export PDF (DE)
    pdfIssuedInBelgium: "In Belgien ausgestellte Rechnung",
    pdfContainsErrors: "⚠️ Dieser Batch enthält {count} absichtliche Fehler",
    pdfErrorSynthesis: "Fehlerübersicht Seite",
    pdfErrorOnInvoice: "{description} (Rechnung {invoiceNumber})",
    
    // Placeholders (DE)
    placeholderArchiveName: "Z.B: Rechnung Übung März 2025",
    
    // Navigation (DE)
    navCreate: "Erstellen",
    navHistory: "Verlauf",
    navSettings: "Einstellungen",
    navAbout: "Über",
    langFr: "Français",
    langNl: "Nederlands",
    langDe: "Deutsch",
    langEn: "English",
    heroTitle: "Pädagogischer Rechnungsgenerator",
    heroDescription: "Erstellen Sie realistische und personalisierte Rechnungen für Ihre Buchhaltungs-, Mathematik- oder Wirtschaftsübungen. Mehrsprachig, für alle Schulstufen geeignet und den belgischen Rechnungsstellungsregeln entsprechend.",
    heroCta: "Beginnen Sie zu erstellen",
    heroAbout: "Mehr erfahren",
    heroBadge: "Kostenloses pädagogisches Tool",
    
    // Modes de génération (DE)
    modeQuick: "Schnellmodus",
    modeQuickDesc: "Generieren Sie eine perfekte Rechnung mit einem Klick. Ideal für Standardübungen mit realistischen Daten.",
    modeExercise: "Übungsmodus",
    modeExerciseDesc: "Erstellen Sie Rechnungen mit absichtlichen Fehlern, um Schüler in der kritischen Analyse zu schulen.",
    modeBatch: "Batch-Modus",
    modeBatchDesc: "Generieren Sie bis zu 50 verschiedene Rechnungen auf einmal für Ihre Bewertungen oder Gruppenübungen.",
    modeCustom: "Anpassen",
    modeCustomDesc: "Kontrollieren Sie jeden Aspekt: Unternehmen, Kunde, Produkte und Exportoptionen.",
    
    // Boutons (DE)
    generate: "Generieren",
    configure: "Konfigurieren",
    customize: "Anpassen",
    cancel: "Abbrechen",
    save: "Speichern",
    close: "Schließen",
    edit: "Bearbeiten",
    export: "Exportieren",
    
    // Édition de facture (DE)
    editInvoiceTitle: "Rechnung bearbeiten",
    archiveName: "Name für die Rechnungsarchivierung",
    archiveNameHint: "Geben Sie einen benutzerdefinierten Namen ein, um diese Rechnung im Verlauf leicht wiederzufinden",
    editEmitter: "Absender",
    editClient: "Kunde",
    editDates: "Daten",
    editLines: "Rechnungszeilen",
    editTotals: "Summen",
    addLine: "Hinzufügen",
    itemDescription: "Beschreibung",
    itemQuantity: "Menge",
    itemUnitPrice: "Stückpreis",
    itemVatRate: "MwSt. %",
    itemTotal: "Gesamt",
    companyName: "Name",
    companyVat: "MwSt.",
    companyAddress: "Adresse",
    clientName: "Name",
    clientVat: "MwSt.",
    clientAddress: "Adresse",
    subtotal: "Zwischensumme netto",
    vatAmount: "MwSt.-Betrag",
    total: "Gesamtsumme brutto",
    saveEdit: "Änderungen speichern",
    editSaved: "Änderungen erfolgreich gespeichert",
    editedBadge: "Bearbeitet",
    editHistory: "Bearbeiten",
    
    // Workflow (DE)
    stepConfigure: "Konfigurieren",
    stepConfigureDesc: "Wählen Sie Ihre Optionen",
    stepPreview: "Vorschau",
    stepPreviewDesc: "Rechnung prüfen",
    stepGenerate: "Generieren",
    stepGenerateDesc: "Als PDF exportieren",
    
    // Paramètres modal exercice (DE)
    modalExerciseTitle: "Übungsmodus konfigurieren",
    errorCount: "Anzahl der Fehler",
    error1: "1 Fehler",
    error2: "2 Fehler",
    error3: "3 Fehler",
    error4: "4 Fehler",
    error5: "5 Fehler",
    errorTypes: "Fehlertypen",
    errorCalc: "Berechnung",
    errorVat: "MwSt.",
    errorDate: "Datum",
    errorMissing: "Fehlendes Feld",
    errorMaxReached: "Maximum erreicht",
    errorMaxReachedMessage: "Mit den ausgewählten Typen ist das Maximum {max} Fehler. Bitte reduzieren Sie die Anzahl oder fügen Sie weitere Fehlertypen hinzu.",
    
    // Paramètres modal lot (DE)
    modalBatchTitle: "Batch-Modus konfigurieren",
    batchCount: "Anzahl der Rechnungen",
    batchHint: "Zwischen 2 und 50 Rechnungen",
    batchMode: "Modus",
    batchModeCorrect: "Korrekte Rechnungen",
    batchModeError: "Mit Fehlern (Übung)",
    generateBatch: "Batch generieren",
    
    // Paramètres modal custom (DE)
    modalCustomTitle: "Rechnung konfigurieren",
    company: "Unternehmen",
    client: "Kunde",
    random: "Zufällig",
    retail: "Privatkunde",
    business: "Unternehmen",
    lineCount: "Anzahl der Zeilen",
    mode: "Modus",
    invoiceCorrect: "Korrekte Rechnung",
    invoiceWithErrors: "Mit Fehlern",
    invoiceLanguage: "Rechnungssprache",
    
    // Synthèse des erreurs (DE)
    errorSynthesisTitle: "Fehlerübersicht",
    printSynthesis: "Übersicht drucken",
    
    // Preview section (DE)
    previewTitle: "Rechnungsvorschau",
    noInvoiceTitle: "Keine Rechnung generiert",
    noInvoiceDesc: "Wählen Sie einen Modus oben und klicken Sie auf Generieren, um eine Rechnung zu erstellen.",
    
    // Labels de facture (DE)
    errorBadge: "Diese Rechnung enthält absichtliche Fehler zum Erkennen",
    clientIndividual: "Privatkunde",
    invTitle: "RECHNUNG",
    invNumber: "Nr.",
    invDate: "Rechnungsdatum",
    invOperationDate: "Operationdatum",
    invDueDate: "Fälligkeitsdatum",
    invEmitter: "ABSENDER",
    invClient: "KUNDE",
    invDescription: "Beschreibung",
    invQty: "Menge",
    invUnitPrice: "Preis",
    invVat: "MwSt.",
    invTotal: "Gesamt",
    invSubtotal: "Zwischensumme netto",
    invVatTotal: "MwSt. Gesamt",
    invGrandTotal: "GESAMT BRUTTO",
    invPaymentTerms: "Zahlung innerhalb",
    invDays: "Tagen",
    invDueDateLabel: "Fälligkeitsdatum:",
    invVatMention: "MwSt. gemäß geltender Gesetzgebung",
    invId: "Nr.",
    invVatBreakdown: "MwSt. {rate}% (Basis {base} €)",
    
    // Pages (DE)
    aboutTitle: "Über",
    aboutDesc: "Ein kostenloses pädagogisches Tool für Lehrer und Schüler.",
    aboutMission: "Unsere Mission",
    aboutMissionText: "Invoice Factory ist aus dem Bedarf an einfachen und effizienten Tools für den Buchhaltungs- und angewandten Mathematikunterricht entstanden.",
    aboutOpenSource: "Open Source",
    aboutOpenSourceText: "Dieses Projekt ist frei und Open Source unter GPL v3 Lizenz. Jeder kann es frei nutzen, anpassen und teilen.",
    
    // Features section (DE)
    aboutFeatures: "Funktionen",
    feat4LangsTitle: "4 Sprachen",
    feat4LangsDesc: "Französisch, Niederländisch, Deutsch und Englisch für den internationalen Gebrauch.",
    feat20SectorsTitle: "20+ Sektoren",
    feat20SectorsDesc: "Bäckerei, Restaurant, IT, Bau, Gesundheit und mehr.",
    featExerciseModeTitle: "Übungsmodus",
    featExerciseModeDesc: "Generieren Sie Rechnungen mit absichtlichen Fehlern für Ihre Übungen.",
    featBelgianRulesTitle: "Konform mit belgischen Regeln",
    featBelgianRulesDesc: "Entspricht der geltenden belgischen Gesetzgebung: Pflichtangaben, MwSt., Fälligkeiten und steuerliche Aufteilung.",
    featPDFExportTitle: "PDF-Export",
    featPDFExportDesc: "Laden Sie Ihre Rechnungen im PDF-Format zum Drucken herunter.",
    featBatchModeTitle: "Batch-Modus",
    featBatchModeDesc: "Generieren Sie bis zu 50 verschiedene Rechnungen auf einmal.",
    featPWATitle: "PWA",
    featPWADesc: "Installieren Sie die Anwendung auf Ihrem Gerät und nutzen Sie sie offline.",
    
    // Stats (DE)
    statLangs: "Sprachen",
    statSectors: "Sektoren",
    statInvoices: "Rechnungen",
    statPrice: "Kostenlos",
    
    // License (DE)
    aboutLicense: "Lizenz",
    aboutLicenseText: "Dieses Projekt steht unter der GNU GPL v3 Lizenz. Sie sind frei, es zu nutzen, zu modifizieren und zu verteilen.",
    aboutLicenseLink: "Lizenz ansehen",
    
    // Settings page (DE)
    settingsTabGeneral: "Allgemein",
    settingsTabInvoice: "Rechnung",
    settingsCardGeneralTitle: "Allgemeine Einstellungen",
    settingsCardGeneralDesc: "Konfigurieren Sie die Oberflächen- und Benutzererfahrungseinstellungen.",
    settingsDefaultLang: "Standardsprache",
    settingsTheme: "Thema",
    settingsThemeLight: "Hell",
    settingsThemeDark: "Dunkel",
    settingsThemeAuto: "Auto",
    settingsAutoSave: "Rechnungen automatisch im Verlauf speichern",
    settingsSaveBtn: "Speichern",
    settingsCardInvoiceTitle: "Rechnungseinstellungen",
    settingsCardInvoiceDesc: "Passen Sie die Standardoptionen für die Rechnungsgenerierung an.",
    settingsCurrency: "Standardwährung",
    settingsVat: "Standard-Mehrwertsteuer (%)",
    settingsDateFormat: "Datumsformat",
    settingsInvoiceLang: "Rechnungssprache",
    settingsInvoiceLangHint: "Standardsprache für generierte Rechnungen",
    
    settingsTitle: "Einstellungen",
    settingsDesc: "Passen Sie Ihre Erfahrung an und konfigurieren Sie die Generierungsoptionen.",
    historyTitle: "Verlauf",
    historyDesc: "Sehen Sie Ihre zuvor generierten Rechnungen an und laden Sie sie herunter.",
    historyClearAll: "Alles löschen",
    historyEmptyTitle: "Keine Rechnungen im Verlauf",
    historyEmptyDesc: "Von Ihnen generierte Rechnungen erscheinen hier für einen schnellen Zugriff später.",
    historyCreateBtn: "Rechnung erstellen",
    historyModalTitle: "Rechnungsvorschau",
    
    // Footer (DE)
    footerHome: "Startseite",
    footerHistory: "Verlauf",
    footerSettings: "Einstellungen",
    footerAbout: "Über",
    footerMadeWith: "Erstellt mit",
    footerBy: "von",
    footerPrivacy: "Datenschutz",
    footerLicense: "Lizenz",
    installAppBtn: "Installieren",
    installAppTitle: "App installieren",
    themeToggle: "Thema ändern",
    
    // Privacy Policy (DE)
    privacyTitle: "Datenschutzerklärung",
    privacyDesc: "Ihre Privatsphäre ist unsere Priorität. Erfahren Sie, wie wir Ihre Daten schützen.",
    privacyPromiseTitle: "Unser Versprechen",
    privacyPromiseText: "Invoice Factory respektiert Ihre Privatsphäre. Wir sammeln keine persönlichen Daten. Alle Ihre Rechnungen und Einstellungen bleiben ausschließlich auf Ihrem Gerät.",
    privacyDataTitle: "Gesammelte Daten",
    privacyNoneTitle: "Keine persönlichen Daten",
    privacyNoneText: "Wir sammeln keine identifizierbaren persönlichen Informationen. Keine E-Mail, kein Name, keine Telefonnummer.",
    privacyLocalTitle: "100% lokale Speicherung",
    privacyLocalText: "Ihre Rechnungen und Einstellungen werden nur im localStorage Ihres Browsers gespeichert, ausschließlich auf Ihrem Gerät.",
    privacyNoServerTitle: "Kein Server",
    privacyNoServerText: "Unsere Anwendung hat kein Backend. Es werden keine Daten an externe Server übertragen.",
    privacyNoTrackTitle: "Kein Tracking",
    privacyNoTrackText: "Wir verwenden keine Tracking-Cookies, kein Google Analytics, keine Analyse-Tools von Drittanbietern.",
    privacyTechTitle: "Technische Details",
    privacyStorageTitle: "Lokale Speicherung (localStorage)",
    privacyStorageDesc: "Wir verwenden den Browser localStorage um zu speichern:",
    privacyStorage1: "Ihre Einstellungen (Thema, Sprache)",
    privacyStorage2: "Ihre Rechnungshistorie (maximal 20 Einträge)",
    privacyStorage3: "Der Installationsstatus der App (PWA)",
    privacyStorageNote: "Diese Daten verlassen niemals Ihr Gerät und stehen vollständig unter Ihrer Kontrolle.",
    privacyRightsTitle: "Ihre Rechte",
    privacyRightDeleteTitle: "Recht auf Löschung",
    privacyRightDeleteText: "Sie können Ihren Verlauf jederzeit auf der Verlauf-Seite löschen oder indem Sie den localStorage Ihres Browsers leeren.",
    privacyRightAccessTitle: "Recht auf Zugang",
    privacyRightAccessText: "Alle Ihre Daten sind direkt in der Anwendung sichtbar. Sie können Ihre Rechnungen jederzeit als JSON exportieren.",
    privacyRightPortabilityTitle: "Recht auf Übertragbarkeit",
    privacyRightPortabilityText: "Exportieren Sie Ihre Rechnungen im JSON- oder PDF-Format und nehmen Sie sie mit, wohin Sie wollen.",
    privacyContactTitle: "Kontakt",
    privacyContactText: "Bei Fragen zum Datenschutz können Sie uns kontaktieren:",
    privacyUpdate: "Letzte Aktualisierung: 12. Februar 2026",
    
    // RGPD Section (DE)
    aboutRGPDTitle: "DSGVO-konform",
    aboutRGPDDesc: "Ihre Privatsphäre ist unsere Priorität. Invoice Factory sammelt keine persönlichen Daten und speichert alle Ihre Informationen ausschließlich auf Ihrem Gerät.",
    aboutRGPDPoint1: "Keine persönlichen Daten gesammelt",
    aboutRGPDPoint2: "100% lokale Speicherung",
    aboutRGPDPoint3: "Keine Tracking-Cookies",
    aboutRGPDButton: "Mehr erfahren"
  },
  
  en: {
    title: "Educational Invoice Generator",
    subtitle: "Create sample invoices for your exercises",
    generate: "Generate Invoice",
    download: "Download PDF",
    print: "Print",
    reset: "Reset",
    
    settings: "Settings",
    language: "Language",
    schoolLevel: "School Level",
    
    levelLower: "Lower Secondary (11-14 years)",
    levelUpper: "Upper Secondary (15-18 years)",
    levelHigher: "Higher Education (18+ years)",
    
    sector: "Business Sector",
    sectorPlaceholder: "Select or enter a sector",
    sectorCustom: "Other (manual entry)",
    sectorCustomLabel: "Custom sector name",
    
    bakery: "Bakery-Pastry",
    restaurant: "Restaurant-Café",
    retail: "Retail Store",
    it: "IT-Technology",
    consulting: "Consulting-Advisory",
    construction: "Construction-Building",
    health: "Health-Medical",
    education: "Education-Training",
    automotive: "Automotive-Repair",
    beauty: "Beauty-Hair Salon",
    agriculture: "Agriculture-Livestock",
    arts: "Arts-Culture",
    finance: "Finance-Insurance",
    legal: "Legal-Notary",
    tourism: "Tourism-Hotel",
    transport: "Transport-Logistics",
    energy: "Energy-Environment",
    sports: "Sports-Leisure",
    realEstate: "Real Estate",
    
    generationOptions: "Generation Options",
    invoiceType: "Document Type",
    typeInvoice: "Invoice",
    typeQuote: "Quote",
    typeOrder: "Purchase Order",
    typeExpense: "Expense Report",
    
    // Perfect mode
    perfectMode: "Perfect Auto-Generation",
    perfectModeHelp: "Automatically generates a complete and compliant invoice without errors",
    quickGenerate: "Generate My Perfect Invoice",
    quickErrorGenerate: "Generate Invoice with Errors",
    
    // Edit and Import/Export
    editInvoice: "Edit",
    editHistory: "Edit",
    editLoaded: "Invoice loaded for editing",
    exportJSON: "Export JSON",
    exportHistory: "Export",
    exportSuccess: "Invoice exported successfully",
    noInvoiceToExport: "No invoice to export",
    importTitle: "Import Invoice",
    importHelp: "Select a previously exported .invoice.json file",
    importJSON: "Choose file...",
    importCompatibility: "Compatible with all exported versions",
    importErrors: "Validation errors:",
    importContinue: "Do you want to try importing anyway?",
    importSuccess: "Invoice imported successfully",
    importError: "Import error:",
    
    perfectModeTooltip: "This function automatically generates a perfectly compliant Belgian invoice with:",
    perfectFeature1: "All legally required elements (number, date, VAT, IBAN...)",
    perfectFeature2: "Realistic products with correct VAT rates",
    perfectFeature3: "Exact calculations (subtotals, VAT, totals including VAT)",
    perfectFeature4: "A fictional but credible company and client",
    perfectFeature5: "Professional signature and stamp",
    perfectFeature6: "The teacher doesn't need to enter anything - everything is generated automatically!",
    
    // Error mode
    errorMode: "Exercise Mode with Errors",
    errorModeHelp: "Generates an invoice with pedagogical errors to detect",
    errorCount: "Number of errors",
    errorCountHelp: "Between 1 and 15 errors will be distributed throughout the invoice",
    errorModeTooltip: "This function generates an invoice with intentional errors for student practice:",
    errorFeature1: "Calculation errors (subtotals, VAT, totals incorrect)",
    errorFeature2: "Inappropriate VAT rates (21% on food, etc.)",
    errorFeature3: "Missing legal data (no VAT number, IBAN...)",
    errorFeature4: "Inconsistent units (kg instead of piece, hours miscalculated)",
    errorFeature5: "Incorrect dates (invoice dated in the future, due date before invoice)",
    errorFeature6: "Products/services inconsistent with business sector",
    errorFeature7: "Negative quantities or prices, suspicious amounts",
    errorFeature8: "Missing or incorrect legal mentions",
    errorFeature9: "Missing or non-compliant signature/stamp",
    errorFeature10: "QR code not matching the data",
    errorFeature11: "Students must identify and correct all errors!",
    
    logo: "Company Logo",
    logoPredefined: "Predefined Icon",
    logoUpload: "Upload my logo",
    logoPrompt: "Description of logo to generate",
    
    company: "Company Information",
    companyName: "Company Name",
    companyAddress: "Address",
    companyZip: "Postal Code",
    companyCity: "City",
    companyCountry: "Country",
    companyPhone: "Phone",
    companyEmail: "Email",
    companySiret: "VAT Number",
    
    client: "Client Information",
    clientName: "Client Name",
    clientAddress: "Address",
    clientZip: "Postal Code",
    clientCity: "City",
    clientCountry: "Country",
    
    invoice: "Invoice Details",
    invoiceNumber: "Invoice Number",
    invoiceDate: "Invoice Date",
    dueDate: "Due Date",
    paymentMethod: "Payment Method",
    paymentCash: "Cash",
    paymentCard: "Card",
    paymentTransfer: "Bank Transfer",
    paymentCheck: "Check",
    
    items: "Items / Services",
    addItem: "Add Item",
    removeItem: "Remove",
    itemDescription: "Description",
    itemQuantity: "Qty",
    itemUnitPrice: "Unit Price",
    itemTotal: "Total",
    
    subtotal: "Subtotal excl. VAT",
    vat: "VAT",
    vatRate: "VAT Rate",
    vatTotal: "Total VAT",
    total: "Total incl. VAT",
    
    notes: "Notes / Special Conditions",
    notesPlaceholder: "Payment terms, discounts, legal mentions...",
    
    generating: "Generating...",
    generateSuccess: "Invoice generated successfully!",
    generateError: "Generation error",
    
    required: "Required field",
    optional: "Optional field",
    
    preview: "Invoice Preview",
    noPreview: "Fill in the form and click 'Generate'",
    
    history: "History",
    noHistory: "No invoices in history",
    loadHistory: "Load this invoice",
    deleteHistory: "Delete",
    
    legalNotice: "Mandatory mention: Invoice generated for educational purposes only.",
    
    // Signature et Tampon
    signatureStamp: "Signature & Stamp",
    signatureHelp: "How to use?",
    signatureType: "Validation type",
    sigNone: "None",
    sigSignatureOnly: "Signature only",
    sigStampOnly: "Stamp only",
    sigBoth: "Signature + Stamp",
    signatureSource: "Signature source",
    sigSourceText: "Signature line (text)",
    sigSourceUpload: "Uploaded image",
    sigUploadLabel: "Signature image",
    sigUploadHelp: "PNG with transparent background recommended",
    sigLabel1: "Left label",
    sigLabel2: "Right label",
    sigDefaultLabel1: "For receipt, the supplier",
    sigDefaultLabel2: "Approved, the customer",
    stampText: "Stamp text",
    stampDefaultText: "PAID",
    stampColor: "Color",
    stampDate: "Add date",
    yes: "Yes",
    no: "No",
    stampPosition: "Position",
    stampBottomRight: "Bottom right",
    stampBottomLeft: "Bottom left",
    stampOverTotal: "Over total",
    signaturePreview: "Preview",
    signatureModalTitle: "✍️ Educational ideas with Signature & Stamp",
    sigIdeaContractTitle: "Contractual value",
    sigIdeaContractDesc: "The signature transforms the invoice into a binding contract. Without signature, the invoice does not have the same legal value. Students learn the importance of signing important documents.",
    sigIdeaContractExercise: "Exercise: 'Is this invoice valid without signature?' - Discuss legal value and risks.",
    sigIdeaPaidTitle: "Accounting cycle: Invoice paid",
    sigIdeaPaidDesc: "The 'PAID' stamp with date indicates the invoice has been settled. This is crucial to avoid double payments. Students understand the cycle: issuance → receipt → validation → payment → archiving.",
    sigIdeaPaidExercise: "Exercise: Create two identical invoices, one with 'PAID' stamp and one without. Ask students which one needs payment.",
    sigIdeaProformaTitle: "📄 Proforma vs definitive invoice",
    sigIdeaProformaDesc: "A proforma invoice (quote) is not signed and often carries 'Proforma - No accounting value'. Once accepted and signed, it becomes firm order then definitive invoice.",
    sigIdeaProformaExercise: "Exercise: Present 3 documents (quote, order, invoice) with/without signatures. Have students classify according to commercial process progress.",
    sigIdeaFraudTitle: "Fraud detection",
    sigIdeaFraudDesc: "An invoice with suspicious signature (copied, poor scan) or misplaced stamp may indicate forgery. Accountants check these details.",
    sigIdeaFraudExercise: "Exercise: 'Errors' mode: generate invoice with pixelated signature or 'PAID' stamp on incorrect amount. Students must identify the anomaly.",
    sigIdeaValidationTitle: "Internal validation process",
    sigIdeaValidationDesc: "In a company, an invoice may require multiple signatures: team leader (service validation), chief accountant (amount validation), CEO (strategic validation).",
    sigIdeaValidationExercise: "Exercise: Create invoice with multiple signature spaces. Ask students to assign roles and explain why each must sign.",
    sigIdeaProfessionalTitle: "Professional image",
    sigIdeaProfessionalDesc: "A personalized stamp with logo reinforces visual identity and credibility. Students discover the importance of visual communication in business documents.",
    sigIdeaProfessionalExercise: "Exercise: Compare two invoices (one with professional stamp, one without). Have students note which company inspires more confidence and why.",
    
    // Langues
    interfaceLanguageLabel: "Language:",
    aboutLink: "About",
    invoiceLanguage: "Invoice language",
    invoiceLanguageHelp: "Language in which the invoice will be written",
    
    // QR Code
    qrCode: "QR Code",
    qrHelp: "How to use?",
    qrType: "QR Code Type",
    qrNone: "None",
    qrPayment: "Instant payment (amount + IBAN)",
    qrVerification: "Authenticity verification",
    qrDetails: "Invoice details (URL)",
    qrContact: "Business card (vCard)",
    qrCustom: "Custom (URL or text)",
    qrCustomValue: "QR Code content",
    qrPreview: "QR Code preview",
    qrModalTitle: "📱 Educational ideas with QR Code",
    qrIdeaPaymentTitle: "Instant payment",
    qrIdeaPaymentDesc: "The QR code contains all payment information (beneficiary, IBAN, amount, reference). Students can scan with their phone to understand modern payments like Payconiq or contactless.",
    qrIdeaPaymentExercise: "Exercise: Verify that the encoded amount matches the invoice total.",
    qrIdeaVerifyTitle: "Authenticity verification",
    qrIdeaVerifyDesc: "The QR code redirects to an 'official verification' page where students can confirm the invoice is authentic and not forged.",
    qrIdeaVerifyExercise: "Exercise: In 'invoice with errors' mode, the QR code may not work = sign of potential fraud.",
    qrIdeaDetailsTitle: "Invoice details",
    qrIdeaDetailsDesc: "The QR code provides access to terms and conditions, warranty details, or complete order history.",
    qrIdeaDetailsExercise: "Exercise: Compare QR code information with the printed invoice to check consistency.",
    qrIdeaContactTitle: "Business card (vCard)",
    qrIdeaContactDesc: "The QR code contains complete company details (name, address, phone, email). Scan to directly add to contacts.",
    qrIdeaContactExercise: "Exercise: Verify that all QR contact details match the invoice header information.",
    qrIdeaMathTitle: "Mathematics & Calculation",
    qrIdeaMathDesc: "The QR code can contain the solution to a calculation or intermediate steps of a problem.",
    qrIdeaMathExercise: "Exercise: Students calculate VAT, scan QR and check their answer. Perfect for self-assessment!",
    qrIdeaSecureTitle: "Security & Fraud",
    qrIdeaSecureDesc: "In a fraud detection exercise, the QR code may contain clues or contradictory information.",
    qrIdeaSecureExercise: "Exercise: 'Is this invoice authentic?' - Analyze QR, compare data, identify anomalies.",
    
    // IBAN/BIC
    companyIban: "IBAN",
    companyBic: "BIC/SWIFT",
    
    // Éléments obligatoires
    requiredElements: "Required Elements (Belgium)",
    showHide: "Show/Hide",
    req1: "Sequential invoice number",
    req2: "Your details (name, address, company number, VAT)",
    req3: "Client details (name, address, VAT)",
    req4: "Date of issue and date of service",
    req5: "Description of goods/services",
    req6: "Unit price and quantity",
    req7: "Amount excluding VAT",
    req8: "VAT rate (6%, 12% or 21%)",
    req9: "Legal mention if VAT exempt",
    req10: "Total amount including VAT",
    requirementsNote: "💡 Recommended: Due date, IBAN/BIC, email, general terms",
    
    // Mentions légales TVA
    vatMention: "VAT Legal Mention (if exempt)",
    vatExemptionType: "Type of exemption",
    vatNone: "None (VAT applicable)",
    vatFranchise: "VAT franchise (turnover < €25,000)",
    vatImmobiler: "Real estate works B2B (0%)",
    vatServiceB2B: "B2B services intra-EU (0%)",
    vatBienB2B: "Goods intra-EU (0%)",
    vatExport: "Export outside EU (0%)",
    vatMentionPreview: "Mention that will appear on invoice",
    
    // Produits prédéfinis
    predefinedProduct: "Predefined product from sector",
    selectProduct: "-- Select a product --",
    productHelp: "Select a product or add an item manually",
    addPredefinedProduct: "Add this product",
    unitPrice: "Unit price",
    quantity: "Quantity",
    total: "Total",
    
    // Conditions générales
    termsConditions: "General Terms and Conditions",
    resetDefault: "Default",
    termsHelp: "These conditions will appear at the bottom of the invoice",
    
    // Mode Lot (EN)
    batchMode: "Batch Mode",
    batchModeDescription: "Generate up to 50 different invoices at once for your assessments or group exercises.",
    batchConfigure: "Configure",
    batchCount: "Number of invoices",
    batchCountHelp: "Between 2 and 50 invoices",
    batchModeLabel: "Mode",
    batchModePerfect: "Correct invoices",
    batchModeErrors: "With errors (exercise)",
    batchGenerate: "Generate batch",
    batchGenerated: "invoices generated",
    batchNumber: "Batch",
    batchTotal: "Batch total",
    batchInvoices: "Batch invoices",
    
    // Synthèse des erreurs (EN)
    errorSynthesis: "Error Synthesis",
    errorSynthesisPrint: "Print synthesis",
    errorSynthesisClose: "Close",
    errorSynthesisSeverityHigh: "Major error",
    errorSynthesisSeverityMedium: "Minor error",
    errorSynthesisInvoice: "Invoice",
    errorSynthesisError: "error",
    errorSynthesisErrors: "errors",
    noErrorsToShow: "No errors to show for this invoice",
    
    // Types d'erreurs (EN)
    errorTypeCalculation: "Calculation error on line {line}",
    errorTypeVatTotal: "VAT calculation error",
    errorTypeVatRate: "Incorrect VAT rate on line {line}",
    errorTypeDateSame: "Inconsistent due date",
    errorTypeDateShort: "Payment term too short",
    errorTypeDatePast: "Due date in the past",
    errorTypeMissingClientVat: "Customer VAT number missing",
    errorTypeMissingClientName: "Customer name missing",
    errorTypeMissingClientAddress: "Customer address missing",
    errorTypeMissingInvoiceNumber: "Invoice number missing",
    errorTypeMissingInvoiceDate: "Invoice date missing",
    
    // Détails des erreurs (EN)
    errorDetailVatTotal: "The displayed VAT amount ({shown}) is incorrect. The correct amount should be {expected}. The total is therefore also wrong.",
    errorDetailVatRate: "The product \"{product}\" uses a VAT rate of {wrongRate}% instead of {correctRate}%. {explanation}",
    errorDetailDateSame: "The due date ({dueDate}) is identical to the invoice date ({invoiceDate}). A normal term should be at least 30 days after the invoice date.",
    errorDetailDateShort: "The due date ({dueDate}) only allows 7 days. Standard payment terms are usually 30, 45 or 60 days.",
    errorDetailDatePast: "The due date ({dueDate}) is before the invoice date ({invoiceDate}). This is impossible as the invoice would already be overdue.",
    errorDetailMissingClientVat: "The customer's VAT number is missing although the customer is a business ({client}). For B2B invoices, this number is mandatory.",
    errorDetailMissingClientName: "The customer name is missing from the invoice. Every invoice must contain the customer's complete identity.",
    errorDetailMissingClientAddress: "The customer's address is missing. An invoice must state the customer's full address for tax purposes.",
    errorDetailMissingInvoiceNumber: "The invoice number is missing. Each invoice must have a unique sequential number for traceability.",
    errorDetailMissingInvoiceDate: "The invoice date is missing. The issue date is required to determine the accounting period.",
    errorDetailCalculation: "The displayed total ({shown}) does not match the correct calculation: {qty} × {unitPrice} = {expected}",
    vatExplanationHigh: "This rate is reserved for luxury products, not for essential goods.",
    vatExplanationLow: "This reduced rate applies to essential goods (food, books...).",
    
    // Modal historique (EN)
    historyViewInvoice: "View invoice",
    historyViewBatch: "View batch invoices",
    historyDownloadPDF: "Download PDF",
    historyDelete: "Delete",
    historyErrorSynthesis: "Error synthesis",
    
    // Boutons généraux (EN)
    btnCancel: "Cancel",
    btnGenerate: "Generate",
    btnDelete: "Delete",
    btnView: "View",
    btnErrorSynthesis: "Error synthesis",
    
    // Messages Toast (EN)
    toastGeneratingInvoice: "Generating invoice...",
    toastInvoiceGenerated: "Invoice generated successfully!",
    toastGenerationError: "Error during generation",
    toastExerciseMode: "Exercise mode - Generating...",
    toastInvoiceWithErrors: "Invoice with {count} error(s) generated!",
    toastGeneratingBatch: "Generating batch of invoices...",
    toastBatchGenerated: "{count} invoices generated in batch {batchNumber}!",
    toastDemoMode: "Demo mode - Full functionality available with data",
    toastCustomGenerated: "Custom invoice generated!",
    toastNoInvoice: "No invoice to export",
    toastGeneratingPDF: "Generating PDF...",
    toastPDFDownloaded: "PDF downloaded!",
    toastPDFError: "Error during PDF export",
    toastGeneratingBatchPDF: "Generating PDF for batch of {count} invoices...",
    toastBatchPDFDownloaded: "Batch {batchNumber} PDF downloaded!",
    toastBatchPDFError: "Error during batch PDF export",
    toastJSONDownloaded: "JSON downloaded!",
    toastNoInvoiceEdit: "No invoice to edit",
    toastBatchEditError: "Editing not available for batch invoices",
    toastInvoiceDeleted: "Invoice deleted",
    toastHistoryCleared: "History cleared",
    toastDarkMode: "Dark mode activated",
    toastLightMode: "Light mode activated",
    toastLanguageChanged: "Language: {lang}",
    toastSettingsSaved: "Settings saved",

    
    // Batch et synthèse (EN)
    batchContainsErrors: "Contains errors",
    batchInvoicesLabel: "invoices",
    batchInvoiceLabel: "Invoice",
    batchErrorsLabel: "Errors",
    batchOf: "Batch of",
    batchTotalLabel: "Total",
    batchCount: "Number of invoices",
    batchDate: "Generation date",
    batchTotalAmount: "Total amount",
    
    // Export PDF (EN)
    pdfIssuedInBelgium: "Invoice issued in Belgium",
    pdfContainsErrors: "⚠️ This batch contains {count} intentional error(s)",
    pdfErrorSynthesis: "Error synthesis page",
    pdfErrorOnInvoice: "{description} (Invoice {invoiceNumber})",
    
    // Placeholders (EN)
    placeholderArchiveName: "Ex: Invoice exercise March 2025",
    
    // Navigation (EN)
    navCreate: "Create",
    navHistory: "History",
    navSettings: "Settings",
    navAbout: "About",
    langFr: "Français",
    langNl: "Nederlands",
    langDe: "Deutsch",
    langEn: "English",
    heroTitle: "Educational Invoice Generator",
    heroDescription: "Create realistic and personalized invoices for your accounting, math or economics exercises. Multilingual, adapted to all school levels and compliant with Belgian invoicing rules.",
    heroCta: "Start creating",
    heroAbout: "Learn more",
    heroBadge: "Free educational tool",
    
    // Modes de génération (EN)
    modeQuick: "Quick Mode",
    modeQuickDesc: "Generate a perfect invoice with one click. Ideal for standard exercises with realistic data.",
    modeExercise: "Exercise Mode",
    modeExerciseDesc: "Create invoices with intentional errors to train students in critical analysis.",
    modeBatch: "Batch Mode",
    modeBatchDesc: "Generate up to 50 different invoices at once for your assessments or group exercises.",
    modeCustom: "Customize",
    modeCustomDesc: "Control every aspect: company, client, products and export options.",
    
    // Boutons (EN)
    generate: "Generate",
    configure: "Configure",
    customize: "Customize",
    cancel: "Cancel",
    save: "Save",
    close: "Close",
    edit: "Edit",
    export: "Export",
    
    // Édition de facture (EN)
    editInvoiceTitle: "Edit Invoice",
    archiveName: "Name for invoice archiving",
    archiveNameHint: "Give a custom name to easily find this invoice in history",
    editEmitter: "Emitter",
    editClient: "Client",
    editDates: "Dates",
    editLines: "Invoice lines",
    editTotals: "Totals",
    addLine: "Add",
    itemDescription: "Description",
    itemQuantity: "Qty",
    itemUnitPrice: "Unit price",
    itemVatRate: "VAT %",
    itemTotal: "Total",
    companyName: "Name",
    companyVat: "VAT",
    companyAddress: "Address",
    clientName: "Name",
    clientVat: "VAT",
    clientAddress: "Address",
    subtotal: "Subtotal excl. VAT",
    vatAmount: "VAT amount",
    total: "Total incl. VAT",
    saveEdit: "Save changes",
    editSaved: "Changes saved successfully",
    editedBadge: "Edited",
    editHistory: "Edit",
    
    // Workflow (EN)
    stepConfigure: "Configure",
    stepConfigureDesc: "Choose your options",
    stepPreview: "Preview",
    stepPreviewDesc: "Check the invoice",
    stepGenerate: "Generate",
    stepGenerateDesc: "Export as PDF",
    
    // Paramètres modal exercise (EN)
    modalExerciseTitle: "Configure Exercise Mode",
    errorCount: "Number of errors",
    error1: "1 error",
    error2: "2 errors",
    error3: "3 errors",
    error4: "4 errors",
    error5: "5 errors",
    errorTypes: "Error types",
    errorCalc: "Calculation",
    errorVat: "VAT",
    errorDate: "Date",
    errorMissing: "Missing field",
    errorMaxReached: "Maximum reached",
    errorMaxReachedMessage: "With the selected types, the maximum is {max} error(s). Please reduce the number or add more error types.",
    
    // Paramètres modal batch (EN)
    modalBatchTitle: "Configure Batch Mode",
    batchCount: "Number of invoices",
    batchHint: "Between 2 and 50 invoices",
    batchMode: "Mode",
    batchModeCorrect: "Correct invoices",
    batchModeError: "With errors (exercise)",
    generateBatch: "Generate batch",
    
    // Paramètres modal custom (EN)
    modalCustomTitle: "Configure Invoice",
    company: "Company",
    client: "Client",
    random: "Random",
    retail: "Retail",
    business: "Business",
    lineCount: "Number of lines",
    mode: "Mode",
    invoiceCorrect: "Correct invoice",
    invoiceWithErrors: "With errors",
    invoiceLanguage: "Invoice language",
    
    // Synthèse des erreurs (EN)
    errorSynthesisTitle: "Error Synthesis",
    printSynthesis: "Print synthesis",
    
    // Preview section (EN)
    previewTitle: "Invoice Preview",
    noInvoiceTitle: "No invoice generated",
    noInvoiceDesc: "Select a mode above and click Generate to create an invoice.",
    
    // Labels de facture (EN)
    errorBadge: "This invoice contains intentional errors to detect",
    clientIndividual: "Individual client",
    invTitle: "INVOICE",
    invNumber: "No.",
    invDate: "Invoice date",
    invOperationDate: "Operation date",
    invDueDate: "Due date",
    invEmitter: "ISSUER",
    invClient: "CLIENT",
    invDescription: "Description",
    invQty: "Qty",
    invUnitPrice: "Unit price",
    invVat: "VAT",
    invTotal: "Total",
    invSubtotal: "Subtotal excl.",
    invVatTotal: "Total VAT",
    invGrandTotal: "TOTAL INCL. VAT",
    invPaymentTerms: "Payment within",
    invDays: "days",
    invEmitter: "ISSUER",
    invDueDateLabel: "Due date:",
    invVatMention: "VAT applicable according to current legislation",
    invId: "No.",
    invVatBreakdown: "VAT {rate}% (base {base} €)",
    
    // Pages (EN)
    aboutTitle: "About",
    aboutDesc: "A free educational tool for teachers and students.",
    aboutMission: "Our Mission",
    aboutMissionText: "Invoice Factory was born from the need for simple and effective tools for teaching accounting and applied mathematics.",
    aboutOpenSource: "Open Source",
    aboutOpenSourceText: "This project is free and open source under GPL v3 license. Everyone can freely use, modify and share it.",
    
    // Features section (EN)
    aboutFeatures: "Features",
    feat4LangsTitle: "4 languages",
    feat4LangsDesc: "French, Dutch, German and English for international use.",
    feat20SectorsTitle: "20+ sectors",
    feat20SectorsDesc: "Bakery, restaurant, IT, construction, healthcare and more.",
    featExerciseModeTitle: "Exercise mode",
    featExerciseModeDesc: "Generate invoices with intentional errors for your exercises.",
    featBelgianRulesTitle: "Belgian rules compliant",
    featBelgianRulesDesc: "Complies with current Belgian legislation: mandatory mentions, VAT, due dates and tax breakdown.",
    featPDFExportTitle: "PDF Export",
    featPDFExportDesc: "Download your invoices in PDF format ready to print.",
    featBatchModeTitle: "Batch mode",
    featBatchModeDesc: "Generate up to 50 different invoices at once.",
    featPWATitle: "PWA",
    featPWADesc: "Install the application on your device and use it offline.",
    
    // Stats (EN)
    statLangs: "Languages",
    statSectors: "Sectors",
    statInvoices: "Invoices",
    statPrice: "Free",
    
    // License (EN)
    aboutLicense: "License",
    aboutLicenseText: "This project is licensed under GNU GPL v3. You are free to use, modify and distribute it.",
    aboutLicenseLink: "View license",
    
    settingsTitle: "Settings",
    settingsDesc: "Customize your experience and configure generation options.",
    historyTitle: "History",
    historyDesc: "View and download your previously generated invoices.",
    historyClearAll: "Clear all",
    historyEmptyTitle: "No invoices in history",
    historyEmptyDesc: "Invoices you generate will appear here for quick access later.",
    historyCreateBtn: "Create invoice",
    historyModalTitle: "Invoice preview",
    
    // Settings page (EN)
    settingsTabGeneral: "General",
    settingsTabInvoice: "Invoice",
    settingsCardGeneralTitle: "General Settings",
    settingsCardGeneralDesc: "Configure interface and user experience preferences.",
    settingsDefaultLang: "Default language",
    settingsTheme: "Theme",
    settingsThemeLight: "Light",
    settingsThemeDark: "Dark",
    settingsThemeAuto: "Auto",
    settingsAutoSave: "Automatically save invoices to history",
    settingsSaveBtn: "Save",
    settingsCardInvoiceTitle: "Invoice Settings",
    settingsCardInvoiceDesc: "Customize default options for invoice generation.",
    settingsCurrency: "Default currency",
    settingsVat: "Default VAT (%)",
    settingsDateFormat: "Date format",
    settingsInvoiceLang: "Invoice language",
    settingsInvoiceLangHint: "Default language for generated invoices",
    
    // Footer (EN)
    footerHome: "Home",
    footerHistory: "History",
    footerSettings: "Settings",
    footerAbout: "About",
    footerMadeWith: "Made with",
    footerBy: "by",
    footerPrivacy: "Privacy",
    footerLicense: "License",
    installAppBtn: "Install",
    installAppTitle: "Install the app",
    themeToggle: "Toggle theme",
    
    // Privacy Policy (EN)
    privacyTitle: "Privacy Policy",
    privacyDesc: "Your privacy is our priority. Discover how we protect your data.",
    privacyPromiseTitle: "Our commitment",
    privacyPromiseText: "Invoice Factory respects your privacy. We do not collect any personal data. All your invoices and preferences remain exclusively on your device.",
    privacyDataTitle: "Data collected",
    privacyNoneTitle: "No personal data",
    privacyNoneText: "We do not collect any personally identifiable information. No email, no name, no phone number.",
    privacyLocalTitle: "100% local storage",
    privacyLocalText: "Your invoices and preferences are stored only in your browser's localStorage, on your device only.",
    privacyNoServerTitle: "No server",
    privacyNoServerText: "Our application has no backend. No data is transmitted to remote servers.",
    privacyNoTrackTitle: "No tracking",
    privacyNoTrackText: "We do not use any tracking cookies, no Google Analytics, no third-party analytics tools.",
    privacyTechTitle: "Technical details",
    privacyStorageTitle: "Local storage (localStorage)",
    privacyStorageDesc: "We use the browser localStorage to save:",
    privacyStorage1: "Your preferences (theme, language)",
    privacyStorage2: "Your invoice history (limited to 20 items)",
    privacyStorage3: "The app installation status (PWA)",
    privacyStorageNote: "This data never leaves your device and is entirely under your control.",
    privacyRightsTitle: "Your rights",
    privacyRightDeleteTitle: "Right to erasure",
    privacyRightDeleteText: "You can delete your history at any time from the History page or by clearing your browser's localStorage.",
    privacyRightAccessTitle: "Right of access",
    privacyRightAccessText: "All your data is visible directly in the application. You can export your invoices to JSON at any time.",
    privacyRightPortabilityTitle: "Right to data portability",
    privacyRightPortabilityText: "Export your invoices in JSON or PDF format and take them wherever you want.",
    privacyContactTitle: "Contact",
    privacyContactText: "For any questions regarding data protection, you can contact us:",
    privacyUpdate: "Last updated: February 12, 2026",
    
    // RGPD Section (EN)
    aboutRGPDTitle: "GDPR compliant",
    aboutRGPDDesc: "Your privacy is our priority. Invoice Factory does not collect any personal data and stores all your information exclusively on your device.",
    aboutRGPDPoint1: "No personal data collected",
    aboutRGPDPoint2: "100% local storage",
    aboutRGPDPoint3: "No tracking cookies",
    aboutRGPDButton: "Learn more"
  }
};

// Classe de gestion des traductions
class I18n {
  constructor() {
    this.currentLang = localStorage.getItem('monsieur-nerd-lang') || localStorage.getItem('invoiceGeneratorLang') || 'fr';
    this.listeners = [];
  }
  
  get current() {
    return this.currentLang;
  }
  
  set current(lang) {
    if (translations[lang]) {
      this.currentLang = lang;
      localStorage.setItem('monsieur-nerd-lang', lang);
      document.documentElement.lang = lang;
      this.notifyListeners();
    }
  }
  
  t(key) {
    return translations[this.currentLang][key] || key;
  }
  
  onChange(callback) {
    this.listeners.push(callback);
  }
  
  notifyListeners() {
    this.listeners.forEach(cb => cb(this.currentLang));
  }
  
  getSupportedLanguages() {
    return [
      { code: 'fr', name: 'Français', flag: '🇫🇷' },
      { code: 'nl', name: 'Nederlands', flag: '🇳🇱' },
      { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
      { code: 'en', name: 'English', flag: '🇬🇧' }
    ];
  }
}

// Instance globale
const i18n = new I18n();

// Fonction pour appliquer les traductions à la page
function applyTranslations() {
  // Traduire tous les éléments avec data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const translation = i18n.t(key);
    if (translation !== key) {
      // Si l'élément contient des enfants (comme des SVG), ne pas remplacer le contenu
      // mais mettre à jour aria-label si présent
      if (el.children.length > 0) {
        // L'élément a des enfants, ne mettre à jour que aria-label
        if (el.hasAttribute('aria-label')) {
          el.setAttribute('aria-label', translation);
        }
      } else {
        // Pas d'enfants, on peut remplacer le textContent
        el.textContent = translation;
        // Mettre à jour aussi aria-label si présent
        if (el.hasAttribute('aria-label')) {
          el.setAttribute('aria-label', translation);
        }
      }
    }
  });
  
  // Traduire les aria-label avec data-i18n-aria-label
  document.querySelectorAll('[data-i18n-aria-label]').forEach(el => {
    const key = el.getAttribute('data-i18n-aria-label');
    const translation = i18n.t(key);
    if (translation !== key) {
      el.setAttribute('aria-label', translation);
    }
  });
  
  // Traduire les placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    const translation = i18n.t(key);
    if (translation !== key) {
      el.placeholder = translation;
    }
  });
  
  // Traduire les titles
  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    const key = el.getAttribute('data-i18n-title');
    const translation = i18n.t(key);
    if (translation !== key) {
      el.title = translation;
    }
  });
  
  // Mettre à jour le drapeau de la langue courante
  const currentFlag = document.getElementById('current-lang-flag');
  if (currentFlag) {
    const lang = i18n.current;
    currentFlag.src = `assets/icons/flag-${lang}.svg`;
    currentFlag.alt = i18n.t('language');
  }
}

// Appliquer les traductions au chargement et quand la langue change
function initTranslations() {
  applyTranslations();
}

// Fonction pour forcer le rafraîchissement des traductions
window.refreshTranslations = function() {
  if (typeof applyTranslations === 'function') {
    applyTranslations();
    return true;
  }
  return false;
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    initTranslations();
    // Appliquer plusieurs fois pour s'assurer que tout est traduit
    setTimeout(initTranslations, 10);
    setTimeout(initTranslations, 100);
    setTimeout(initTranslations, 500);
  });
} else {
  // Le DOM est déjà chargé, appliquer les traductions immédiatement
  initTranslations();
  setTimeout(initTranslations, 10);
  setTimeout(initTranslations, 100);
  setTimeout(initTranslations, 500);
}

i18n.onChange(() => {
  applyTranslations();
  // Appliquer plusieurs fois pour catcher les éléments dynamiques
  setTimeout(applyTranslations, 10);
  setTimeout(applyTranslations, 100);
});
