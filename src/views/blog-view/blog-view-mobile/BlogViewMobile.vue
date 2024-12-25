<script setup>
import Navigation from '@/components/navigation/Navigation.vue';
</script>

<template>
  <div class="blog-view-mobile">
    <div class="blog-view-mobile__header">
      <Navigation />
      <div class="blog-view-mobile__image"></div>
    </div>
    <div class="blog-view-mobile__title">Blog Page</div>
    <div class="blog-view-mobile__content">Content</div>
  </div>
</template>

<style lang="scss">
@import '@/assets/styles/style.scss';

.blog-view-mobile {
  height: 100%;
  width: 100%;
  color: var(--color-secondary);
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;

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
    height: 650px;
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

  &__header {
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
  }

  &__image {
    background-image: url('@/components/navigation/images/haha3.gif');
    background-size: cover;
    background-position: 100% 30%;
    border-radius: 8px;
    width: 100%;
    height: 100%;
  }
}
</style>