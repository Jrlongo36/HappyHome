// HappyHome SW Ñ Passthrough NO-CACHE
// Vide les anciens caches, ne met rien en cache, laisse passer toutes les requetes
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.map(k => caches.delete(k)))));
  self.clients.claim();
});
self.addEventListener('fetch', e => {
  e.respondWith(fetch(e.request));
});
