<script setup>
import Navigation from '../../../components/navigation/Navigation.vue';
</script>

<template>
  <div class="page-container">
    <div class="blog-view">
      <Navigation class="blog-view__navigation" />
      <div class="blog-view__title">Blog Page</div>
      <div class="projects-view__content">Content</div>
    </div>
  </div>
</template>

<style lang="scss">
@import '../../../assets/styles/style.scss';

.blog-view {
  height: 100%;
  width: 100%;
  color: var(--color-secondary);
  display: flex;
  flex-direction: column;

  &__title {
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
    border: var(--color-secondary) solid 2px;
  }
}
</style>