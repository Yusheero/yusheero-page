// Компонент загрузки для асинхронных компонентов
export const LoadingComponent = {
  template: `
    <div class="async-loading">
      <div class="loading-spinner"></div>
      <p>Загрузка...</p>
    </div>
  `
};

// Компонент для отображения ошибок при загрузке
export const ErrorComponent = {
  template: `
    <div class="async-error">
      <p>Произошла ошибка при загрузке компонента</p>
      <button @click="$emit('retry')">Повторить</button>
    </div>
  `,
  emits: ['retry']
};

// Хелпер-функция для создания асинхронных компонентов с одинаковыми настройками
export function createAsyncComponent(loader) {
  return {
    loader,
    loadingComponent: LoadingComponent,
    errorComponent: ErrorComponent,
    delay: 200,          // Задержка перед показом индикатора загрузки (мс)
    timeout: 10000,      // Таймаут загрузки (мс)
  };
}

// CSS-стили для компонентов загрузки и ошибок добавляются в главный файл стилей 