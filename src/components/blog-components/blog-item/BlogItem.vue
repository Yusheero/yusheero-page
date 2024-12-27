<script setup>
import { useStore } from '../../../store/store';
import BlogItemMobile from './blog-item-mobile/BlogItemMobile.vue';

const store = useStore()
</script>

<template>
  <BlogItemMobile v-if="store.isMobile" />
  <div v-else class="blog-item">
    <h2 class="blog-item-mobile__title">Работа над CV идет полным ходом</h2>
    <p class="blog-item-mobile__text">Наконец-то разобрался с мобильной версией и структурой проекта</p>
    <p class="blog-item-mobile__date">27.12.2024</p>
  </div>
</template>

<style lang="scss">
@import '@/assets/styles/style.scss';

.blog-item {
  font-family: "Raleway", serif;
  font-weight: 600;
  width: 100%;
  height: 200px;
  background: #1f1f23;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 12px;
  padding: 16px;

  &__title {
    font-size: 20px;
  }

  &__text {
    font-size: 14px;
  }

  &__date {
    font-size: 14px;
    font-family: "Poppins", sans-serif;
    font-weight: 600;
  }
}
</style>