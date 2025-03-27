<script setup>
import { ref, onMounted } from 'vue';
import Navigation from '@/components/navigation/navigation.vue';
import ProjectsItem from '@/components/projects-components/projects-item.vue';
import data from '@/data/projects.json';

const projectsData = data.data;

// Убираем переменные для эффектов, так как глич эффект больше не нужен
</script>

<template>
  <div class="page-container">
    <div class="projects-view-desktop">
      <Navigation class="projects-view-desktop__navigation" />
      <div class="projects-view-desktop__content">
        <div class="grid-container">
          <!-- Сетка на весь контент -->
          <div class="grid-overlay"></div>
          
          <!-- Эффекты терминала -->
          <div class="crt-effect"></div>
          <div class="noise-effect"></div>
          <div class="scanline-effect"></div>
          <div class="crt-lines"></div>
          
          <!-- Эффект затемнения сверху и снизу экрана -->
          <div class="terminal-vignette"></div>
          
          <!-- Проекты контейнер -->
          <div class="projects-container">
            <ProjectsItem 
              v-for="data in projectsData" 
              :key="data.id" 
              :projectsData="data" 
              class="projects-view-desktop__item" 
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/style.scss';

.projects-view-desktop {
  position: relative;
  height: 100%;
  width: 100%;
  color: var(--color-secondary);
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: var(--color-primary);
    color: var(--color-secondary);
    grid-area: content;
    overflow: hidden;
  }
}

/* Стили для сетки и эффектов ЭЛТ */
.grid-container {
  width: 100%;
  height: 100%;
  position: relative;
  border-radius: 8px;
  background-color: #0a1a12;
  box-shadow: 0 0 20px rgba(0, 255, 140, 0.15);
  overflow: hidden;
}

/* Эффект затемнения сверху и снизу экрана (виньетка) */
.terminal-vignette {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.65) 0%,
    rgba(0, 0, 0, 0) 15%,
    rgba(0, 0, 0, 0) 85%,
    rgba(0, 0, 0, 0.65) 100%
  );
  pointer-events: none;
  z-index: 15;
}

.grid-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: 
    linear-gradient(rgba(79, 250, 154, 0.12) 1px, transparent 1px),
    linear-gradient(90deg, rgba(79, 250, 154, 0.12) 1px, transparent 1px);
  background-size: 40px 40px;
  pointer-events: none;
}

/* Эффекты терминала */
.crt-effect {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 2;
  background: radial-gradient(
    ellipse at center,
    rgba(10, 26, 18, 0) 0%,
    rgba(10, 26, 18, 0.2) 80%, 
    rgba(10, 26, 18, 0.4) 100%
  );
}

.noise-effect {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 3;
  opacity: 0.05;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("data:image/png;base64,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");
    opacity: 0.1;
    animation: noise 0.3s infinite;
  }
}

/* Эффект сканлайнов (горизонтальные линии развертки) */
.scanline-effect {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 4;
  background: linear-gradient(
    to bottom,
    transparent 50%,
    rgba(0, 0, 0, 0.05) 51%,
    transparent 51%
  );
  background-size: 100% 4px;
  animation: scanlines 6s linear infinite;
}

/* Эффект ребристости экрана CRT */
.crt-lines {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 5;
  background-image: repeating-linear-gradient(
    to bottom,
    rgba(79, 250, 154, 0.08),
    rgba(79, 250, 154, 0.08) 1px,
    transparent 1px,
    transparent 3px
  );
  opacity: 0.8;
  /* Легкое колебание ребристости */
  animation: crt-wobble 10s ease-in-out infinite;
}

/* Контейнер для проектов */
.projects-container {
  position: relative;
  z-index: 20;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 20px;
  padding: 25px;
  overflow: auto;
  
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

@keyframes noise {
  0%, 100% { transform: translate(0, 0); }
  10% { transform: translate(-2px, -2px); }
  20% { transform: translate(2px, 2px); }
  30% { transform: translate(-1px, 1px); }
  40% { transform: translate(3px, -3px); }
  50% { transform: translate(-3px, 2px); }
  60% { transform: translate(2px, 1px); }
  70% { transform: translate(-2px, 3px); }
  80% { transform: translate(1px, -1px); }
  90% { transform: translate(-1px, -2px); }
}

@keyframes scanlines {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 0 100%;
  }
}

@keyframes crt-wobble {
  0%, 100% { 
    transform: scale(1, 1.001); 
    opacity: 0.7;
  }
  50% { 
    transform: scale(1.001, 1); 
    opacity: 0.8;
  }
}
</style>