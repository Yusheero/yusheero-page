<script setup>
import data from '@/data/reviews.json';

const blogData = data.data;
</script>

<template>
  <div v-for="data in blogData" class="reviews-item">
    <h2 class="reviews-item__title">{{ data.title }}</h2>
    <p class="reviews-item__text">{{ data.text }}</p>
    <p class="reviews-item__date">{{ data.name }}</p>
  </div>
</template>

<style lang="scss">
@import '@/assets/styles/style.scss';

.reviews-item {
  font-family: "Raleway", serif;
  font-weight: 600;
  width: 100%;
  background: var(--color-secondary);
  color: var(--color-primary);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
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