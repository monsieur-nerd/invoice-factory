// ============================================
// PWA - Gestion de l'installation et offline
// ============================================

class PWAManager {
  constructor() {
    this.deferredPrompt = null;
    this.isInstallable = false;
    this.init();
  }
  
  init() {
    // Enregistrer le service worker
    this.registerServiceWorker();
    
    // Vérifier si l'app est en mode standalone (installée)
    if (window.matchMedia('(display-mode: standalone)').matches) {
      console.log('[PWA] Application déjà installée (standalone)');
      document.body.classList.add('pwa-installed');
      localStorage.setItem('pwa-installed', 'true');
      return; // Pas besoin de bouton si déjà installée
    }
    
    // Écouter l'événement beforeinstallprompt
    window.addEventListener('beforeinstallprompt', (e) => {
      console.log('[PWA] beforeinstallprompt déclenché');
      // Empêcher le prompt automatique
      e.preventDefault();
      this.deferredPrompt = e;
      this.isInstallable = true;
      
      // Sauvegarder l'état pour les autres pages
      localStorage.setItem('pwa-installable', 'true');
      
      // Afficher le bouton d'installation
      this.showInstallButton();
    });
    
    // Détecter si l'app est déjà installée
    window.addEventListener('appinstalled', () => {
      console.log('[PWA] Application installée');
      this.deferredPrompt = null;
      this.isInstallable = false;
      localStorage.setItem('pwa-installed', 'true');
      localStorage.removeItem('pwa-installable');
      this.hideInstallButton();
      
      // Feedback à l'utilisateur
      this.showNotification('✅ Application installée avec succès !', 'success');
    });
    
    // Vérifier si on doit afficher le bouton (si l'app est installable mais pas encore installée)
    // ou si on a déjà reçu beforeinstallprompt sur une autre page
    const isInstallable = localStorage.getItem('pwa-installable');
    const isInstalled = localStorage.getItem('pwa-installed');
    
    if (!isInstalled) {
      // Si on est sur Chrome/Edge (navigateurs qui supportent beforeinstallprompt),
      // afficher le bouton par défaut - il sera fonctionnel si beforeinstallprompt a été reçu
      if ('BeforeInstallPromptEvent' in window || isInstallable) {
        this.showInstallButton();
      }
    }
    
    // Écouter les changements de langue pour mettre à jour le bouton
    if (typeof i18n !== 'undefined' && i18n.onChange) {
      i18n.onChange(() => {
        this.updateInstallButtonText();
      });
    }
    
    // Gestion du mode online/offline
    this.handleConnectivity();
  }
  
  // Mettre à jour le texte du bouton quand la langue change
  updateInstallButtonText() {
    const installBtn = document.getElementById('pwa-install-btn');
    if (installBtn && typeof i18n !== 'undefined' && i18n.t) {
      const btnText = i18n.t('installAppBtn');
      const btnTitle = i18n.t('installAppTitle');
      
      const span = installBtn.querySelector('span');
      if (span) {
        span.textContent = btnText;
      }
      installBtn.title = btnTitle;
    }
  }
  
  // Enregistrement du service worker
  registerServiceWorker() {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
          .then((registration) => {
            console.log('[PWA] Service Worker enregistré:', registration.scope);
            
            // Vérifier les mises à jour
            registration.addEventListener('updatefound', () => {
              const newWorker = registration.installing;
              newWorker.addEventListener('statechange', () => {
                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                  console.log('[PWA] Nouvelle version disponible');
                  this.showUpdateNotification();
                }
              });
            });
          })
          .catch((error) => {
            console.error('[PWA] Erreur d\'enregistrement du SW:', error);
          });
      });
    } else {
      console.log('[PWA] Service Worker non supporté');
    }
  }
  
  // Afficher le bouton d'installation
  showInstallButton() {
    // Supprimer l'ancien bouton s'il existe (dans le header ou ailleurs)
    const oldBtn = document.getElementById('pwa-install-btn');
    if (oldBtn) {
      oldBtn.remove();
    }
    
    // Créer le bouton
    const installBtn = document.createElement('button');
    installBtn.id = 'pwa-install-btn';
    installBtn.className = 'pwa-install-btn-footer';
    
    // Utiliser la traduction si disponible
    const btnText = (typeof i18n !== 'undefined' && i18n.t) ? i18n.t('installAppBtn') : 'Installer';
    const btnTitle = (typeof i18n !== 'undefined' && i18n.t) ? i18n.t('installAppTitle') : "Installer l'application";
    
    // Stocker les clés de traduction pour mise à jour dynamique
    installBtn.dataset.i18nText = 'installAppBtn';
    installBtn.dataset.i18nTitle = 'installAppTitle';
    
    installBtn.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 1.25rem; height: 1.25rem;">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15M9 12l3 3m0 0 3-3m-3 3V2.25" />
      </svg>
      <span data-i18n="installAppBtn">${btnText}</span>
    `;
    installBtn.title = btnTitle;
    installBtn.addEventListener('click', () => this.installApp());
    
    // Insérer dans le footer-content pour le positionnement
    const footerContent = document.querySelector('.footer-content');
    if (footerContent) {
      footerContent.appendChild(installBtn);
    } else {
      // Fallback: insérer dans le footer
      const footer = document.querySelector('.app-footer');
      if (footer) {
        footer.appendChild(installBtn);
      }
    }
    
    installBtn.style.display = 'flex';
  }
  
  // Cacher le bouton d'installation
  hideInstallButton() {
    const installBtn = document.getElementById('pwa-install-btn');
    if (installBtn) {
      installBtn.style.display = 'none';
    }
  }
  
  // Lancer l'installation
  async installApp() {
    if (!this.deferredPrompt) {
      console.log('[PWA] Aucun prompt d\'installation disponible sur cette page');
      // Si on a pas le deferredPrompt mais qu'on est installable, 
      // rediriger vers la page d'accueil où l'événement aura été capturé
      if (localStorage.getItem('pwa-installable') && window.location.pathname !== '/' && window.location.pathname !== '/index.html') {
        this.showNotification('🔄 Retour à l\'accueil pour installer...', 'info');
        setTimeout(() => {
          window.location.href = '/index.html';
        }, 1500);
      } else {
        this.showNotification('❌ Installation non disponible. Essayez depuis la page d\'accueil.', 'error');
      }
      return;
    }
    
    // Afficher le prompt natif
    this.deferredPrompt.prompt();
    
    // Attendre la réponse de l'utilisateur
    const { outcome } = await this.deferredPrompt.userChoice;
    console.log(`[PWA] Résultat de l'installation: ${outcome}`);
    
    // Réinitialiser
    this.deferredPrompt = null;
    
    if (outcome === 'accepted') {
      localStorage.setItem('pwa-installed', 'true');
      localStorage.removeItem('pwa-installable');
      this.hideInstallButton();
    }
  }
  
  // Gestion de la connectivité
  handleConnectivity() {
    const updateOnlineStatus = () => {
      const isOnline = navigator.onLine;
      console.log(`[PWA] Statut: ${isOnline ? 'Online' : 'Offline'}`);
      
      document.body.classList.toggle('offline-mode', !isOnline);
      
      if (!isOnline) {
        this.showNotification('⚠️ Mode hors ligne activé. Vos factures sont sauvegardées localement.', 'warning');
      } else {
        this.showNotification('✅ Connexion rétablie', 'success', 3000);
      }
    };
    
    window.addEventListener('online', updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);
    
    // Vérifier l'état initial
    updateOnlineStatus();
  }
  
  // Notification de mise à jour disponible
  showUpdateNotification() {
    // Éviter les notifications multiples
    if (document.querySelector('.pwa-update-notification')) return;
    
    const notification = document.createElement('div');
    notification.className = 'pwa-update-notification';
    notification.innerHTML = `
      <span>🔄 Nouvelle version disponible</span>
      <button id="pwa-update-btn" class="btn btn-sm btn-primary">Mettre à jour</button>
    `;
    
    document.body.appendChild(notification);
    
    document.getElementById('pwa-update-btn').addEventListener('click', () => {
      // Forcer le Service Worker à s'activer immédiatement
      if (navigator.serviceWorker.controller) {
        navigator.serviceWorker.controller.postMessage('skipWaiting');
      }
      window.location.reload();
    });
  }
  
  // Notification générique
  showNotification(message, type = 'info', duration = 5000) {
    // Supprimer les notifications existantes du même type
    const existing = document.querySelector(`.pwa-notification.${type}`);
    if (existing) existing.remove();
    
    const notification = document.createElement('div');
    notification.className = `pwa-notification ${type}`;
    notification.innerHTML = `
      <span>${message}</span>
      <button class="pwa-notification-close">&times;</button>
    `;
    
    document.body.appendChild(notification);
    
    // Animation d'entrée
    requestAnimationFrame(() => {
      notification.classList.add('show');
    });
    
    // Fermeture automatique
    if (duration > 0) {
      setTimeout(() => {
        this.hideNotification(notification);
      }, duration);
    }
    
    // Fermeture manuelle
    notification.querySelector('.pwa-notification-close').addEventListener('click', () => {
      this.hideNotification(notification);
    });
  }
  
  hideNotification(notification) {
    notification.classList.remove('show');
    setTimeout(() => {
      notification.remove();
    }, 300);
  }
  
  // Vérifier si l'app peut être installée
  canInstall() {
    return this.isInstallable;
  }
}

// Initialisation
const pwaManager = new PWAManager();

// Exposer globalement pour debug
window.pwaManager = pwaManager;
