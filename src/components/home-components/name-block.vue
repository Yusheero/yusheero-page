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
      <LocateFixed color="black" size="24" stroke-width="2" class="name-block__icon" />
      <span class="name-block__city">Vladivostok, Russia</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.name-block {
  border-radius: 12px;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 1rem;
  color: var(--color-black);
  background: var(--color-secondary);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;

  &__titles {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 0.8rem;
  }

  &__title {
    height: 35px;
    font-size: 1.5rem;
    font-weight: 700;
    margin: 0;
    line-height: 1.5;
  }

  &__subtitle {
    font-size: 1.2rem;
    font-weight: 500;
    margin: 0;
  }

  &__location {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    gap: 0.5rem;
    padding: 0.5rem 0.8rem;
    background-color: rgba(255, 255, 255, 0.4);
    border-radius: 6px;
    transition: all 0.3s ease;
    
    &:hover {
      background-color: rgba(255, 255, 255, 0.7);
      transform: translateX(5px);
      cursor: pointer;
    }
  }
}

.cursor {
  display: inline-block;
  width: 2px;
  margin-left: 2px;
  
  &.typing {
    animation: typing 0.5s infinite;
  }
  
  &.blinking {
    animation: blink 1s infinite;
  }
  
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