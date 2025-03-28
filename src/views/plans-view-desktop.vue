<script setup>
import Navigation from '@/components/navigation/navigation.vue';
</script>

<template>
  <div class="page-container">
    <div class="plans-view-desktop">
      <Navigation class="plans-view-desktop__navigation" />
      <div class="plans-view-desktop__content">

      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/style.scss';

.plans-view-desktop {
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

  &__title {
    font-size: 28px;
    height: 100%;
    width: 100%;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 12px;
    padding: 16px;
    background: var(--color-secondary);
    color: var(--color-primary);
    grid-area: title;
  }

  &__content {
    height: 100%;
    width: 100%;
    border-radius: 10px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(5, 1fr);
    gap: 0.5rem;
    padding: 0.5rem;
    background: var(--color-primary);
    color: var(--color-secondary);
    grid-area: content;
  }

  &__content-item {
    height: 100%;
    width: 100%;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 12px;
    padding: 16px;
    background: var(--color-secondary);
    color: var(--color-primary);
  }
}
</style>