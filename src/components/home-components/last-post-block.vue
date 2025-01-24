<script setup>
import { ArrowRight } from 'lucide-vue-next';

import data from '@/data/blog.json';
const blogData = data.data;
const DataLength = blogData.length;

const blogLastPost = blogData[DataLength - 1]

</script>
<template>
  <div class="last-post-block">
    <div class="last-post-block__title">
      LAST POST
    </div>
    <div class="last-post-block__item">
      <div class="last-post-block__item-title">{{ blogLastPost.title }}</div>
      <div class="last-post-block__item-text">{{ blogLastPost.text }}</div>
      <div class="last-post-block__item-date">{{ blogLastPost.date }}</div>
      <router-link class="last-post-block__button" :to="{name: 'Blog'}"><ArrowRight color="white" size="20" stroke-width="1.5" /></router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.last-post-block {
  height: 100%;
  width: 100%;
  border-radius: 0.5rem; // 8px
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.3rem; // 4px
  gap: 0.3rem;
  color: var(--color-secondary);
  background: var(--color-primary);

  &__title {
    color: var(--color-secondary);
    font-weight: 600;
    font-size: 1rem; // 18px
    height: 2rem; // 30px
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__item {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    background: var(--color-secondary);
    border-radius: 0.3rem;
    padding: 1rem 3.5rem 1rem 1rem;
  }

  &__item-title {
    color: var(--color-orange);
    font-weight: 700;
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  &__item-text {
    color: var(--color-primary);
    font-weight: 600;
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
  }

  &__item-date {
    width: 25%;
    font-size: 1rem;
    background: var(--color-primary);
    color: var(--color-secondary);
    padding: 0.3rem;
    border-radius: 0.3rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__button {
    position: absolute;
    top: 0.3rem;
    right: 0.3rem;
    background: var(--color-sakura);
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