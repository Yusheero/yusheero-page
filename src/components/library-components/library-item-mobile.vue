<script setup>
import { ArrowRight } from 'lucide-vue-next';
import { useRouter } from 'vue-router';

const router = useRouter();
const props = defineProps({
  data: Array,
  index: String,
  route: {
    type: String,
    default: ''
  }
});

// Функция для перехода на страницу категории
const navigateToCategory = () => {
  if (props.route) {
    router.push(props.route);
  } else {
    // Если маршрут не указан, создаем маршрут на основе категории
    router.push(`/library/${props.index.toLowerCase()}`);
  }
};
</script>

<template>
  <div class="library-item-mobile" @click="navigateToCategory">
    <div class="library-item-mobile__content">
      <div class="library-item-mobile__title">
        {{ index }}
      </div>
      <div class="library-item-mobile__button">
        <ArrowRight size="18" class="arrow-icon" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/style.scss';

// Переменные терминального стиля
$terminal-green: #4afa9a;
$terminal-dark-green: #052505;
$terminal-frame: rgba(79, 250, 154, 0.3);
$terminal-text: #4afa9a;
$terminal-background: rgba(10, 26, 18, 0.95);
$terminal-highlight: rgba(79, 250, 154, 0.15);
$terminal-button: rgba(79, 250, 154, 0.2);
$terminal-button-hover: rgba(79, 250, 154, 0.4);

.library-item-mobile {
  width: 100%;
  background: $terminal-background;
  border: 1px solid $terminal-frame;
  box-shadow: 0 0 8px rgba(79, 250, 154, 0.2);
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.2s ease;
  
  &:active {
    transform: scale(0.98);
    box-shadow: 0 0 16px rgba(79, 250, 154, 0.4);
  }
  
  &__content {
    width: 100%;
    height: 100%;
    padding: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  &__title {
    font-size: 16px;
    font-weight: 600;
    color: $terminal-text;
    text-shadow: 0 0 5px rgba(79, 250, 154, 0.5);
  }
  
  &__button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    background: $terminal-button;
    border-radius: 50%;
    transition: background 0.3s ease;
    
    .arrow-icon {
      stroke: $terminal-green;
      transition: transform 0.3s ease;
    }
    
    &:active {
      background: $terminal-button-hover;
      
      .arrow-icon {
        transform: translateX(2px);
      }
    }
  }
}

@keyframes pulse {
  0% { opacity: 1; }
  50% { opacity: 0.7; }
  100% { opacity: 1; }
}
</style> 