<script setup>
import Header from '@/components/header/header.vue';
</script>

<template>
  <div class="experience-view-mobile">
    <Header />
    <div class="experience-view-mobile__title">Experience Page</div>
    <div class="experience-view-mobile__content">Content</div>
  </div>
</template>

<style lang="scss">
@import '@/assets/style/style.scss';

.experience-view-mobile {
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
    padding: 16px;
    background: rgb(255, 255, 255, 0.25);
    color: var(--color-secondary);
  }

  &__header {
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }

  &__image {
    // background-image: url('@/assets/images/haha3.gif');
    background-size: cover;
    background-position: 100% 30%;
    border-radius: 8px;
    width: 100%;
    height: 100%;
  }
}
</style>