<script setup>
import { MessageCircleMore } from 'lucide-vue-next';

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
      <router-link class="last-post-block__button" :to="{name: 'Blog'}"><MessageCircleMore color="white" size="25" stroke-width="1.5" /></router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.last-post-block {
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
  background: var(--color-primary);

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

  &__item-title {
    color: var(--color-orange);
    font-weight: 700;
    font-size: 30px;
    margin-bottom: 12px;
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
    background: var(--color-sakura);
    border-radius: 6px;
    width: 40px;
    height: 40px;
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