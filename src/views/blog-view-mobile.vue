<script setup>
import NavigationMobile from '@/components/navigation/navigation-mobile.vue';
</script>

<template>
  <div class="blog-view-mobile">
    <header class="blog-view__header">
      <NavigationMobile />
    </header>
    <div class="blog-view-mobile__title">Blog Page</div>
    <div class="blog-view-mobile__content">
      Content
    </div>
  </div>
</template>

<style lang="scss">
@import '@/assets/style/style.scss';

.blog-view-mobile {
  padding: 60px 8px 0 8px;
  width: 100%;
  height: 98.5vh;
  display: flex;
  gap: 8px;
  flex-direction: column;

  &__title {
    height: 100px;
    width: 100%;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
    gap: 4px;
    padding: 4px;
    background: rgb(255, 255, 255, 0.25);
    color: var(--color-primary);
  }

  &__header {
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }

  &__image {
    // background-image: url('@/components/navigation/images/haha3.gif');
    background-size: cover;
    background-position: 100% 30%;
    border-radius: 8px;
    width: 100%;
    height: 100%;
  }
}
</style>