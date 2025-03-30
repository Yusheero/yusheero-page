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
          // Удаляем старые кэши, оставляя только текущие
          if (cacheName !== CACHE_NAME && cacheName !== OFFLINE_CACHE) {
            console.log('Service Worker: Удаление старого кэша', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim()) // Заставляем Service Worker "взять на себя" открытые страницы
  );
});

// Стратегия кэширования "Cache First, Network Fallback"
self.addEventListener('fetch', (event) => {
  // Игнорируем запросы для API, аналитики и других внешних запросов
  if (event.request.url.includes('/api/') || 
      event.request.url.includes('analytics') ||
      event.request.url.includes('socket') ||
      !event.request.url.startsWith(self.location.origin)) {
    return;
  }
  
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Возвращаем кэшированный ответ, если он есть
        if (response) {
          return response;
        }
        
        // Если ответа нет в кэше, делаем сетевой запрос
        return fetch(event.request)
          .then((networkResponse) => {
            // Проверяем валидность ответа
            if (!networkResponse || networkResponse.status !== 200 || 
                networkResponse.type !== 'basic') {
              return networkResponse;
            }
            
            // Кэшируем новый ресурс (клонируем, т.к. ответ можно прочитать только один раз)
            const responseToCache = networkResponse.clone();
            
            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(event.request, responseToCache);
              });
            
            return networkResponse;
          })
          .catch((error) => {
            console.log('Ошибка при выполнении fetch:', error);
            
            // Для навигационных запросов (HTML страниц) в случае ошибки
            // показываем оффлайн-страницу
            if (isNavigationRequest(event.request)) {
              return caches.match('/offline.html', { cache: OFFLINE_CACHE });
            }
            
            // Для изображений возвращаем офлайн-изображение
            if (isImageRequest(event.request)) {
              return caches.match('/assets/images/offline-image.svg', { cache: OFFLINE_CACHE });
            }
            
            // Для JS и CSS возвращаем пустой ответ соответствующего типа
            if (isStaticAsset(event.request)) {
              const url = new URL(event.request.url);
              const extension = url.pathname.split('.').pop().toLowerCase();
              
              let contentType = 'text/plain';
              if (extension === 'css') contentType = 'text/css';
              if (extension === 'js') contentType = 'application/javascript';
              
              return new Response('/* Ресурс недоступен в офлайн-режиме */', {
                status: 200,
                headers: { 'Content-Type': contentType }
              });
            }
            
            // Для всех остальных запросов
            return new Response('Нет соединения с сетью.', {
              status: 503,
              headers: { 'Content-Type': 'text/plain' }
            });
          });
      })
  );
});

// Обработка сообщений от клиента
self.addEventListener('message', (event) => {
  // Если получено сообщение на обновление
  if (event.data && event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
}); 