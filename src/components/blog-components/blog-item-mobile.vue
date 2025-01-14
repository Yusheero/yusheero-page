<script setup>
import data from '@/data/blog.json';

const blogData = data.data;
</script>

<template>
  <div v-for="data in blogData" class="blog-item">
    <h2 class="blog-item-mobile__title">{{ data.title }}</h2>
    <p class="blog-item-mobile__text">{{ data.text }}</p>
    <p class="blog-item-mobile__date">{{ data.date }}</p>
  </div>
</template>

<style lang="scss">
@import '@/assets/style/style.scss';

.blog-item-mobile {
  font-family: "Gabarito", serif;
  font-weight: 600;
  width: 100%;
  background: #1f1f23;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 4px;
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