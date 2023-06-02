const CACHE_NAME = 'version-1';
const urlsToCache = ['index.html', 'offline.html'];
const self = this;

// Install Service Worker
self.addEventListener('install', (event) => {
	event.waitUntil(
		caches.open(CACHE_NAME)
			.then((cache) => {
				console.log('Opened cache');

				cache.addAll(urlsToCache);
			})
	)
})

// Listen to requests
self.addEventListener('fetch', (event) => {
	event.respondWith(
		caches.match(event.request)
			.then(() => {
				return fetch(event.request)
					.catch(() => caches.match('offline.html'))
			})
	)
})

// Activate Service Worker
self.addEventListener('activate', (event) => {

})