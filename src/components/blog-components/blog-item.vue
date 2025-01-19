<script setup>
import { useStore } from '@/store/store';
const store = useStore()

defineProps({
  blogData: Object,
})
</script>

<template>
  <div class="blog-item">
    <h2 class="blog-item__title">{{ blogData.title }}</h2>
    <p class="blog-item__text">{{ blogData.text }}</p>
    <p class="blog-item__date">{{ blogData.date }}</p>
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
    height: 70px;
    font-size: 32px;
    font-weight: 700;
    color: var(--color-orange);
  }

  &__text {
    font-size: 22px;
    font-weight: 600;
  }

  &__date {
    background: var(--color-primary);
    color: var(--color-secondary);
    padding: 6px;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    font-family: "Poppins", sans-serif;
    font-weight: 600;
  }
}
</style>