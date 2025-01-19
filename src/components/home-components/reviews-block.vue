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
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4px;
  gap: 4px;
  color: var(--color-secondary);
  background: var(--color-sakura);
  box-sizing: border-box;
  position: relative;

  &__title {
    color: var(--color-secondary);
    font-weight: 600;
    font-size: 18px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__item {
    position: relative;
    width: 100%;
    height: 100%;
    background: var(--color-secondary);
    border-radius: 6px;
    padding: 18px 50px 18px 18px;
  }

  &__item-author {
    color: var(--color-orange);
    font-weight: 700;
    font-size: 40px;
    margin-bottom: 12px;
  }

  &__item-title {
    color: var(--color-primary);
    font-weight: 700;
    font-size: 30px;
    margin-bottom: 6px;
  }

  &__item-text {
    color: var(--color-primary);
    font-weight: 600;
    font-size: 18px;
  }

  &__button {
    position: absolute;
    top: 4px;
    right: 4px;
    background: var(--color-primary);
    border-radius: 6px;
    width: 35px;
    height: 35px;
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