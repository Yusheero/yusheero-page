/**
 * Файл для управления обновлениями Service Worker
 * Этот скрипт проверяет наличие обновлений Service Worker
 * и показывает уведомление пользователю
 */

// Функция для показа уведомления об обновлении
function showUpdateNotification() {
  // Создаем элемент уведомления
  const notification = document.createElement('div');
  notification.className = 'update-notification';
  notification.innerHTML = `
    <div class="update-notification-content">
      <p>Доступна новая версия сайта!</p>
      <button class="update-button">Обновить</button>
    </div>
  `;
  
  // Добавляем стили для уведомления
  const style = document.createElement('style');
  style.textContent = `
    .update-notification {
      position: fixed;
      bottom: 20px;
      right: 20px;
      z-index: 9999;
      background-color: rgba(10, 26, 18, 0.95);
      color: #4FFA9A;
      border: 1px solid #4FFA9A;
      border-radius: 5px;
      box-shadow: 0 0 15px rgba(79, 250, 154, 0.3);
      padding: 15px;
      font-family: 'Courier New', monospace;
      animation: slideIn 0.3s ease;
    }
    
    .update-notification-content {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    
    .update-notification p {
      margin: 0 0 10px;
      font-size: 14px;
    }
    
    .update-button {
      background-color: rgba(79, 250, 154, 0.15);
      border: 1px solid rgba(79, 250, 154, 0.5);
      color: #4FFA9A;
      padding: 5px 15px;
      border-radius: 4px;
      font-size: 14px;
      cursor: pointer;
      transition: all 0.3s ease;
      font-family: 'Courier New', monospace;
    }
    
    .update-button:hover {
      background-color: rgba(79, 250, 154, 0.3);
      box-shadow: 0 0 8px rgba(79, 250, 154, 0.4);
    }
    
    @keyframes slideIn {
      from { transform: translateX(100%); opacity: 0; }
      to { transform: translateX(0); opacity: 1; }
    }
  `;
  
  // Добавляем уведомление и стили на страницу
  document.head.appendChild(style);
  document.body.appendChild(notification);
  
  // Обработчик нажатия на кнопку обновления
  const updateButton = notification.querySelector('.update-button');
  updateButton.addEventListener('click', () => {
    // Перезагружаем страницу для применения обновлений
    window.location.reload();
  });
}

// Обработчик обновления Service Worker
function handleServiceWorkerUpdate() {
  // Регистрация Service Worker
  if ('serviceWorker' in navigator) {
    // После загрузки страницы
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/service-worker.js').then(registration => {
        // При обнаружении обновления
        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing;
          
          // Отслеживаем состояние нового Service Worker
          newWorker.addEventListener('statechange', () => {
            // Когда установка завершена, но новый воркер еще не активирован
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              // Показываем уведомление об обновлении
              showUpdateNotification();
            }
          });
        });
      });
      
      // Проверяем наличие обновлений каждый час
      setInterval(() => {
        navigator.serviceWorker.getRegistration().then(registration => {
          if (registration) {
            registration.update();
          }
        });
      }, 3600000); // 3600000 мс = 1 час
    });
  }
}

// Запускаем обработчик
handleServiceWorkerUpdate(); 