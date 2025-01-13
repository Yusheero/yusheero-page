<script setup>
import { LocateFixed } from 'lucide-vue-next';
</script>
<template>
  <div class="name-block-mobile">
    <div class="name-block-mobile__titles">
      <h1 class="name-block-mobile__title">Hello, I am Yusheero</h1>
      <h2 class="name-block-mobile__subtitle">Frontend Developer</h2>
    </div>
    <div class="name-block-mobile__location"><LocateFixed color="white" size="24" stroke-width="1.5" />Vladivostok, Russia</div>
  </div>
</template>

<style lang="scss" scoped>
.name-block-mobile {
  height: 100%;
  width: 100%;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 22px;
  padding: 16px;
  background: transparent;
  color: var(--color-secondary);
  background: var(--color-red);
  opacity: 0.9;

  &__titles {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 6px;
  }

  &__title {
    font-size: 28px;
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
    gap: 8px;
  }
}
</style>