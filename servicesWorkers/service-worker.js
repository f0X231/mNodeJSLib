self.addEventListener('install', function(event) {
    // Pre-cache goes here
})
   
self.addEventListener('activate', function(event) {
    // Remove unused cache data
})

// Intercept Network Request (fetch)
self.addEventListener('fetch', function(event) {
    event.respondWith(
        new Response('This page is taken by service-worker')
    )
})

/*
https://www.udacity.com/course/offline-web-applications--ud899
https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorker
https://github.com/slightlyoff/ServiceWorker/blob/master/explainer.md
*/

/*
// Install Service Worker
var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
                    '/',
                    '/styles/main.css',
                    '/script/main.js'
                ];

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME).then(function(cache) {
            return cache.addAll(urlsToCache);
        })
    );
});
// Activate Service Worker
// เมื่อ Browser install Service Worker แล้ว ก็จะทำการ Activate เหมือนเป็นการเปิด App ขึ้นมาหลังจาก Install แล้วอยากให้ทำอะไรต่อ
self.addEventListener('activate', function(event) {
    event.waitUntil(
        caches.keys().then(function(keyList) {
            return Promise.all(keyList.map(function(key) {
                if (key !== CACHE_NAME) {
                    return caches.delete(key);
                }
            }));
        })
    );
    return self.clients.claim();
})
self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
                .then(function(response) {
                    // Cache hit - return response
                    if (response) {
                        return response;
                    }
                    return fetch(event.request);
                }
        )
    );
});
*/