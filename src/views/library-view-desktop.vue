<script setup>
import { onMounted } from 'vue';
import Navigation from '@/components/navigation/navigation.vue';
import data from '@/data/library.json';
import LibraryItem from '../components/library-components/library-item.vue';

// Используем новую структуру данных напрямую, она уже содержит нужные поля
const libraryData = data;

// Добавляем логирование для отладки
onMounted(() => {
  console.log('Library data loaded:', data);
  
  // Проверяем структуру данных
  const categories = data.map(cat => ({
    id: cat.id,
    name: cat.name,
    route: `/library/${cat.id}`
  }));
  
  console.log('Available categories:', categories);
});
</script>

<template>
  <div class="page-container">
    <div class="library-view-desktop">
      <Navigation class="library-view-desktop__navigation" />
      
      <!-- Контент обернут в терминальный контейнер -->
      <div class="library-view-desktop__content">
        <div class="terminal-container">
          <!-- Эффекты терминала -->
          <div class="crt-effect"></div>
          <div class="scanline-effect"></div>
          <div class="noise-effect"></div>
          
          <!-- Вертикальный контейнер с библиотекой -->
          <div class="library-container">
            <div v-for="item in libraryData" :key="item.id" class="debug-info">

              
              <LibraryItem 
                :data="item.items" 
                :index="item.name" 
                :route="`/library/${item.id}`"
                class="library-view-desktop__item" 
              />
            </div>
          </div>
          
          <!-- Верхний и нижний градиентные эффекты -->
          <div class="terminal-top-gradient"></div>
          <div class="terminal-bottom-gradient"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/style.scss';

// Переменные терминального стиля
$terminal-green: #4afa9a;
$terminal-dark-green: #052505;
$terminal-frame: rgba(79, 250, 154, 0.1);
$terminal-text: #4afa9a;
$terminal-background: rgba(10, 26, 18, 0.95);

.debug-info {
  position: relative;
  width: 100%;
}

.debug-route {
  font-size: 12px;
  color: rgba(79, 250, 154, 0.5);
  margin-bottom: 5px;
  padding: 4px;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 4px;
}

.library-view-desktop {
  position: relative;
  height: 100%;
  width: 100%;
  color: $terminal-text;
  display: grid;
  grid-template-columns: 10rem 10rem 10rem 14rem 8rem 32rem;
  grid-template-rows: 10rem 20rem 7rem 16rem;
  gap: 8px;
  grid-template-areas:
    "content content content content content content"
    "content content content content content content"
    "content content content content content content"
    "content content content content content content";

  &__navigation {
    position: absolute;
    top: 0;
    left: -148px;
    z-index: 100;
  }

  &__content {
    height: 100%;
    width: 100%;
    border-radius: 10px;
    padding: 0;
    grid-area: content;
    overflow: hidden;
    position: relative;
  }
  
  &__item {
    width: 100%;
    height: 100%;
    background-color: rgba(79, 250, 154, 0.05);
    border: 1px solid $terminal-frame;
    border-radius: 6px;
    box-shadow: 0 0 8px rgba(79, 250, 154, 0.1);
    transition: all 0.3s ease;
    
    &:hover {
      background-color: rgba(79, 250, 154, 0.1);
      box-shadow: 0 0 12px rgba(79, 250, 154, 0.2);
      transform: translateY(-2px);
    }
    
    &:last-child {
      margin-bottom: 0;
    }
  }
}

.terminal-container {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: $terminal-background;
  border: 1px solid $terminal-frame;
  box-shadow: 0 0 1px rgba(79, 250, 154, 0.3), inset 0 0 40px rgba(0, 0, 0, 0.8);
  border-radius: 10px;
  overflow: hidden;
}

.terminal-top-gradient, .terminal-bottom-gradient {
  position: absolute;
  left: 0;
  right: 0;
  height: 30px;
  z-index: 2;
  pointer-events: none;
}

.terminal-top-gradient {
  top: 0;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.7), transparent);
}

.terminal-bottom-gradient {
  bottom: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
}

.library-container {
  position: relative;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 16px;
  padding: 25px;
  overflow-y: auto;
  z-index: 1;
  
  /* Стилизация скроллбара */
  &::-webkit-scrollbar {
    width: 8px;
  }
  
  &::-webkit-scrollbar-track {
    background: rgba(79, 250, 154, 0.1);
    border-radius: 4px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: rgba(79, 250, 154, 0.5);
    border-radius: 4px;
    
    &:hover {
      background: rgba(79, 250, 154, 0.7);
    }
  }
}

// Эффекты терминала
.crt-effect {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(
    ellipse at center,
    transparent 50%,
    rgba(0, 0, 0, 0.3) 100%
  );
  pointer-events: none;
  z-index: 1;
}

.scanline-effect {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(18, 16, 16, 0) 50%,
    rgba(0, 0, 0, 0.3) 50%
  );
  background-size: 100% 4px;
  pointer-events: none;
  z-index: 1;
  opacity: 0.2;
}

.noise-effect {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('data:image/png;base64,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');
  opacity: 0.08;
  pointer-events: none;
  z-index: 1;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}
</style>