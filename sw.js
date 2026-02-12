// ============================================
// Générateur de Factures Pédagogiques - Service Worker
// Copyright (C) 2025  monsieur-nerd
// License: GNU GPL v3 - https://www.gnu.org/licenses/gpl-3.0
// ============================================
// SERVICE WORKER - PWA Offline Support
// ============================================

const CACHE_NAME = 'invoice-factory-v10';
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/settings.html',
  '/history.html',
  '/about.html',
  '/css/monsieurnerd-design-system.css',
  '/css/monsieurnerd-components.css',
  '/css/monsieurnerd-app.css',
  '/css/invoice-light-mode.css',
  '/js/dataLoader.js',
  '/js/products.js',
  '/js/invoiceGenerator.js',
  '/js/monsieurnerdApp.js',
  '/js/i18n.js',
  '/js/app.js',
  '/js/pwa.js',
  '/manifest.json',
  '/assets/logo-invoice-factory.svg',
  '/assets/icons/icon.svg',
  '/assets/icons/logo.png',
];

// Installation du service worker
self.addEventListener('install', (event) => {
  console.log('[SW] Installation...');
  
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('[SW] Mise en cache des assets statiques');
        return cache.addAll(STATIC_ASSETS);
      })
      .catch((err) => {
        console.error('[SW] Erreur de cache:', err);
      })
  );
  
  // Activer immédiatement
  self.skipWaiting();
});

// Activation du service worker
self.addEventListener('activate', (event) => {
  console.log('[SW] Activation...');
  
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('[SW] Suppression de l\'ancien cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  
  // Prendre le contrôle immédiatement
  self.clients.claim();
});

// Stratégie de cache : Stale While Revalidate pour les fichiers JS/CSS
// Network First pour les pages HTML
// Cache First pour les images et assets statiques
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);
  
  // Ne pas intercepter les requêtes API externes
  if (request.url.includes('cdnjs.cloudflare.com')) {
    return;
  }
  
  // Stratégie pour les fichiers CSS : Network First (toujours récupérer la dernière version)
  if (url.pathname.match(/\.css$/)) {
    event.respondWith(
      fetch(request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200 && networkResponse.type === 'basic') {
            const responseToCache = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(request, responseToCache);
            });
          }
          return networkResponse;
        })
        .catch(() => {
          return caches.match(request);
        })
    );
    return;
  }
  
  // Stratégie pour les fichiers JS : Stale While Revalidate
  if (url.pathname.match(/\.js$/)) {
    event.respondWith(
      caches.match(request).then((cachedResponse) => {
        const fetchPromise = fetch(request).then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200 && networkResponse.type === 'basic') {
            const responseToCache = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(request, responseToCache);
            });
          }
          return networkResponse;
        }).catch(() => cachedResponse);
        
        return cachedResponse || fetchPromise;
      })
    );
    return;
  }
  
  // Stratégie pour les pages HTML : Network First avec fallback sur le cache
  if (request.destination === 'document') {
    event.respondWith(
      fetch(request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const responseToCache = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(request, responseToCache);
            });
          }
          return networkResponse;
        })
        .catch(() => {
          return caches.match(request).then((cachedResponse) => {
            if (cachedResponse) {
              return cachedResponse;
            }
            return caches.match('/index.html');
          });
        })
    );
    return;
  }
  
  // Stratégie par défaut : Cache First
  event.respondWith(
    caches.match(request)
      .then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }
        
        return fetch(request)
          .then((networkResponse) => {
            if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
              return networkResponse;
            }
            
            const responseToCache = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(request, responseToCache);
            });
            
            return networkResponse;
          })
          .catch((error) => {
            console.error('[SW] Erreur fetch:', error);
            throw error;
          });
      })
  );
});

// Gestion des messages depuis l'application
self.addEventListener('message', (event) => {
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
  }
});

// Synchronisation en arrière-plan (pour sauvegardes)
self.addEventListener('sync', (event) => {
  if (event.tag === 'save-invoice') {
    console.log('[SW] Sync: Sauvegarde en arrière-plan');
    // La sauvegarde est déjà gérée par localStorage
  }
});
