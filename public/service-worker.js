// This service worker is now disabled
// Этот service worker отключен для предотвращения кэширования

// Название кэша и версия - будем использовать для обновления кэша при выпуске новых версий
const CACHE_NAME = 'yusheero-cache-v1';
const OFFLINE_CACHE = 'yusheero-offline-cache';

// Ресурсы, которые кэшируем при установке Service Worker
const CACHE_URLS = [
  '/',
  '/index.html',
  '/offline.html',
  '/offline-image.svg',
  '/manifest.json',
  '/favicon.ico',
  '/sw-update.js'
];

// Функция для проверки является ли запрос навигационным
function isNavigationRequest(request) {
  return (request.mode === 'navigate' && 
         request.destination === 'document');
}

// Функция для проверки, является ли запрос изображением
function isImageRequest(request) {
  return request.destination === 'image' || 
         request.url.match(/\.(jpe?g|png|gif|svg|webp)$/i);
}

// Функция для проверки, является ли запрос статическим ресурсом (CSS, JS, шрифты)
function isStaticAsset(request) {
  return request.destination === 'style' || 
         request.destination === 'script' || 
         request.destination === 'font' ||
         request.url.match(/\.(css|js|woff2?|ttf|eot)$/i);
}

// Событие установки Service Worker - кэширование основных ресурсов
self.addEventListener('install', (event) => {
  console.log('Service Worker: Установка');
  
  // Ожидаем завершения кэширования перед завершением установки
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Service Worker: Кэширование файлов');
        // Кэшируем каждый URL отдельно
        return Promise.all(
          CACHE_URLS.map(url => 
            cache.add(url).catch(err => {
              console.warn(`Failed to cache ${url}:`, err);
            })
          )
        );
      })
      .then(() => {
        // Создаем отдельный кэш для офлайн-ресурсов
        return caches.open(OFFLINE_CACHE)
          .then((cache) => {
            return cache.addAll([
              '/offline.html',
              '/assets/images/offline-image.svg'
            ]);
          });
      })
      .then(() => self.skipWaiting()) // Активируем Service Worker сразу
  );
});

// Событие активации Service Worker - очистка старых кэшей
self.addEventListener('activate', (event) => {
  console.log('Service Worker: Активация');
  
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          console.log('Deleting cache:', cacheName);
          return caches.delete(cacheName);
        })
      );
    }).then(() => self.clients.claim()) // Заставляем Service Worker "взять на себя" открытые страницы
  );
});

// Не кэшируем никакие ресурсы
self.addEventListener('fetch', function(event) {
  // Проходит через fetch без кэширования
  // Это позволит всегда получать актуальные данные с сервера
});

// Обработка сообщений от клиента
self.addEventListener('message', (event) => {
  // Если получено сообщение на обновление
  if (event.data && event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
}); 