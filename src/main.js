import { createApp } from 'vue';
import { createPinia } from 'pinia'
import '@/assets/style/style.scss';
import App from '@/App.vue';
import { router } from '@/router/router';

const pinia = createPinia()

const app = createApp(App).use(pinia).use(router)

// Регистрация Service Worker
if ('serviceWorker' in navigator) {
  // Добавляем скрипт для управления обновлениями Service Worker
  const script = document.createElement('script');
  script.src = '/sw-update.js';
  document.head.appendChild(script);
}

app.mount('#app')
