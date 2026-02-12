# 🎨 Logo Complet Invoice Factory

## Logo avec image + texte intégrés

### Fichiers

| Fichier | Description |
|---------|-------------|
| `logo-complete.svg` | Version light mode (fond blanc) |
| `logo-complete-dark.svg` | Version dark mode (fond sombre) |

### Structure du logo

```
┌──────────────────────────────────────────┐
│  ┌────┐                                  │
│  │ 📄 │  Invoice Factory        ✨       │
│  │💰✨│  GÉNÉRATEUR DE FACTURES          │
│  │ ❤️ │                                  │
│  └────┘                                  │
└──────────────────────────────────────────┘
```

### Éléments visuels

1. **Icône 8-bit** (64x64px)
   - Fond doré arrondi
   - Feuille de facture blanche
   - Lignes de texte pixelisées
   - Total en rouge
   - Étoile dorée (fantastic)
   - Petit cœur rouge

2. **Texte principal**
   - "Invoice Factory"
   - Police : Space Grotesk Bold
   - Gradient doré animé

3. **Tagline**
   - "GÉNÉRATEUR DE FACTURES"
   - Police : Space Grotesk Regular
   - Couleur grise
   - Lettres espacées

4. **Décoration**
   - Petite étoile dorée à droite du texte

### Animations CSS

- **Float** : Léger mouvement vertical de l'icône
- **Sparkle** : Clignotement des étoiles
- **Hover** : Scale et glow au survol

### Usage dans HTML

```html
<a href="index.html" class="brand-logo-link">
  <img src="assets/logo-complete.svg" 
       alt="Invoice Factory - Générateur de factures" 
       class="logo-complete"
       data-logo-light="assets/logo-complete.svg"
       data-logo-dark="assets/logo-complete-dark.svg">
</a>
```

### Switch automatique dark/light

Le JavaScript `stitchAnimations.js` détecte automatiquement le changement de thème et switch le logo :

```javascript
// Change le logo selon data-theme
const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
logo.src = isDark ? darkSrc : lightSrc;
```

### Pages utilisant le logo

- ✅ `index.html` - Page principale
- ✅ `history.html` - Historique
- ✅ `settings.html` - Paramètres
- ✅ `about.html` - À propos

### Dimensions

- **Hauteur** : 48px (navbar)
- **Largeur** : ~220px (proportionnelle)
- **ViewBox SVG** : 280x64

### Responsive

Le logo s'adapte automatiquement :
- Sur mobile : scale réduit si nécessaire
- Sur desktop : taille fixe 48px de hauteur
