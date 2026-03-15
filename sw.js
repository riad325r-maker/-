const CACHE_VERSION = '2.1.0';
const CACHE_NAME    = `cinelingua-${CACHE_VERSION}`;
const BASE = '/cine-lingua.-';

const STATIC_ASSETS = [
    BASE + '/',
    BASE + '/index.html',
    BASE + '/lessons.html',
    BASE + '/stories.html',
    BASE + '/tenses.html',
    BASE + '/quiz.html',
    BASE + '/verbs.html',
    BASE + '/grammar.html',
    BASE + '/download.html',
    BASE + '/style.css',
    BASE + '/core.js',
    BASE + '/manifest.json',
    BASE + '/beginner-data.js',
    BASE + '/intermediate-data.js',
    BASE + '/advanced-data.js',
    BASE + '/stories-data.js',
    BASE + '/tenses-data.js',
    BASE + '/words-data.js',
    BASE + '/verbs-data.js',
    BASE + '/grammar-data.js',
    'https://i.postimg.cc/J4xdc62M/20260305-233826.png',
    'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css'
];

// Install Event
self.addEventListener('install', event => {
    self.skipWaiting();
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(STATIC_ASSETS);
        })
    );
});

// Activate Event
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(
                keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
            );
        })
    );
});

// Fetch Event
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(cachedResponse => {
            return cachedResponse || fetch(event.request);
        })
    );
});
