<script setup>
import NavigationMobile from '@/components/navigation/navigation-mobile.vue';
import ProjectsItem from '@/components/projects-components/projects-item.vue';
import data from '@/data/projects.json';

const projectsData = data.data;
</script>

<template>
  <div class="projects-view-mobile">
      <NavigationMobile />
      <!-- Контент обернут в терминальный контейнер -->
      <div class="projects-view-mobile__content">
        <div class="terminal-container">
          <!-- Эффекты терминала -->
          <div class="crt-effect"></div>
          <div class="scanline-effect"></div>
          <div class="noise-effect"></div>
          
          <!-- Проекты контейнер -->
          <div class="projects-container">
            <ProjectsItem 
              v-for="data in projectsData" 
              :key="data.id" 
              :projectsData="data" 
              class="projects-view-mobile__item" 
            />
          </div>
          
          <!-- Верхний и нижний градиентные эффекты -->
          <div class="terminal-top-gradient"></div>
          <div class="terminal-bottom-gradient"></div>
        </div>
      </div>
  </div>
</template>

<style lang="scss">
@import '@/assets/style/style.scss';

// Переменные терминального стиля
$terminal-green: #4afa9a;
$terminal-dark-green: #052505;
$terminal-frame: rgba(79, 250, 154, 0.1);
$terminal-text: #4afa9a;
$terminal-background: rgba(10, 26, 18, 0.95);

.projects-view-mobile {
  width: 100%;
  height: 98.5vh;
  display: flex;
  flex-direction: column;
  padding: 64px 8px 8px 8px;

  &__content {
    height: 100%;
    width: 100%;
    border-radius: 10px;
    padding: 0;
    grid-area: content;
    overflow: hidden;
    position: relative;
  }
}

.projects-container {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow: auto;
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

.terminal-container {
  padding: 8px;
  position: relative;
  width: 100%;
  height: 100%;
  background-color: $terminal-background;
  border: 1px solid $terminal-frame;
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