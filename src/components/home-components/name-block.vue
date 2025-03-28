<script setup>
import { LocateFixed } from 'lucide-vue-next';
import NameBlockMobile from '@/components/home-components/name-block-mobile.vue';
import { useStore } from '@/store/store';
import { ref, onMounted } from 'vue';

const store = useStore();
const nameText = ref('');
const isDeleting = ref(false);
const loopNum = ref(0);
const typingSpeed = ref(100);
const showCursor = ref(true);
const isPaused = ref(false);

// Многоязычные варианты текста (только английский и японский)
const textArray = [
  'Hello, I am Yusheero',
  'こんにちは、私はユシーロです'  // Японский
];

// Функция для печати и стирания текста
const typeWriter = () => {
  const i = loopNum.value % textArray.length;
  const fullText = textArray[i];
  
  if (isPaused.value) {
    setTimeout(typeWriter, 1500);
    return;
  }

  if (isDeleting.value) {
    // Стирание текста
    nameText.value = fullText.substring(0, nameText.value.length - 1);
    typingSpeed.value = 50; // Быстрее стираем
  } else {
    // Печать текста
    nameText.value = fullText.substring(0, nameText.value.length + 1);
    typingSpeed.value = 150; // Медленнее печатаем
  }

  // Логика изменения состояния
  if (!isDeleting.value && nameText.value === fullText) {
    // Закончили печать, пауза перед стиранием
    typingSpeed.value = 2000; // Долгая пауза когда напечатан полный текст
    isPaused.value = true;
    
    setTimeout(() => {
      isPaused.value = false;
      isDeleting.value = true;
    }, 2000);
  } else if (isDeleting.value && nameText.value === '') {
    // Закончили стирание, переходим к следующему тексту
    isDeleting.value = false;
    loopNum.value++;
    typingSpeed.value = 500; // Пауза перед печатью нового текста
  }

  setTimeout(typeWriter, typingSpeed.value);
};

// Интервал для мигания курсора
onMounted(() => {
  // Запускаем эффект печати
  setTimeout(typeWriter, 1000);
  
  // Мигание курсора
  setInterval(() => {
    showCursor.value = !showCursor.value;
  }, 500);
});
</script>

<template>
  <NameBlockMobile v-if="store.isMobile" />
  <div v-else class="name-block">
    <div class="name-block__content">
      <div class="name-block__body">
        <div class="name-block__titles">
          <h1 class="name-block__title">
            <span class="typed-text">{{ nameText }}</span>
            <span class="cursor" :class="{ 'hide': !showCursor }">|</span>
          </h1>
          <h2 class="name-block__subtitle">
            Frontend Developer
          </h2>
        </div>
        
        <div class="name-block__location">
          <LocateFixed size="16" class="name-block__icon" />
          <span class="name-block__city">Vladivostok, Russia</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.name-block {
  position: relative;
  width: 100%;
  height: 100%;
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
  
  &__body {
    flex-grow: 1;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  
  &__titles {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 12px;
  }

  &__title {
    height: 35px;
    font-size: 24px;
    font-weight: 700;
    margin: 0;
    line-height: 1.5;
    color: #4FFA9A;
    text-shadow: 0 0 5px rgba(79, 250, 154, 0.5);
  }

  &__subtitle {
    font-size: 18px;
    font-weight: 500;
    margin: 0;
    color: #CCCCCC;
  }

  &__location {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    padding: 8px 12px;
    background-color: rgba(79, 250, 154, 0.1);
    border: 1px solid rgba(79, 250, 154, 0.3);
    border-radius: 4px;
    width: fit-content;
    color: #4FFA9A;
    
    .name-block__icon {
      color: #4FFA9A;
    }
    
    .name-block__city {
      font-weight: 500;
    }
  }
}

.cursor {
  display: inline-block;
  width: 2px;
  margin-left: 2px;
  color: #4FFA9A;
  
  &.hide {
    opacity: 0;
  }
}

@keyframes typing {
  0% { opacity: 1; }
  50% { opacity: 0; }
  100% { opacity: 1; }
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}

@keyframes highlightLine {
  to {
    transform: scaleX(1);
  }
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

.glitch {
  font-family: "Gabarito", serif;
  font-size: 2.3rem;
  font-weight: 800;
  position: relative;
  text-shadow: 0.05em 0 0 #00fffc, -0.03em -0.04em 0 #fc00ff,
    0.025em 0.04em 0 #fffc00;
  animation: glitch 725ms infinite;
}

.glitch span {
  position: absolute;
  top: 0;
  left: 0;
}

.glitch span:first-child {
  animation: glitch 500ms infinite;
  clip-path: polygon(0 0, 100% 0, 100% 35%, 0 35%);
  transform: translate(-0.04em, -0.03em);
  opacity: 0.75;
}

.glitch span:last-child {
  animation: glitch 375ms infinite;
  clip-path: polygon(0 65%, 100% 65%, 100% 100%, 0 100%);
  transform: translate(0.04em, 0.03em);
  opacity: 0.75;
}

@keyframes glitch {
  0% {
    text-shadow: 0.05em 0 0 #00fffc, -0.03em -0.04em 0 #fc00ff,
      0.025em 0.04em 0 #fffc00;
  }
  15% {
    text-shadow: 0.05em 0 0 #00fffc, -0.03em -0.04em 0 #fc00ff,
      0.025em 0.04em 0 #fffc00;
  }
  16% {
    text-shadow: -0.05em -0.025em 0 #00fffc, 0.025em 0.035em 0 #fc00ff,
      -0.05em -0.05em 0 #fffc00;
  }
  49% {
    text-shadow: -0.05em -0.025em 0 #00fffc, 0.025em 0.035em 0 #fc00ff,
      -0.05em -0.05em 0 #fffc00;
  }
  50% {
    text-shadow: 0.05em 0.035em 0 #00fffc, 0.03em 0 0 #fc00ff,
      0 -0.04em 0 #fffc00;
  }
  99% {
    text-shadow: 0.05em 0.035em 0 #00fffc, 0.03em 0 0 #fc00ff,
      0 -0.04em 0 #fffc00;
  }
  100% {
    text-shadow: -0.05em 0 0 #00fffc, -0.025em -0.04em 0 #fc00ff,
      -0.04em -0.025em 0 #fffc00;
  }
}

.typed-text {
  display: inline-block;
  min-height: 1.8rem;
}
</style>