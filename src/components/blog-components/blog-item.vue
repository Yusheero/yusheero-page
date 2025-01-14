<script setup>
import { useStore } from '@/store/store';
import BlogItemMobile from '@/components/blog-components/blog-item-mobile.vue';
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
@import '@/assets/style/style.scss';

.blog-item {
  font-family: "Gabarito", serif;
  font-weight: 600;
  width: 100%;
  height: 100%;
  background: var(--color-purple);
  color: var(--color-primary);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 8px;
  padding: 16px;

  &__title {
    height: 80px;
    font-size: 32px;
    font-weight: 700;
    color: var(--color-orange);
  }

  &__text {
    font-size: 16px;
    font-weight: 600;
  }

  &__date {
    font-size: 12px;
    font-family: "Poppins", sans-serif;
    font-weight: 600;
  }
}
</style>