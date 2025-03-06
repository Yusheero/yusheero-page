<script setup>
import { LocateFixed } from 'lucide-vue-next';
import NameBlockMobile from '@/components/home-components/name-block-mobile.vue';
import { useStore } from '@/store/store';

const store = useStore()
</script>
<template>
  <NameBlockMobile v-if="store.isMobile" />
  <div v-else class="name-block">
    <div class="name-block__titles">
      <h1 class="name-block__title">Hello, I am Yusheero</h1>
      <h2 class="name-block__subtitle">Frontend Developer</h2>
    </div>
    <div class="name-block__location"><LocateFixed color="black" size="24" stroke-width="2" />Vladivostok, Russia</div>
  </div>
</template>

<style lang="scss" scoped>
.name-block {
  height: 100%;
  width: 100%;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 1rem;
  color: var(--color-black);
  background: var(--color-secondary);

  &__titles {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 0.5rem;
  }

  &__title {
    font-size: 2rem;
    font-weight: 700;
  }

  &__subtitle {
    font-size: 1.5rem;
  }

  &__location {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 1.3rem;
    gap: 0.5rem;
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
</style>