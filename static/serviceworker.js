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
  const req = event.request;
  const url = new URL(req.url);

  if (url.origin === location.origin)
    event.respondWith(
      caches.matches(req).then(function(res) {
        return res || fetch(res);
      })
    );
  else
    event.respondWith(
      caches.open('tamankodekode-data').then(function(cache) {
        return fetch(req).then(function(res) {
          cache.put(req, res.clone());
          return res;
        }).catch(function() {
          return caches.match(req).then(function(res) {
            return res || caches.match('fallback.json');
          });
        });
      })
    );
});
