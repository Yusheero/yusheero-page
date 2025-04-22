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
  <div class="library-item">
    <div class="library-item__button" @click="navigateToCategory">
      <span>{{ route }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/style.scss';

// Переменные терминального стиля
$terminal-green: #4afa9a;
$terminal-dark-green: #052505;
$terminal-bright-green: #6dffc2;
$terminal-frame: rgba(79, 250, 154, 0.3);
$terminal-text: #4afa9a;
$terminal-background: rgba(10, 26, 18, 0.95);
$terminal-highlight: rgba(79, 250, 154, 0.15);
$terminal-button: rgba(79, 250, 154, 0.2);
$terminal-button-hover: rgba(79, 250, 154, 0.4);

.library-item {
  width: 100%;
  background: $terminal-background;
  border: 1px solid $terminal-frame;
  box-shadow: 0 0 8px rgba(79, 250, 154, 0.2);
  border-radius: 6px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  overflow: hidden;
  transition: all 0.2s ease;
  
  &:hover {
    box-shadow: 0 0 12px rgba(79, 250, 154, 0.3);
  }

  &__button {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: $terminal-button;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
    transition: background 0.3s ease;
    cursor: pointer;

    &:hover {
      background: $terminal-button-hover;
      
      .arrow-icon {
        transform: translateX(3px);
      }
    }
    
    .arrow-icon {
      stroke: $terminal-green;
      transition: transform 0.3s ease;
    }
  }
}

@keyframes pulse {
  0% { opacity: 1; }
  50% { opacity: 0.7; }
  100% { opacity: 1; }
}
</style>