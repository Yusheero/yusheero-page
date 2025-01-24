<script setup>
import { ArrowRight } from 'lucide-vue-next';

import data from '@/data/reviews.json';
const reviewsData = data.data;
const DataLength = reviewsData.length;

const reviewsLastPost = reviewsData[DataLength - 1]
</script>
<template>
  <div class="reviews-block">
    <div class="reviews-block__title">
      LAST REVIEW
    </div>
    <div class="reviews-block__item">
      <div class="reviews-block__item-author">{{ reviewsLastPost.name }}</div>
      <div class="reviews-block__item-title">{{ reviewsLastPost.title }}</div>
      <div class="reviews-block__item-text">{{ reviewsLastPost.text }}</div>
      <router-link class="reviews-block__button" :to="{name: 'Reviews'}"><ArrowRight color="white" size="20" stroke-width="1.5" /></router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.reviews-block {
  height: 100%;
  width: 100%;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.3rem;
  gap: 0.3rem;
  color: var(--color-secondary);
  background: var(--color-sakura);
  box-sizing: border-box;
  position: relative;

  &__title {
    color: var(--color-secondary);
    font-weight: 600;
    font-size: 1rem;
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__item {
    position: relative;
    width: 100%;
    height: 100%;
    background: var(--color-secondary);
    border-radius: 0.3rem;
    padding: 1rem 3.5rem 1rem 1rem;
  }

  &__item-author {
    color: var(--color-orange);
    font-weight: 800;
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  &__item-title {
    color: var(--color-primary);
    font-weight: 700;
    font-size: 1.5rem;
    margin-bottom: 0.2rem;
  }

  &__item-text {
    color: var(--color-primary);
    font-weight: 600;
    font-size: 1rem;
  }

  &__button {
    position: absolute;
    top: 0.3rem;
    right: 0.3rem;
    background: var(--color-primary);
    border-radius: 0.3rem;
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      background: var(--color-primary-light);
      cursor: pointer;
    }
  }
}
</style>