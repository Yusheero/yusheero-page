<script setup>
import Navigation from '@/components/navigation/navigation.vue';
</script>

<template>
  <div class="page-container">
    <div class="experience-view-desktop">
      <Navigation class="experience-view-desktop__navigation" />
      <div class="experience-view-desktop__title">Experience Page</div>
      <div class="experience-view-desktop__content">Content</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/style.scss';

.experience-view-desktop {
  height: 100%;
  width: 100%;
  color: var(--color-secondary);
  display: grid;
  grid-template-columns: 10rem 10rem 5rem 20rem 5rem 25rem;
  grid-template-rows: 10rem 15rem 10rem 12rem;
  gap: 8px;
  grid-template-areas:
    "navigation title title title title title"
    "content content content content content content"
    "content content content content content content"
    "content content content content content content";

    &__navigation {
      grid-area: navigation;
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
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 12px;
      padding: 16px;
      background: var(--color-primary);
      color: var(--color-secondary);
      grid-area: content;
    }
}
</style>