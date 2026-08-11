/* Service worker — appka funguje offline a po přidání na plochu
   je vyňatá ze 7denního mazání úložiště na iOSu.
   Když se něco změní v souborech, zvedni číslo verze v CACHE. */
var CACHE = 'slovicka-v6';
var ASSETS = [
  './',
  './index.html',
  './slova-es.js',
  './slova-en.js',
  './supabase-config.js',
  './vendor/supabase.js',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './apple-touch-icon.png'
];

// Uloží odpověď do cache, ale jen když se povedla (a je z našeho originu),
// ať se do cache nedostane 404/500 a nepodává se pak napořád (do zvednutí CACHE).
function cachePut(req, res) {
  if (res && res.ok && res.type === 'basic') {
    var copy = res.clone();
    caches.open(CACHE).then(function (c) { c.put(req, copy); }).catch(function () {});
  }
}

self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(CACHE)
      .then(function (c) { return Promise.allSettled(ASSETS.map(function (a) { return c.add(a); })); })
      .then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys()
      .then(function (keys) {
        return Promise.all(keys.filter(function (k) { return k !== CACHE; })
          .map(function (k) { return caches.delete(k); }));
      })
      .then(function () { return self.clients.claim(); })
  );
});

self.addEventListener('fetch', function (e) {
  var req = e.request;
  if (req.method !== 'GET') return;
  var url = new URL(req.url);
  // řešíme jen náš vlastní origin; písmo Inter z Googlu necachujeme
  // (offline appka spadne na systémové písmo — funguje dál)
  if (url.origin !== location.origin) return;

  var isHTML = req.mode === 'navigate' ||
    (req.headers.get('accept') || '').indexOf('text/html') !== -1;
  // Konfigurace Supabase (klíč/URL) se může změnit → network-first jako appka,
  // ať se nová hodnota projeví bez zvedání verze CACHE. Offline padne na kopii.
  var isConfig = url.pathname.indexOf('supabase-config.js') !== -1;

  if (isHTML || isConfig) {
    // Samotná appka: network-first — táta vždy dostane aktuální verzi,
    // offline se spadne na uloženou kopii. Tím se vyhneme tomu, že by mu
    // budoucí opravy nedorazily kvůli staré cache.
    e.respondWith(
      fetch(req).then(function (res) {
        cachePut(req, res);
        return res;
      }).catch(function () {
        return caches.match(req).then(function (c) { return c || caches.match('./index.html'); });
      })
    );
    return;
  }

  // Statické soubory (slova, ikony, manifest): cache-first kvůli rychlosti
  // a offline. Po zvednutí verze CACHE se při instalaci nacachují znovu.
  e.respondWith(
    caches.match(req).then(function (cached) {
      if (cached) return cached;
      return fetch(req).then(function (res) {
        cachePut(req, res);
        return res;
      });
    })
  );
});
