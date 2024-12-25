<script setup>
import { LocateFixed } from 'lucide-vue-next';
import NameBlockMobile from './name-block-mobile/NameBlockMobile.vue';
import { useStore } from '../../../store/store';

const store = useStore()
</script>
<template>
  <NameBlockMobile v-if="store.isMobile" />
  <div v-else class="name-block">
    <div class="name-block__titles">
      <h1 class="name-block__title">Hello, I am Yusheero</h1>
      <h2 class="name-block__subtitle">Frontend Developer</h2>
    </div>
    <div class="name-block__location"><LocateFixed color="white" size="24" stroke-width="1.5" />Vladivostok, Russia</div>
  </div>
</template>

<style lang="scss" scoped>
.name-block {
  height: 100%;
  width: 100%;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 22px;
  padding: 24px;
  background: transparent;
  color: var(--color-secondary);
  // border: var(--color-secondary) solid 1px;
  box-shadow: 0px 0px 10px 2px rgba(255, 255, 255, 0.2) inset;

  &__titles {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 8px;
  }

  &__title {
    font-size: 32px;
  }

  &__subtitle {
    font-size: 20px;
  }

  &__location {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    gap: 6px;
  }
}
</style>