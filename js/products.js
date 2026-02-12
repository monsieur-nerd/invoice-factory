// ============================================
// BASE DE DONNÉES DE PRODUITS PAR SECTEUR
// Prix en EUR, unités variées
// ============================================

const productsDatabase = {
  bakery: {
    fr: [
      { name: "Baguette tradition", unitPrice: 1.20, unit: "pc", unitLabel: "pièce" },
      { name: "Croissant au beurre", unitPrice: 1.50, unit: "pc", unitLabel: "pièce" },
      { name: "Pain de campagne (500g)", unitPrice: 3.80, unit: "pc", unitLabel: "pièce" },
      { name: "Tarte aux pommes", unitPrice: 12.50, unit: "pc", unitLabel: "pièce" },
      { name: "Éclair au chocolat", unitPrice: 3.20, unit: "pc", unitLabel: "pièce" },
      { name: "Macarons assortis", unitPrice: 2.50, unit: "pc", unitLabel: "pièce" },
      { name: "Brioche tressée", unitPrice: 6.90, unit: "pc", unitLabel: "pièce" },
      { name: "Quiche lorraine", unitPrice: 14.00, unit: "pc", unitLabel: "pièce" },
      { name: "Farine T55 (1kg)", unitPrice: 1.80, unit: "pc", unitLabel: "sac" },
      { name: "Galette des rois (6 pers)", unitPrice: 22.00, unit: "pc", unitLabel: "pièce" },
      { name: "Sandwich jambon-beurre", unitPrice: 4.50, unit: "pc", unitLabel: "pièce" },
      { name: "Mille-feuille", unitPrice: 4.80, unit: "pc", unitLabel: "pièce" },
      { name: "Tartelette fruits", unitPrice: 3.90, unit: "pc", unitLabel: "pièce" },
      { name: "Pain sans gluten", unitPrice: 5.50, unit: "pc", unitLabel: "pièce" },
      { name: "Chocolat chaud", unitPrice: 3.00, unit: "pc", unitLabel: "tasse" }
    ],
    nl: [
      { name: "Stokbrood traditioneel", unitPrice: 1.20, unit: "pc", unitLabel: "stuk" },
      { name: "Botercroissant", unitPrice: 1.50, unit: "pc", unitLabel: "stuk" },
      { name: "Landelijk brood (500g)", unitPrice: 3.80, unit: "pc", unitLabel: "stuk" },
      { name: "Appeltaart", unitPrice: 12.50, unit: "pc", unitLabel: "stuk" },
      { name: "Chocolade-éclair", unitPrice: 3.20, unit: "pc", unitLabel: "stuk" },
      { name: "Assortiment macarons", unitPrice: 2.50, unit: "pc", unitLabel: "stuk" },
      { name: "Vlecht brioche", unitPrice: 6.90, unit: "pc", unitLabel: "stuk" },
      { name: "Quiche Lorraine", unitPrice: 14.00, unit: "pc", unitLabel: "stuk" },
      { name: "Bloem T55 (1kg)", unitPrice: 1.80, unit: "pc", unitLabel: "zak" },
      { name: "Driekoningentaart (6 pers)", unitPrice: 22.00, unit: "pc", unitLabel: "stuk" },
      { name: "Ham-kaas sandwich", unitPrice: 4.50, unit: "pc", unitLabel: "stuk" },
      { name: "Mille-feuille", unitPrice: 4.80, unit: "pc", unitLabel: "stuk" },
      { name: "Fruittaartje", unitPrice: 3.90, unit: "pc", unitLabel: "stuk" },
      { name: "Glutenvrij brood", unitPrice: 5.50, unit: "pc", unitLabel: "stuk" },
      { name: "Warme chocolademelk", unitPrice: 3.00, unit: "pc", unitLabel: "kop" }
    ],
    de: [
      { name: "Traditionelles Baguette", unitPrice: 1.20, unit: "pc", unitLabel: "Stück" },
      { name: "Buttercroissant", unitPrice: 1.50, unit: "pc", unitLabel: "Stück" },
      { name: "Landbrot (500g)", unitPrice: 3.80, unit: "pc", unitLabel: "Stück" },
      { name: "Apfelkuchen", unitPrice: 12.50, unit: "pc", unitLabel: "Stück" },
      { name: "Schokoladen-Éclair", unitPrice: 3.20, unit: "pc", unitLabel: "Stück" },
      { name: "Macaron-Auswahl", unitPrice: 2.50, unit: "pc", unitLabel: "Stück" },
      { name: "Geflochtene Brioche", unitPrice: 6.90, unit: "pc", unitLabel: "Stück" },
      { name: "Quiche Lorraine", unitPrice: 14.00, unit: "pc", unitLabel: "Stück" },
      { name: "Mehl T55 (1kg)", unitPrice: 1.80, unit: "pc", unitLabel: "Sack" },
      { name: "Dreikönigskuchen (6 Pers)", unitPrice: 22.00, unit: "pc", unitLabel: "Stück" },
      { name: "Schinken-Butter-Sandwich", unitPrice: 4.50, unit: "pc", unitLabel: "Stück" },
      { name: "Mille-feuille", unitPrice: 4.80, unit: "pc", unitLabel: "Stück" },
      { name: "Obsttörtchen", unitPrice: 3.90, unit: "pc", unitLabel: "Stück" },
      { name: "Glutenfreies Brot", unitPrice: 5.50, unit: "pc", unitLabel: "Stück" },
      { name: "Heiße Schokolade", unitPrice: 3.00, unit: "pc", unitLabel: "Tasse" }
    ],
    en: [
      { name: "Traditional Baguette", unitPrice: 1.20, unit: "pc", unitLabel: "piece" },
      { name: "Butter Croissant", unitPrice: 1.50, unit: "pc", unitLabel: "piece" },
      { name: "Country Bread (500g)", unitPrice: 3.80, unit: "pc", unitLabel: "loaf" },
      { name: "Apple Tart", unitPrice: 12.50, unit: "pc", unitLabel: "piece" },
      { name: "Chocolate Éclair", unitPrice: 3.20, unit: "pc", unitLabel: "piece" },
      { name: "Assorted Macarons", unitPrice: 2.50, unit: "pc", unitLabel: "piece" },
      { name: "Braided Brioche", unitPrice: 6.90, unit: "pc", unitLabel: "piece" },
      { name: "Quiche Lorraine", unitPrice: 14.00, unit: "pc", unitLabel: "piece" },
      { name: "Flour T55 (1kg)", unitPrice: 1.80, unit: "pc", unitLabel: "bag" },
      { name: "King Cake (6 pers)", unitPrice: 22.00, unit: "pc", unitLabel: "piece" },
      { name: "Ham-Butter Sandwich", unitPrice: 4.50, unit: "pc", unitLabel: "piece" },
      { name: "Mille-feuille", unitPrice: 4.80, unit: "pc", unitLabel: "piece" },
      { name: "Fruit Tartlet", unitPrice: 3.90, unit: "pc", unitLabel: "piece" },
      { name: "Gluten-Free Bread", unitPrice: 5.50, unit: "pc", unitLabel: "loaf" },
      { name: "Hot Chocolate", unitPrice: 3.00, unit: "pc", unitLabel: "cup" }
    ]
  },

  restaurant: {
    fr: [
      { name: "Menu du jour (entrée+plat+dessert)", unitPrice: 18.50, unit: "pc", unitLabel: "menu" },
      { name: "Plat du jour", unitPrice: 14.00, unit: "pc", unitLabel: "plat" },
      { name: "Entrée maison", unitPrice: 9.50, unit: "pc", unitLabel: "entrée" },
      { name: "Dessert du chef", unitPrice: 8.50, unit: "pc", unitLabel: "dessert" },
      { name: "Boisson maison", unitPrice: 4.50, unit: "pc", unitLabel: "verre" },
      { name: "Menu enfant", unitPrice: 12.00, unit: "pc", unitLabel: "menu" },
      { name: "Formule déjeuner", unitPrice: 16.00, unit: "pc", unitLabel: "formule" },
      { name: "Bouteille de vin (75cl)", unitPrice: 25.00, unit: "pc", unitLabel: "bouteille" },
      { name: "Verre de vin", unitPrice: 6.00, unit: "pc", unitLabel: "verre" },
      { name: "Café gourmand", unitPrice: 7.50, unit: "pc", unitLabel: "assiette" },
      { name: "Assiette de fromages", unitPrice: 11.00, unit: "pc", unitLabel: "assiette" },
      { name: "Salade composée", unitPrice: 13.50, unit: "pc", unitLabel: "salade" },
      { name: "Pizza du jour", unitPrice: 12.00, unit: "pc", unitLabel: "pizza" },
      { name: "Burger maison", unitPrice: 15.50, unit: "pc", unitLabel: "burger" },
      { name: "Thé/café", unitPrice: 3.50, unit: "pc", unitLabel: "tasse" }
    ],
    nl: [
      { name: "Dagmenu (voorgerecht+hoofdgerecht+dessert)", unitPrice: 18.50, unit: "pc", unitLabel: "menu" },
      { name: "Dagschotel", unitPrice: 14.00, unit: "pc", unitLabel: "gerecht" },
      { name: "Huisgemaakt voorgerecht", unitPrice: 9.50, unit: "pc", unitLabel: "voorgerecht" },
      { name: "Dessert van de chef", unitPrice: 8.50, unit: "pc", unitLabel: "dessert" },
      { name: "Huisgemaakte drank", unitPrice: 4.50, unit: "pc", unitLabel: "glas" },
      { name: "Kindermenu", unitPrice: 12.00, unit: "pc", unitLabel: "menu" },
      { name: "Lunchformule", unitPrice: 16.00, unit: "pc", unitLabel: "formule" },
      { name: "Fles wijn (75cl)", unitPrice: 25.00, unit: "pc", unitLabel: "fles" },
      { name: "Glas wijn", unitPrice: 6.00, unit: "pc", unitLabel: "glas" },
      { name: "Koffie gourmand", unitPrice: 7.50, unit: "pc", unitLabel: "bord" },
      { name: "Kaasplank", unitPrice: 11.00, unit: "pc", unitLabel: "bord" },
      { name: "Samengestelde salade", unitPrice: 13.50, unit: "pc", unitLabel: "salade" },
      { name: "Dagpizza", unitPrice: 12.00, unit: "pc", unitLabel: "pizza" },
      { name: "Huisgemaakte burger", unitPrice: 15.50, unit: "pc", unitLabel: "burger" },
      { name: "Thee/koffie", unitPrice: 3.50, unit: "pc", unitLabel: "kop" }
    ],
    de: [
      { name: "Tagesmenü (Vorspeise+Hauptgericht+Dessert)", unitPrice: 18.50, unit: "pc", unitLabel: "Menü" },
      { name: "Tagesgericht", unitPrice: 14.00, unit: "pc", unitLabel: "Gericht" },
      { name: "Hausgemachte Vorspeise", unitPrice: 9.50, unit: "pc", unitLabel: "Vorspeise" },
      { name: "Dessert des Küchenchefs", unitPrice: 8.50, unit: "pc", unitLabel: "Dessert" },
      { name: "Hausgemachtes Getränk", unitPrice: 4.50, unit: "pc", unitLabel: "Glas" },
      { name: "Kindermenü", unitPrice: 12.00, unit: "pc", unitLabel: "Menü" },
      { name: "Mittagsmenü", unitPrice: 16.00, unit: "pc", unitLabel: "Menü" },
      { name: "Weinflasche (75cl)", unitPrice: 25.00, unit: "pc", unitLabel: "Flasche" },
      { name: "Weinglas", unitPrice: 6.00, unit: "pc", unitLabel: "Glas" },
      { name: "Kaffee gourmand", unitPrice: 7.50, unit: "pc", unitLabel: "Teller" },
      { name: "Käseplatte", unitPrice: 11.00, unit: "pc", unitLabel: "Teller" },
      { name: "Komponierter Salat", unitPrice: 13.50, unit: "pc", unitLabel: "Salat" },
      { name: "Tagespizza", unitPrice: 12.00, unit: "pc", unitLabel: "Pizza" },
      { name: "Hausgemachter Burger", unitPrice: 15.50, unit: "pc", unitLabel: "Burger" },
      { name: "Tee/Kaffee", unitPrice: 3.50, unit: "pc", unitLabel: "Tasse" }
    ],
    en: [
      { name: "Daily Menu (starter+main+dessert)", unitPrice: 18.50, unit: "pc", unitLabel: "menu" },
      { name: "Daily Special", unitPrice: 14.00, unit: "pc", unitLabel: "dish" },
      { name: "Homemade Starter", unitPrice: 9.50, unit: "pc", unitLabel: "starter" },
      { name: "Chef's Dessert", unitPrice: 8.50, unit: "pc", unitLabel: "dessert" },
      { name: "Homemade Drink", unitPrice: 4.50, unit: "pc", unitLabel: "glass" },
      { name: "Kids Menu", unitPrice: 12.00, unit: "pc", unitLabel: "menu" },
      { name: "Lunch Formula", unitPrice: 16.00, unit: "pc", unitLabel: "formula" },
      { name: "Wine Bottle (75cl)", unitPrice: 25.00, unit: "pc", unitLabel: "bottle" },
      { name: "Glass of Wine", unitPrice: 6.00, unit: "pc", unitLabel: "glass" },
      { name: "Gourmet Coffee", unitPrice: 7.50, unit: "pc", unitLabel: "plate" },
      { name: "Cheese Board", unitPrice: 11.00, unit: "pc", unitLabel: "board" },
      { name: "Composed Salad", unitPrice: 13.50, unit: "pc", unitLabel: "salad" },
      { name: "Daily Pizza", unitPrice: 12.00, unit: "pc", unitLabel: "pizza" },
      { name: "Homemade Burger", unitPrice: 15.50, unit: "pc", unitLabel: "burger" },
      { name: "Tea/Coffee", unitPrice: 3.50, unit: "pc", unitLabel: "cup" }
    ]
  },

  // Continue with more sectors...
  retail: {
    fr: [
      { name: "Article en promotion", unitPrice: 15.99, unit: "pc", unitLabel: "pièce" },
      { name: "Produit tendance", unitPrice: 29.99, unit: "pc", unitLabel: "pièce" },
      { name: "Accessoire mode", unitPrice: 12.50, unit: "pc", unitLabel: "pièce" },
      { name: "Article électroménager", unitPrice: 89.00, unit: "pc", unitLabel: "pièce" },
      { name: "Produit de beauté", unitPrice: 24.90, unit: "pc", unitLabel: "pièce" },
      { name: "Article de décoration", unitPrice: 35.00, unit: "pc", unitLabel: "pièce" },
      { name: "Livre", unitPrice: 18.50, unit: "pc", unitLabel: "livre" },
      { name: "Jouet", unitPrice: 22.99, unit: "pc", unitLabel: "pièce" },
      { name: "Article de sport", unitPrice: 45.00, unit: "pc", unitLabel: "pièce" },
      { name: "Produit alimentaire (kg)", unitPrice: 8.50, unit: "kg", unitLabel: "kg" },
      { name: "Article de papeterie", unitPrice: 5.99, unit: "pc", unitLabel: "pièce" },
      { name: "Accessoire électronique", unitPrice: 19.90, unit: "pc", unitLabel: "pièce" },
      { name: "Article textile", unitPrice: 39.99, unit: "pc", unitLabel: "pièce" },
      { name: "Produit ménager", unitPrice: 7.50, unit: "pc", unitLabel: "pièce" },
      { name: "Article cadeau", unitPrice: 14.90, unit: "pc", unitLabel: "pièce" }
    ],
    nl: [
      { name: "Promotieartikel", unitPrice: 15.99, unit: "pc", unitLabel: "stuk" },
      { name: "Trendy product", unitPrice: 29.99, unit: "pc", unitLabel: "stuk" },
      { name: "Mode-accessoire", unitPrice: 12.50, unit: "pc", unitLabel: "stuk" },
      { name: "Huishoudelijk artikel", unitPrice: 89.00, unit: "pc", unitLabel: "stuk" },
      { name: "Schoonheidsproduct", unitPrice: 24.90, unit: "pc", unitLabel: "stuk" },
      { name: "Decoratieartikel", unitPrice: 35.00, unit: "pc", unitLabel: "stuk" },
      { name: "Boek", unitPrice: 18.50, unit: "pc", unitLabel: "boek" },
      { name: "Speelgoed", unitPrice: 22.99, unit: "pc", unitLabel: "stuk" },
      { name: "Sportartikel", unitPrice: 45.00, unit: "pc", unitLabel: "stuk" },
      { name: "Voedingsproduct (kg)", unitPrice: 8.50, unit: "kg", unitLabel: "kg" },
      { name: "Kantoorartikel", unitPrice: 5.99, unit: "pc", unitLabel: "stuk" },
      { name: "Elektronica-accessoire", unitPrice: 19.90, unit: "pc", unitLabel: "stuk" },
      { name: "Textielartikel", unitPrice: 39.99, unit: "pc", unitLabel: "stuk" },
      { name: "Huishoudproduct", unitPrice: 7.50, unit: "pc", unitLabel: "stuk" },
      { name: "Cadeauartikel", unitPrice: 14.90, unit: "pc", unitLabel: "stuk" }
    ],
    de: [
      { name: "Aktionsartikel", unitPrice: 15.99, unit: "pc", unitLabel: "Stück" },
      { name: "Trendprodukt", unitPrice: 29.99, unit: "pc", unitLabel: "Stück" },
      { name: "Mode-Accessoire", unitPrice: 12.50, unit: "pc", unitLabel: "Stück" },
      { name: "Haushaltsgerät", unitPrice: 89.00, unit: "pc", unitLabel: "Stück" },
      { name: "Beauty-Produkt", unitPrice: 24.90, unit: "pc", unitLabel: "Stück" },
      { name: "Deko-Artikel", unitPrice: 35.00, unit: "pc", unitLabel: "Stück" },
      { name: "Buch", unitPrice: 18.50, unit: "pc", unitLabel: "Buch" },
      { name: "Spielzeug", unitPrice: 22.99, unit: "pc", unitLabel: "Stück" },
      { name: "Sportartikel", unitPrice: 45.00, unit: "pc", unitLabel: "Stück" },
      { name: "Lebensmittel (kg)", unitPrice: 8.50, unit: "kg", unitLabel: "kg" },
      { name: "Büroartikel", unitPrice: 5.99, unit: "pc", unitLabel: "Stück" },
      { name: "Elektronik-Zubehör", unitPrice: 19.90, unit: "pc", unitLabel: "Stück" },
      { name: "Textilartikel", unitPrice: 39.99, unit: "pc", unitLabel: "Stück" },
      { name: "Haushaltsprodukt", unitPrice: 7.50, unit: "pc", unitLabel: "Stück" },
      { name: "Geschenkartikel", unitPrice: 14.90, unit: "pc", unitLabel: "Stück" }
    ],
    en: [
      { name: "Promotional Item", unitPrice: 15.99, unit: "pc", unitLabel: "piece" },
      { name: "Trendy Product", unitPrice: 29.99, unit: "pc", unitLabel: "piece" },
      { name: "Fashion Accessory", unitPrice: 12.50, unit: "pc", unitLabel: "piece" },
      { name: "Home Appliance", unitPrice: 89.00, unit: "pc", unitLabel: "piece" },
      { name: "Beauty Product", unitPrice: 24.90, unit: "pc", unitLabel: "piece" },
      { name: "Decoration Item", unitPrice: 35.00, unit: "pc", unitLabel: "piece" },
      { name: "Book", unitPrice: 18.50, unit: "pc", unitLabel: "book" },
      { name: "Toy", unitPrice: 22.99, unit: "pc", unitLabel: "piece" },
      { name: "Sports Equipment", unitPrice: 45.00, unit: "pc", unitLabel: "piece" },
      { name: "Food Product (kg)", unitPrice: 8.50, unit: "kg", unitLabel: "kg" },
      { name: "Stationery Item", unitPrice: 5.99, unit: "pc", unitLabel: "piece" },
      { name: "Electronic Accessory", unitPrice: 19.90, unit: "pc", unitLabel: "piece" },
      { name: "Textile Item", unitPrice: 39.99, unit: "pc", unitLabel: "piece" },
      { name: "Household Product", unitPrice: 7.50, unit: "pc", unitLabel: "piece" },
      { name: "Gift Item", unitPrice: 14.90, unit: "pc", unitLabel: "piece" }
    ]
  },

  // I'll continue with more sectors in the same pattern
  it: {
    fr: [
      { name: "Ordinateur portable", unitPrice: 899.00, unit: "pc", unitLabel: "unité" },
      { name: "Souris sans fil", unitPrice: 29.99, unit: "pc", unitLabel: "pièce" },
      { name: "Clavier mécanique", unitPrice: 89.00, unit: "pc", unitLabel: "pièce" },
      { name: "Écran 27\"", unitPrice: 299.00, unit: "pc", unitLabel: "écran" },
      { name: "Disque dur externe (1To)", unitPrice: 65.00, unit: "pc", unitLabel: "disque" },
      { name: "Logiciel antivirus (1 an)", unitPrice: 49.90, unit: "pc", unitLabel: "licence" },
      { name: "Câble HDMI 2m", unitPrice: 12.90, unit: "pc", unitLabel: "câble" },
      { name: "Webcam HD", unitPrice: 59.00, unit: "pc", unitLabel: "webcam" },
      { name: "Casque audio", unitPrice: 79.90, unit: "pc", unitLabel: "casque" },
      { name: "Installation logiciel", unitPrice: 75.00, unit: "h", unitLabel: "heure" },
      { name: "Maintenance informatique", unitPrice: 85.00, unit: "h", unitLabel: "heure" },
      { name: "Support technique", unitPrice: 65.00, unit: "h", unitLabel: "heure" },
      { name: "Développement sur mesure", unitPrice: 120.00, unit: "h", unitLabel: "heure" },
      { name: "Formation utilisateur", unitPrice: 150.00, unit: "h", unitLabel: "heure" },
      { name: "Sauvegarde cloud (1 an)", unitPrice: 99.00, unit: "pc", unitLabel: "abonnement" }
    ],
    nl: [
      { name: "Laptop", unitPrice: 899.00, unit: "pc", unitLabel: "eenheid" },
      { name: "Draadloze muis", unitPrice: 29.99, unit: "pc", unitLabel: "stuk" },
      { name: "Mechanisch toetsenbord", unitPrice: 89.00, unit: "pc", unitLabel: "stuk" },
      { name: "27\" scherm", unitPrice: 299.00, unit: "pc", unitLabel: "scherm" },
      { name: "Externe harde schijf (1TB)", unitPrice: 65.00, unit: "pc", unitLabel: "schijf" },
      { name: "Antivirussoftware (1 jaar)", unitPrice: 49.90, unit: "pc", unitLabel: "licentie" },
      { name: "HDMI-kabel 2m", unitPrice: 12.90, unit: "pc", unitLabel: "kabel" },
      { name: "HD-webcam", unitPrice: 59.00, unit: "pc", unitLabel: "webcam" },
      { name: "Koptelefoon", unitPrice: 79.90, unit: "pc", unitLabel: "koptelefoon" },
      { name: "Software-installatie", unitPrice: 75.00, unit: "h", unitLabel: "uur" },
      { name: "Computeronderhoud", unitPrice: 85.00, unit: "h", unitLabel: "uur" },
      { name: "Technische ondersteuning", unitPrice: 65.00, unit: "h", unitLabel: "uur" },
      { name: "Maatwerkontwikkeling", unitPrice: 120.00, unit: "h", unitLabel: "uur" },
      { name: "Gebruikerstraining", unitPrice: 150.00, unit: "h", unitLabel: "uur" },
      { name: "Cloud-back-up (1 jaar)", unitPrice: 99.00, unit: "pc", unitLabel: "abonnement" }
    ],
    de: [
      { name: "Laptop", unitPrice: 899.00, unit: "pc", unitLabel: "Einheit" },
      { name: "Kabellose Maus", unitPrice: 29.99, unit: "pc", unitLabel: "Stück" },
      { name: "Mechanische Tastatur", unitPrice: 89.00, unit: "pc", unitLabel: "Stück" },
      { name: "27\" Bildschirm", unitPrice: 299.00, unit: "pc", unitLabel: "Bildschirm" },
      { name: "Externe Festplatte (1TB)", unitPrice: 65.00, unit: "pc", unitLabel: "Festplatte" },
      { name: "Antivirus-Software (1 Jahr)", unitPrice: 49.90, unit: "pc", unitLabel: "Lizenz" },
      { name: "HDMI-Kabel 2m", unitPrice: 12.90, unit: "pc", unitLabel: "Kabel" },
      { name: "HD-Webcam", unitPrice: 59.00, unit: "pc", unitLabel: "Webcam" },
      { name: "Kopfhörer", unitPrice: 79.90, unit: "pc", unitLabel: "Kopfhörer" },
      { name: "Software-Installation", unitPrice: 75.00, unit: "h", unitLabel: "Stunde" },
      { name: "Computerwartung", unitPrice: 85.00, unit: "h", unitLabel: "Stunde" },
      { name: "Technischer Support", unitPrice: 65.00, unit: "h", unitLabel: "Stunde" },
      { name: "Maßgeschneiderte Entwicklung", unitPrice: 120.00, unit: "h", unitLabel: "Stunde" },
      { name: "Benutzerschulung", unitPrice: 150.00, unit: "h", unitLabel: "Stunde" },
      { name: "Cloud-Backup (1 Jahr)", unitPrice: 99.00, unit: "pc", unitLabel: "Abonnement" }
    ],
    en: [
      { name: "Laptop", unitPrice: 899.00, unit: "pc", unitLabel: "unit" },
      { name: "Wireless Mouse", unitPrice: 29.99, unit: "pc", unitLabel: "piece" },
      { name: "Mechanical Keyboard", unitPrice: 89.00, unit: "pc", unitLabel: "piece" },
      { name: "27\" Monitor", unitPrice: 299.00, unit: "pc", unitLabel: "monitor" },
      { name: "External Hard Drive (1TB)", unitPrice: 65.00, unit: "pc", unitLabel: "drive" },
      { name: "Antivirus Software (1 year)", unitPrice: 49.90, unit: "pc", unitLabel: "license" },
      { name: "HDMI Cable 2m", unitPrice: 12.90, unit: "pc", unitLabel: "cable" },
      { name: "HD Webcam", unitPrice: 59.00, unit: "pc", unitLabel: "webcam" },
      { name: "Headphones", unitPrice: 79.90, unit: "pc", unitLabel: "headphones" },
      { name: "Software Installation", unitPrice: 75.00, unit: "h", unitLabel: "hour" },
      { name: "Computer Maintenance", unitPrice: 85.00, unit: "h", unitLabel: "hour" },
      { name: "Technical Support", unitPrice: 65.00, unit: "h", unitLabel: "hour" },
      { name: "Custom Development", unitPrice: 120.00, unit: "h", unitLabel: "hour" },
      { name: "User Training", unitPrice: 150.00, unit: "h", unitLabel: "hour" },
      { name: "Cloud Backup (1 year)", unitPrice: 99.00, unit: "pc", unitLabel: "subscription" }
    ]
  }
  // More sectors will be added...
};

// Helper function to get products for a sector
function getProducts(sector, lang) {
  const sectorData = productsDatabase[sector];
  if (!sectorData) return null;
  return sectorData[lang] || sectorData['en'] || null;
}

// Helper function to get unit label translation
function getUnitLabel(unit, lang) {
  const labels = {
    fr: { pc: 'pièce', kg: 'kg', l: 'L', h: 'heure', m: 'mètre', m2: 'm²' },
    nl: { pc: 'stuk', kg: 'kg', l: 'L', h: 'uur', m: 'meter', m2: 'm²' },
    de: { pc: 'Stück', kg: 'kg', l: 'L', h: 'Stunde', m: 'Meter', m2: 'm²' },
    en: { pc: 'piece', kg: 'kg', l: 'L', h: 'hour', m: 'meter', m2: 'm²' }
  };
  return labels[lang]?.[unit] || unit;
}

// Additional sectors
const additionalProducts = {
  consulting: {
    fr: [
      { name: "Rapport d'analyse stratégique", unitPrice: 2500.00, unit: "pc", unitLabel: "rapport" },
      { name: "Étude de marché", unitPrice: 4500.00, unit: "pc", unitLabel: "étude" },
      { name: "Plan stratégique", unitPrice: 8500.00, unit: "pc", unitLabel: "plan" },
      { name: "Document de synthèse", unitPrice: 1200.00, unit: "pc", unitLabel: "document" },
      { name: "Consulting stratégique", unitPrice: 180.00, unit: "h", unitLabel: "heure" },
      { name: "Accompagnement projet", unitPrice: 150.00, unit: "h", unitLabel: "heure" },
      { name: "Audit organisationnel", unitPrice: 3200.00, unit: "pc", unitLabel: "audit" },
      { name: "Formation management", unitPrice: 1200.00, unit: "jour", unitLabel: "jour" },
      { name: "Coaching dirigeant", unitPrice: 350.00, unit: "h", unitLabel: "heure" },
      { name: "Atelier travail", unitPrice: 800.00, unit: "jour", unitLabel: "jour" },
      { name: "Diagnostic entreprise", unitPrice: 2800.00, unit: "pc", unitLabel: "diagnostic" },
      { name: "Plan de transformation", unitPrice: 5500.00, unit: "pc", unitLabel: "plan" },
      { name: "Benchmark concurrentiel", unitPrice: 2200.00, unit: "pc", unitLabel: "benchmark" },
      { name: "Roadmap digitale", unitPrice: 3800.00, unit: "pc", unitLabel: "roadmap" },
      { name: "Support mensuel", unitPrice: 2000.00, unit: "mois", unitLabel: "mois" }
    ],
    nl: [
      { name: "Strategisch analyserapport", unitPrice: 2500.00, unit: "pc", unitLabel: "rapport" },
      { name: "Marktonderzoek", unitPrice: 4500.00, unit: "pc", unitLabel: "studie" },
      { name: "Strategisch plan", unitPrice: 8500.00, unit: "pc", unitLabel: "plan" },
      { name: "Samenvattend document", unitPrice: 1200.00, unit: "pc", unitLabel: "document" },
      { name: "Strategisch advies", unitPrice: 180.00, unit: "h", unitLabel: "uur" },
      { name: "Projectbegeleiding", unitPrice: 150.00, unit: "h", unitLabel: "uur" },
      { name: "Organisatie-audit", unitPrice: 3200.00, unit: "pc", unitLabel: "audit" },
      { name: "Managementtraining", unitPrice: 1200.00, unit: "jour", unitLabel: "dag" },
      { name: "Leiderschapscoaching", unitPrice: 350.00, unit: "h", unitLabel: "uur" },
      { name: "Werkatelier", unitPrice: 800.00, unit: "jour", unitLabel: "dag" },
      { name: "Bedrijfsdiagnose", unitPrice: 2800.00, unit: "pc", unitLabel: "diagnose" },
      { name: "Transformatieplan", unitPrice: 5500.00, unit: "pc", unitLabel: "plan" },
      { name: "Concurrentiebenchmark", unitPrice: 2200.00, unit: "pc", unitLabel: "benchmark" },
      { name: "Digitale roadmap", unitPrice: 3800.00, unit: "pc", unitLabel: "roadmap" },
      { name: "Maandelijkse ondersteuning", unitPrice: 2000.00, unit: "mois", unitLabel: "maand" }
    ],
    de: [
      { name: "Strategischer Analysebericht", unitPrice: 2500.00, unit: "pc", unitLabel: "Bericht" },
      { name: "Marktstudie", unitPrice: 4500.00, unit: "pc", unitLabel: "Studie" },
      { name: "Strategischer Plan", unitPrice: 8500.00, unit: "pc", unitLabel: "Plan" },
      { name: "Zusammenfassungsdokument", unitPrice: 1200.00, unit: "pc", unitLabel: "Dokument" },
      { name: "Strategische Beratung", unitPrice: 180.00, unit: "h", unitLabel: "Stunde" },
      { name: "Projektbegleitung", unitPrice: 150.00, unit: "h", unitLabel: "Stunde" },
      { name: "Organisationsaudit", unitPrice: 3200.00, unit: "pc", unitLabel: "Audit" },
      { name: "Management-Schulung", unitPrice: 1200.00, unit: "jour", unitLabel: "Tag" },
      { name: "Führungskräfte-Coaching", unitPrice: 350.00, unit: "h", unitLabel: "Stunde" },
      { name: "Workshop", unitPrice: 800.00, unit: "jour", unitLabel: "Tag" },
      { name: "Unternehmensdiagnose", unitPrice: 2800.00, unit: "pc", unitLabel: "Diagnose" },
      { name: "Transformationsplan", unitPrice: 5500.00, unit: "pc", unitLabel: "Plan" },
      { name: "Wettbewerbsbenchmark", unitPrice: 2200.00, unit: "pc", unitLabel: "Benchmark" },
      { name: "Digitale Roadmap", unitPrice: 3800.00, unit: "pc", unitLabel: "Roadmap" },
      { name: "Monatliche Unterstützung", unitPrice: 2000.00, unit: "mois", unitLabel: "Monat" }
    ],
    en: [
      { name: "Strategic Analysis Report", unitPrice: 2500.00, unit: "pc", unitLabel: "report" },
      { name: "Market Study", unitPrice: 4500.00, unit: "pc", unitLabel: "study" },
      { name: "Strategic Plan", unitPrice: 8500.00, unit: "pc", unitLabel: "plan" },
      { name: "Summary Document", unitPrice: 1200.00, unit: "pc", unitLabel: "document" },
      { name: "Strategic Consulting", unitPrice: 180.00, unit: "h", unitLabel: "hour" },
      { name: "Project Support", unitPrice: 150.00, unit: "h", unitLabel: "hour" },
      { name: "Organizational Audit", unitPrice: 3200.00, unit: "pc", unitLabel: "audit" },
      { name: "Management Training", unitPrice: 1200.00, unit: "jour", unitLabel: "day" },
      { name: "Executive Coaching", unitPrice: 350.00, unit: "h", unitLabel: "hour" },
      { name: "Workshop", unitPrice: 800.00, unit: "jour", unitLabel: "day" },
      { name: "Business Diagnosis", unitPrice: 2800.00, unit: "pc", unitLabel: "diagnosis" },
      { name: "Transformation Plan", unitPrice: 5500.00, unit: "pc", unitLabel: "plan" },
      { name: "Competitive Benchmark", unitPrice: 2200.00, unit: "pc", unitLabel: "benchmark" },
      { name: "Digital Roadmap", unitPrice: 3800.00, unit: "pc", unitLabel: "roadmap" },
      { name: "Monthly Support", unitPrice: 2000.00, unit: "mois", unitLabel: "month" }
    ]
  },

  construction: {
    fr: [
      { name: "Sac de ciment (25kg)", unitPrice: 12.50, unit: "pc", unitLabel: "sac" },
      { name: "Palette de briques", unitPrice: 450.00, unit: "pc", unitLabel: "palette" },
      { name: "Poutre métallique HEB", unitPrice: 180.00, unit: "m", unitLabel: "mètre" },
      { name: "Carrelage (m²)", unitPrice: 35.00, unit: "m2", unitLabel: "m²" },
      { name: "Peinture intérieure (10L)", unitPrice: 89.00, unit: "pc", unitLabel: "pot" },
      { name: "Main d'œuvre maçon", unitPrice: 55.00, unit: "h", unitLabel: "heure" },
      { name: "Main d'œuvre électricien", unitPrice: 65.00, unit: "h", unitLabel: "heure" },
      { name: "Location échafaudage (semaine)", unitPrice: 280.00, unit: "pc", unitLabel: "semaine" },
      { name: "Sable (tonne)", unitPrice: 65.00, unit: "pc", unitLabel: "tonne" },
      { name: "Gravier (tonne)", unitPrice: 58.00, unit: "pc", unitLabel: "tonne" },
      { name: "Plaque de plâtre BA13", unitPrice: 8.50, unit: "m2", unitLabel: "plaque" },
      { name: "Isolation laine de verre", unitPrice: 22.00, unit: "m2", unitLabel: "m²" },
      { name: "Fenêtre PVC standard", unitPrice: 450.00, unit: "pc", unitLabel: "fenêtre" },
      { name: "Porte intérieure", unitPrice: 280.00, unit: "pc", unitLabel: "porte" },
      { name: "Toiture tuiles (m²)", unitPrice: 85.00, unit: "m2", unitLabel: "m²" }
    ],
    nl: [
      { name: "Zak cement (25kg)", unitPrice: 12.50, unit: "pc", unitLabel: "zak" },
      { name: "Pallet bakstenen", unitPrice: 450.00, unit: "pc", unitLabel: "pallet" },
      { name: "Metalen balk HEB", unitPrice: 180.00, unit: "m", unitLabel: "meter" },
      { name: "Tegels (m²)", unitPrice: 35.00, unit: "m2", unitLabel: "m²" },
      { name: "Binnenverf (10L)", unitPrice: 89.00, unit: "pc", unitLabel: "pot" },
      { name: "Metsersarbeid", unitPrice: 55.00, unit: "h", unitLabel: "uur" },
      { name: "Elektriciensarbeid", unitPrice: 65.00, unit: "h", unitLabel: "uur" },
      { name: "Steigerhuur (week)", unitPrice: 280.00, unit: "pc", unitLabel: "week" },
      { name: "Zand (ton)", unitPrice: 65.00, unit: "pc", unitLabel: "ton" },
      { name: "Grind (ton)", unitPrice: 58.00, unit: "pc", unitLabel: "ton" },
      { name: "Gipsplaat BA13", unitPrice: 8.50, unit: "pc", unitLabel: "plaat" },
      { name: "Glaswol isolatie", unitPrice: 22.00, unit: "m2", unitLabel: "m²" },
      { name: "PVC raam standaard", unitPrice: 450.00, unit: "pc", unitLabel: "raam" },
      { name: "Binnendeur", unitPrice: 280.00, unit: "pc", unitLabel: "deur" },
      { name: "Dakpannen (m²)", unitPrice: 85.00, unit: "m2", unitLabel: "m²" }
    ],
    de: [
      { name: "Zementsack (25kg)", unitPrice: 12.50, unit: "pc", unitLabel: "Sack" },
      { name: "Ziegelpalette", unitPrice: 450.00, unit: "pc", unitLabel: "Palette" },
      { name: "Stahlträger HEB", unitPrice: 180.00, unit: "m", unitLabel: "Meter" },
      { name: "Fliesen (m²)", unitPrice: 35.00, unit: "m2", unitLabel: "m²" },
      { name: "Innenfarbe (10L)", unitPrice: 89.00, unit: "pc", unitLabel: "Eimer" },
      { name: "Maurerarbeit", unitPrice: 55.00, unit: "h", unitLabel: "Stunde" },
      { name: "Elektrikerarbeit", unitPrice: 65.00, unit: "h", unitLabel: "Stunde" },
      { name: "Gerüstmiete (Woche)", unitPrice: 280.00, unit: "pc", unitLabel: "Woche" },
      { name: "Sand (Tonne)", unitPrice: 65.00, unit: "pc", unitLabel: "Tonne" },
      { name: "Kies (Tonne)", unitPrice: 58.00, unit: "pc", unitLabel: "Tonne" },
      { name: "Gipskartonplatte BA13", unitPrice: 8.50, unit: "pc", unitLabel: "Platte" },
      { name: "Glaswolldämmung", unitPrice: 22.00, unit: "m2", unitLabel: "m²" },
      { name: "PVC-Fenster Standard", unitPrice: 450.00, unit: "pc", unitLabel: "Fenster" },
      { name: "Innentür", unitPrice: 280.00, unit: "pc", unitLabel: "Tür" },
      { name: "Dachziegel (m²)", unitPrice: 85.00, unit: "m2", unitLabel: "m²" }
    ],
    en: [
      { name: "Cement Bag (25kg)", unitPrice: 12.50, unit: "pc", unitLabel: "bag" },
      { name: "Brick Pallet", unitPrice: 450.00, unit: "pc", unitLabel: "pallet" },
      { name: "Steel Beam HEB", unitPrice: 180.00, unit: "m", unitLabel: "meter" },
      { name: "Tiles (m²)", unitPrice: 35.00, unit: "m2", unitLabel: "m²" },
      { name: "Interior Paint (10L)", unitPrice: 89.00, unit: "pc", unitLabel: "bucket" },
      { name: "Mason Labor", unitPrice: 55.00, unit: "h", unitLabel: "hour" },
      { name: "Electrician Labor", unitPrice: 65.00, unit: "h", unitLabel: "hour" },
      { name: "Scaffolding Rental (week)", unitPrice: 280.00, unit: "pc", unitLabel: "week" },
      { name: "Sand (ton)", unitPrice: 65.00, unit: "pc", unitLabel: "ton" },
      { name: "Gravel (ton)", unitPrice: 58.00, unit: "pc", unitLabel: "ton" },
      { name: "Plasterboard BA13", unitPrice: 8.50, unit: "pc", unitLabel: "sheet" },
      { name: "Glass Wool Insulation", unitPrice: 22.00, unit: "m2", unitLabel: "m²" },
      { name: "PVC Window Standard", unitPrice: 450.00, unit: "pc", unitLabel: "window" },
      { name: "Interior Door", unitPrice: 280.00, unit: "pc", unitLabel: "door" },
      { name: "Roof Tiles (m²)", unitPrice: 85.00, unit: "m2", unitLabel: "m²" }
    ]
  }
};

// Additional sectors (9 more to reach 15 total)
const additionalProducts2 = {
  plumbing: {
    fr: [
      { name: "Robinet mitigeur", unitPrice: 45.00, unit: "pc", unitLabel: "pièce" },
      { name: "WC suspendu", unitPrice: 320.00, unit: "pc", unitLabel: "pièce" },
      { name: "Lavabo + colonne", unitPrice: 180.00, unit: "pc", unitLabel: "pièce" },
      { name: "Douche italienne", unitPrice: 850.00, unit: "pc", unitLabel: "pièce" },
      { name: "Baignoire acrylique", unitPrice: 450.00, unit: "pc", unitLabel: "pièce" },
      { name: "Chauffe-eau électrique", unitPrice: 380.00, unit: "pc", unitLabel: "pièce" },
      { name: "Tuyau cuivre (mètre)", unitPrice: 12.50, unit: "m", unitLabel: "mètre" },
      { name: "Raccords plomberie (lot)", unitPrice: 25.00, unit: "pc", unitLabel: "lot" },
      { name: "Pompe de relevage", unitPrice: 280.00, unit: "pc", unitLabel: "pièce" },
      { name: "Débouchage canalisation", unitPrice: 120.00, unit: "pc", unitLabel: "intervention" },
      { name: "Main d'œuvre plombier", unitPrice: 65.00, unit: "h", unitLabel: "heure" },
      { name: "Installation sanitaire", unitPrice: 450.00, unit: "pc", unitLabel: "forfait" },
      { name: "Adoucisseur d'eau", unitPrice: 890.00, unit: "pc", unitLabel: "pièce" },
      { name: "Filtre à eau", unitPrice: 120.00, unit: "pc", unitLabel: "pièce" },
      { name: "Chasse d'eau économique", unitPrice: 85.00, unit: "pc", unitLabel: "pièce" }
    ],
    nl: [
      { name: "Mengkraan", unitPrice: 45.00, unit: "pc", unitLabel: "stuk" },
      { name: "Hangend toilet", unitPrice: 320.00, unit: "pc", unitLabel: "stuk" },
      { name: "Wastafel + zuil", unitPrice: 180.00, unit: "pc", unitLabel: "stuk" },
      { name: "Italiaanse douche", unitPrice: 850.00, unit: "pc", unitLabel: "stuk" },
      { name: "Acryl bad", unitPrice: 450.00, unit: "pc", unitLabel: "stuk" },
      { name: "Elektrische boiler", unitPrice: 380.00, unit: "pc", unitLabel: "stuk" },
      { name: "Koperen pijp (meter)", unitPrice: 12.50, unit: "m", unitLabel: "meter" },
      { name: "Loodgietersbenodigdheden (set)", unitPrice: 25.00, unit: "pc", unitLabel: "set" },
      { name: "Hevelpomp", unitPrice: 280.00, unit: "pc", unitLabel: "stuk" },
      { name: "Ontstopping", unitPrice: 120.00, unit: "pc", unitLabel: "interventie" },
      { name: "Loodgieterswerk", unitPrice: 65.00, unit: "h", unitLabel: "uur" },
      { name: "Sanitaire installatie", unitPrice: 450.00, unit: "pc", unitLabel: "forfait" },
      { name: "Waterverzachter", unitPrice: 890.00, unit: "pc", unitLabel: "stuk" },
      { name: "Waterfilter", unitPrice: 120.00, unit: "pc", unitLabel: "stuk" },
      { name: "Economisch spoelsysteem", unitPrice: 85.00, unit: "pc", unitLabel: "stuk" }
    ],
    de: [
      { name: "Mischbatterie", unitPrice: 45.00, unit: "pc", unitLabel: "Stück" },
      { name: "Wand-WC", unitPrice: 320.00, unit: "pc", unitLabel: "Stück" },
      { name: "Waschbecken + Säule", unitPrice: 180.00, unit: "pc", unitLabel: "Stück" },
      { name: "Begehbare Dusche", unitPrice: 850.00, unit: "pc", unitLabel: "Stück" },
      { name: "Acrylwanne", unitPrice: 450.00, unit: "pc", unitLabel: "Stück" },
      { name: "Elektrospeicher", unitPrice: 380.00, unit: "pc", unitLabel: "Stück" },
      { name: "Kupferrohr (Meter)", unitPrice: 12.50, unit: "m", unitLabel: "Meter" },
      { name: "Klempnerzubehör (Set)", unitPrice: 25.00, unit: "pc", unitLabel: "Set" },
      { name: "Hebeanlage", unitPrice: 280.00, unit: "pc", unitLabel: "Stück" },
      { name: "Rohrreinigung", unitPrice: 120.00, unit: "pc", unitLabel: "Einsatz" },
      { name: "Klempnerarbeit", unitPrice: 65.00, unit: "h", unitLabel: "Stunde" },
      { name: "Sanitärinstallation", unitPrice: 450.00, unit: "pc", unitLabel: "Pauschal" },
      { name: "Wasserenthärter", unitPrice: 890.00, unit: "pc", unitLabel: "Stück" },
      { name: "Wasserfilter", unitPrice: 120.00, unit: "pc", unitLabel: "Stück" },
      { name: "Spül-Stopp-Wasserspargerät", unitPrice: 85.00, unit: "pc", unitLabel: "Stück" }
    ],
    en: [
      { name: "Mixer Tap", unitPrice: 45.00, unit: "pc", unitLabel: "piece" },
      { name: "Wall-hung Toilet", unitPrice: 320.00, unit: "pc", unitLabel: "piece" },
      { name: "Washbasin + Pedestal", unitPrice: 180.00, unit: "pc", unitLabel: "piece" },
      { name: "Walk-in Shower", unitPrice: 850.00, unit: "pc", unitLabel: "piece" },
      { name: "Acrylic Bathtub", unitPrice: 450.00, unit: "pc", unitLabel: "piece" },
      { name: "Electric Water Heater", unitPrice: 380.00, unit: "pc", unitLabel: "piece" },
      { name: "Copper Pipe (meter)", unitPrice: 12.50, unit: "m", unitLabel: "meter" },
      { name: "Plumbing Fittings (set)", unitPrice: 25.00, unit: "pc", unitLabel: "set" },
      { name: "Lifting Pump", unitPrice: 280.00, unit: "pc", unitLabel: "piece" },
      { name: "Drain Unblocking", unitPrice: 120.00, unit: "pc", unitLabel: "service" },
      { name: "Plumber Labor", unitPrice: 65.00, unit: "h", unitLabel: "hour" },
      { name: "Sanitary Installation", unitPrice: 450.00, unit: "pc", unitLabel: "package" },
      { name: "Water Softener", unitPrice: 890.00, unit: "pc", unitLabel: "piece" },
      { name: "Water Filter", unitPrice: 120.00, unit: "pc", unitLabel: "piece" },
      { name: "Dual Flush System", unitPrice: 85.00, unit: "pc", unitLabel: "piece" }
    ]
  },

  electrician: {
    fr: [
      { name: "Tableau électrique", unitPrice: 350.00, unit: "pc", unitLabel: "pièce" },
      { name: "Disjoncteur", unitPrice: 45.00, unit: "pc", unitLabel: "pièce" },
      { name: "Prise électrique", unitPrice: 8.50, unit: "pc", unitLabel: "pièce" },
      { name: "Interrupteur", unitPrice: 12.00, unit: "pc", unitLabel: "pièce" },
      { name: "Câble électrique (mètre)", unitPrice: 3.20, unit: "m", unitLabel: "mètre" },
      { name: "Boîtier encastré", unitPrice: 6.50, unit: "pc", unitLabel: "pièce" },
      { name: "Plafonnier LED", unitPrice: 89.00, unit: "pc", unitLabel: "pièce" },
      { name: "Spot encastrable", unitPrice: 25.00, unit: "pc", unitLabel: "pièce" },
      { name: "Ventilateur extracteur", unitPrice: 120.00, unit: "pc", unitLabel: "pièce" },
      { name: "Interphone vidéo", unitPrice: 380.00, unit: "pc", unitLabel: "pièce" },
      { name: "Domotique (pack)", unitPrice: 1200.00, unit: "pc", unitLabel: "pack" },
      { name: "Main d'œuvre électricien", unitPrice: 65.00, unit: "h", unitLabel: "heure" },
      { name: "Mise aux normes électrique", unitPrice: 850.00, unit: "pc", unitLabel: "forfait" },
      { name: "Réalisation schéma électrique", unitPrice: 450.00, unit: "pc", unitLabel: "forfait" },
      { name: "Diagnostic électrique", unitPrice: 180.00, unit: "pc", unitLabel: "forfait" }
    ],
    nl: [
      { name: "Elektrische kast", unitPrice: 350.00, unit: "pc", unitLabel: "stuk" },
      { name: "Automaat", unitPrice: 45.00, unit: "pc", unitLabel: "stuk" },
      { name: "Stopcontact", unitPrice: 8.50, unit: "pc", unitLabel: "stuk" },
      { name: "Schakelaar", unitPrice: 12.00, unit: "pc", unitLabel: "stuk" },
      { name: "Elektrische kabel (meter)", unitPrice: 3.20, unit: "m", unitLabel: "meter" },
      { name: "Inbouwdoos", unitPrice: 6.50, unit: "pc", unitLabel: "stuk" },
      { name: "LED plafondlamp", unitPrice: 89.00, unit: "pc", unitLabel: "stuk" },
      { name: "Inbouwspot", unitPrice: 25.00, unit: "pc", unitLabel: "stuk" },
      { name: "Afzuigventilator", unitPrice: 120.00, unit: "pc", unitLabel: "stuk" },
      { name: "Video-intercom", unitPrice: 380.00, unit: "pc", unitLabel: "stuk" },
      { name: "Domotica (pakket)", unitPrice: 1200.00, unit: "pc", unitLabel: "pakket" },
      { name: "Elektricienswerk", unitPrice: 65.00, unit: "h", unitLabel: "uur" },
      { name: "Elektrische normalisatie", unitPrice: 850.00, unit: "pc", unitLabel: "forfait" },
      { name: "Elektrisch schema", unitPrice: 450.00, unit: "pc", unitLabel: "forfait" },
      { name: "Elektrische diagnose", unitPrice: 180.00, unit: "pc", unitLabel: "forfait" }
    ],
    de: [
      { name: "Elektroverteiler", unitPrice: 350.00, unit: "pc", unitLabel: "Stück" },
      { name: "Leitungsschutzschalter", unitPrice: 45.00, unit: "pc", unitLabel: "Stück" },
      { name: "Steckdose", unitPrice: 8.50, unit: "pc", unitLabel: "Stück" },
      { name: "Schalter", unitPrice: 12.00, unit: "pc", unitLabel: "Stück" },
      { name: "Elektrokabel (Meter)", unitPrice: 3.20, unit: "m", unitLabel: "Meter" },
      { name: "Unterputzdose", unitPrice: 6.50, unit: "pc", unitLabel: "Stück" },
      { name: "LED-Deckenleuchte", unitPrice: 89.00, unit: "pc", unitLabel: "Stück" },
      { name: "Einbauspot", unitPrice: 25.00, unit: "pc", unitLabel: "Stück" },
      { name: "Abluftventilator", unitPrice: 120.00, unit: "pc", unitLabel: "Stück" },
      { name: "Video-Gegensprechanlage", unitPrice: 380.00, unit: "pc", unitLabel: "Stück" },
      { name: "Hausautomation (Paket)", unitPrice: 1200.00, unit: "pc", unitLabel: "Paket" },
      { name: "Elektrikerarbeit", unitPrice: 65.00, unit: "h", unitLabel: "Stunde" },
      { name: "Elektrische Normkonformität", unitPrice: 850.00, unit: "pc", unitLabel: "Pauschal" },
      { name: "Elektrischer Schaltplan", unitPrice: 450.00, unit: "pc", unitLabel: "Pauschal" },
      { name: "Elektrische Diagnose", unitPrice: 180.00, unit: "pc", unitLabel: "Pauschal" }
    ],
    en: [
      { name: "Electrical Panel", unitPrice: 350.00, unit: "pc", unitLabel: "piece" },
      { name: "Circuit Breaker", unitPrice: 45.00, unit: "pc", unitLabel: "piece" },
      { name: "Power Outlet", unitPrice: 8.50, unit: "pc", unitLabel: "piece" },
      { name: "Light Switch", unitPrice: 12.00, unit: "pc", unitLabel: "piece" },
      { name: "Electrical Cable (meter)", unitPrice: 3.20, unit: "m", unitLabel: "meter" },
      { name: "Junction Box", unitPrice: 6.50, unit: "pc", unitLabel: "piece" },
      { name: "LED Ceiling Light", unitPrice: 89.00, unit: "pc", unitLabel: "piece" },
      { name: "Recessed Spot", unitPrice: 25.00, unit: "pc", unitLabel: "piece" },
      { name: "Extractor Fan", unitPrice: 120.00, unit: "pc", unitLabel: "piece" },
      { name: "Video Intercom", unitPrice: 380.00, unit: "pc", unitLabel: "piece" },
      { name: "Home Automation (pack)", unitPrice: 1200.00, unit: "pc", unitLabel: "pack" },
      { name: "Electrician Labor", unitPrice: 65.00, unit: "h", unitLabel: "hour" },
      { name: "Electrical Compliance", unitPrice: 850.00, unit: "pc", unitLabel: "package" },
      { name: "Electrical Diagram", unitPrice: 450.00, unit: "pc", unitLabel: "package" },
      { name: "Electrical Diagnostic", unitPrice: 180.00, unit: "pc", unitLabel: "package" }
    ]
  },

  carpentry: {
    fr: [
      { name: "Porte en bois massif", unitPrice: 450.00, unit: "pc", unitLabel: "pièce" },
      { name: "Fenêtre en chêne", unitPrice: 680.00, unit: "pc", unitLabel: "pièce" },
      { name: "Escalier sur mesure", unitPrice: 3500.00, unit: "pc", unitLabel: "pièce" },
      { name: "Placard dressing", unitPrice: 1200.00, unit: "pc", unitLabel: "pièce" },
      { name: "Bibliothèque sur mesure", unitPrice: 850.00, unit: "pc", unitLabel: "pièce" },
      { name: "Parquet chêne (m²)", unitPrice: 65.00, unit: "m2", unitLabel: "m²" },
      { name: "Lambris mural (m²)", unitPrice: 35.00, unit: "m2", unitLabel: "m²" },
      { name: "Charpente traditionnelle", unitPrice: 8500.00, unit: "pc", unitLabel: "forfait" },
      { name: "Rénovation meuble", unitPrice: 450.00, unit: "pc", unitLabel: "pièce" },
      { name: "Table sur mesure", unitPrice: 680.00, unit: "pc", unitLabel: "pièce" },
      { name: "Chaise en bois", unitPrice: 120.00, unit: "pc", unitLabel: "pièce" },
      { name: "Main d'œuvre menuisier", unitPrice: 55.00, unit: "h", unitLabel: "heure" },
      { name: "Vernissage/staining", unitPrice: 35.00, unit: "m2", unitLabel: "m²" },
      { name: "Découpe sur mesure", unitPrice: 25.00, unit: "pc", unitLabel: "pièce" },
      { name: "Pose parquet", unitPrice: 28.00, unit: "m2", unitLabel: "m²" }
    ],
    nl: [
      { name: "Massief houten deur", unitPrice: 450.00, unit: "pc", unitLabel: "stuk" },
      { name: "Eiken raam", unitPrice: 680.00, unit: "pc", unitLabel: "stuk" },
      { name: "Trap op maat", unitPrice: 3500.00, unit: "pc", unitLabel: "stuk" },
      { name: "Inloopkast", unitPrice: 1200.00, unit: "pc", unitLabel: "stuk" },
      { name: "Boekenkast op maat", unitPrice: 850.00, unit: "pc", unitLabel: "stuk" },
      { name: "Eiken parket (m²)", unitPrice: 65.00, unit: "m2", unitLabel: "m²" },
      { name: "Lambrisering (m²)", unitPrice: 35.00, unit: "m2", unitLabel: "m²" },
      { name: "Traditionele kap", unitPrice: 8500.00, unit: "pc", unitLabel: "forfait" },
      { name: "Meubelrenovatie", unitPrice: 450.00, unit: "pc", unitLabel: "stuk" },
      { name: "Tafel op maat", unitPrice: 680.00, unit: "pc", unitLabel: "stuk" },
      { name: "Houten stoel", unitPrice: 120.00, unit: "pc", unitLabel: "stuk" },
      { name: "Schrijnwerkerswerk", unitPrice: 55.00, unit: "h", unitLabel: "uur" },
      { name: "Lakken/beitsen", unitPrice: 35.00, unit: "m2", unitLabel: "m²" },
      { name: "Op maat zagen", unitPrice: 25.00, unit: "pc", unitLabel: "stuk" },
      { name: "Parket leggen", unitPrice: 28.00, unit: "m2", unitLabel: "m²" }
    ],
    de: [
      { name: "Massivholztür", unitPrice: 450.00, unit: "pc", unitLabel: "Stück" },
      { name: "Eichenfenster", unitPrice: 680.00, unit: "pc", unitLabel: "Stück" },
      { name: "Maßgefertigte Treppe", unitPrice: 3500.00, unit: "pc", unitLabel: "Stück" },
      { name: "Einbauschrank", unitPrice: 1200.00, unit: "pc", unitLabel: "Stück" },
      { name: "Maßgefertigtes Bücherregal", unitPrice: 850.00, unit: "pc", unitLabel: "Stück" },
      { name: "Eichenparkett (m²)", unitPrice: 65.00, unit: "m2", unitLabel: "m²" },
      { name: "Wandvertäfelung (m²)", unitPrice: 35.00, unit: "m2", unitLabel: "m²" },
      { name: "Traditioneller Dachstuhl", unitPrice: 8500.00, unit: "pc", unitLabel: "Pauschal" },
      { name: "Möbelrestaurierung", unitPrice: 450.00, unit: "pc", unitLabel: "Stück" },
      { name: "Maßgefertigter Tisch", unitPrice: 680.00, unit: "pc", unitLabel: "Stück" },
      { name: "Holzstuhl", unitPrice: 120.00, unit: "pc", unitLabel: "Stück" },
      { name: "Schreinerarbeit", unitPrice: 55.00, unit: "h", unitLabel: "Stunde" },
      { name: "Lackieren/Beizen", unitPrice: 35.00, unit: "m2", unitLabel: "m²" },
      { name: "Maßzuschnitt", unitPrice: 25.00, unit: "pc", unitLabel: "Stück" },
      { name: "Parkettverlegung", unitPrice: 28.00, unit: "m2", unitLabel: "m²" }
    ],
    en: [
      { name: "Solid Wood Door", unitPrice: 450.00, unit: "pc", unitLabel: "piece" },
      { name: "Oak Window", unitPrice: 680.00, unit: "pc", unitLabel: "piece" },
      { name: "Custom Staircase", unitPrice: 3500.00, unit: "pc", unitLabel: "piece" },
      { name: "Walk-in Closet", unitPrice: 1200.00, unit: "pc", unitLabel: "piece" },
      { name: "Custom Bookshelf", unitPrice: 850.00, unit: "pc", unitLabel: "piece" },
      { name: "Oak Parquet (m²)", unitPrice: 65.00, unit: "m2", unitLabel: "m²" },
      { name: "Wall Paneling (m²)", unitPrice: 35.00, unit: "m2", unitLabel: "m²" },
      { name: "Traditional Roof Frame", unitPrice: 8500.00, unit: "pc", unitLabel: "package" },
      { name: "Furniture Restoration", unitPrice: 450.00, unit: "pc", unitLabel: "piece" },
      { name: "Custom Table", unitPrice: 680.00, unit: "pc", unitLabel: "piece" },
      { name: "Wooden Chair", unitPrice: 120.00, unit: "pc", unitLabel: "piece" },
      { name: "Carpenter Labor", unitPrice: 55.00, unit: "h", unitLabel: "hour" },
      { name: "Varnishing/Staining", unitPrice: 35.00, unit: "m2", unitLabel: "m²" },
      { name: "Custom Cutting", unitPrice: 25.00, unit: "pc", unitLabel: "piece" },
      { name: "Parquet Installation", unitPrice: 28.00, unit: "m2", unitLabel: "m²" }
    ]
  },

  hairdressing: {
    fr: [
      { name: "Coupe homme", unitPrice: 25.00, unit: "pc", unitLabel: "prestation" },
      { name: "Coupe femme", unitPrice: 35.00, unit: "pc", unitLabel: "prestation" },
      { name: "Brushing", unitPrice: 28.00, unit: "pc", unitLabel: "prestation" },
      { name: "Coloration", unitPrice: 55.00, unit: "pc", unitLabel: "prestation" },
      { name: "Mèches/balayage", unitPrice: 75.00, unit: "pc", unitLabel: "prestation" },
      { name: "Défrisage", unitPrice: 85.00, unit: "pc", unitLabel: "prestation" },
      { name: "Permanente", unitPrice: 65.00, unit: "pc", unitLabel: "prestation" },
      { name: "Chignon soirée", unitPrice: 45.00, unit: "pc", unitLabel: "prestation" },
      { name: "Shampooing traitant", unitPrice: 15.00, unit: "pc", unitLabel: "prestation" },
      { name: "Soin profond", unitPrice: 25.00, unit: "pc", unitLabel: "prestation" },
      { name: "Forfait mariage", unitPrice: 250.00, unit: "pc", unitLabel: "forfait" },
      { name: "Produit coiffant", unitPrice: 18.50, unit: "pc", unitLabel: "flacon" },
      { name: "Sérum cheveux", unitPrice: 24.90, unit: "pc", unitLabel: "flacon" },
      { name: "Pack soin complet", unitPrice: 120.00, unit: "pc", unitLabel: "forfait" },
      { name: "Carte fidélité (10 coupes)", unitPrice: 220.00, unit: "pc", unitLabel: "carte" }
    ],
    nl: [
      { name: "Herenknipbeurt", unitPrice: 25.00, unit: "pc", unitLabel: "prestatie" },
      { name: "Damesknipbeurt", unitPrice: 35.00, unit: "pc", unitLabel: "prestatie" },
      { name: "Föhnen", unitPrice: 28.00, unit: "pc", unitLabel: "prestatie" },
      { name: "Kleuring", unitPrice: 55.00, unit: "pc", unitLabel: "prestatie" },
      { name: "Highlights/balayage", unitPrice: 75.00, unit: "pc", unitLabel: "prestatie" },
      { name: "Stijltang", unitPrice: 85.00, unit: "pc", unitLabel: "prestatie" },
      { name: "Permanent", unitPrice: 65.00, unit: "pc", unitLabel: "prestatie" },
      { name: "Avondkapsel", unitPrice: 45.00, unit: "pc", unitLabel: "prestatie" },
      { name: "Behandelende shampoo", unitPrice: 15.00, unit: "pc", unitLabel: "prestatie" },
      { name: "Diepgaande verzorging", unitPrice: 25.00, unit: "pc", unitLabel: "prestatie" },
      { name: "Bruidspakket", unitPrice: 250.00, unit: "pc", unitLabel: "forfait" },
      { name: "Stylingproduct", unitPrice: 18.50, unit: "pc", unitLabel: "flesje" },
      { name: "Haarserum", unitPrice: 24.90, unit: "pc", unitLabel: "flesje" },
      { name: "Complete verzorgingspakket", unitPrice: 120.00, unit: "pc", unitLabel: "forfait" },
      { name: "Trouwkaart (10 knipbeurten)", unitPrice: 220.00, unit: "pc", unitLabel: "kaart" }
    ],
    de: [
      { name: "Herrenhaarschnitt", unitPrice: 25.00, unit: "pc", unitLabel: "Dienstleistung" },
      { name: "Damenhaarschnitt", unitPrice: 35.00, unit: "pc", unitLabel: "Dienstleistung" },
      { name: "Föhnen/Styling", unitPrice: 28.00, unit: "pc", unitLabel: "Dienstleistung" },
      { name: "Färbung", unitPrice: 55.00, unit: "pc", unitLabel: "Dienstleistung" },
      { name: "Strähnen/Balayage", unitPrice: 75.00, unit: "pc", unitLabel: "Dienstleistung" },
      { name: "Glättung", unitPrice: 85.00, unit: "pc", unitLabel: "Dienstleistung" },
      { name: "Dauerwelle", unitPrice: 65.00, unit: "pc", unitLabel: "Dienstleistung" },
      { name: "Abendfrisur", unitPrice: 45.00, unit: "pc", unitLabel: "Dienstleistung" },
      { name: "Kurshampoo", unitPrice: 15.00, unit: "pc", unitLabel: "Dienstleistung" },
      { name: "Intensivpflege", unitPrice: 25.00, unit: "pc", unitLabel: "Dienstleistung" },
      { name: "Hochzeitspaket", unitPrice: 250.00, unit: "pc", unitLabel: "Pauschal" },
      { name: "Stylingprodukt", unitPrice: 18.50, unit: "pc", unitLabel: "Flakon" },
      { name: "Haarserum", unitPrice: 24.90, unit: "pc", unitLabel: "Flakon" },
      { name: "Komplettpaket", unitPrice: 120.00, unit: "pc", unitLabel: "Pauschal" },
      { name: "Treuekarte (10 Schnitte)", unitPrice: 220.00, unit: "pc", unitLabel: "Karte" }
    ],
    en: [
      { name: "Men's Haircut", unitPrice: 25.00, unit: "pc", unitLabel: "service" },
      { name: "Women's Haircut", unitPrice: 35.00, unit: "pc", unitLabel: "service" },
      { name: "Blow Dry", unitPrice: 28.00, unit: "pc", unitLabel: "service" },
      { name: "Coloring", unitPrice: 55.00, unit: "pc", unitLabel: "service" },
      { name: "Highlights/balayage", unitPrice: 75.00, unit: "pc", unitLabel: "service" },
      { name: "Hair Straightening", unitPrice: 85.00, unit: "pc", unitLabel: "service" },
      { name: "Perm", unitPrice: 65.00, unit: "pc", unitLabel: "service" },
      { name: "Evening Hairstyle", unitPrice: 45.00, unit: "pc", unitLabel: "service" },
      { name: "Treatment Shampoo", unitPrice: 15.00, unit: "pc", unitLabel: "service" },
      { name: "Deep Conditioning", unitPrice: 25.00, unit: "pc", unitLabel: "service" },
      { name: "Wedding Package", unitPrice: 250.00, unit: "pc", unitLabel: "package" },
      { name: "Styling Product", unitPrice: 18.50, unit: "pc", unitLabel: "bottle" },
      { name: "Hair Serum", unitPrice: 24.90, unit: "pc", unitLabel: "bottle" },
      { name: "Complete Care Pack", unitPrice: 120.00, unit: "pc", unitLabel: "package" },
      { name: "Loyalty Card (10 cuts)", unitPrice: 220.00, unit: "pc", unitLabel: "card" }
    ]
  },

  automotive: {
    fr: [
      { name: "Révision complète", unitPrice: 180.00, unit: "pc", unitLabel: "forfait" },
      { name: "Vidange + filtres", unitPrice: 85.00, unit: "pc", unitLabel: "forfait" },
      { name: "Freins avant (remplacement)", unitPrice: 220.00, unit: "pc", unitLabel: "forfait" },
      { name: "Freins arrière (remplacement)", unitPrice: 190.00, unit: "pc", unitLabel: "forfait" },
      { name: "Pneu été (montage)", unitPrice: 65.00, unit: "pc", unitLabel: "pneu" },
      { name: "Pneu hiver (montage)", unitPrice: 75.00, unit: "pc", unitLabel: "pneu" },
      { name: "Parallélisme", unitPrice: 85.00, unit: "pc", unitLabel: "forfait" },
      { name: "Batterie", unitPrice: 180.00, unit: "pc", unitLabel: "pièce" },
      { name: "Alternateur", unitPrice: 350.00, unit: "pc", unitLabel: "pièce" },
      { name: "Démarreur", unitPrice: 280.00, unit: "pc", unitLabel: "pièce" },
      { name: "Embrayage", unitPrice: 650.00, unit: "pc", unitLabel: "pièce" },
      { name: "Courroie distribution", unitPrice: 450.00, unit: "pc", unitLabel: "pièce" },
      { name: "Diagnostic électronique", unitPrice: 65.00, unit: "pc", unitLabel: "forfait" },
      { name: "Climatisation (recharge)", unitPrice: 95.00, unit: "pc", unitLabel: "forfait" },
      { name: "Lavage premium", unitPrice: 25.00, unit: "pc", unitLabel: "prestation" }
    ],
    nl: [
      { name: "Volledige revisie", unitPrice: 180.00, unit: "pc", unitLabel: "forfait" },
      { name: "Olieverversing + filters", unitPrice: 85.00, unit: "pc", unitLabel: "forfait" },
      { name: "Voorremmen (vervanging)", unitPrice: 220.00, unit: "pc", unitLabel: "forfait" },
      { name: "Achterremmen (vervanging)", unitPrice: 190.00, unit: "pc", unitLabel: "forfait" },
      { name: "Zomerband (montage)", unitPrice: 65.00, unit: "pc", unitLabel: "band" },
      { name: "Winterband (montage)", unitPrice: 75.00, unit: "pc", unitLabel: "band" },
      { name: "Spooring", unitPrice: 85.00, unit: "pc", unitLabel: "forfait" },
      { name: "Accu", unitPrice: 180.00, unit: "pc", unitLabel: "stuk" },
      { name: "Dynamo", unitPrice: 350.00, unit: "pc", unitLabel: "stuk" },
      { name: "Startmotor", unitPrice: 280.00, unit: "pc", unitLabel: "stuk" },
      { name: "Koppeling", unitPrice: 650.00, unit: "pc", unitLabel: "stuk" },
      { name: "Distributieriem", unitPrice: 450.00, unit: "pc", unitLabel: "stuk" },
      { name: "Electronische diagnose", unitPrice: 65.00, unit: "pc", unitLabel: "forfait" },
      { name: "Airco (bijvullen)", unitPrice: 95.00, unit: "pc", unitLabel: "forfait" },
      { name: "Premium wasbeurt", unitPrice: 25.00, unit: "pc", unitLabel: "prestatie" }
    ],
    de: [
      { name: "Komplette Inspektion", unitPrice: 180.00, unit: "pc", unitLabel: "Pauschal" },
      { name: "Ölwechsel + Filter", unitPrice: 85.00, unit: "pc", unitLabel: "Pauschal" },
      { name: "Vorderbremsen (Ersatz)", unitPrice: 220.00, unit: "pc", unitLabel: "Pauschal" },
      { name: "Hinterbremsen (Ersatz)", unitPrice: 190.00, unit: "pc", unitLabel: "Pauschal" },
      { name: "Sommerreifen (Montage)", unitPrice: 65.00, unit: "pc", unitLabel: "Reifen" },
      { name: "Winterreifen (Montage)", unitPrice: 75.00, unit: "pc", unitLabel: "Reifen" },
      { name: "Achsvermessung", unitPrice: 85.00, unit: "pc", unitLabel: "Pauschal" },
      { name: "Batterie", unitPrice: 180.00, unit: "pc", unitLabel: "Stück" },
      { name: "Lichtmaschine", unitPrice: 350.00, unit: "pc", unitLabel: "Stück" },
      { name: "Anlasser", unitPrice: 280.00, unit: "pc", unitLabel: "Stück" },
      { name: "Kupplung", unitPrice: 650.00, unit: "pc", unitLabel: "Stück" },
      { name: "Zahnriemen", unitPrice: 450.00, unit: "pc", unitLabel: "Stück" },
      { name: "Elektronische Diagnose", unitPrice: 65.00, unit: "pc", unitLabel: "Pauschal" },
      { name: "Klimaanlage (Auffüllen)", unitPrice: 95.00, unit: "pc", unitLabel: "Pauschal" },
      { name: "Premium Wäsche", unitPrice: 25.00, unit: "pc", unitLabel: "Service" }
    ],
    en: [
      { name: "Full Service", unitPrice: 180.00, unit: "pc", unitLabel: "package" },
      { name: "Oil Change + Filters", unitPrice: 85.00, unit: "pc", unitLabel: "package" },
      { name: "Front Brakes (replacement)", unitPrice: 220.00, unit: "pc", unitLabel: "package" },
      { name: "Rear Brakes (replacement)", unitPrice: 190.00, unit: "pc", unitLabel: "package" },
      { name: "Summer Tire (fitting)", unitPrice: 65.00, unit: "pc", unitLabel: "tire" },
      { name: "Winter Tire (fitting)", unitPrice: 75.00, unit: "pc", unitLabel: "tire" },
      { name: "Wheel Alignment", unitPrice: 85.00, unit: "pc", unitLabel: "package" },
      { name: "Battery", unitPrice: 180.00, unit: "pc", unitLabel: "piece" },
      { name: "Alternator", unitPrice: 350.00, unit: "pc", unitLabel: "piece" },
      { name: "Starter Motor", unitPrice: 280.00, unit: "pc", unitLabel: "piece" },
      { name: "Clutch", unitPrice: 650.00, unit: "pc", unitLabel: "piece" },
      { name: "Timing Belt", unitPrice: 450.00, unit: "pc", unitLabel: "piece" },
      { name: "Electronic Diagnostic", unitPrice: 65.00, unit: "pc", unitLabel: "package" },
      { name: "AC Recharge", unitPrice: 95.00, unit: "pc", unitLabel: "package" },
      { name: "Premium Wash", unitPrice: 25.00, unit: "pc", unitLabel: "service" }
    ]
  },

  cleaning: {
    fr: [
      { name: "Nettoyage régulier (heure)", unitPrice: 28.00, unit: "h", unitLabel: "heure" },
      { name: "Nettoyage en profondeur", unitPrice: 350.00, unit: "pc", unitLabel: "forfait" },
      { name: "Nettoyage vitres", unitPrice: 85.00, unit: "pc", unitLabel: "forfait" },
      { name: "Nettoyage moquette", unitPrice: 120.00, unit: "pc", unitLabel: "forfait" },
      { name: "Désinfection", unitPrice: 150.00, unit: "pc", unitLabel: "forfait" },
      { name: "Nettoyage après chantier", unitPrice: 450.00, unit: "pc", unitLabel: "forfait" },
      { name: "Nettoyage écologique", unitPrice: 32.00, unit: "h", unitLabel: "heure" },
      { name: "Produits écologiques (kit)", unitPrice: 45.00, unit: "pc", unitLabel: "kit" },
      { name: "Aspirateur professionnel", unitPrice: 15.00, unit: "pc", unitLabel: "location" },
      { name: "Shampoing moquette", unitPrice: 85.00, unit: "pc", unitLabel: "prestation" },
      { name: "Protection anti-taches", unitPrice: 65.00, unit: "pc", unitLabel: "traitement" },
      { name: "Abonnement mensuel", unitPrice: 280.00, unit: "mois", unitLabel: "mois" },
      { name: "Abonnement hebdomadaire", unitPrice: 180.00, unit: "semaine", unitLabel: "semaine" },
      { name: "Nettoyage imprévu", unitPrice: 35.00, unit: "h", unitLabel: "heure" },
      { name: "Débarras", unitPrice: 150.00, unit: "pc", unitLabel: "forfait" }
    ],
    nl: [
      { name: "Regelmatige schoonmaak (uur)", unitPrice: 28.00, unit: "h", unitLabel: "uur" },
      { name: "Dieptereiniging", unitPrice: 350.00, unit: "pc", unitLabel: "forfait" },
      { name: "Ramenwassen", unitPrice: 85.00, unit: "pc", unitLabel: "forfait" },
      { name: "Tapijtreiniging", unitPrice: 120.00, unit: "pc", unitLabel: "forfait" },
      { name: "Desinfectie", unitPrice: 150.00, unit: "pc", unitLabel: "forfait" },
      { name: "Nabouw Schoonmaak", unitPrice: 450.00, unit: "pc", unitLabel: "forfait" },
      { name: "Ecologische schoonmaak", unitPrice: 32.00, unit: "h", unitLabel: "uur" },
      { name: "Ecologische producten (kit)", unitPrice: 45.00, unit: "pc", unitLabel: "kit" },
      { name: "Professionele stofzuiger", unitPrice: 15.00, unit: "pc", unitLabel: "verhuur" },
      { name: "Tapijtshampoo", unitPrice: 85.00, unit: "pc", unitLabel: "prestatie" },
      { name: "Vlekbescherming", unitPrice: 65.00, unit: "pc", unitLabel: "behandeling" },
      { name: "Maandabonnement", unitPrice: 280.00, unit: "mois", unitLabel: "maand" },
      { name: "Weekabonnement", unitPrice: 180.00, unit: "semaine", unitLabel: "week" },
      { name: "Spoedschoonmaak", unitPrice: 35.00, unit: "h", unitLabel: "uur" },
      { name: "Ontruiming", unitPrice: 150.00, unit: "pc", unitLabel: "forfait" }
    ],
    de: [
      { name: "Regelmäßige Reinigung (Stunde)", unitPrice: 28.00, unit: "h", unitLabel: "Stunde" },
      { name: "Tiefenreinigung", unitPrice: 350.00, unit: "pc", unitLabel: "Pauschal" },
      { name: "Fensterreinigung", unitPrice: 85.00, unit: "pc", unitLabel: "Pauschal" },
      { name: "Teppichreinigung", unitPrice: 120.00, unit: "pc", unitLabel: "Pauschal" },
      { name: "Desinfektion", unitPrice: 150.00, unit: "pc", unitLabel: "Pauschal" },
      { name: "Baureinigung", unitPrice: 450.00, unit: "pc", unitLabel: "Pauschal" },
      { name: "Ökologische Reinigung", unitPrice: 32.00, unit: "h", unitLabel: "Stunde" },
      { name: "Ökoprodukte (Set)", unitPrice: 45.00, unit: "pc", unitLabel: "Set" },
      { name: "Profistaubsauger", unitPrice: 15.00, unit: "pc", unitLabel: "Miete" },
      { name: "Teppichshampoo", unitPrice: 85.00, unit: "pc", unitLabel: "Service" },
      { name: "Fleckenschutz", unitPrice: 65.00, unit: "pc", unitLabel: "Behandlung" },
      { name: "Monatsabonnement", unitPrice: 280.00, unit: "mois", unitLabel: "Monat" },
      { name: "Wochenabonnement", unitPrice: 180.00, unit: "semaine", unitLabel: "Woche" },
      { name: "Schnellreinigung", unitPrice: 35.00, unit: "h", unitLabel: "Stunde" },
      { name: "Entrümpelung", unitPrice: 150.00, unit: "pc", unitLabel: "Pauschal" }
    ],
    en: [
      { name: "Regular Cleaning (hour)", unitPrice: 28.00, unit: "h", unitLabel: "hour" },
      { name: "Deep Cleaning", unitPrice: 350.00, unit: "pc", unitLabel: "package" },
      { name: "Window Cleaning", unitPrice: 85.00, unit: "pc", unitLabel: "package" },
      { name: "Carpet Cleaning", unitPrice: 120.00, unit: "pc", unitLabel: "package" },
      { name: "Disinfection", unitPrice: 150.00, unit: "pc", unitLabel: "package" },
      { name: "Post-construction Cleaning", unitPrice: 450.00, unit: "pc", unitLabel: "package" },
      { name: "Eco Cleaning", unitPrice: 32.00, unit: "h", unitLabel: "hour" },
      { name: "Eco Products (kit)", unitPrice: 45.00, unit: "pc", unitLabel: "kit" },
      { name: "Professional Vacuum", unitPrice: 15.00, unit: "pc", unitLabel: "rental" },
      { name: "Carpet Shampooing", unitPrice: 85.00, unit: "pc", unitLabel: "service" },
      { name: "Stain Protection", unitPrice: 65.00, unit: "pc", unitLabel: "treatment" },
      { name: "Monthly Subscription", unitPrice: 280.00, unit: "mois", unitLabel: "month" },
      { name: "Weekly Subscription", unitPrice: 180.00, unit: "semaine", unitLabel: "week" },
      { name: "Emergency Cleaning", unitPrice: 35.00, unit: "h", unitLabel: "hour" },
      { name: "Clearance", unitPrice: 150.00, unit: "pc", unitLabel: "package" }
    ]
  },

  gardening: {
    fr: [
      { name: "Tonte pelouse (séance)", unitPrice: 45.00, unit: "pc", unitLabel: "prestation" },
      { name: "Taille haie (mètre)", unitPrice: 8.50, unit: "m", unitLabel: "mètre" },
      { name: "Désherbage (heure)", unitPrice: 32.00, unit: "h", unitLabel: "heure" },
      { name: "Plantation arbuste", unitPrice: 35.00, unit: "pc", unitLabel: "pièce" },
      { name: "Paillage (m²)", unitPrice: 12.00, unit: "m2", unitLabel: "m²" },
      { name: "Engrais (sac 20kg)", unitPrice: 18.50, unit: "pc", unitLabel: "sac" },
      { name: "Tondeuse électrique", unitPrice: 280.00, unit: "pc", unitLabel: "pièce" },
      { name: "Coupe-bordures", unitPrice: 85.00, unit: "pc", unitLabel: "pièce" },
      { name: "Souffleur feuilles", unitPrice: 120.00, unit: "pc", unitLabel: "pièce" },
      { name: "Système d'arrosage", unitPrice: 450.00, unit: "pc", unitLabel: "forfait" },
      { name: "Élagage arbre", unitPrice: 280.00, unit: "pc", unitLabel: "prestation" },
      { name: "Aménagement jardin", unitPrice: 1200.00, unit: "pc", unitLabel: "forfait" },
      { name: "Semences gazon (kg)", unitPrice: 12.00, unit: "kg", unitLabel: "kg" },
      { name: "Terreau (sac 50L)", unitPrice: 8.50, unit: "pc", unitLabel: "sac" },
      { name: "Abonnement entretien mensuel", unitPrice: 180.00, unit: "mois", unitLabel: "mois" }
    ],
    nl: [
      { name: "Grasmaaien (sessie)", unitPrice: 45.00, unit: "pc", unitLabel: "prestatie" },
      { name: "Heg knippen (meter)", unitPrice: 8.50, unit: "m", unitLabel: "meter" },
      { name: "Onkruid wieden (uur)", unitPrice: 32.00, unit: "h", unitLabel: "uur" },
      { name: "Struik planten", unitPrice: 35.00, unit: "pc", unitLabel: "stuk" },
      { name: "Bemesting (m²)", unitPrice: 12.00, unit: "m2", unitLabel: "m²" },
      { name: "Meststof (zak 20kg)", unitPrice: 18.50, unit: "pc", unitLabel: "zak" },
      { name: "Elektrische grasmaaier", unitPrice: 280.00, unit: "pc", unitLabel: "stuk" },
      { name: "Kantenmaaier", unitPrice: 85.00, unit: "pc", unitLabel: "stuk" },
      { name: "Bladblazer", unitPrice: 120.00, unit: "pc", unitLabel: "stuk" },
      { name: "Beregeningssysteem", unitPrice: 450.00, unit: "pc", unitLabel: "forfait" },
      { name: "Boom snoeien", unitPrice: 280.00, unit: "pc", unitLabel: "prestatie" },
      { name: "Tuinaanleg", unitPrice: 1200.00, unit: "pc", unitLabel: "forfait" },
      { name: "Graszaad (kg)", unitPrice: 12.00, unit: "kg", unitLabel: "kg" },
      { name: "Potgrond (zak 50L)", unitPrice: 8.50, unit: "pc", unitLabel: "zak" },
      { name: "Maandelijks onderhoudsabonnement", unitPrice: 180.00, unit: "mois", unitLabel: "maand" }
    ],
    de: [
      { name: "Rasenmähen (Sitzung)", unitPrice: 45.00, unit: "pc", unitLabel: "Service" },
      { name: "Hecke schneiden (Meter)", unitPrice: 8.50, unit: "m", unitLabel: "Meter" },
      { name: "Unkraut jäten (Stunde)", unitPrice: 32.00, unit: "h", unitLabel: "Stunde" },
      { name: "Strauch pflanzen", unitPrice: 35.00, unit: "pc", unitLabel: "Stück" },
      { name: "Mulchen (m²)", unitPrice: 12.00, unit: "m2", unitLabel: "m²" },
      { name: "Dünger (Sack 20kg)", unitPrice: 18.50, unit: "pc", unitLabel: "Sack" },
      { name: "Elektrischer Rasenmäher", unitPrice: 280.00, unit: "pc", unitLabel: "Stück" },
      { name: "Kantenschneider", unitPrice: 85.00, unit: "pc", unitLabel: "Stück" },
      { name: "Laubbläser", unitPrice: 120.00, unit: "pc", unitLabel: "Stück" },
      { name: "Bewässerungssystem", unitPrice: 450.00, unit: "pc", unitLabel: "Pauschal" },
      { name: "Baumschnitt", unitPrice: 280.00, unit: "pc", unitLabel: "Service" },
      { name: "Gartengestaltung", unitPrice: 1200.00, unit: "pc", unitLabel: "Pauschal" },
      { name: "Rasensamen (kg)", unitPrice: 12.00, unit: "kg", unitLabel: "kg" },
      { name: "Blumenerde (Sack 50L)", unitPrice: 8.50, unit: "pc", unitLabel: "Sack" },
      { name: "Monatliches Pflegeabonnement", unitPrice: 180.00, unit: "mois", unitLabel: "Monat" }
    ],
    en: [
      { name: "Lawn Mowing (session)", unitPrice: 45.00, unit: "pc", unitLabel: "service" },
      { name: "Hedge Trimming (meter)", unitPrice: 8.50, unit: "m", unitLabel: "meter" },
      { name: "Weeding (hour)", unitPrice: 32.00, unit: "h", unitLabel: "hour" },
      { name: "Shrub Planting", unitPrice: 35.00, unit: "pc", unitLabel: "piece" },
      { name: "Mulching (m²)", unitPrice: 12.00, unit: "m2", unitLabel: "m²" },
      { name: "Fertilizer (bag 20kg)", unitPrice: 18.50, unit: "pc", unitLabel: "bag" },
      { name: "Electric Lawnmower", unitPrice: 280.00, unit: "pc", unitLabel: "piece" },
      { name: "Edge Trimmer", unitPrice: 85.00, unit: "pc", unitLabel: "piece" },
      { name: "Leaf Blower", unitPrice: 120.00, unit: "pc", unitLabel: "piece" },
      { name: "Irrigation System", unitPrice: 450.00, unit: "pc", unitLabel: "package" },
      { name: "Tree Pruning", unitPrice: 280.00, unit: "pc", unitLabel: "service" },
      { name: "Garden Design", unitPrice: 1200.00, unit: "pc", unitLabel: "package" },
      { name: "Grass Seeds (kg)", unitPrice: 12.00, unit: "kg", unitLabel: "kg" },
      { name: "Potting Soil (bag 50L)", unitPrice: 8.50, unit: "pc", unitLabel: "bag" },
      { name: "Monthly Maintenance Subscription", unitPrice: 180.00, unit: "mois", unitLabel: "month" }
    ]
  },

  photography: {
    fr: [
      { name: "Séance portrait", unitPrice: 150.00, unit: "pc", unitLabel: "séance" },
      { name: "Séance famille", unitPrice: 280.00, unit: "pc", unitLabel: "séance" },
      { name: "Séance nouveau-né", unitPrice: 350.00, unit: "pc", unitLabel: "séance" },
      { name: "Séance événementielle", unitPrice: 450.00, unit: "pc", unitLabel: "séance" },
      { name: "Mariage (forfait)", unitPrice: 1800.00, unit: "pc", unitLabel: "forfait" },
      { name: "Reportage entreprise", unitPrice: 650.00, unit: "pc", unitLabel: "forfait" },
      { name: "Photo produit (par produit)", unitPrice: 35.00, unit: "pc", unitLabel: "photo" },
      { name: "Retouche photo", unitPrice: 25.00, unit: "pc", unitLabel: "photo" },
      { name: "Tirage 20x30", unitPrice: 18.00, unit: "pc", unitLabel: "tirage" },
      { name: "Album photo (20 pages)", unitPrice: 120.00, unit: "pc", unitLabel: "album" },
      { name: "Cadre photo", unitPrice: 45.00, unit: "pc", unitLabel: "pièce" },
      { name: "Location studio (heure)", unitPrice: 55.00, unit: "h", unitLabel: "heure" },
      { name: "Cours photo particulier", unitPrice: 65.00, unit: "h", unitLabel: "heure" },
      { name: "Abonnement entreprise", unitPrice: 450.00, unit: "mois", unitLabel: "mois" }
    ],
    nl: [
      { name: "Portretsessie", unitPrice: 150.00, unit: "pc", unitLabel: "sessie" },
      { name: "Familiesessie", unitPrice: 280.00, unit: "pc", unitLabel: "sessie" },
      { name: "Newborn-sessie", unitPrice: 350.00, unit: "pc", unitLabel: "sessie" },
      { name: "Evenementensessie", unitPrice: 450.00, unit: "pc", unitLabel: "sessie" },
      { name: "Bruiloft (pakket)", unitPrice: 1800.00, unit: "pc", unitLabel: "forfait" },
      { name: "Bedrijfsreportage", unitPrice: 650.00, unit: "pc", unitLabel: "forfait" },
      { name: "Productfoto (per product)", unitPrice: 35.00, unit: "pc", unitLabel: "foto" },
      { name: "Fotoretouche", unitPrice: 25.00, unit: "pc", unitLabel: "foto" },
      { name: "Afdruk 20x30", unitPrice: 18.00, unit: "pc", unitLabel: "afdruk" },
      { name: "Fotoalbum (20 pagina's)", unitPrice: 120.00, unit: "pc", unitLabel: "album" },
      { name: "Fotolijst", unitPrice: 45.00, unit: "pc", unitLabel: "stuk" },
      { name: "Studioverhuur (uur)", unitPrice: 55.00, unit: "h", unitLabel: "uur" },
      { name: "Privéfotocursus", unitPrice: 65.00, unit: "h", unitLabel: "uur" },
      { name: "Zakelijke abonnement", unitPrice: 450.00, unit: "mois", unitLabel: "maand" }
    ],
    de: [
      { name: "Portrait-Sitzung", unitPrice: 150.00, unit: "pc", unitLabel: "Sitzung" },
      { name: "Familien-Sitzung", unitPrice: 280.00, unit: "pc", unitLabel: "Sitzung" },
      { name: "Newborn-Sitzung", unitPrice: 350.00, unit: "pc", unitLabel: "Sitzung" },
      { name: "Event-Sitzung", unitPrice: 450.00, unit: "pc", unitLabel: "Sitzung" },
      { name: "Hochzeit (Paket)", unitPrice: 1800.00, unit: "pc", unitLabel: "Pauschal" },
      { name: "Unternehmensreportage", unitPrice: 650.00, unit: "pc", unitLabel: "Pauschal" },
      { name: "Produktfoto (pro Produkt)", unitPrice: 35.00, unit: "pc", unitLabel: "Foto" },
      { name: "Fotoretusche", unitPrice: 25.00, unit: "pc", unitLabel: "Foto" },
      { name: "Abzug 20x30", unitPrice: 18.00, unit: "pc", unitLabel: "Abzug" },
      { name: "Fotoalbum (20 Seiten)", unitPrice: 120.00, unit: "pc", unitLabel: "Album" },
      { name: "Bilderrahmen", unitPrice: 45.00, unit: "pc", unitLabel: "Stück" },
      { name: "Studiovermietung (Stunde)", unitPrice: 55.00, unit: "h", unitLabel: "Stunde" },
      { name: "Privatfotokurs", unitPrice: 65.00, unit: "h", unitLabel: "Stunde" },
      { name: "Firmenabonnement", unitPrice: 450.00, unit: "mois", unitLabel: "Monat" }
    ],
    en: [
      { name: "Portrait Session", unitPrice: 150.00, unit: "pc", unitLabel: "session" },
      { name: "Family Session", unitPrice: 280.00, unit: "pc", unitLabel: "session" },
      { name: "Newborn Session", unitPrice: 350.00, unit: "pc", unitLabel: "session" },
      { name: "Event Session", unitPrice: 450.00, unit: "pc", unitLabel: "session" },
      { name: "Wedding (package)", unitPrice: 1800.00, unit: "pc", unitLabel: "package" },
      { name: "Corporate Reportage", unitPrice: 650.00, unit: "pc", unitLabel: "package" },
      { name: "Product Photo (per product)", unitPrice: 35.00, unit: "pc", unitLabel: "photo" },
      { name: "Photo Retouching", unitPrice: 25.00, unit: "pc", unitLabel: "photo" },
      { name: "Print 20x30", unitPrice: 18.00, unit: "pc", unitLabel: "print" },
      { name: "Photo Album (20 pages)", unitPrice: 120.00, unit: "pc", unitLabel: "album" },
      { name: "Photo Frame", unitPrice: 45.00, unit: "pc", unitLabel: "piece" },
      { name: "Studio Rental (hour)", unitPrice: 55.00, unit: "h", unitLabel: "hour" },
      { name: "Private Photography Lesson", unitPrice: 65.00, unit: "h", unitLabel: "hour" },
      { name: "Business Subscription", unitPrice: 450.00, unit: "mois", unitLabel: "month" }
    ]
  },

  fitness: {
    fr: [
      { name: "Abonnement mensuel", unitPrice: 45.00, unit: "mois", unitLabel: "mois" },
      { name: "Cours collectif", unitPrice: 12.00, unit: "pc", unitLabel: "cours" },
      { name: "Coaching personnel", unitPrice: 65.00, unit: "h", unitLabel: "heure" },
      { name: "Séance massage", unitPrice: 75.00, unit: "pc", unitLabel: "séance" },
      { name: "Accès sauna + spa", unitPrice: 25.00, unit: "pc", unitLabel: "accès" },
      { name: "Évaluation fitness", unitPrice: 35.00, unit: "pc", unitLabel: "évaluation" },
      { name: "Programme personnalisé", unitPrice: 85.00, unit: "pc", unitLabel: "programme" },
      { name: "Vêtement sport", unitPrice: 35.00, unit: "pc", unitLabel: "pièce" },
      { name: "Shaker protéine", unitPrice: 8.50, unit: "pc", unitLabel: "pièce" },
      { name: "Barre protéinée", unitPrice: 3.50, unit: "pc", unitLabel: "pièce" },
      { name: "Suppléments (pot)", unitPrice: 45.00, unit: "pc", unitLabel: "pot" },
      { name: "Serviette + badge", unitPrice: 15.00, unit: "pc", unitLabel: "pack" },
      { name: "Cours yoga", unitPrice: 15.00, unit: "pc", unitLabel: "cours" },
      { name: "Cours pilates", unitPrice: 15.00, unit: "pc", unitLabel: "cours" },
      { name: "Abonnement annuel", unitPrice: 450.00, unit: "an", unitLabel: "an" }
    ],
    nl: [
      { name: "Maandabonnement", unitPrice: 45.00, unit: "mois", unitLabel: "maand" },
      { name: "Groepsles", unitPrice: 12.00, unit: "pc", unitLabel: "les" },
      { name: "Personal coaching", unitPrice: 65.00, unit: "h", unitLabel: "uur" },
      { name: "Massagesessie", unitPrice: 75.00, unit: "pc", unitLabel: "sessie" },
      { name: "Sauna + spa toegang", unitPrice: 25.00, unit: "pc", unitLabel: "toegang" },
      { name: "Fitness evaluatie", unitPrice: 35.00, unit: "pc", unitLabel: "evaluatie" },
      { name: "Persoonlijk programma", unitPrice: 85.00, unit: "pc", unitLabel: "programma" },
      { name: "Sportkleding", unitPrice: 35.00, unit: "pc", unitLabel: "stuk" },
      { name: "Protein shaker", unitPrice: 8.50, unit: "pc", unitLabel: "stuk" },
      { name: "Proteine reep", unitPrice: 3.50, unit: "pc", unitLabel: "stuk" },
      { name: "Supplementen (pot)", unitPrice: 45.00, unit: "pc", unitLabel: "pot" },
      { name: "Handdoek + badge", unitPrice: 15.00, unit: "pc", unitLabel: "pack" },
      { name: "Yoga les", unitPrice: 15.00, unit: "pc", unitLabel: "les" },
      { name: "Pilates les", unitPrice: 15.00, unit: "pc", unitLabel: "les" },
      { name: "Jaarabonnement", unitPrice: 450.00, unit: "an", unitLabel: "jaar" }
    ],
    de: [
      { name: "Monatsabonnement", unitPrice: 45.00, unit: "mois", unitLabel: "Monat" },
      { name: "Gruppenkurs", unitPrice: 12.00, unit: "pc", unitLabel: "Kurs" },
      { name: "Personal Coaching", unitPrice: 65.00, unit: "h", unitLabel: "Stunde" },
      { name: "Massage-Sitzung", unitPrice: 75.00, unit: "pc", unitLabel: "Sitzung" },
      { name: "Sauna + Spa Zugang", unitPrice: 25.00, unit: "pc", unitLabel: "Zugang" },
      { name: "Fitness-Evaluation", unitPrice: 35.00, unit: "pc", unitLabel: "Evaluation" },
      { name: "Persönliches Programm", unitPrice: 85.00, unit: "pc", unitLabel: "Programm" },
      { name: "Sportbekleidung", unitPrice: 35.00, unit: "pc", unitLabel: "Stück" },
      { name: "Protein-Shaker", unitPrice: 8.50, unit: "pc", unitLabel: "Stück" },
      { name: "Protein-Riegel", unitPrice: 3.50, unit: "pc", unitLabel: "Stück" },
      { name: "Nahrungsergänzung (Dose)", unitPrice: 45.00, unit: "pc", unitLabel: "Dose" },
      { name: "Handtuch + Karte", unitPrice: 15.00, unit: "pc", unitLabel: "Pack" },
      { name: "Yoga-Kurs", unitPrice: 15.00, unit: "pc", unitLabel: "Kurs" },
      { name: "Pilates-Kurs", unitPrice: 15.00, unit: "pc", unitLabel: "Kurs" },
      { name: "Jahresabonnement", unitPrice: 450.00, unit: "an", unitLabel: "Jahr" }
    ],
    en: [
      { name: "Monthly Subscription", unitPrice: 45.00, unit: "mois", unitLabel: "month" },
      { name: "Group Class", unitPrice: 12.00, unit: "pc", unitLabel: "class" },
      { name: "Personal Coaching", unitPrice: 65.00, unit: "h", unitLabel: "hour" },
      { name: "Massage Session", unitPrice: 75.00, unit: "pc", unitLabel: "session" },
      { name: "Sauna + Spa Access", unitPrice: 25.00, unit: "pc", unitLabel: "access" },
      { name: "Fitness Assessment", unitPrice: 35.00, unit: "pc", unitLabel: "assessment" },
      { name: "Personalized Program", unitPrice: 85.00, unit: "pc", unitLabel: "program" },
      { name: "Sportswear", unitPrice: 35.00, unit: "pc", unitLabel: "piece" },
      { name: "Protein Shaker", unitPrice: 8.50, unit: "pc", unitLabel: "piece" },
      { name: "Protein Bar", unitPrice: 3.50, unit: "pc", unitLabel: "piece" },
      { name: "Supplements (jar)", unitPrice: 45.00, unit: "pc", unitLabel: "jar" },
      { name: "Towel + Card", unitPrice: 15.00, unit: "pc", unitLabel: "pack" },
      { name: "Yoga Class", unitPrice: 15.00, unit: "pc", unitLabel: "class" },
      { name: "Pilates Class", unitPrice: 15.00, unit: "pc", unitLabel: "class" },
      { name: "Annual Subscription", unitPrice: 450.00, unit: "an", unitLabel: "year" }
    ]
  }
};

// Merge all additional products
Object.assign(productsDatabase, additionalProducts, additionalProducts2);

// ============================================
// CHARGEMENT DES PRODUITS DEPUIS LE CSV
// ============================================

let csvProductsDatabase = null;
let csvLoaded = false;

// Charger et parser le fichier CSV
async function loadProductsFromCSV() {
  if (csvLoaded) return csvProductsDatabase;
  
  try {
    const response = await fetch('data/products_sectors.csv');
    if (!response.ok) {
      console.warn('Impossible de charger le CSV des produits');
      return null;
    }
    
    const csvText = await response.text();
    csvProductsDatabase = parseCSV(csvText);
    csvLoaded = true;
    return csvProductsDatabase;
  } catch (error) {
    console.error('Erreur lors du chargement du CSV:', error);
    return null;
  }
}

// Parser le contenu CSV
function parseCSV(csvText) {
  const lines = csvText.trim().split('\n');
  const headers = lines[0].split(',').map(h => h.trim());
  
  const database = {};
  
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;
    
    // Gestion des virgules dans les champs (simplifiée)
    const values = line.split(',');
    if (values.length < 5) continue;
    
    const sector = values[0].trim();
    const lang = values[1].trim();
    const nomProduit = values[2].trim();
    const prixUnitaire = parseFloat(values[3].trim());
    const unite = values[4].trim();
    const etiquetteUnite = values[5] ? values[5].trim() : unite;
    const type = values[6] ? values[6].trim() : 'produit';
    
    if (!database[sector]) {
      database[sector] = {};
    }
    if (!database[sector][lang]) {
      database[sector][lang] = [];
    }
    
    database[sector][lang].push({
      name: nomProduit,
      unitPrice: prixUnitaire,
      unit: unite,
      unitLabel: etiquetteUnite,
      type: type
    });
  }
  
  return database;
}

// Fonction getProducts améliorée qui utilise le CSV si disponible
// typeFilter: 'produit', 'service', ou 'mixed' (null = tous)
async function getProductsFromCSV(sector, lang, typeFilter = null) {
  const csvData = await loadProductsFromCSV();
  
  let products = null;
  
  if (csvData && csvData[sector]) {
    // Récupérer les produits du CSV pour la langue demandée
    if (csvData[sector][lang]) {
      products = csvData[sector][lang];
    }
    // Fallback sur le français si la langue n'existe pas
    else if (csvData[sector]['fr']) {
      products = csvData[sector]['fr'];
    }
  }
  
  // Fallback sur la base de données intégrée si pas de CSV
  if (!products) {
    products = getProducts(sector, lang);
  }
  
  // Filtrer par type si demandé
  if (typeFilter && typeFilter !== 'mixed') {
    products = products.filter(p => {
      const productType = p.type || 'produit';
      return productType === typeFilter;
    });
  }
  
  return products;
}
