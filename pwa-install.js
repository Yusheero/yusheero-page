/**
 * Файл для управления установкой PWA
 * Проверяет поддержку PWA и предлагает установку на устройство
 */

// Переменная для хранения события установки
let deferredPrompt;
// Флаг, чтобы не показывать уведомление несколько раз
let installPromptShown = false;

// Функция для показа уведомления с предложением установить PWA
function showInstallPrompt() {
  if (installPromptShown) return;
  
  // Создание элемента уведомления
  const notification = document.createElement('div');
  notification.className = 'pwa-install-prompt';
  notification.innerHTML = `
    <div class="pwa-prompt-content">
      <p>Установите наше приложение на ваше устройство для быстрого доступа</p>
      <div class="pwa-prompt-buttons">
        <button class="pwa-install-button">Установить</button>
        <button class="pwa-dismiss-button">Не сейчас</button>
      </div>
    </div>
  `;
  
  // Добавление стилей для уведомления
  const style = document.createElement('style');
  style.textContent = `
    .pwa-install-prompt {
      position: fixed;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 9999;
      background-color: rgba(10, 26, 18, 0.95);
      color: #4FFA9A;
      border: 1px solid #4FFA9A;
      border-radius: 5px;
      box-shadow: 0 0 15px rgba(79, 250, 154, 0.3);
      padding: 15px;
      font-family: 'Courier New', monospace;
      width: 90%;
      max-width: 350px;
      animation: slideUp 0.3s ease;
    }
    
    .pwa-prompt-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
    
    .pwa-prompt-content p {
      margin: 0 0 15px;
      font-size: 14px;
    }
    
    .pwa-prompt-buttons {
      display: flex;
      justify-content: center;
      gap: 15px;
    }
    
    .pwa-install-button, .pwa-dismiss-button {
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
    
    .pwa-install-button {
      background-color: rgba(79, 250, 154, 0.3);
    }
    
    .pwa-install-button:hover {
      background-color: rgba(79, 250, 154, 0.4);
      box-shadow: 0 0 8px rgba(79, 250, 154, 0.5);
    }
    
    .pwa-dismiss-button:hover {
      background-color: rgba(79, 250, 154, 0.2);
    }
    
    @keyframes slideUp {
      from { transform: translate(-50%, 100%); opacity: 0; }
      to { transform: translate(-50%, 0); opacity: 1; }
    }
  `;
  
  // Добавление элементов на страницу
  document.head.appendChild(style);
  document.body.appendChild(notification);
  
  // Установка флага, что уведомление показано
  installPromptShown = true;
  
  // Добавление обработчиков событий для кнопок
  const installButton = notification.querySelector('.pwa-install-button');
  const dismissButton = notification.querySelector('.pwa-dismiss-button');
  
  // Обработчик нажатия на кнопку установки
  installButton.addEventListener('click', () => {
    // Убираем уведомление
    notification.remove();
    
    // Показываем нативный диалог установки
    if (deferredPrompt) {
      deferredPrompt.prompt();
      
      // Ожидаем ответа пользователя
      deferredPrompt.userChoice.then(choiceResult => {
        if (choiceResult.outcome === 'accepted') {
          console.log('Пользователь принял предложение установить PWA');
          // Сохраняем в localStorage, что приложение установлено
          localStorage.setItem('pwaInstalled', 'true');
        } else {
          console.log('Пользователь отклонил предложение установить PWA');
          // Сохраняем в localStorage, что пользователь отклонил установку
          localStorage.setItem('pwaInstallDismissed', Date.now().toString());
        }
        
        // Очищаем событие prompt
        deferredPrompt = null;
      });
    }
  });
  
  // Обработчик нажатия на кнопку "Не сейчас"
  dismissButton.addEventListener('click', () => {
    // Убираем уведомление
    notification.remove();
    
    // Сохраняем в localStorage, когда пользователь отклонил установку
    localStorage.setItem('pwaInstallDismissed', Date.now().toString());
  });
}

// Проверка, нужно ли показывать уведомление
function shouldShowInstallPrompt() {
  // Если приложение уже установлено, не показываем
  if (localStorage.getItem('pwaInstalled') === 'true') {
    return false;
  }
  
  // Если пользователь недавно отклонил установку, не показываем снова сразу
  const dismissedTime = localStorage.getItem('pwaInstallDismissed');
  if (dismissedTime) {
    const dayInMs = 24 * 60 * 60 * 1000;
    const timeSinceDismissed = Date.now() - parseInt(dismissedTime);
    
    // Не показываем предложение в течение 7 дней после отклонения
    if (timeSinceDismissed < 7 * dayInMs) {
      return false;
    }
  }
  
  return true;
}

// Отслеживание события beforeinstallprompt
window.addEventListener('beforeinstallprompt', (e) => {
  // Предотвращаем показ стандартного браузерного диалога
  e.preventDefault();
  
  // Сохраняем событие prompt
  deferredPrompt = e;
  
  // Проверяем, нужно ли показывать наше собственное уведомление
  if (shouldShowInstallPrompt()) {
    // Показываем уведомление после небольшой задержки,
    // чтобы пользователь успел осмотреться на сайте
    setTimeout(showInstallPrompt, 30000); // 30 секунд
  }
});

// Отслеживание события appinstalled
window.addEventListener('appinstalled', () => {
  console.log('PWA была успешно установлена.');
  
  // Сохраняем в localStorage, что приложение установлено
  localStorage.setItem('pwaInstalled', 'true');
  
  // Очищаем событие prompt
  deferredPrompt = null;
}); 