<script setup>
import { ArrowLeft } from 'lucide-vue-next';
import plans from '@/data/plans.json';
</script>

<template>
  <div class="page-container">
    <div class="plans-view-desktop">
      <router-link class="plans-view-desktop__navigation" to="/">
        <ArrowLeft color="black" size="36" stroke-width="2" />
      </router-link>
      <div class="plans-view-desktop__title">Plans Page</div>
      <div class="plans-view-desktop__content">
        <div class="plans-view-desktop__content-item" v-for="plan in plans.data" :key="plan.id">
          <div class="plans-view-desktop__content-item-title">{{ plan.title }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/style.scss';

.plans-view-desktop {
  height: 100%;
  width: 100%;
  color: var(--color-secondary);
  display: grid;
  grid-template-columns: 10rem 10rem 10rem 20rem 10rem 25rem;
  grid-template-rows: 10rem 20rem 10.3rem 12rem;
  gap: 8px;
  grid-template-areas:
    "navigation title title title title title"
    "content content content content content content"
    "content content content content content content"
    "content content content content content content";

  &__navigation {
    grid-area: navigation;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--color-secondary);
    border-radius: 8px;
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