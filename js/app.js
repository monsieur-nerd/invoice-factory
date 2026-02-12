/**
 * APP - Application principale Invoice Factory
 * Intégration MonsieurNerd Design System
 */

class App {
  constructor() {
    this.currentInvoice = null;
    this.history = [];
    this.selectedCard = null;
    
    this.init();
  }

  async init() {
    // Charger les données
    if (typeof invoiceGenerator !== 'undefined') {
      await invoiceGenerator.loadData();
    }
    
    // Charger les préférences (délégué à MonsieurnerdApp)
    this.migrateOldPreferences();
    
    // Charger l'historique
    this.loadHistory();
    
    // Gérer le paramètre d'édition depuis l'URL (quand on revient de l'historique)
    this.handleEditFromHistory();
    
    // Initialiser l'interface
    this.setupEventListeners();
    this.setupSettingsTabs();
    
    // Mettre à jour le drapeau de langue et le thème
    this.updateLangFlag();
    this.updateSettingsThemeUI();
    
    // Rendre l'historique si sur la page historique
    if (document.getElementById('history-list')) {
      this.renderHistory();
      
      // Forcer le re-rendu quand on revient sur la page (cache du navigateur)
      window.addEventListener('pageshow', (event) => {
        if (event.persisted) {
          // La page a été chargée depuis le cache bfcache
          console.log('🔄 Page restaurée depuis le cache, re-rendu historique');
          this.renderHistory();
        }
      });
      
      // Re-rendre quand la langue change
      window.addEventListener('languagechange', () => {
        console.log('🔄 Langue changée, re-rendu historique');
        this.renderHistory();
      });
    }
    
    // Charger les paramètres si sur la page settings
    if (document.getElementById('settings-general')) {
      this.loadSettings();
    }
    
    console.log('🌿 Invoice Factory MonsieurNerd Edition initialized');
  }

  // Gestion du retour depuis l'historique pour édition
  handleEditFromHistory() {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('edit') === 'true') {
      // Charger la dernière facture consultée depuis sessionStorage
      const pendingEdit = sessionStorage.getItem('pendingInvoiceEdit');
      if (pendingEdit) {
        try {
          this.currentInvoice = JSON.parse(pendingEdit);
          sessionStorage.removeItem('pendingInvoiceEdit');
          
          // Nettoyer l'URL
          window.history.replaceState({}, document.title, window.location.pathname);
          
          // Attendre que le DOM soit complètement prêt
          if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
              this._openEditFromHistory();
            });
          } else {
            // DOM déjà prêt, utiliser requestAnimationFrame pour s'assurer que tout est rendu
            requestAnimationFrame(() => {
              this._openEditFromHistory();
            });
          }
        } catch (e) {
          console.error('Erreur lors du chargement de la facture pour édition:', e);
        }
      }
    }
  }
  
  // Méthode helper pour ouvrir l'édition depuis l'historique
  _openEditFromHistory() {
    // S'assurer que la facture est affichée avant d'ouvrir le modal
    if (this.currentInvoice) {
      this.renderInvoice();
      this.updateWorkflow(3);
      
      // Activer les boutons d'action
      document.getElementById('btn-edit')?.removeAttribute('disabled');
      document.getElementById('btn-json')?.removeAttribute('disabled');
      document.getElementById('btn-pdf')?.removeAttribute('disabled');
      
      // Petite attente pour s'assurer que tout est rendu
      setTimeout(() => {
        this.openEditModal();
      }, 50);
    }
  }

  // Migration des anciennes préférences vers MonsieurnerdApp
  migrateOldPreferences() {
    const saved = localStorage.getItem('invoiceFactoryPrefs');
    if (saved) {
      try {
        const prefs = JSON.parse(saved);
        // Migrer la langue si elle existe
        if (prefs.language && !localStorage.getItem('monsieurnerd-lang')) {
          localStorage.setItem('monsieurnerd-lang', prefs.language);
        }
        // Le thème est déjà géré par le script inline dans le HTML
      } catch {
        // Ignorer les erreurs de parsing
      }
    }
  }

  // Sauvegarder uniquement les préférences spécifiques à l'app
  saveAppPreferences() {
    localStorage.setItem('invoiceFactoryPrefs', JSON.stringify({
      language: this.getLanguage()
    }));
  }

  // Raccourcis pour accéder au thème/langue via MonsieurnerdApp
  get darkMode() {
    return window.MonsieurnerdApp ? window.MonsieurnerdApp.getTheme() === 'dark' : false;
  }

  get language() {
    return this.getLanguage();
  }

  getLanguage() {
    return window.MonsieurnerdApp ? window.MonsieurnerdApp.getLanguage() : 'fr';
  }

  /**
   * Rafraîchit toutes les traductions dynamiques de l'application
   * Appelé quand la langue change
   */
  refreshAllTranslations() {
    // Sauvegarder l'état des modaux ouverts
    const errorModalOpen = document.getElementById('modal-error-synthesis')?.style.display === 'flex';
    const exerciseModalOpen = document.getElementById('modal-exercise')?.style.display === 'flex';
    const batchModalOpen = document.getElementById('modal-batch')?.style.display === 'flex';
    const customModalOpen = document.getElementById('modal-custom')?.style.display === 'flex';
    
    // Sauvegarder la facture en cours de visualisation dans la synthèse
    const synthesisInvoice = errorModalOpen ? this.currentInvoice : null;
    
    // Mettre à jour les textes statiques avec data-i18n
    if (typeof applyTranslations === 'function') {
      applyTranslations();
    }
    
    // Rafraîchir l'historique si visible
    if (document.getElementById('history-list')) {
      this.renderHistory();
    }
    
    // Rafraîchir l'aperçu de facture si visible
    if (this.currentInvoice && document.getElementById('invoice-preview')) {
      this.renderInvoice();
    }
    
    // Restaurer et mettre à jour les modaux
    if (exerciseModalOpen) {
      this.updateExerciseModalTexts();
    }
    if (batchModalOpen) {
      this.updateBatchModalTexts();
    }
    if (customModalOpen) {
      this.updateCustomModalTexts();
    }
    if (errorModalOpen && synthesisInvoice) {
      this.renderErrorSynthesis(synthesisInvoice);
      // Rouvrir le modal car applyTranslations peut l'avoir fermé
      this.openConfigModal('error-synthesis');
    }
  }

  /**
   * Met à jour les textes du modal de configuration exercice
   */
  updateExerciseModalTexts() {
    const t = (key) => typeof i18n !== 'undefined' ? i18n.t(key) : key;
    
    const modalTitle = document.querySelector('#modal-exercise h3');
    if (modalTitle) modalTitle.textContent = t('modalExerciseTitle') || 'Configurer le Mode Exercice';
    
    const errorCountLabel = document.querySelector('label[for="exercise-error-count"]');
    if (errorCountLabel) errorCountLabel.textContent = t('errorCount') || 'Nombre d\'erreurs';
    
    const errorTypesLabel = document.querySelector('#modal-exercise .text-accent.font-semibold');
    if (errorTypesLabel) errorTypesLabel.textContent = t('errorTypes') || 'Types d\'erreurs';
    
    // Mettre à jour les labels des checkboxes
    const calcLabel = document.querySelector('label[for="error-calc"] span');
    if (calcLabel) calcLabel.textContent = t('errorCalc') || 'Calcul';
    
    const vatLabel = document.querySelector('label[for="error-vat"] span');
    if (vatLabel) vatLabel.textContent = t('errorVat') || 'TVA';
    
    const dateLabel = document.querySelector('label[for="error-date"] span');
    if (dateLabel) dateLabel.textContent = t('errorDate') || 'Date';
    
    const missingLabel = document.querySelector('label[for="error-missing"] span');
    if (missingLabel) missingLabel.textContent = t('errorMissing') || 'Champ manquant';
    
    // Boutons
    const cancelBtn = document.querySelector('#modal-exercise .btn-ghost');
    if (cancelBtn) cancelBtn.textContent = t('btnCancel') || 'Annuler';
    
    const generateBtn = document.querySelector('#modal-exercise .btn-primary');
    if (generateBtn) generateBtn.textContent = t('btnGenerate') || 'Générer';
  }

  /**
   * Met à jour les textes du modal de configuration lot
   */
  updateBatchModalTexts() {
    const t = (key) => typeof i18n !== 'undefined' ? i18n.t(key) : key;
    
    const modalTitle = document.querySelector('#modal-batch h3');
    if (modalTitle) modalTitle.textContent = t('modalBatchTitle') || 'Configurer le Mode Lot';
    
    const batchCountLabel = document.querySelector('label[for="batch-count"]');
    if (batchCountLabel) batchCountLabel.textContent = t('batchCount') || 'Nombre de factures';
    
    const batchHint = document.querySelector('#batch-hint');
    if (batchHint) batchHint.textContent = t('batchHint') || 'Entre 2 et 50 factures';
    
    const modeLabel = document.querySelector('label[for="batch-mode"]');
    if (modeLabel) modeLabel.textContent = t('batchMode') || 'Mode';
    
    // Options du select
    const modeSelect = document.getElementById('batch-mode');
    if (modeSelect) {
      const perfectOption = modeSelect.querySelector('option[value="perfect"]');
      if (perfectOption) perfectOption.textContent = t('batchModeCorrect') || 'Factures correctes';
      
      const errorOption = modeSelect.querySelector('option[value="error"]');
      if (errorOption) errorOption.textContent = t('batchModeError') || 'Avec erreurs (exercice)';
    }
    
    // Boutons
    const cancelBtn = document.querySelector('#modal-batch .btn-ghost');
    if (cancelBtn) cancelBtn.textContent = t('btnCancel') || 'Annuler';
    
    const generateBtn = document.querySelector('#modal-batch .btn-primary');
    if (generateBtn) generateBtn.textContent = t('generateBatch') || 'Générer le lot';
  }

  /**
   * Met à jour les textes du modal personnalisé
   */
  updateCustomModalTexts() {
    const t = (key) => typeof i18n !== 'undefined' ? i18n.t(key) : key;
    
    const modalTitle = document.querySelector('#modal-custom h3');
    if (modalTitle) modalTitle.textContent = t('modalCustomTitle') || 'Configurer la Facture';
    
    const companyLabel = document.querySelector('label[for="custom-company"]');
    if (companyLabel) companyLabel.textContent = t('customCompany') || 'Entreprise';
    
    const clientLabel = document.querySelector('label[for="custom-client"]');
    if (clientLabel) clientLabel.textContent = t('customClient') || 'Client';
    
    const productsLabel = document.querySelector('label[for="custom-products"]');
    if (productsLabel) productsLabel.textContent = t('customProducts') || 'Produits';
    
    // Boutons
    const cancelBtn = document.querySelector('#modal-custom .btn-ghost');
    if (cancelBtn) cancelBtn.textContent = t('btnCancel') || 'Annuler';
    
    const generateBtn = document.querySelector('#modal-custom .btn-primary');
    if (generateBtn) generateBtn.textContent = t('btnGenerate') || 'Générer';
  }

  setupEventListeners() {
    // Écouter les changements de langue depuis MonsieurnerdApp
    window.addEventListener('languagechange', () => {
      this.updateLangFlag();
      this.saveAppPreferences();
      this.refreshAllTranslations();
    });

    // Touches clavier
    document.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        this.generateQuick();
      }
      // Fermer les modals avec Escape
      if (e.key === 'Escape') {
        this.closeInvoiceModal();
        this.closeConfigModal('exercise');
        this.closeConfigModal('batch');
        this.closeConfigModal('custom');
        this.closeErrorSynthesis();
        this.closeEditModal();
      }
    });

    // Feature card selection
    document.querySelectorAll('.feature-card').forEach(card => {
      card.addEventListener('click', (e) => {
        if (!e.target.closest('button')) {
          this.selectCard(card.dataset.card);
        }
      });
    });
  }

  setupSettingsTabs() {
    // Settings navigation
    document.querySelectorAll('[data-settings-tab]').forEach(item => {
      item.addEventListener('click', () => {
        const tabId = item.dataset.settingsTab;
        
        // Update navigation
        document.querySelectorAll('[data-settings-tab]').forEach(i => i.classList.remove('active'));
        item.classList.add('active');
        
        // Show content
        document.querySelectorAll('[id^="settings-"]').forEach(content => {
          content.classList.add('hidden');
        });
        document.getElementById(`settings-${tabId}`)?.classList.remove('hidden');
      });
    });

    // Theme tabs in settings
    document.querySelectorAll('[data-theme-value]').forEach(tab => {
      tab.addEventListener('click', () => {
        const theme = tab.dataset.themeValue;
        
        if (window.MonsieurnerdApp && window.MonsieurnerdApp.theme) {
          // Utiliser setMode pour gérer correctement le mode auto
          window.MonsieurnerdApp.theme.setMode(theme);
        }
        
        // Mettre à jour l'UI
        this.updateSettingsThemeUI();
      });
    });
  }

  // ============================================
  // NAVIGATION & CARDS
  // ============================================

  selectCard(cardId) {
    // Toggle card selection
    document.querySelectorAll('.feature-card').forEach(c => c.classList.remove('active'));
    
    const card = document.querySelector(`[data-card="${cardId}"]`);
    if (card) {
      card.classList.add('active');
      this.selectedCard = cardId;
      
      // Update workflow
      this.updateWorkflow(2);
    }
  }

  updateWorkflow(step) {
    document.querySelectorAll('.workflow-step').forEach((s, index) => {
      s.classList.remove('active', 'completed');
      if (index + 1 === step) {
        s.classList.add('active');
      } else if (index + 1 < step) {
        s.classList.add('completed');
      }
    });
  }

  // ============================================
  // GENERATION
  // ============================================

  async generateQuick() {
    const options = {
      mode: 'quick',
      lang: this.getDefaultInvoiceLang(),
      level: 'secondary2'
    };
    
    const t = (key) => typeof i18n !== 'undefined' ? i18n.t(key) : key;
    this.showToast(t('toastGeneratingInvoice'), 'info');
    
    try {
      if (typeof invoiceGenerator !== 'undefined') {
        this.currentInvoice = await invoiceGenerator.generate(options);
        this.currentInvoice.invoiceLang = options.lang;
        this.renderInvoice();
        this.updateWorkflow(3);
        this.showToast(t('toastInvoiceGenerated'), 'success');
      } else {
        // Demo mode - show sample invoice
        this.showSampleInvoice();
      }
    } catch (error) {
      this.showToast(t('toastGenerationError'), 'error');
      console.error(error);
    }
  }

  async generateExercise() {
    const t = (key) => typeof i18n !== 'undefined' ? i18n.t(key) : key;
    try {
      if (typeof invoiceGenerator !== 'undefined') {
        // Récupérer les options du modal
        const errorCount = parseInt(document.getElementById('exercise-error-count')?.value || '3');
        const errorTypes = [];
        if (document.getElementById('error-calc')?.checked) errorTypes.push('calculation');
        if (document.getElementById('error-vat')?.checked) errorTypes.push('vat');
        if (document.getElementById('error-date')?.checked) errorTypes.push('date');
        if (document.getElementById('error-missing')?.checked) errorTypes.push('missing');
        
        // Fallback si aucun type sélectionné
        if (errorTypes.length === 0) errorTypes.push('calculation', 'vat');
        
        // Vérifier le nombre maximum d'erreurs possible
        const lineCount = 5; // Valeur par défaut utilisée par le générateur
        const maxErrors = invoiceGenerator.getMaxErrors(lineCount, errorTypes);
        
        if (errorCount > maxErrors) {
          this.showToast(t('errorMaxReached'), 'error');
          // Afficher un message plus détaillé dans une alerte
          setTimeout(() => {
            const message = t('errorMaxReachedMessage').replace('{max}', maxErrors);
            alert(message);
          }, 100);
          return;
        }
        
        this.showToast(t('toastExerciseMode'), 'warning');
        
        const options = {
          mode: 'exercise',
          lang: this.getDefaultInvoiceLang(),
          errorCount: errorCount,
          errorTypes: errorTypes
        };
        this.currentInvoice = await invoiceGenerator.generate(options);
        this.currentInvoice.invoiceLang = options.lang;
        this.renderInvoice();
        this.updateWorkflow(3);
        this.closeConfigModal('exercise');
        this.showToast(t('toastInvoiceWithErrors').replace('{count}', errorCount), 'success');
      } else {
        this.showSampleInvoice();
      }
    } catch (error) {
      this.showToast(t('toastGenerationError'), 'error');
      console.error(error);
    }
  }

  async generateBatch() {
    const t = (key) => typeof i18n !== 'undefined' ? i18n.t(key) : key;
    this.showToast(t('toastGeneratingBatch'), 'info');
    
    try {
      if (typeof invoiceGenerator !== 'undefined') {
        // Récupérer les options du modal
        const count = parseInt(document.getElementById('batch-count')?.value || '10');
        const mode = document.getElementById('batch-mode')?.value || 'quick';
        
        const options = { 
          mode: mode,
          lang: this.getDefaultInvoiceLang()
        };
        if (mode === 'exercise') {
          options.errorCount = 3;
          options.errorTypes = ['calculation', 'vat'];
        }
        
        const invoices = await invoiceGenerator.generateBatch(count, options);
        this.closeConfigModal('batch');
        
        // Créer un objet lot qui contient toutes les factures
        const batchNumber = `LOT-${new Date().getFullYear()}-${Math.floor(Math.random() * 9000) + 1000}`;
        const hasErrors = invoices.some(inv => inv.hasErrors);
        
        // Collecter toutes les erreurs du lot
        const allErrors = [];
        invoices.forEach((inv, idx) => {
          if (inv.errors) {
            inv.errors.forEach(err => {
              allErrors.push({
                ...err,
                invoiceNumber: inv.number,
                invoiceIndex: idx + 1
              });
            });
          }
        });
        
        this.currentInvoice = {
          isBatch: true,
          batchNumber: batchNumber,
          number: batchNumber,
          count: invoices.length,
          invoices: invoices,
          date: new Date().toLocaleDateString('fr-FR'),
          hasErrors: hasErrors,
          errors: allErrors,
          errorCount: allErrors.length,
          company: { name: t('batchOf') + ' ' + t('batchInvoicesLabel') },
          client: { name: `${invoices.length} ${t('batchInvoicesLabel')}` },
          total: invoices.reduce((sum, inv) => sum + inv.total, 0)
        };
        
        this.renderBatch();
        this.updateWorkflow(3);
        this.showToast(t('toastBatchGenerated').replace('{count}', count).replace('{batchNumber}', batchNumber), 'success');
      } else {
        this.showToast(t('toastDemoMode'), 'info');
      }
    } catch (error) {
      this.showToast(t('toastGenerationError'), 'error');
      console.error(error);
    }
  }

  async generateCustom() {
    const t = (key) => typeof i18n !== 'undefined' ? i18n.t(key) : key;
    this.showToast(t('toastGeneratingInvoice'), 'info');
    
    try {
      if (typeof invoiceGenerator !== 'undefined') {
        // Récupérer les options du modal
        const company = document.getElementById('custom-company')?.value || null;
        const clientType = document.getElementById('custom-client')?.value || 'all';
        const lineCount = parseInt(document.getElementById('custom-lines')?.value || '5');
        const mode = document.getElementById('custom-mode')?.value || 'quick';
        const invoiceLang = document.getElementById('custom-invoice-lang')?.value || this.getDefaultInvoiceLang();
        
        const options = {
          mode: mode,
          company: company || undefined,
          clientType: clientType,
          lineCount: lineCount,
          invoiceLang: invoiceLang
        };
        
        if (mode === 'exercise') {
          options.errorCount = 3;
          options.errorTypes = ['calculation', 'vat'];
        }
        
        this.currentInvoice = await invoiceGenerator.generate(options);
        this.currentInvoice.invoiceLang = invoiceLang; // Stocker la langue
        this.renderInvoice();
        this.updateWorkflow(3);
        this.closeConfigModal('custom');
        this.showToast(t('toastCustomGenerated'), 'success');
      } else {
        this.showSampleInvoice();
      }
    } catch (error) {
      this.showToast(t('toastGenerationError'), 'error');
      console.error(error);
    }
  }

  selectInvoiceLang(lang) {
    // Mettre à jour le champ caché
    const hiddenInput = document.getElementById('custom-invoice-lang');
    if (hiddenInput) hiddenInput.value = lang;
    
    // Mettre à jour l'apparence des boutons
    document.querySelectorAll('.lang-selector-invoice .lang-btn').forEach(btn => {
      btn.classList.remove('active');
      if (btn.dataset.lang === lang) {
        btn.classList.add('active');
      }
    });
  }

  async populateCustomOptions() {
    // S'assurer que les données sont chargées
    if (typeof invoiceGenerator !== 'undefined') {
      // Charger depuis dataLoader si disponible et pas encore chargé
      if (typeof dataLoader !== 'undefined' && !dataLoader.loaded) {
        await dataLoader.loadAll();
      }
      // Recharger les données depuis dataLoader si disponible
      if (typeof dataLoader !== 'undefined' && dataLoader.getAllEntreprises) {
        const entreprises = dataLoader.getAllEntreprises();
        if (entreprises && entreprises.length > 0) {
          invoiceGenerator.data.entreprises = entreprises;
        }
      }
    }
    
    // Remplir la liste des entreprises
    const companySelect = document.getElementById('custom-company');
    if (companySelect && typeof invoiceGenerator !== 'undefined') {
      // Garder l'option "Aléatoire"
      const t = (key) => typeof i18n !== 'undefined' ? i18n.t(key) : key;
      companySelect.innerHTML = `<option value="">${t('random')}</option>`;
      
      // Ajouter les entreprises disponibles
      const companies = invoiceGenerator.data.entreprises || [];
      companies.forEach(company => {
        const option = document.createElement('option');
        option.value = company.id;
        option.textContent = company.name;
        companySelect.appendChild(option);
      });
    }
  }

  showSampleInvoice() {
    const today = new Date();
    const operationDate = new Date(today);
    operationDate.setDate(operationDate.getDate() - 3);
    
    // Invoice de démonstration
    this.currentInvoice = {
      number: '2026-001',
      date: today.toLocaleDateString('fr-FR'),
      operationDate: operationDate.toLocaleDateString('fr-FR'),
      dueDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toLocaleDateString('fr-FR'),
      company: {
        name: 'Boulangerie Dupont',
        address: '123 Rue de Paris, 1000 Bruxelles',
        vat: 'BE0123.456.789',
        logo: 'assets/logos/societe_soc007.svg'
      },
      client: {
        name: 'Client Example SA',
        address: '456 Avenue Louise, 1050 Bruxelles',
        vat: 'BE0987.654.321'
      },
      lines: [
        { id: 1, description: 'Croissants x 10', qty: 10, unitPrice: 1.20, vatRate: 6, total: 12.00 },
        { id: 2, description: 'Baguettes x 5', qty: 5, unitPrice: 1.50, vatRate: 6, total: 7.50 },
        { id: 3, description: 'Pain de campagne', qty: 2, unitPrice: 3.80, vatRate: 6, total: 7.60 }
      ],
      subtotal: 27.10,
      vatAmount: 1.63,
      total: 28.73,
      vatBreakdown: {
        '6': { base: 27.10, vat: 1.63 }
      },
      paymentTerms: 30
    };
    
    this.renderInvoice();
    this.updateWorkflow(3);
  }

  renderInvoice() {
    const preview = document.getElementById('invoice-preview');
    if (!preview || !this.currentInvoice) return;
    
    const inv = this.currentInvoice;
    
    // Déterminer la langue de la facture (par défaut fr)
    const invoiceLang = inv.invoiceLang || 'fr';
    
    // Utiliser le rendu HTML multilingue du générateur
    if (typeof invoiceGenerator !== 'undefined') {
      preview.innerHTML = invoiceGenerator.renderHTML(inv, invoiceLang);
    } else {
      // Fallback si le générateur n'est pas disponible
      preview.innerHTML = `<div class="invoice-document"><h1>FACTURE N° ${inv.number}</h1></div>`;
    }
    
    // Activer les boutons
    document.getElementById('btn-edit')?.removeAttribute('disabled');
    document.getElementById('btn-json')?.removeAttribute('disabled');
    document.getElementById('btn-pdf')?.removeAttribute('disabled');
    
    // Gérer le bouton de synthèse des erreurs
    const btnErrors = document.getElementById('btn-errors');
    if (btnErrors) {
      if (inv.hasErrors && inv.errors && inv.errors.length > 0) {
        btnErrors.style.display = 'inline-flex';
        btnErrors.removeAttribute('disabled');
      } else {
        btnErrors.style.display = 'none';
        btnErrors.setAttribute('disabled', 'disabled');
      }
    }
    
    // Sauvegarder dans l'historique
    this.saveToHistory();
  }

  renderBatch() {
    const preview = document.getElementById('invoice-preview');
    if (!preview || !this.currentInvoice || !this.currentInvoice.isBatch) return;
    
    const t = (key) => typeof i18n !== 'undefined' ? i18n.t(key) : key;
    const batch = this.currentInvoice;
    const invoices = batch.invoices;
    
    let html = `
      <div class="batch-document">
        <div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 2rem; border-radius: 12px; margin-bottom: 2rem; text-align: center;">
          <h1 style="margin: 0; font-size: 2rem; display: flex; align-items: center; justify-content: center; gap: 1rem;">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 2.5rem; height: 2.5rem;">
              <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
            </svg>
            ${t('batchNumber').toUpperCase() || 'LOT'} ${t('batchInvoicesLabel').toUpperCase() || 'DE FACTURES'}
          </h1>
          <p style="margin: 0.5rem 0 0; font-size: 1.25rem; opacity: 0.9;">${t('invNumber') || 'N°'} ${batch.batchNumber}</p>
          <div style="margin-top: 1rem; display: flex; justify-content: center; gap: 2rem; flex-wrap: wrap;">
            <span style="background: rgba(255,255,255,0.2); padding: 0.5rem 1rem; border-radius: 20px; font-size: 0.9rem;">
              ${batch.count} ${t('batchInvoicesLabel') || 'factures'}
            </span>
            <span style="background: rgba(255,255,255,0.2); padding: 0.5rem 1rem; border-radius: 20px; font-size: 0.9rem;">
              ${t('batchTotalLabel') || 'Total'}: ${batch.total.toFixed(2)} €
            </span>
            ${batch.hasErrors ? `<span style="background: #ef4444; padding: 0.5rem 1rem; border-radius: 20px; font-size: 0.9rem; font-weight: 600;">⚠️ ${t('batchContainsErrors') || 'Contient des erreurs'}</span>` : ''}
          </div>
        </div>
        
        <div class="batch-invoices">
    `;
    
    invoices.forEach((inv, index) => {
      html += `
        <div class="batch-invoice-item" style="margin-bottom: 3rem; page-break-inside: avoid;">
          <div style="background: #f3f4f6; padding: 1rem; border-radius: 8px 8px 0 0; display: flex; justify-content: space-between; align-items: center; border-bottom: 3px solid #d1d5db;">
            <h3 style="margin: 0; color: #1f2937; display: flex; align-items: center; gap: 0.75rem;">
              <span style="background: #4b5563; color: white; width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700;">${index + 1}</span>
              ${t('typeInvoice') || 'Facture'} ${inv.number}
            </h3>
            ${inv.hasErrors ? `<span style="background: #fef2f2; color: #dc2626; padding: 0.25rem 0.75rem; border-radius: 20px; font-size: 0.8rem; font-weight: 600;">⚠️ ${t('batchErrorsLabel') || 'Erreurs'}</span>` : ''}
          </div>
          <div style="background: white; padding: 1.5rem; border-radius: 0 0 8px 8px; border: 1px solid #e5e7eb; border-top: none;">
            ${this.renderMiniInvoice(inv)}
          </div>
        </div>
      `;
    });
    
    html += '</div></div>';
    preview.innerHTML = html;
    
    // Activer les boutons
    document.getElementById('btn-edit')?.setAttribute('disabled', 'disabled');
    document.getElementById('btn-json')?.removeAttribute('disabled');
    document.getElementById('btn-pdf')?.removeAttribute('disabled');
    
    // Gérer le bouton de synthèse des erreurs
    const btnErrors = document.getElementById('btn-errors');
    if (btnErrors) {
      if (batch.hasErrors && batch.errors && batch.errors.length > 0) {
        btnErrors.style.display = 'inline-flex';
        btnErrors.removeAttribute('disabled');
      } else {
        btnErrors.style.display = 'none';
        btnErrors.setAttribute('disabled', 'disabled');
      }
    }
    
    this.saveToHistory();
  }
  
  renderMiniInvoice(inv) {
    // Rendu compact d'une facture pour le lot
    // Logo de l'entreprise (toujours présent)
    const logoHtml = inv.company.logo 
      ? `<img src="${inv.company.logo}" alt="${inv.company.name}" style="width: 64px; height: 64px; border-radius: 8px; object-fit: contain; box-shadow: 0 2px 8px rgba(0,0,0,0.1); background: white; padding: 4px; border: 1px solid #e5e7eb; margin-right: 12px; vertical-align: middle;">`
      : '';
    
    return `
      <div style="font-size: 0.9rem;">
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1rem;">
          <div style="display: flex; align-items: flex-start;">
            ${logoHtml}
            <div>
              <p style="margin: 0; color: #6b7280; font-size: 0.8rem;">${t('invEmitter') || 'ÉMETTEUR'}</p>
              <p style="margin: 0; font-weight: 600;">${inv.company.name}</p>
              <p style="margin: 0; color: #4b5563;">${inv.company.address}</p>
            </div>
          </div>
          <div>
            <p style="margin: 0; color: #6b7280; font-size: 0.8rem;">${t('invClient') || 'CLIENT'}</p>
            <p style="margin: 0; font-weight: 600;">${inv.client.name}</p>
            <p style="margin: 0; color: #4b5563;">${inv.client.address}</p>
          </div>
        </div>
        <div style="background: #f9fafb; padding: 0.75rem; border-radius: 6px; margin-bottom: 1rem;">
          <span style="color: #6b7280;">Date:</span> <strong>${inv.date}</strong> | 
          <span style="color: #6b7280;">${t('invDueDateLabel') || 'Échéance:'}</span> <strong>${inv.dueDate}</strong> |
          <span style="color: #6b7280;">Total:</span> <strong style="color: #059669;">${inv.total.toFixed(2)} €</strong>
        </div>
        <table style="width: 100%; font-size: 0.8rem; border-collapse: collapse;">
          <thead>
            <tr style="background: #f3f4f6;">
              <th style="padding: 0.5rem; text-align: left;">Description</th>
              <th style="padding: 0.5rem; text-align: center;">Qté</th>
              <th style="padding: 0.5rem; text-align: right;">Prix</th>
              <th style="padding: 0.5rem; text-align: right;">Total</th>
            </tr>
          </thead>
          <tbody>
            ${inv.lines.map(line => `
              <tr>
                <td style="padding: 0.5rem; border-bottom: 1px solid #e5e7eb;">${line.description}</td>
                <td style="padding: 0.5rem; text-align: center; border-bottom: 1px solid #e5e7eb;">${line.qty}</td>
                <td style="padding: 0.5rem; text-align: right; border-bottom: 1px solid #e5e7eb;">${line.unitPrice.toFixed(2)} €</td>
                <td style="padding: 0.5rem; text-align: right; border-bottom: 1px solid #e5e7eb; font-weight: 500;">${line.total.toFixed(2)} €</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `;
  }

  // ============================================
  // EXPORT
  // ============================================

  async exportPDF() {
    if (!this.currentInvoice) {
      this.showToast(t('toastNoInvoice'), 'error');
      return;
    }
    
    // Si c'est un lot, utiliser la méthode dédiée
    if (this.currentInvoice.isBatch) {
      await this.exportBatchPDF();
      return;
    }
    
    const t = (key) => typeof i18n !== 'undefined' ? i18n.t(key) : key;
    this.showToast(t('toastGeneratingPDF'), 'info');
    
    try {
      const { jsPDF } = window.jspdf;
      const doc = new jsPDF();
      const inv = this.currentInvoice;
      
      // === HEADER avec LOGO au-dessus de FACTURE (comme l'aperçu HTML) ===
      let yPos = 20;
      
      // Logo en grand (70mm ≈ 200px) au-dessus
      if (inv.company.logo) {
        try {
          const logoDataUrl = await this.svgToPngDataUrl(inv.company.logo);
          if (logoDataUrl) {
            doc.addImage(logoDataUrl, 'PNG', 20, yPos, 50, 50);
            yPos += 70;
          }
        } catch (e) {
          console.warn('Impossible de charger le logo:', e);
        }
      }
      
      // Titre FACTURE et numéro
      doc.setFontSize(16);
      doc.setTextColor(21, 128, 61);
      doc.setFont('helvetica', 'bold');
      doc.text('FACTURE', 20, yPos);
      
      doc.setFontSize(11);
      doc.setTextColor(107, 114, 128);
      doc.setFont('helvetica', 'normal');
      doc.text(`N° ${inv.number}`, 20, yPos + 6);
      
      // Dates à droite
      doc.setFontSize(9);
      doc.setTextColor(31, 41, 55);
      doc.setFont('helvetica', 'bold');
      doc.text((t('invDate') || 'Date facture') + ':', 130, yPos);
      doc.setFont('helvetica', 'normal');
      doc.text(`${inv.date}`, 175, yPos);
      
      if (inv.operationDate) {
        doc.setFont('helvetica', 'bold');
        doc.text((t('invOperationDate') || 'Date opération') + ':', 130, yPos + 5);
        doc.setFont('helvetica', 'normal');
        doc.text(`${inv.operationDate}`, 175, yPos + 5);
      }
      
      doc.setFont('helvetica', 'bold');
      doc.text((t('invDueDateLabel') || 'Échéance:'), 130, yPos + (inv.operationDate ? 10 : 5));
      doc.setFont('helvetica', 'normal');
      doc.text(`${inv.dueDate}`, 175, yPos + (inv.operationDate ? 10 : 5));
      
      // === Section ÉMETTEUR et CLIENT ===
      yPos += 20;
      doc.setFillColor(249, 250, 251);
      doc.roundedRect(20, yPos, 170, 45, 3, 3, 'F');
      
      doc.setFontSize(8);
      doc.setTextColor(156, 163, 175);
      doc.setFont('helvetica', 'bold');
      doc.text((t('invEmitter') || 'ÉMETTEUR').toUpperCase(), 25, yPos + 8);
      doc.text((t('invClient') || 'CLIENT'), 110, yPos + 8);
      
      doc.setFontSize(11);
      doc.setTextColor(31, 41, 55);
      doc.setFont('helvetica', 'bold');
      doc.text(inv.company.name, 25, yPos + 18);
      doc.text(inv.client.name, 110, yPos + 18);
      
      doc.setFontSize(9);
      doc.setFont('helvetica', 'normal');
      doc.text(inv.company.address, 25, yPos + 25);
      doc.text(inv.client.address, 110, yPos + 25);
      
      // TVA
      doc.setFontSize(8);
      doc.text(`TVA: ${inv.company.vat}`, 25, yPos + 35);
      if (inv.client.vat) {
        doc.text(`TVA: ${inv.client.vat}`, 110, yPos + 35);
      }
      
      // === Tableau ===
      yPos += 55;
      
      doc.setFillColor(249, 250, 251);
      doc.rect(20, yPos - 5, 170, 10, 'F');
      
      doc.setFontSize(9);
      doc.setTextColor(107, 114, 128);
      doc.setFont('helvetica', 'bold');
      doc.text('N°', 25, yPos);
      doc.text('Description', 40, yPos);
      doc.text('Qté', 95, yPos);
      doc.text('Prix unit.', 120, yPos);
      doc.text('TVA', 150, yPos);
      doc.text('Total', 175, yPos);
      
      yPos += 10;
      inv.lines.forEach((line, index) => {
        if (index % 2 === 1) {
          doc.setFillColor(250, 250, 250);
          doc.rect(20, yPos - 5, 170, 10, 'F');
        }
        
        doc.setFontSize(9);
        doc.setTextColor(156, 163, 175);
        doc.setFont('helvetica', 'bold');
        doc.text(String(line.id), 25, yPos);
        
        doc.setTextColor(31, 41, 55);
        doc.setFont('helvetica', 'normal');
        doc.text(line.description.substring(0, 25), 40, yPos);
        
        doc.setFont('helvetica', 'bold');
        doc.text(String(line.qty), 100, yPos);
        
        doc.setFont('helvetica', 'normal');
        doc.text(`${line.unitPrice.toFixed(2)} €`, 125, yPos);
        
        doc.setFont('helvetica', 'bold');
        doc.text(`${line.vatRate}%`, 152, yPos);
        
        doc.setFont('helvetica', 'bold');
        doc.text(`${line.total.toFixed(2)} €`, 175, yPos);
        
        yPos += 10;
      });
      
      // Totaux avec ventilation TVA par taux
      yPos += 10;
      
      // Calculer la hauteur nécessaire selon le nombre de taux TVA
      const vatRates = inv.vatBreakdown ? Object.keys(inv.vatBreakdown) : [];
      const boxHeight = 30 + (vatRates.length * 6);
      
      doc.setFillColor(249, 250, 251);
      doc.roundedRect(110, yPos - 5, 80, boxHeight, 3, 3, 'F');
      
      doc.setFontSize(10);
      doc.setTextColor(107, 114, 128);
      doc.setFont('helvetica', 'normal');
      doc.text(t('invSubtotal') || 'Sous-total HT', 115, yPos + 5);
      doc.text(`${inv.subtotal.toFixed(2)} €`, 185, yPos + 5, { align: 'right' });
      
      yPos += 8;
      
      // Ventilation TVA par taux
      if (inv.vatBreakdown) {
        Object.entries(inv.vatBreakdown).sort((a, b) => a[0] - b[0]).forEach(([rate, data]) => {
          doc.setFontSize(8);
          doc.text(`TVA ${rate}% (base ${data.base.toFixed(2)} €)`, 115, yPos + 5);
          doc.text(`${data.vat.toFixed(2)} €`, 185, yPos + 5, { align: 'right' });
          yPos += 6;
        });
      }
      
      yPos += 4;
      doc.setFontSize(10);
      doc.text(t('invVatTotal') || 'Total TVA', 115, yPos);
      doc.text(`${inv.vatAmount.toFixed(2)} €`, 185, yPos, { align: 'right' });
      
      yPos += 10;
      doc.setFontSize(12);
      doc.setTextColor(31, 41, 55);
      doc.setFont('helvetica', 'bold');
      doc.text(t('invGrandTotal') || 'TOTAL TTC', 115, yPos);
      
      doc.setFontSize(14);
      doc.setTextColor(21, 128, 61);
      doc.text(`${inv.total.toFixed(2)} €`, 185, yPos, { align: 'right' });
      
      doc.save(`facture-${inv.number}.pdf`);
      this.showToast(t('toastPDFDownloaded'), 'success');
    } catch (error) {
      this.showToast(t('toastPDFError'), 'error');
      console.error(error);
    }
  }

  async exportBatchPDF() {
    const batch = this.currentInvoice;
    const t = (key) => typeof i18n !== 'undefined' ? i18n.t(key) : key;
    this.showToast(t('toastGeneratingBatchPDF').replace('{count}', batch.count), 'info');
    
    try {
      const { jsPDF } = window.jspdf;
      const doc = new jsPDF();
      
      // Page de garde
      let yPos = 60;
      
      // Titre LOT
      doc.setFillColor(30, 58, 95);
      doc.rect(0, 0, 210, 297, 'F');
      
      doc.setTextColor(255, 255, 255);
      doc.setFontSize(28);
      doc.setFont('helvetica', 'bold');
      doc.text('LOT DE FACTURES', 105, yPos, { align: 'center' });
      
      yPos += 25;
      doc.setFontSize(18);
      doc.text(batch.batchNumber, 105, yPos, { align: 'center' });
      
      yPos += 40;
      doc.setFontSize(12);
      doc.setFont('helvetica', 'normal');
      const t = (key) => typeof i18n !== 'undefined' ? i18n.t(key) : key;
      doc.text(`${t('batchCount') || 'Nombre de factures'}: ${batch.count}`, 105, yPos, { align: 'center' });
      yPos += 10;
      doc.text(`${t('batchDate') || 'Date de génération'}: ${batch.date}`, 105, yPos, { align: 'center' });
      yPos += 10;
      doc.text(`${t('batchTotalAmount') || 'Montant total'}: ${batch.total.toFixed(2)} €`, 105, yPos, { align: 'center' });
      
      if (batch.hasErrors) {
        yPos += 20;
        doc.setTextColor(239, 68, 68);
        doc.setFont('helvetica', 'bold');
        doc.text(t('pdfContainsErrors').replace('{count}', batch.errors.length), 105, yPos, { align: 'center' });
      }
      
      // Page de synthèse des erreurs si présentes
      if (batch.hasErrors && batch.errors.length > 0) {
        doc.addPage();
        yPos = 20;
        
        doc.setTextColor(153, 27, 27);
        doc.setFontSize(16);
        doc.setFont('helvetica', 'bold');
        doc.text((t('errorSynthesisTitle') || 'Synthèse des erreurs').toUpperCase(), 20, yPos);
        
        yPos += 15;
        doc.setTextColor(31, 41, 55);
        doc.setFontSize(10);
        doc.setFont('helvetica', 'normal');
        
        batch.errors.forEach((error, idx) => {
          if (yPos > 260) {
            doc.addPage();
            yPos = 20;
          }
          
          doc.setFont('helvetica', 'bold');
          doc.text(`${idx + 1}. ${error.description} (${t('errorSynthesisInvoice') || 'Facture'} ${error.invoiceNumber})`, 20, yPos);
          yPos += 7;
          
          doc.setFont('helvetica', 'normal');
          const detailLines = doc.splitTextToSize(error.detail, 170);
          doc.text(detailLines, 25, yPos);
          yPos += detailLines.length * 5 + 5;
          
          doc.setDrawColor(229, 231, 235);
          doc.line(20, yPos, 190, yPos);
          yPos += 8;
        });
      }
      
      // Générer chaque facture
      for (let i = 0; i < batch.invoices.length; i++) {
        const inv = batch.invoices[i];
        doc.addPage();
        yPos = 20;
        
        // En-tête avec numéro de facture dans le lot
        doc.setFillColor(243, 244, 246);
        doc.rect(0, 0, 210, 30, 'F');
        
        doc.setTextColor(75, 85, 99);
        doc.setFontSize(10);
        doc.setFont('helvetica', 'bold');
        doc.text(`FACTURE ${i + 1} / ${batch.count}`, 20, 15);
        
        if (inv.hasErrors) {
          doc.setTextColor(220, 38, 38);
          doc.text('⚠️ ' + (t('batchContainsErrors') || 'Contient des erreurs').toUpperCase(), 150, 15);
        }
        
        yPos = 40;
        
        // Titre et numéro
        doc.setTextColor(21, 128, 61);
        doc.setFontSize(16);
        doc.text('FACTURE', 20, yPos);
        
        doc.setFontSize(10);
        doc.setTextColor(107, 114, 128);
        doc.text(`N° ${inv.number}`, 20, yPos + 6);
        
        // Dates
        doc.setFontSize(9);
        doc.setTextColor(31, 41, 55);
        doc.setFont('helvetica', 'bold');
        doc.text((t('invDate') || 'Date facture') + ':', 130, yPos);
        doc.setFont('helvetica', 'normal');
        doc.text(`${inv.date}`, 175, yPos);
        doc.setFont('helvetica', 'bold');
        doc.text((t('invDueDateLabel') || 'Échéance:'), 130, yPos + 6);
        doc.setFont('helvetica', 'normal');
        doc.text(`${inv.dueDate}`, 175, yPos + 6);
        
        // Émetteur et client
        yPos += 20;
        doc.setFillColor(249, 250, 251);
        doc.roundedRect(20, yPos, 170, 40, 3, 3, 'F');
        
        doc.setFontSize(8);
        doc.setTextColor(156, 163, 175);
        doc.setFont('helvetica', 'bold');
        doc.text('ÉMETTEUR', 25, yPos + 7);
        doc.text((t('invClient') || 'CLIENT'), 110, yPos + 7);
        
        doc.setFontSize(10);
        doc.setTextColor(31, 41, 55);
        doc.text(inv.company.name, 25, yPos + 15);
        doc.text(inv.client.name, 110, yPos + 15);
        
        doc.setFontSize(8);
        doc.setFont('helvetica', 'normal');
        doc.text(inv.company.address, 25, yPos + 22);
        doc.text(inv.client.address, 110, yPos + 22);
        doc.text(`TVA: ${inv.company.vat}`, 25, yPos + 30);
        
        // Tableau
        yPos += 50;
        doc.setFillColor(249, 250, 251);
        doc.rect(20, yPos - 5, 170, 8, 'F');
        
        doc.setFontSize(8);
        doc.setTextColor(107, 114, 128);
        doc.setFont('helvetica', 'bold');
        doc.text('Description', 25, yPos);
        doc.text('Qté', 90, yPos);
        doc.text('Prix', 115, yPos);
        doc.text('TVA', 145, yPos);
        doc.text('Total', 175, yPos);
        
        yPos += 8;
        inv.lines.forEach((line) => {
          doc.setFontSize(8);
          doc.setTextColor(31, 41, 55);
          doc.setFont('helvetica', 'normal');
          doc.text(line.description.substring(0, 30), 25, yPos);
          doc.setFont('helvetica', 'bold');
          doc.text(String(line.qty), 92, yPos);
          doc.setFont('helvetica', 'normal');
          doc.text(`${line.unitPrice.toFixed(2)} €`, 115, yPos);
          doc.setFont('helvetica', 'bold');
          doc.text(`${line.vatRate}%`, 147, yPos);
          doc.text(`${line.total.toFixed(2)} €`, 175, yPos);
          yPos += 6;
        });
        
        // Totaux
        yPos += 10;
        doc.setFillColor(249, 250, 251);
        doc.roundedRect(120, yPos - 5, 70, 30, 3, 3, 'F');
        
        doc.setFontSize(9);
        doc.setTextColor(107, 114, 128);
        doc.setFont('helvetica', 'normal');
        doc.text((t('invSubtotal') || 'Sous-total HT') + ':', 125, yPos + 5);
        doc.text(`${inv.subtotal.toFixed(2)} €`, 185, yPos + 5, { align: 'right' });
        
        doc.text((t('invVatTotal') || 'Total TVA') + ':', 125, yPos + 12);
        doc.text(`${inv.vatAmount.toFixed(2)} €`, 185, yPos + 12, { align: 'right' });
        
        doc.setFontSize(11);
        doc.setTextColor(21, 128, 61);
        doc.setFont('helvetica', 'bold');
        doc.text('TOTAL TTC', 125, yPos + 22);
        doc.text(`${inv.total.toFixed(2)} €`, 185, yPos + 22, { align: 'right' });
      }
      
      doc.save(`lot-factures-${batch.batchNumber}.pdf`);
      this.showToast(t('toastBatchPDFDownloaded').replace('{batchNumber}', batch.batchNumber), 'success');
    } catch (error) {
      this.showToast(t('toastBatchPDFError'), 'error');
      console.error(error);
    }
  }

  exportJSON() {
    if (!this.currentInvoice) {
      this.showToast(t('toastNoInvoice'), 'error');
      return;
    }
    
    const dataStr = JSON.stringify(this.currentInvoice, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = `facture-${this.currentInvoice.number}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    const t = (key) => typeof i18n !== 'undefined' ? i18n.t(key) : key;
    this.showToast(t('toastJSONDownloaded'), 'success');
  }

  editInvoice() {
    if (!this.currentInvoice) {
      const t = (key) => typeof i18n !== 'undefined' ? i18n.t(key) : key;
    this.showToast(t('toastNoInvoiceEdit'), 'error');
      return;
    }
    
    // Si c'est un lot, ne pas permettre l'édition
    if (this.currentInvoice.isBatch) {
      const t = (key) => typeof i18n !== 'undefined' ? i18n.t(key) : key;
    this.showToast(t('toastBatchEditError'), 'warning');
      return;
    }
    
    this.openEditModal();
  }

  // ============================================
  // ÉDITION DE FACTURE
  // ============================================
  
  openEditModal() {
    const modal = document.getElementById('modal-edit-invoice');
    if (!modal) {
      console.warn('Modal d\'édition non trouvé');
      return;
    }
    
    const inv = this.currentInvoice;
    if (!inv) {
      console.warn('Aucune facture à éditer');
      return;
    }
    
    // Pré-remplir les champs avec vérification de null
    const setValue = (id, value) => {
      const el = document.getElementById(id);
      if (el) el.value = value ?? '';
    };
    
    setValue('edit-archive-name', inv.archiveName);
    setValue('edit-company-name', inv.company?.name);
    setValue('edit-company-vat', inv.company?.vat);
    setValue('edit-company-address', inv.company?.address);
    setValue('edit-client-name', inv.client?.name);
    setValue('edit-client-vat', inv.client?.vat);
    setValue('edit-client-address', inv.client?.address);
    setValue('edit-invoice-number', inv.number);
    setValue('edit-invoice-date', inv.date);
    setValue('edit-operation-date', inv.operationDate);
    setValue('edit-due-date', inv.dueDate);
    setValue('edit-subtotal', inv.subtotal);
    setValue('edit-vat-amount', inv.vatAmount);
    setValue('edit-total', inv.total);
    
    // Rendre les lignes
    this.renderEditLines();
    
    // Calculer les totaux initiaux
    this.calculateEditTotals();
    
    // Afficher le modal
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    
    console.log('✅ Modal d\'édition ouvert');
  }
  
  closeEditModal() {
    const modal = document.getElementById('modal-edit-invoice');
    if (modal) {
      modal.style.display = 'none';
      document.body.style.overflow = '';
    }
  }
  
  renderEditLines() {
    const container = document.getElementById('edit-lines-container');
    if (!container || !this.currentInvoice) return;
    
    const lines = this.currentInvoice.lines || [];
    
    container.innerHTML = lines.map((line, index) => `
      <div class="edit-line-item" data-line-index="${index}" style="background: #F9FAFB; padding: 16px; border-radius: 8px; margin-bottom: 12px; border: 1px solid #E5E7EB;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
          <span style="font-weight: 600; color: #374151;">Ligne ${index + 1}</span>
          <button type="button" class="btn btn-danger btn-sm" onclick="app.removeEditLine(${index})" ${lines.length <= 1 ? 'disabled' : ''}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width:1rem;height:1rem;">
              <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
            </svg>
          </button>
        </div>
        <div class="form-row">
          <div class="form-group" style="flex: 2;">
            <label class="form-label" data-i18n="itemDescription">Description</label>
            <input type="text" class="form-input edit-line-desc" value="${line.description || ''}">
          </div>
          <div class="form-group" style="flex: 1;">
            <label class="form-label" data-i18n="itemQuantity">Qté</label>
            <input type="number" class="form-input edit-line-qty" value="${line.qty || 1}" min="1">
          </div>
        </div>
        <div class="form-row">
          <div class="form-group" style="flex: 1;">
            <label class="form-label" data-i18n="itemUnitPrice">Prix unit.</label>
            <input type="number" class="form-input edit-line-price" value="${line.unitPrice || 0}" step="0.01">
          </div>
          <div class="form-group" style="flex: 1;">
            <label class="form-label" data-i18n="itemVatRate">TVA %</label>
            <input type="number" class="form-input edit-line-vat" value="${line.vatRate || 21}" step="1">
          </div>
          <div class="form-group" style="flex: 1;">
            <label class="form-label" data-i18n="itemTotal">Total</label>
            <input type="number" class="form-input edit-line-total" value="${line.total || 0}" step="0.01" readonly style="background: #E5E7EB; cursor: not-allowed;">
          </div>
        </div>
      </div>
    `).join('');
    
    // Attacher les event listeners après le rendu
    this.attachEditLineListeners();
  }
  
  attachEditLineListeners() {
    const lineItems = document.querySelectorAll('.edit-line-item');
    lineItems.forEach((item) => {
      const qtyInput = item.querySelector('.edit-line-qty');
      const priceInput = item.querySelector('.edit-line-price');
      const vatInput = item.querySelector('.edit-line-vat');
      
      const updateTotals = () => this.calculateEditTotals();
      
      if (qtyInput) qtyInput.addEventListener('input', updateTotals);
      if (priceInput) priceInput.addEventListener('input', updateTotals);
      if (vatInput) vatInput.addEventListener('input', updateTotals);
    });
  }
  
  calculateEditTotals() {
    if (!this.currentInvoice) return;
    
    const lineItems = document.querySelectorAll('.edit-line-item');
    let subtotal = 0;
    let totalVat = 0;
    
    lineItems.forEach((item, index) => {
      const qty = parseInt(item.querySelector('.edit-line-qty').value) || 1;
      const unitPrice = parseFloat(item.querySelector('.edit-line-price').value) || 0;
      const vatRate = parseInt(item.querySelector('.edit-line-vat').value) || 21;
      
      // Calculer le total de la ligne (HT)
      const lineTotal = qty * unitPrice;
      
      // Mettre à jour le champ total de la ligne
      const totalInput = item.querySelector('.edit-line-total');
      if (totalInput) {
        totalInput.value = lineTotal.toFixed(2);
      }
      
      // Accumuler les totaux
      subtotal += lineTotal;
      totalVat += lineTotal * (vatRate / 100);
    });
    
    const total = subtotal + totalVat;
    
    // Mettre à jour les champs de totaux
    const subtotalInput = document.getElementById('edit-subtotal');
    const vatInput = document.getElementById('edit-vat-amount');
    const totalInput = document.getElementById('edit-total');
    
    if (subtotalInput) subtotalInput.value = subtotal.toFixed(2);
    if (vatInput) vatInput.value = totalVat.toFixed(2);
    if (totalInput) totalInput.value = total.toFixed(2);
  }
  
  addEditLine() {
    if (!this.currentInvoice) return;
    
    const newLine = {
      id: this.currentInvoice.lines.length + 1,
      description: '',
      qty: 1,
      unitPrice: 0,
      vatRate: 21,
      total: 0
    };
    
    this.currentInvoice.lines.push(newLine);
    this.renderEditLines();
    this.calculateEditTotals();
  }
  
  removeEditLine(index) {
    if (!this.currentInvoice || this.currentInvoice.lines.length <= 1) return;
    
    this.currentInvoice.lines.splice(index, 1);
    // Réindexer les lignes
    this.currentInvoice.lines.forEach((line, i) => line.id = i + 1);
    this.renderEditLines();
    this.calculateEditTotals();
  }
  
  saveInvoiceEdit() {
    if (!this.currentInvoice) return;
    
    const t = (key) => typeof i18n !== 'undefined' ? i18n.t(key) : key;
    
    // Récupérer les valeurs du formulaire
    const archiveName = document.getElementById('edit-archive-name').value.trim();
    
    // Mettre à jour l'entreprise
    this.currentInvoice.company.name = document.getElementById('edit-company-name').value.trim();
    this.currentInvoice.company.vat = document.getElementById('edit-company-vat').value.trim();
    this.currentInvoice.company.address = document.getElementById('edit-company-address').value.trim();
    
    // Mettre à jour le client
    this.currentInvoice.client.name = document.getElementById('edit-client-name').value.trim();
    this.currentInvoice.client.vat = document.getElementById('edit-client-vat').value.trim();
    this.currentInvoice.client.address = document.getElementById('edit-client-address').value.trim();
    
    // Mettre à jour les dates et numéro
    this.currentInvoice.number = document.getElementById('edit-invoice-number').value.trim();
    this.currentInvoice.date = document.getElementById('edit-invoice-date').value.trim();
    this.currentInvoice.operationDate = document.getElementById('edit-operation-date').value.trim();
    this.currentInvoice.dueDate = document.getElementById('edit-due-date').value.trim();
    
    // Mettre à jour les lignes
    const lineItems = document.querySelectorAll('.edit-line-item');
    lineItems.forEach((item, index) => {
      if (this.currentInvoice.lines[index]) {
        this.currentInvoice.lines[index].description = item.querySelector('.edit-line-desc').value.trim();
        this.currentInvoice.lines[index].qty = parseInt(item.querySelector('.edit-line-qty').value) || 1;
        this.currentInvoice.lines[index].unitPrice = parseFloat(item.querySelector('.edit-line-price').value) || 0;
        this.currentInvoice.lines[index].vatRate = parseInt(item.querySelector('.edit-line-vat').value) || 21;
        this.currentInvoice.lines[index].total = parseFloat(item.querySelector('.edit-line-total').value) || 0;
      }
    });
    
    // Mettre à jour les totaux
    this.currentInvoice.subtotal = parseFloat(document.getElementById('edit-subtotal').value) || 0;
    this.currentInvoice.vatAmount = parseFloat(document.getElementById('edit-vat-amount').value) || 0;
    this.currentInvoice.total = parseFloat(document.getElementById('edit-total').value) || 0;
    
    // Marquer comme édité et sauvegarder le nom d'archive
    this.currentInvoice.isEdited = true;
    this.currentInvoice.editedAt = new Date().toISOString();
    if (archiveName) {
      this.currentInvoice.archiveName = archiveName;
    }
    
    // Fermer le modal
    this.closeEditModal();
    
    // Mettre à jour l'affichage
    this.renderInvoice();
    
    // Sauvegarder dans l'historique
    this.saveToHistory();
    
    this.showToast(t('editSaved') || 'Modifications sauvegardées avec succès', 'success');
  }

  // ============================================
  // HISTORIQUE
  // ============================================

  saveToHistory() {
    if (!this.currentInvoice) return;
    
    // Vérifier si cette facture existe déjà dans l'historique (par numéro ou batchNumber)
    const existingIndex = this.history.findIndex(h => 
      h.number === this.currentInvoice.number || 
      (h.batchNumber && h.batchNumber === this.currentInvoice.batchNumber)
    );
    
    const invoiceToSave = {
      ...this.currentInvoice,
      savedAt: new Date().toISOString()
    };
    
    if (existingIndex >= 0) {
      // Mettre à jour l'entrée existante en préservant les métadonnées d'édition
      const existing = this.history[existingIndex];
      invoiceToSave.isEdited = true;
      invoiceToSave.editedAt = new Date().toISOString();
      // Conserver le nom d'archive si déjà défini
      if (existing.archiveName && !invoiceToSave.archiveName) {
        invoiceToSave.archiveName = existing.archiveName;
      }
      this.history[existingIndex] = invoiceToSave;
    } else {
      // Nouvelle entrée
      this.history.unshift(invoiceToSave);
    }
    
    // Limiter à 20 éléments
    if (this.history.length > 20) {
      this.history = this.history.slice(0, 20);
    }
    
    if (window.MonsieurnerdApp && window.MonsieurnerdApp.storage) {
      window.MonsieurnerdApp.storage.setJSON('invoiceFactoryHistory', this.history);
    } else {
      localStorage.setItem('invoiceFactoryHistory', JSON.stringify(this.history));
    }
  }

  loadHistory() {
    if (window.MonsieurnerdApp && window.MonsieurnerdApp.storage) {
      this.history = window.MonsieurnerdApp.storage.getJSON('invoiceFactoryHistory', []);
    } else {
      const saved = localStorage.getItem('invoiceFactoryHistory');
      this.history = saved ? JSON.parse(saved) : [];
    }
  }

  renderHistory() {
    const container = document.getElementById('history-list');
    const emptyState = document.getElementById('empty-history');
    
    if (!container) return;
    
    if (this.history.length === 0) {
      container.style.display = 'none';
      emptyState.style.display = 'flex';
      return;
    }
    
    emptyState.style.display = 'none';
    container.style.display = 'flex';
    
    container.innerHTML = this.history.map((inv, index) => {
      const isBatch = inv.isBatch;
      const t = (key) => typeof i18n !== 'undefined' ? i18n.t(key) : key;
      
      // Déterminer le titre à afficher
      let titleDisplay;
      if (isBatch) {
        titleDisplay = '📦 ' + (t('batchNumber') || 'Lot') + ' ' + inv.batchNumber;
      } else if (inv.archiveName) {
        titleDisplay = inv.archiveName;
      } else {
        titleDisplay = (t('typeInvoice') || 'Facture') + ' ' + inv.number;
      }
      
      // Badge "édité"
      const editedBadge = inv.isEdited 
        ? `<span style="background: #DBEAFE; color: #1E40AF; padding: 2px 8px; border-radius: 12px; font-size: 0.75rem; font-weight: 600; margin-left: 8px;">${t('editedBadge') || 'Modifiée'}</span>`
        : '';
      
      // Déterminer si c'est un lot - vérification stricte
      const isBatchInvoice = isBatch === true || isBatch === 'true' || isBatch === 1;
      
      return `
      <div class="history-item ${isBatchInvoice ? 'history-item-batch' : ''}">
        <div class="history-item-info">
          <div class="history-item-icon" style="${isBatchInvoice ? 'background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%);' : ''}">
            ${isBatchInvoice 
              ? `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="color: white;"><path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" /></svg>`
              : `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" /></svg>`
            }
          </div>
          <div class="history-item-details">
            <h4 class="history-item-title" style="display: flex; align-items: center; flex-wrap: wrap;">
              ${titleDisplay}
              ${editedBadge}
            </h4>
            <div class="history-item-meta">
              ${isBatchInvoice 
                ? `<span style="color: #1e3a5f; font-weight: 600;">${inv.count} ${(t('batchInvoices') || 'Factures').toLowerCase()}</span>`
                : `<span>${inv.company?.name || ''}</span>`
              }
              <span>•</span>
              <span>${inv.total?.toFixed(2) || '0.00'} €</span>
              <span>•</span>
              <span>${new Date(inv.savedAt).toLocaleDateString(i18n?.current || 'fr-FR')}</span>
              ${inv.archiveName ? `<span>•</span><span style="color: #6B7280; font-style: italic;">${inv.number || ''}</span>` : ''}
            </div>
          </div>
        </div>
        <div class="history-item-actions">
          <button class="btn btn-ghost btn-sm" onclick="app.loadInvoice(${index})" title="${isBatchInvoice ? (t('historyViewBatch') || 'Voir les factures du lot') : (t('historyViewInvoice') || 'Voir la facture')}">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width:1rem;height:1rem;"><path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /></svg>
          </button>
          ${!isBatchInvoice ? `
          <button class="btn btn-secondary btn-sm edit-btn-history" onclick="app.editInvoiceFromHistory(${index})" title="${t('editHistory') || 'Modifier'}" style="display: flex; align-items: center; gap: 4px;">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width:1rem;height:1rem;">
              <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
            </svg>
            <span>${t('editHistory') || 'Modifier'}</span>
          </button>` : ''}
          ${inv.hasErrors ? `
          <button class="btn btn-error-synthesis btn-sm" onclick="app.showErrorSynthesisFromHistory(${index})" title="${t('btnErrorSynthesis') || 'Synthèse des erreurs'}">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width:1rem;height:1rem;"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" /></svg>
          </button>` : ''}
          <button class="btn btn-secondary btn-sm" onclick="app.downloadInvoice(${index})" title="${t('historyDownloadPDF') || 'Télécharger PDF'}">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width:1rem;height:1rem;"><path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" /></svg>
          </button>
          <button class="btn btn-danger btn-sm" onclick="app.deleteInvoice(${index})" title="${t('btnDelete') || 'Supprimer'}">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width:1rem;height:1rem;"><path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008z" /></svg>
          </button>
        </div>
      </div>
    `}).join('');
  }
  
  editInvoiceFromHistory(index) {
    this.currentInvoice = this.history[index];
    this.viewedInvoiceIndex = index;
    
    // Ouvrir le modal d'édition directement sur la page historique
    this.openEditModal();
  }
  
  // Sauvegarder les modifications depuis la page historique
  saveInvoiceEditFromHistory() {
    const t = (key) => typeof i18n !== 'undefined' ? i18n.t(key) : key;
    
    if (!this.currentInvoice) {
      this.showToast(t('toastNoInvoiceEdit'), 'error');
      return;
    }
    
    // Récupérer les valeurs du formulaire
    const archiveName = document.getElementById('edit-archive-name')?.value.trim();
    
    // Mettre à jour les infos de l'entreprise
    if (!this.currentInvoice.company) this.currentInvoice.company = {};
    this.currentInvoice.company.name = document.getElementById('edit-company-name')?.value || '';
    this.currentInvoice.company.vat = document.getElementById('edit-company-vat')?.value || '';
    this.currentInvoice.company.address = document.getElementById('edit-company-address')?.value || '';
    
    // Mettre à jour les infos du client
    if (!this.currentInvoice.client) this.currentInvoice.client = {};
    this.currentInvoice.client.name = document.getElementById('edit-client-name')?.value || '';
    this.currentInvoice.client.vat = document.getElementById('edit-client-vat')?.value || '';
    this.currentInvoice.client.address = document.getElementById('edit-client-address')?.value || '';
    
    // Mettre à jour les dates
    this.currentInvoice.number = document.getElementById('edit-invoice-number')?.value || '';
    this.currentInvoice.date = document.getElementById('edit-invoice-date')?.value || '';
    this.currentInvoice.operationDate = document.getElementById('edit-operation-date')?.value || '';
    this.currentInvoice.dueDate = document.getElementById('edit-due-date')?.value || '';
    
    // Mettre à jour les lignes
    const lineItems = document.querySelectorAll('.edit-line-item');
    lineItems.forEach((item, index) => {
      if (this.currentInvoice.lines[index]) {
        this.currentInvoice.lines[index].description = item.querySelector('.edit-line-desc')?.value?.trim() || '';
        this.currentInvoice.lines[index].qty = parseInt(item.querySelector('.edit-line-qty')?.value) || 1;
        this.currentInvoice.lines[index].unitPrice = parseFloat(item.querySelector('.edit-line-price')?.value) || 0;
        this.currentInvoice.lines[index].vatRate = parseInt(item.querySelector('.edit-line-vat')?.value) || 21;
        this.currentInvoice.lines[index].total = parseFloat(item.querySelector('.edit-line-total')?.value) || 0;
      }
    });
    
    // Mettre à jour les totaux
    this.currentInvoice.subtotal = parseFloat(document.getElementById('edit-subtotal')?.value) || 0;
    this.currentInvoice.vatAmount = parseFloat(document.getElementById('edit-vat-amount')?.value) || 0;
    this.currentInvoice.total = parseFloat(document.getElementById('edit-total')?.value) || 0;
    
    // Marquer comme édité
    this.currentInvoice.isEdited = true;
    this.currentInvoice.editedAt = new Date().toISOString();
    if (archiveName) {
      this.currentInvoice.archiveName = archiveName;
    }
    
    // Fermer le modal
    this.closeEditModal();
    
    // Sauvegarder dans l'historique
    this.saveToHistory();
    
    // Re-rendre l'historique pour refléter les changements
    this.renderHistory();
    
    this.showToast(t('editSaved') || 'Modifications sauvegardées avec succès', 'success');
  }

  loadInvoice(index) {
    this.currentInvoice = this.history[index];
    this.viewedInvoiceIndex = index; // Garder l'index pour le téléchargement
    
    // Si c'est un lot, afficher toutes les factures
    if (this.currentInvoice.isBatch) {
      this.showBatchModal(this.currentInvoice);
    } else {
      this.showInvoiceModal(this.currentInvoice);
    }
  }

  showInvoiceModal(invoice) {
    const modal = document.getElementById('invoice-modal');
    const modalBody = document.getElementById('invoice-modal-body');
    
    if (!modal || !modalBody) return;
    
    // Générer le HTML de la facture avec la langue de la facture
    const invoiceLang = invoice.invoiceLang || 'fr';
    const invoiceHtml = invoiceGenerator.renderHTML(invoice, invoiceLang);
    modalBody.innerHTML = invoiceHtml;
    
    // Afficher le modal
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Empêcher le scroll du body
  }

  showBatchModal(batch) {
    const modal = document.getElementById('invoice-modal');
    const modalBody = document.getElementById('invoice-modal-body');
    
    if (!modal || !modalBody) return;
    
    // Générer le HTML du lot
    let html = `
      <div class="batch-document" style="max-width: 800px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: white; padding: 2rem; border-radius: 12px; margin-bottom: 2rem; text-align: center;">
          <h1 style="margin: 0; font-size: 1.75rem; display: flex; align-items: center; justify-content: center; gap: 1rem;">
            📦 LOT DE FACTURES
          </h1>
          <p style="margin: 0.5rem 0 0; font-size: 1.25rem; opacity: 0.9;">N° ${batch.batchNumber}</p>
          <div style="margin-top: 1rem; display: flex; justify-content: center; gap: 2rem; flex-wrap: wrap;">
            <span style="background: rgba(255,255,255,0.2); padding: 0.5rem 1rem; border-radius: 20px; font-size: 0.9rem;">
              ${batch.count} factures
            </span>
            <span style="background: rgba(255,255,255,0.2); padding: 0.5rem 1rem; border-radius: 20px; font-size: 0.9rem;">
              Total: ${batch.total.toFixed(2)} €
            </span>
            ${batch.hasErrors ? `<span style="background: #ef4444; padding: 0.5rem 1rem; border-radius: 20px; font-size: 0.9rem; font-weight: 600;">⚠️ Contient des erreurs</span>` : ''}
          </div>
        </div>
        
        <div class="batch-invoices">
    `;
    
    batch.invoices.forEach((inv, index) => {
      html += `
        <div class="batch-invoice-item" style="margin-bottom: 2rem; border: 1px solid #e5e7eb; border-radius: 12px; overflow: hidden;">
          <div style="background: #f3f4f6; padding: 1rem; border-bottom: 3px solid #d1d5db; display: flex; justify-content: space-between; align-items: center;">
            <h3 style="margin: 0; color: #1f2937; display: flex; align-items: center; gap: 0.75rem;">
              <span style="background: #4b5563; color: white; width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700;">${index + 1}</span>
              Facture ${inv.number}
            </h3>
            ${inv.hasErrors ? '<span style="background: #fef2f2; color: #dc2626; padding: 0.25rem 0.75rem; border-radius: 20px; font-size: 0.8rem; font-weight: 600;">⚠️ Erreurs</span>' : ''}
          </div>
          <div style="background: white; padding: 1.5rem;">
            ${this.renderMiniInvoiceForModal(inv)}
          </div>
        </div>
      `;
    });
    
    html += '</div></div>';
    modalBody.innerHTML = html;
    
    // Afficher le modal
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }

  renderMiniInvoiceForModal(inv) {
    return `
      <div style="font-size: 0.9rem;">
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1rem;">
          <div>
            <p style="margin: 0; color: #6b7280; font-size: 0.8rem;">${t('invEmitter') || 'ÉMETTEUR'}</p>
            <p style="margin: 0; font-weight: 600;">${inv.company.name}</p>
            <p style="margin: 0; color: #4b5563; font-size: 0.85rem;">${inv.company.address}</p>
            <p style="margin: 0; color: #4b5563; font-size: 0.85rem;">TVA: ${inv.company.vat}</p>
          </div>
          <div>
            <p style="margin: 0; color: #6b7280; font-size: 0.8rem;">${t('invClient') || 'CLIENT'}</p>
            <p style="margin: 0; font-weight: 600;">${inv.client.name}</p>
            <p style="margin: 0; color: #4b5563; font-size: 0.85rem;">${inv.client.address}</p>
            ${inv.client.vat ? `<p style="margin: 0; color: #4b5563; font-size: 0.85rem;">TVA: ${inv.client.vat}</p>` : ''}
          </div>
        </div>
        <div style="background: #f9fafb; padding: 0.75rem; border-radius: 6px; margin-bottom: 1rem; display: flex; gap: 1.5rem; flex-wrap: wrap;">
          <span><span style="color: #6b7280;">Date:</span> <strong>${inv.date}</strong></span>
          <span><span style="color: #6b7280;">${t('invDueDateLabel') || 'Échéance:'}</span> <strong>${inv.dueDate}</strong></span>
          <span><span style="color: #6b7280;">Total:</span> <strong style="color: #059669;">${inv.total.toFixed(2)} €</strong></span>
        </div>
        <table style="width: 100%; font-size: 0.8rem; border-collapse: collapse;">
          <thead>
            <tr style="background: #f3f4f6;">
              <th style="padding: 0.5rem; text-align: left;">Description</th>
              <th style="padding: 0.5rem; text-align: center;">Qté</th>
              <th style="padding: 0.5rem; text-align: right;">Prix</th>
              <th style="padding: 0.5rem; text-align: center;">TVA</th>
              <th style="padding: 0.5rem; text-align: right;">Total</th>
            </tr>
          </thead>
          <tbody>
            ${inv.lines.map(line => `
              <tr style="border-bottom: 1px solid #e5e7eb;">
                <td style="padding: 0.5rem;">${line.description}</td>
                <td style="padding: 0.5rem; text-align: center;">${line.qty}</td>
                <td style="padding: 0.5rem; text-align: right;">${line.unitPrice.toFixed(2)} €</td>
                <td style="padding: 0.5rem; text-align: center;">${line.vatRate}%</td>
                <td style="padding: 0.5rem; text-align: right; font-weight: 500;">${line.total.toFixed(2)} €</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `;
  }

  closeInvoiceModal() {
    const modal = document.getElementById('invoice-modal');
    if (modal) {
      modal.style.display = 'none';
      document.body.style.overflow = ''; // Réactiver le scroll
    }
  }

  downloadCurrentInvoice() {
    if (this.currentInvoice) {
      this.exportPDF();
    }
  }

  downloadInvoice(index) {
    this.currentInvoice = this.history[index];
    if (this.currentInvoice.isBatch) {
      this.exportBatchPDF();
    } else {
      this.exportPDF();
    }
  }

  deleteInvoice(index) {
    this.history.splice(index, 1);
    
    if (window.MonsieurnerdApp && window.MonsieurnerdApp.storage) {
      window.MonsieurnerdApp.storage.setJSON('invoiceFactoryHistory', this.history);
    } else {
      localStorage.setItem('invoiceFactoryHistory', JSON.stringify(this.history));
    }
    
    this.renderHistory();
    const t = (key) => typeof i18n !== 'undefined' ? i18n.t(key) : key;
    this.showToast(t('toastInvoiceDeleted'), 'success');
  }

  clearHistory() {
    if (confirm('Voulez-vous vraiment effacer tout l\'historique ?')) {
      this.history = [];
      
      if (window.MonsieurnerdApp && window.MonsieurnerdApp.storage) {
        window.MonsieurnerdApp.storage.remove('invoiceFactoryHistory');
      } else {
        localStorage.removeItem('invoiceFactoryHistory');
      }
      
      this.renderHistory();
      const t = (key) => typeof i18n !== 'undefined' ? i18n.t(key) : key;
    this.showToast(t('toastHistoryCleared'), 'success');
    }
  }

  // ============================================
  // THEME (délégué à MonsieurnerdApp)
  // ============================================

  toggleTheme() {
    if (window.MonsieurnerdApp && window.MonsieurnerdApp.theme) {
      window.MonsieurnerdApp.theme.toggle();
      const isDark = window.MonsieurnerdApp.getTheme() === 'dark';
      const t = (key) => typeof i18n !== 'undefined' ? i18n.t(key) : key;
    this.showToast(isDark ? t('toastDarkMode') : t('toastLightMode'), 'success');
    }
  }

  applyTheme() {
    // Délégué à MonsieurnerdApp.theme - plus nécessaire ici
    this.updateSettingsThemeUI();
  }

  updateSettingsThemeUI() {
    const savedTheme = localStorage.getItem('monsieurnerd-theme') || 'auto';
    document.querySelectorAll('[data-theme-value]').forEach(tab => {
      const isActive = tab.dataset.themeValue === savedTheme;
      tab.classList.toggle('active', isActive);
    });
    
    // Mettre à jour le bouton toggle du header
    const themeToggle = document.querySelector('[data-action="toggle-theme"]');
    if (themeToggle) {
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      themeToggle.setAttribute('aria-pressed', isDark);
    }
  }

  // ============================================
  // LANGUE (délégué à MonsieurnerdApp)
  // ============================================

  setLanguage(lang) {
    if (window.MonsieurnerdApp && window.MonsieurnerdApp.language) {
      window.MonsieurnerdApp.language.setLanguage(lang);
      const t = (key) => typeof i18n !== 'undefined' ? i18n.t(key) : key;
    this.showToast(t('toastLanguageChanged').replace('{lang}', lang.toUpperCase()), 'success');
    }
  }

  updateLangFlag() {
    const flagMap = {
      'fr': 'assets/icons/flag-fr.svg',
      'nl': 'assets/icons/flag-nl.svg',
      'de': 'assets/icons/flag-de.svg',
      'en': 'assets/icons/flag-en.svg'
    };
    
    const flagEl = document.getElementById('current-lang-flag');
    if (flagEl && flagMap[this.getLanguage()]) {
      flagEl.src = flagMap[this.getLanguage()];
    }
  }

  // ============================================
  // PARAMÈTRES
  // ============================================

  saveSettings() {
    const settings = {
      defaultLang: document.getElementById('default-language')?.value,
      defaultCurrency: document.getElementById('default-currency')?.value,
      defaultVat: document.getElementById('default-vat')?.value,
      invoiceLang: document.getElementById('invoice-language')?.value,
      autoSave: document.getElementById('auto-save')?.checked
    };
    
    if (window.MonsieurnerdApp && window.MonsieurnerdApp.storage) {
      window.MonsieurnerdApp.storage.setJSON('invoiceFactorySettings', settings);
    } else {
      localStorage.setItem('invoiceFactorySettings', JSON.stringify(settings));
    }
    
    const t = (key) => typeof i18n !== 'undefined' ? i18n.t(key) : key;
    this.showToast(t('toastSettingsSaved'), 'success');
  }

  loadSettings() {
    let settings;
    if (window.MonsieurnerdApp && window.MonsieurnerdApp.storage) {
      settings = window.MonsieurnerdApp.storage.getJSON('invoiceFactorySettings');
    } else {
      const saved = localStorage.getItem('invoiceFactorySettings');
      settings = saved ? JSON.parse(saved) : null;
    }
    
    if (settings) {
      // Appliquer les valeurs aux champs
      const defaultLang = document.getElementById('default-language');
      if (defaultLang && settings.defaultLang) defaultLang.value = settings.defaultLang;
      
      const defaultCurrency = document.getElementById('default-currency');
      if (defaultCurrency && settings.defaultCurrency) defaultCurrency.value = settings.defaultCurrency;
      
      const defaultVat = document.getElementById('default-vat');
      if (defaultVat && settings.defaultVat) defaultVat.value = settings.defaultVat;
      
      const invoiceLang = document.getElementById('invoice-language');
      if (invoiceLang && settings.invoiceLang) invoiceLang.value = settings.invoiceLang;
      
      const autoSave = document.getElementById('auto-save');
      if (autoSave && settings.autoSave !== undefined) autoSave.checked = settings.autoSave;
    }
  }

  getDefaultInvoiceLang() {
    // Utiliser d'abord la langue de l'interface si disponible
    const interfaceLang = typeof i18n !== 'undefined' ? i18n.current : null;
    if (interfaceLang && ['fr', 'nl', 'de', 'en'].includes(interfaceLang)) {
      return interfaceLang;
    }
    
    // Sinon, utiliser les paramètres stockés
    let settings;
    if (window.MonsieurnerdApp && window.MonsieurnerdApp.storage) {
      settings = window.MonsieurnerdApp.storage.getJSON('invoiceFactorySettings');
    } else {
      const saved = localStorage.getItem('invoiceFactorySettings');
      settings = saved ? JSON.parse(saved) : null;
    }
    return settings?.invoiceLang || 'fr';
  }

  // ============================================
  // UTILITAIRES UI
  // ============================================

  showToast(message, type = 'info') {
    // Use MonsieurnerdApp toast if available
    if (window.MonsieurnerdApp && window.MonsieurnerdApp.toast) {
      window.MonsieurnerdApp.toast.show(message, { type });
      return;
    }
    
    // Fallback toast
    const container = document.querySelector('.toast-container') || document.body;
    
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
      <div class="toast-content">
        <p class="toast-message">${message}</p>
      </div>
    `;
    
    container.appendChild(toast);
    
    setTimeout(() => {
      toast.classList.add('removing');
      toast.addEventListener('animationend', () => toast.remove());
    }, 3000);
  }

  // ============================================
  // CONFIGURATION (pour les boutons des cartes)
  // ============================================

  configureExercise() {
    this.selectCard('exercise');
    this.openConfigModal('exercise');
  }

  configureBatch() {
    this.selectCard('batch');
    this.openConfigModal('batch');
  }

  async configureCustom() {
    this.selectCard('custom');
    await this.populateCustomOptions();
    this.openConfigModal('custom');
  }

  openConfigModal(modalId) {
    const modal = document.getElementById(`modal-${modalId}`);
    if (modal) {
      modal.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    }
  }

  closeConfigModal(modalId) {
    const modal = document.getElementById(`modal-${modalId}`);
    if (modal) {
      modal.style.display = 'none';
      document.body.style.overflow = '';
    }
  }

  // ============================================
  // SYNTHÈSE DES ERREURS
  // ============================================

  showErrorSynthesis() {
    if (!this.currentInvoice || !this.currentInvoice.errors) return;
    this.renderErrorSynthesis(this.currentInvoice);
    this.openConfigModal('error-synthesis');
  }

  showErrorSynthesisFromHistory(index) {
    const invoice = this.history[index];
    const t = (key) => typeof i18n !== 'undefined' ? i18n.t(key) : key;
    if (!invoice || !invoice.errors) {
      this.showToast(t('noErrorsToShow') || 'Aucune erreur à afficher pour cette facture', 'info');
      return;
    }
    this.renderErrorSynthesis(invoice);
    this.openConfigModal('error-synthesis');
  }

  /**
   * Traduit une erreur en fonction de son type et sous-type
   */
  translateError(error, invoice) {
    const t = (key, params = {}) => {
      if (typeof i18n === 'undefined') return key;
      let text = i18n.t(key);
      // Remplacer les paramètres
      Object.entries(params).forEach(([k, v]) => {
        text = text.replace(`{${k}}`, v);
      });
      return text;
    };
    
    // Si l'erreur a un subtype, utiliser la traduction dynamique
    if (error.subtype) {
      switch (error.type) {
        case 'calculation':
          return {
            description: t('errorTypeCalculation', { line: error.line || 1 }),
            detail: t('errorDetailCalculation', {
              shown: error.shownAmount || '0.00',
              qty: error.qty || 1,
              unitPrice: error.unitPrice || '0.00',
              expected: error.expectedAmount || '0.00'
            })
          };
          
        case 'vat':
          if (error.subtype === 'total') {
            return {
              description: t('errorTypeVatTotal'),
              detail: t('errorDetailVatTotal', {
                shown: error.shownVat || '0.00',
                expected: error.expectedVat || '0.00'
              })
            };
          } else if (error.subtype === 'rate') {
            const line = invoice.lines?.[error.line - 1];
            const productName = line?.description || 'Produit';
            const wrongRate = error.wrongRate || 21;
            const correctRate = error.correctRate || 6;
            const explanation = wrongRate > correctRate 
              ? t('vatExplanationHigh') || 'Ce taux est réservé aux produits de luxe, pas aux produits de première nécessité.'
              : t('vatExplanationLow') || 'Ce taux réduit s\'applique aux produits de première nécessité.';
            
            return {
              description: t('errorTypeVatRate', { line: error.line || 1 }),
              detail: t('errorDetailVatRate', {
                product: productName,
                wrongRate: wrongRate,
                correctRate: correctRate,
                explanation: explanation
              })
            };
          }
          break;
          
        case 'date':
          const dateDescriptions = {
            'due_date_same': 'errorTypeDateSame',
            'due_date_short': 'errorTypeDateShort',
            'due_date_past': 'errorTypeDatePast'
          };
          const dateDetails = {
            'due_date_same': 'errorDetailDateSame',
            'due_date_short': 'errorDetailDateShort',
            'due_date_past': 'errorDetailDatePast'
          };
          return {
            description: t(dateDescriptions[error.subtype] || 'errorTypeDateSame'),
            detail: t(dateDetails[error.subtype] || 'errorDetailDateSame', {
              dueDate: error.dueDate || invoice.dueDate,
              invoiceDate: invoice.date
            })
          };
          
        case 'missing':
          const missingDescriptions = {
            'client_vat': 'errorTypeMissingClientVat',
            'client_name': 'errorTypeMissingClientName',
            'client_address': 'errorTypeMissingClientAddress',
            'invoice_number': 'errorTypeMissingInvoiceNumber',
            'invoice_date': 'errorTypeMissingInvoiceDate'
          };
          const missingDetails = {
            'client_vat': 'errorDetailMissingClientVat',
            'client_name': 'errorDetailMissingClientName',
            'client_address': 'errorDetailMissingClientAddress',
            'invoice_number': 'errorDetailMissingInvoiceNumber',
            'invoice_date': 'errorDetailMissingInvoiceDate'
          };
          return {
            description: t(missingDescriptions[error.subtype] || 'errorTypeMissingClientVat'),
            detail: t(missingDetails[error.subtype] || 'errorDetailMissingClientVat', {
              client: invoice.client?.name || 'Client'
            })
          };
      }
    }
    
    // Fallback: retourner la description stockée
    return {
      description: error.description,
      detail: error.detail
    };
  }

  renderErrorSynthesis(invoice) {
    const content = document.getElementById('error-synthesis-content');
    if (!content || !invoice.errors) return;

    const errors = invoice.errors;
    const errorCount = errors.length;
    const isBatch = invoice.isBatch;
    
    // Utiliser les traductions
    const t = (key) => typeof i18n !== 'undefined' ? i18n.t(key) : key;
    const errorTranslation = errorCount > 1 ? t('errorSynthesisErrors') || 'erreurs' : t('errorSynthesisError') || 'erreur';

    let html = `
      <div class="error-synthesis-summary">
        <span class="error-synthesis-summary-text">
          ${isBatch 
            ? `<strong>${invoice.batchNumber}</strong> — ${t('batchOf') || 'Lot de'} ${invoice.count} ${t('batchInvoicesLabel') || 'factures'}` 
            : `<strong>${t('errorSynthesisInvoice') || 'Facture'} ${invoice.number}</strong> — ${invoice.company.name} → ${invoice.client.name}`
          }
        </span>
        <span class="error-synthesis-count">${errorCount} ${errorTranslation}</span>
      </div>
      <div class="error-synthesis-list">
    `;

    errors.forEach((error, index) => {
      const severityClass = error.severity || 'moyenne';
      const severityLabel = error.severity === 'grave' 
        ? (t('errorSynthesisSeverityHigh') || 'Erreur grave')
        : (t('errorSynthesisSeverityMedium') || 'Erreur moyenne');
      const batchInfo = isBatch && error.invoiceNumber 
        ? `<span style="background: #e0e7ff; color: #3730a3; padding: 2px 8px; border-radius: 12px; font-size: 0.75rem; margin-left: 8px;">${t('errorSynthesisInvoice') || 'Facture'} ${error.invoiceNumber}</span>` 
        : '';
      
      // Traduire l'erreur dynamiquement
      const translatedError = this.translateError(error, invoice);
      
      html += `
        <div class="error-synthesis-item severity-${severityClass}">
          <div class="error-synthesis-header">
            <div class="error-synthesis-number">${index + 1}</div>
            <h4 class="error-synthesis-title">${translatedError.description}${batchInfo}</h4>
            <span class="error-synthesis-severity ${severityClass}">${severityLabel}</span>
          </div>
          <p class="error-synthesis-detail">${translatedError.detail}</p>
        </div>
      `;
    });

    html += '</div>';
    content.innerHTML = html;
  }

  closeErrorSynthesis() {
    const modal = document.getElementById('modal-error-synthesis');
    if (modal) {
      modal.style.display = 'none';
      document.body.style.overflow = '';
    }
  }

  printErrorSynthesis() {
    window.print();
  }

  /**
   * Charge une image (SVG ou autre) et la convertit en base64
   * @param {string} url - URL de l'image
   * @returns {Promise<string>} - Image en base64
   */
  async loadImageAsBase64(url) {
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(blob);
      });
    } catch (error) {
      console.error('Erreur chargement image:', error);
      return null;
    }
  }

  /**
   * Convertit un SVG en PNG Data URL via canvas
   * @param {string} svgUrl - URL du SVG
   * @returns {Promise<string>} - PNG en Data URL
   */
  async svgToPngDataUrl(svgUrl) {
    return new Promise(async (resolve, reject) => {
      try {
        // Charger le contenu SVG
        const response = await fetch(svgUrl);
        const svgText = await response.text();
        
        // Créer un blob SVG
        const svgBlob = new Blob([svgText], { type: 'image/svg+xml;charset=utf-8' });
        const url = URL.createObjectURL(svgBlob);
        
        // Créer une image
        const img = new Image();
        img.onload = () => {
          // Créer un canvas
          const canvas = document.createElement('canvas');
          canvas.width = 200;
          canvas.height = 200;
          const ctx = canvas.getContext('2d');
          
          // Dessiner l'image sur le canvas
          ctx.drawImage(img, 0, 0, 200, 200);
          
          // Libérer l'URL
          URL.revokeObjectURL(url);
          
          // Retourner le data URL PNG
          resolve(canvas.toDataURL('image/png'));
        };
        img.onerror = () => {
          URL.revokeObjectURL(url);
          reject(new Error('Erreur chargement SVG'));
        };
        img.src = url;
      } catch (error) {
        reject(error);
      }
    });
  }
}

// Initialiser l'application
const app = new App();
