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
    <div class="name-block__location"><LocateFixed color="white" size="20" stroke-width="1.5" />Vladivostok, Russia</div>
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
  color: var(--color-secondary);
  background: var(--color-red);

  &__titles {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 0.5rem;
  }

  &__title {
    font-size: 2rem;
  }

  &__subtitle {
    font-size: 1.5rem;
  }

  &__location {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    gap: 0.5rem;
  }
}
</style>