const cacheName = 'Version12';
const enCache = [
    "./index.html",
    "./app.bundle.js",
    "./favicon.png",
    "./71ccd01d2f36e5074e5434fa0a552356.png",
    "./475836d9c2ac0dc47b7cf5a3936aead8.jpg"
]

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(cacheName)
        .then(cache => cache.addAll(enCache))
    );
});

self.addEventListener('message', function (event) {
    if (event.data.action === 'skipWaiting') {
        self.skipWaiting();
    }
});

self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request)
        .then(function (response) {
            if (response) {
                return response;
            }
            return fetch(event.request);
        })
    );
});