/**
 * ═══════════════════════════════════════════════════════════════════════════════
 * MONSIEURNERD APP - Nature Print Edition
 * ═══════════════════════════════════════════════════════════════════════════════
 * 
 * Application principale pour la refonte Monsieurnerd
 * Gestion du thème, navigation, et utilitaires
 * 
 * @version 1.0.0
 * @branch feature/monsieurnerd-redesign
 */

(function() {
  'use strict';

  // ═════════════════════════════════════════════════════════════════════════════
  // CONFIGURATION
  // ═════════════════════════════════════════════════════════════════════════════
  
  const CONFIG = {
    themeKey: 'monsieurnerd-theme',
    langKey: 'monsieurnerd-lang',
    defaultTheme: 'light',
    defaultLang: 'fr'
  };

  // ═════════════════════════════════════════════════════════════════════════════
  // THEME MANAGER
  // ═════════════════════════════════════════════════════════════════════════════
  
  const ThemeManager = {
    currentTheme: CONFIG.defaultTheme,      // Thème effectif appliqué (light/dark)
    userPreference: CONFIG.defaultTheme,    // Préférence utilisateur (light/dark/auto)
    systemQuery: null,                      // Référence au matchMedia pour cleanup

    init() {
      this.loadTheme();
      this.bindEvents();
    },

    // Calcule le thème effectif à partir de la préférence
    getEffectiveTheme(preference) {
      if (preference === 'auto') {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      }
      return preference;
    },

    loadTheme() {
      const savedPreference = localStorage.getItem(CONFIG.themeKey);
      this.userPreference = savedPreference || 'auto';
      
      // Si pas de préférence sauvegardée, détecter automatiquement
      if (!savedPreference) {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        this.userPreference = 'auto';
        this.applyTheme(prefersDark ? 'dark' : 'light', false);
      } else if (savedPreference === 'auto') {
        // Mode auto: calculer le thème effectif
        const effectiveTheme = this.getEffectiveTheme('auto');
        this.applyTheme(effectiveTheme, false);
      } else {
        // Mode manuel light/dark
        this.applyTheme(savedPreference, false);
      }
    },

    applyTheme(theme, saveAsPreference = true) {
      this.currentTheme = theme;
      document.documentElement.setAttribute('data-theme', theme);
      
      if (saveAsPreference) {
        // Si on applique directement un thème (pas depuis loadTheme), 
        // c'est une préférence utilisateur explicite
        this.userPreference = theme;
        localStorage.setItem(CONFIG.themeKey, theme);
      }
      
      // Dispatch event for other components
      window.dispatchEvent(new CustomEvent('themechange', { detail: { theme } }));
    },

    // Définir le mode (light/dark/auto)
    setMode(mode) {
      this.userPreference = mode;
      localStorage.setItem(CONFIG.themeKey, mode);
      
      if (mode === 'auto') {
        // En mode auto, calculer le thème effectif et écouter les changements système
        const effectiveTheme = this.getEffectiveTheme('auto');
        this.applyTheme(effectiveTheme, false);
        this.startListeningToSystem();
      } else {
        // Mode manuel: arrêter d'écouter le système
        this.stopListeningToSystem();
        this.applyTheme(mode, false);
      }
    },

    toggle() {
      // Le toggle passe en mode manuel (pas auto)
      const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
      this.setMode(newTheme);
    },

    startListeningToSystem() {
      // Écouter les changements du système
      this.systemQuery = window.matchMedia('(prefers-color-scheme: dark)');
      this.systemQuery.addEventListener('change', this.handleSystemChange);
    },

    stopListeningToSystem() {
      // Arrêter d'écouter les changements du système
      if (this.systemQuery) {
        this.systemQuery.removeEventListener('change', this.handleSystemChange);
        this.systemQuery = null;
      }
    },

    handleSystemChange: (e) => {
      const manager = window.MonsieurnerdApp?.theme;
      if (manager && manager.userPreference === 'auto') {
        manager.applyTheme(e.matches ? 'dark' : 'light', false);
      }
    },

    bindEvents() {
      // Theme toggle buttons
      document.querySelectorAll('[data-action="toggle-theme"]').forEach(btn => {
        btn.addEventListener('click', () => this.toggle());
      });

      // Si on est en mode auto au chargement, commencer à écouter
      if (this.userPreference === 'auto') {
        this.startListeningToSystem();
      }
    }
  };

  // ═════════════════════════════════════════════════════════════════════════════
  // LANGUAGE MANAGER
  // ═════════════════════════════════════════════════════════════════════════════
  
  const LanguageManager = {
    currentLang: CONFIG.defaultLang,
    
    supportedLangs: ['fr', 'nl', 'de', 'en'],

    init() {
      this.loadLanguage();
      this.bindEvents();
    },

    loadLanguage() {
      const savedLang = localStorage.getItem(CONFIG.langKey);
      const urlParams = new URLSearchParams(window.location.search);
      const urlLang = urlParams.get('lang');
      
      this.currentLang = urlLang || savedLang || CONFIG.defaultLang;
      
      if (!this.supportedLangs.includes(this.currentLang)) {
        this.currentLang = CONFIG.defaultLang;
      }
      
      this.applyLanguage(this.currentLang);
    },

    applyLanguage(lang) {
      this.currentLang = lang;
      document.documentElement.setAttribute('lang', lang);
      localStorage.setItem(CONFIG.langKey, lang);
      
      // Update language selector UI
      document.querySelectorAll('[data-lang]').forEach(el => {
        el.classList.toggle('active', el.dataset.lang === lang);
      });
      
      // Update i18n system
      if (typeof i18n !== 'undefined') {
        i18n.current = lang;
      }
      
      // Force apply translations immediately
      if (typeof applyTranslations === 'function') {
        applyTranslations();
      }
      
      // Dispatch event
      window.dispatchEvent(new CustomEvent('languagechange', { detail: { lang } }));
      
      // Force re-render history if on history page
      if (typeof app !== 'undefined' && app.renderHistory && document.getElementById('history-list')) {
        setTimeout(() => app.renderHistory(), 0);
      }
    },

    setLanguage(lang) {
      if (this.supportedLangs.includes(lang)) {
        this.applyLanguage(lang);
      }
    },

    bindEvents() {
      // Utiliser la délégation d'événements avec phase de capture
      document.addEventListener('click', (e) => {
        const langItem = e.target.closest('[data-action="set-lang"]');
        if (langItem) {
          const lang = langItem.dataset.lang;
          if (lang) {
            e.preventDefault();
            this.setLanguage(lang);
            // Fermer le dropdown
            if (window.MonsieurnerdApp && window.MonsieurnerdApp.dropdowns) {
              window.MonsieurnerdApp.dropdowns.closeAll();
            }
          }
        }
      }, true); // Use capture phase
    },

    t(key, fallback = key) {
      // Simple translation helper - can be extended with full i18n
      const translations = window.MONSIEURNERD_I18N || {};
      const langTranslations = translations[this.currentLang] || {};
      return langTranslations[key] || fallback;
    }
  };

  // ═════════════════════════════════════════════════════════════════════════════
  // DROPDOWN MANAGER
  // ═════════════════════════════════════════════════════════════════════════════
  
  const DropdownManager = {
    activeDropdown: null,

    init() {
      this.bindEvents();
    },

    bindEvents() {
      // Toggle dropdowns
      document.addEventListener('click', (e) => {
        const toggle = e.target.closest('[data-dropdown-toggle]');
        
        if (toggle) {
          e.preventDefault();
          const dropdownId = toggle.dataset.dropdownToggle;
          this.toggle(dropdownId);
        } else if (!e.target.closest('.dropdown')) {
          this.closeAll();
        }
      });

      // Close on escape
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          this.closeAll();
        }
      });
    },

    toggle(id) {
      const dropdown = document.getElementById(id);
      if (!dropdown) return;

      if (this.activeDropdown === dropdown) {
        this.close(dropdown);
      } else {
        this.closeAll();
        this.open(dropdown);
      }
    },

    open(dropdown) {
      dropdown.classList.add('active');
      this.activeDropdown = dropdown;
      
      // Set aria attributes
      const toggle = document.querySelector(`[data-dropdown-toggle="${dropdown.id}"]`);
      if (toggle) {
        toggle.setAttribute('aria-expanded', 'true');
      }
    },

    close(dropdown) {
      dropdown.classList.remove('active');
      this.activeDropdown = null;
      
      const toggle = document.querySelector(`[data-dropdown-toggle="${dropdown.id}"]`);
      if (toggle) {
        toggle.setAttribute('aria-expanded', 'false');
      }
    },

    closeAll() {
      // Fermer les dropdowns avec classe active sur le conteneur
      document.querySelectorAll('.dropdown.active').forEach(d => this.close(d));
      // Fermer les dropdowns avec classe active sur le menu lui-même
      document.querySelectorAll('.dropdown-menu.active').forEach(d => this.close(d));
    }
  };

  // ═════════════════════════════════════════════════════════════════════════════
  // MOBILE NAVIGATION
  // ═════════════════════════════════════════════════════════════════════════════
  
  const MobileNav = {
    menu: null,
    toggle: null,

    init() {
      this.menu = document.getElementById('mobile-menu');
      this.toggle = document.querySelector('[data-action="toggle-mobile-menu"]');
      
      if (this.menu && this.toggle) {
        this.bindEvents();
      }
    },

    bindEvents() {
      this.toggle.addEventListener('click', () => this.toggleMenu());
      
      // Close on outside click
      document.addEventListener('click', (e) => {
        if (!this.menu.contains(e.target) && !this.toggle.contains(e.target)) {
          this.close();
        }
      });

      // Close on escape
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          this.close();
        }
      });

      // Close on link click
      this.menu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => this.close());
      });
    },

    toggleMenu() {
      const isOpen = this.menu.classList.contains('active');
      isOpen ? this.close() : this.open();
    },

    open() {
      this.menu.classList.add('active');
      this.toggle.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    },

    close() {
      this.menu.classList.remove('active');
      this.toggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  };

  // ═════════════════════════════════════════════════════════════════════════════
  // TOAST NOTIFICATIONS
  // ═════════════════════════════════════════════════════════════════════════════
  
  const ToastManager = {
    container: null,
    toasts: [],

    init() {
      this.createContainer();
    },

    createContainer() {
      this.container = document.createElement('div');
      this.container.className = 'toast-container';
      this.container.setAttribute('role', 'region');
      this.container.setAttribute('aria-live', 'polite');
      document.body.appendChild(this.container);
    },

    show(message, options = {}) {
      const {
        title = '',
        type = 'info',
        duration = 5000,
        dismissible = true
      } = options;

      const toast = document.createElement('div');
      toast.className = `toast toast-${type}`;
      toast.setAttribute('role', 'alert');

      const iconSvg = this.getIcon(type);
      
      toast.innerHTML = `
        <div class="toast-icon">${iconSvg}</div>
        <div class="toast-content">
          ${title ? `<h4 class="toast-title">${title}</h4>` : ''}
          <p class="toast-message">${message}</p>
        </div>
        ${dismissible ? `
          <button class="toast-close" aria-label="${typeof i18n !== 'undefined' && i18n.t ? i18n.t('close') : 'Fermer'}">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" style="width:1rem;height:1rem;">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        ` : ''}
      `;

      // Close button
      if (dismissible) {
        toast.querySelector('.toast-close').addEventListener('click', () => {
          this.dismiss(toast);
        });
      }

      this.container.appendChild(toast);
      this.toasts.push(toast);

      // Auto dismiss
      if (duration > 0) {
        setTimeout(() => this.dismiss(toast), duration);
      }

      return toast;
    },

    dismiss(toast) {
      if (!toast || toast.classList.contains('removing')) return;
      
      toast.classList.add('removing');
      
      toast.addEventListener('animationend', () => {
        toast.remove();
        this.toasts = this.toasts.filter(t => t !== toast);
      });
    },

    getIcon(type) {
      const icons = {
        success: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>`,
        error: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" /></svg>`,
        warning: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" /></svg>`,
        info: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" /></svg>`
      };
      return icons[type] || icons.info;
    }
  };

  // ═════════════════════════════════════════════════════════════════════════════
  // ANIMATIONS ON SCROLL
  // ═════════════════════════════════════════════════════════════════════════════
  
  const ScrollAnimations = {
    observer: null,

    init() {
      if (!('IntersectionObserver' in window)) return;

      this.observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animate-in');
              this.observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px'
        }
      );

      document.querySelectorAll('[data-animate]').forEach(el => {
        this.observer.observe(el);
      });
    }
  };

  // ═════════════════════════════════════════════════════════════════════════════
  // STORAGE MANAGER
  // ═════════════════════════════════════════════════════════════════════════════
  
  const StorageManager = {
    get(key, defaultValue = null) {
      try {
        const saved = localStorage.getItem(key);
        return saved !== null ? saved : defaultValue;
      } catch {
        return defaultValue;
      }
    },

    set(key, value) {
      try {
        localStorage.setItem(key, value);
        return true;
      } catch {
        return false;
      }
    },

    getJSON(key, defaultValue = null) {
      try {
        const saved = localStorage.getItem(key);
        return saved ? JSON.parse(saved) : defaultValue;
      } catch {
        return defaultValue;
      }
    },

    setJSON(key, value) {
      try {
        localStorage.setItem(key, JSON.stringify(value));
        return true;
      } catch {
        return false;
      }
    },

    remove(key) {
      try {
        localStorage.removeItem(key);
        return true;
      } catch {
        return false;
      }
    }
  };

  // ═════════════════════════════════════════════════════════════════════════════
  // UTILITY FUNCTIONS
  // ═════════════════════════════════════════════════════════════════════════════
  
  const Utils = {
    // Debounce function
    debounce(fn, delay) {
      let timeout;
      return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => fn(...args), delay);
      };
    },

    // Throttle function
    throttle(fn, limit) {
      let inThrottle;
      return (...args) => {
        if (!inThrottle) {
          fn(...args);
          inThrottle = true;
          setTimeout(() => inThrottle = false, limit);
        }
      };
    },

    // Format date
    formatDate(date, locale = 'fr-FR') {
      return new Intl.DateTimeFormat(locale, {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }).format(new Date(date));
    },

    // Format number
    formatNumber(num, locale = 'fr-FR') {
      return new Intl.NumberFormat(locale).format(num);
    },

    // Format currency
    formatCurrency(amount, currency = 'EUR', locale = 'fr-FR') {
      return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: currency
      }).format(amount);
    },

    // Copy to clipboard
    async copyToClipboard(text) {
      try {
        await navigator.clipboard.writeText(text);
        return true;
      } catch (err) {
        console.error('Failed to copy:', err);
        return false;
      }
    }
  };

  // ═════════════════════════════════════════════════════════════════════════════
  // PUBLIC API
  // ═════════════════════════════════════════════════════════════════════════════
  
  window.MonsieurnerdApp = {
    version: '1.0.0',
    config: CONFIG,
    
    // Managers
    theme: ThemeManager,
    language: LanguageManager,
    storage: StorageManager,
    dropdowns: DropdownManager,
    mobileNav: MobileNav,
    toast: ToastManager,
    animations: ScrollAnimations,
    
    // Utilities
    utils: Utils,
    
    // Convenience methods
    t(key, fallback) {
      return LanguageManager.t(key, fallback);
    },
    
    getTheme() {
      return ThemeManager.currentTheme;
    },
    
    getLanguage() {
      return LanguageManager.currentLang;
    },
    
    // Initialization
    init() {
      ThemeManager.init();
      LanguageManager.init();
      DropdownManager.init();
      MobileNav.init();
      ToastManager.init();
      ScrollAnimations.init();
      
      console.log('🌿 MonsieurnerdApp initialized v' + this.version);
    }
  };

  // Auto-initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => window.MonsieurnerdApp.init());
  } else {
    window.MonsieurnerdApp.init();
  }

})();
