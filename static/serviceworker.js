const cacheName = 'tamankodekode-v1';
const cacheFile = [
  'js/app.js',
  'js/vendor.js',
  'css/app.css',
  'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
  //'/offline.html'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(cacheFile);
    })
  );
});

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(names) {
      return Promise.all(
        names.filter(function(name) {
          return name != cacheName;
        }).map(function(name) {
          return caches.delete(name);
        })
      );
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(res) {
      if (res) return res;
      return fetch(event.request);
    })
  );
});
