self.addEventListener('install', (e) => self.skipWaiting());
self.addEventListener('activate', (e) => self.clients.claim());

self.addEventListener('fetch', (e) => {
    // 军师铁律：全部实时拉取，拒绝本地幽灵缓存！
    e.respondWith(
        fetch(e.request, { cache: 'no-store' }).catch(() => new Response('Network Error'))
    );
});
