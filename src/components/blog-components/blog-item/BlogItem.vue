<script setup>
import { useStore } from '../../../store/store';
import BlogItemMobile from './blog-item-mobile/BlogItemMobile.vue';
import data from '@/data/blog.json';

const blogData = data.data;
const store = useStore()
</script>

<template>
  <BlogItemMobile v-if="store.isMobile" />
  <div v-else v-for="data in blogData" class="blog-item">
    <h2 class="blog-item__title">{{ data.title }}</h2>
    <p class="blog-item__text">{{ data.text }}</p>
    <p class="blog-item__date">{{ data.date }}</p>
  </div>
</template>

<style lang="scss">
@import '@/assets/styles/style.scss';

.blog-item {
  font-family: "Raleway", serif;
  font-weight: 600;
  width: 100%;
  background: #1f1f23;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 12px;
  padding: 16px;

  &__title {
    font-size: 24px;
    font-weight: 800;
  }

  &__text {
    font-size: 16px;
  }

  &__date {
    font-size: 12px;
    font-family: "Poppins", sans-serif;
    font-weight: 600;
  }
}
</style>