<script setup>
import { useKeenSlider } from 'keen-slider/vue'
import TechBlockMobile from '@/components/home-components/tech-block-mobile.vue';
import { useStore } from '@/store/store';
import { ref, onMounted } from 'vue';

const store = useStore()
const glitchEffect = ref(false);

// Параметры автоматической прокрутки
const animation = { duration: 4000, easing: (t) => t }

// Инициализация slider с эффектом исчезновения на краях
const [container, slider] = useKeenSlider({ 
  loop: true,
  initial: 0,
  drag: false, // Отключаем перетаскивание, так как карусель будет автоматически крутиться
  slides: {
    perView: 10,
    spacing: 10
  },
  created(s) {
    s.moveToIdx(1, true, animation)
  },
  updated(s) {
    s.moveToIdx(s.track.details.abs + 1, true, animation)
  },
  animationEnded(s) {
    s.moveToIdx(s.track.details.abs + 1, true, animation)
  },
})

// Периодический эффект глюка для терминального стиля
onMounted(() => {
  setInterval(() => {
    glitchEffect.value = true;
    setTimeout(() => {
      glitchEffect.value = false;
    }, 200);
  }, 7000);
});
</script>

<template>
  <TechBlockMobile v-if="store.isMobile" />
  <div v-else class="tech-block">
    <div class="tech-block__content">
      <!-- Эффекты терминального дисплея -->
      <div class="scanline-effect"></div>
      <div class="crt-effect"></div>
      <div class="noise-effect" :class="{ 'glitch': glitchEffect }"></div>
      
      <!-- Карусель технологий -->
      <div ref="container" class="keen-slider">
        <div class="keen-slider__slide tech-item">
          <div class="tech-icon">JS</div>
        </div>
        <div class="keen-slider__slide tech-item">
          <div class="tech-icon">TS</div>
        </div>
        <div class="keen-slider__slide tech-item">
          <div class="tech-icon">VITE</div>
        </div>
        <div class="keen-slider__slide tech-item">
          <div class="tech-icon">VUE</div>
        </div>
        <div class="keen-slider__slide tech-item">
          <div class="tech-icon">SASS</div>
        </div>
        <div class="keen-slider__slide tech-item">
          <div class="tech-icon">NUXT</div>
        </div>
        <div class="keen-slider__slide tech-item">
          <div class="tech-icon">ROUTE</div>
        </div>
        <div class="keen-slider__slide tech-item">
          <div class="tech-icon">PINIA</div>
        </div>
        <div class="keen-slider__slide tech-item">
          <div class="tech-icon">NPM</div>
        </div>
        <div class="keen-slider__slide tech-item">
          <div class="tech-icon">GIT</div>
        </div>
        <div class="keen-slider__slide tech-item">
          <div class="tech-icon">NODE</div>
        </div>
        <div class="keen-slider__slide tech-item">
          <div class="tech-icon">THREE</div>
        </div>
        <div class="keen-slider__slide tech-item">
          <div class="tech-icon">HTML</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import url('keen-slider/keen-slider.css');

.tech-block {
  position: relative;
  height: 100%;
  width: 100%;
  border-radius: 5px;
  overflow: hidden;
  
  &__content {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: rgba(10, 26, 18, 0.95);
    border: 1px solid #4FFA9A;
    border-radius: 5px;
    box-shadow: 0 0 20px rgba(79, 250, 154, 0.3);
    color: #E0E0E0;
    overflow: hidden;
  }
}

// Терминальные эффекты
.scanline-effect {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    transparent 0%,
    rgba(79, 250, 154, 0.05) 50%,
    transparent 100%
  );
  pointer-events: none;
  animation: scanline 8s linear infinite;
  opacity: 0.3;
  z-index: 2;
}

.crt-effect {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(
    ellipse at center,
    transparent 0%,
    rgba(0, 0, 0, 0.2) 90%,
    rgba(0, 0, 0, 0.4) 100%
  );
  pointer-events: none;
  z-index: 1;
}

.noise-effect {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAhGVYSWZNTQAqAAAACAAGAQYAAwAAAAEAAgAAARIAAwAAAAEAAQAAARoABQAAAAEAAABWARsABQAAAAEAAABeASgAAwAAAAEAAgAAh2kABAAAAAEAAABmAAAAAAAAAEgAAAABAAAASAAAAAEAAqACAAQAAAABAAAAMqADAAQAAAABAAAAMgAAAADTdkLEAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC4mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNi4wLjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgICAgICAgICAgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iPgogICAgICAgICA8dGlmZjpZUmVzb2x1dGlvbj43MjwvdGlmZjpZUmVzb2x1dGlvbj4KICAgICAgICAgPHRpZmY6WFJlc29sdXRpb24+NzI8L3RpZmY6WFJlc29sdXRpb24+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgICAgIDxleGlmOlBpeGVsWERpbWVuc2lvbj41MDwvZXhpZjpQaXhlbFhEaW1lbnNpb24+CiAgICAgICAgIDxleGlmOkNvbG9yU3BhY2U+MTwvZXhpZjpDb2xvclNwYWNlPgogICAgICAgICA8ZXhpZjpQaXhlbFlEaW1lbnNpb24+NTA8L2V4aWY6UGl4ZWxZRGltZW5zaW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KXQAGdAAAAVlJREFUaAXtmcsNwjAMhpuKjTgzABMwAmdiB8ZhFzZAYgE2aH3o6KlNlMSmpz8pUtpD8iVN7fS8bXNgVlVVB0QV5XK5kIrOc7kF6f9ARDkOh0MfQ9i2B9GOcUGUY5qmw/kRRxF1mBVCKUwURXQRvGDz/V/8DD8MXoaPOqJHuMMoI1oIDiMMrwzSRdQRLJPLS7coXuQRLZZwvPTWK0hLLsRjnkY2d2Noi7UGAY9ZxtvBKWKtQdBjyjbpEpElNrJaIjUCPQSGYpG090V2mM/bESS8eS9t/TTON0Y5mE0gDJaFY5/XDxvRhjRGHZFGtBGCdI2gRlAjqBHUCGoENYIaQY2gRlAjqBHUCGoENYIaQY3EqJFb2kKhxewlbcnwbHjnYz8d00awZf8MN7C6kVQRNTCyxH3FiE+s776XNTdBOMJnj0iCcMw8B4K9w3sPwhl+z6YKZTj27QHfNZ5dUcbx7wAAAABJRU5ErkJggg==');
  background-repeat: repeat;
  pointer-events: none;
  opacity: 0.05;
  z-index: 3;
  
  &.glitch {
    opacity: 0.15;
    animation: glitch 0.2s infinite;
  }
}

// Стили для карусели
.keen-slider {
  position: relative;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 10px;
  z-index: 1;
  
  &::before, &::after {
    content: '';
    position: absolute;
    top: 0;
    height: 100%;
    width: 80px;
    pointer-events: none;
    z-index: 5;
  }
  
  &::before {
    left: 0;
    background: linear-gradient(to right, rgba(10, 26, 18, 0.95) 0%, rgba(10, 26, 18, 0) 100%);
  }
  
  &::after {
    right: 0;
    background: linear-gradient(to left, rgba(10, 26, 18, 0.95) 0%, rgba(10, 26, 18, 0) 100%);
  }
}

.tech-item {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  height: 6rem;
  border: 1px solid rgba(79, 250, 154, 0.3);
  box-shadow: 0 0 10px rgba(79, 250, 154, 0.1);
  transition: all 0.3s ease;
  background-color: rgba(10, 26, 18, 0.8);
  
  &:hover {
    border-color: rgba(79, 250, 154, 0.8);
    box-shadow: 0 0 15px rgba(79, 250, 154, 0.4);
    
    .tech-icon {
      text-shadow: 0 0 10px rgba(79, 250, 154, 0.9);
      color: #5aff9b;
    }
  }
}

.tech-icon {
  font-family: inherit;
  font-size: 15px;
  font-weight: bold;
  color: #4FFA9A;
  text-shadow: 0 0 5px rgba(79, 250, 154, 0.5);
  letter-spacing: 1px;
  transition: all 0.3s ease;
}

// Анимации
@keyframes scanline {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(100%);
  }
}
</style>