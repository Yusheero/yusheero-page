<script setup>
import Navigation from '@/components/navigation/navigation.vue';
import BlogItem from '@/components/blog-components/blog-item.vue';
import { useKeenSlider } from 'keen-slider/vue';
import data from '@/data/blog.json';
import { ArrowLeft, ArrowRight } from 'lucide-vue-next';

const blogData = data.data;

const [container, slider] = useKeenSlider({ 
  initial: 0,
  slides: {
    perView: 3,
    spacing: 4
  }
})
</script>

<template>
  <div class="page-container">
    <div class="blog-view-desktop">
      <Navigation class="blog-view-desktop__navigation" />
      <div class="blog-view-desktop__title">Blog Page</div>
      <div class="blog-view-desktop__content">
        <div ref="container" class="keen-slider">
          <BlogItem v-for="data in blogData" :blogData="data" class="keen-slider__slide" />
          <button
            v-if="blogData.length >= 4"
            id="prev" 
            @click="slider.prev()" 
            class="keen-slider__button-left"
          >
          <ArrowLeft color="white" size="20" stroke-width="1.5" />
          </button>
          <button
            v-if="blogData.length >= 4"
            id="next" 
            @click="slider.next()" 
            class="keen-slider__button-right"
          >
            <ArrowRight color="white" size="20" stroke-width="1.5" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/style.scss';

.blog-view-desktop {
  height: 100%;
  width: 100%;
  color: var(--color-secondary);
  display: grid;
  grid-template-columns: 10rem 10rem 5rem 20rem 5rem 25rem;
  grid-template-rows: 10rem 15rem 10rem 12rem;
  gap: 8px;
  grid-template-areas:
    "navigation title title title title title"
    "content content content content content content"
    "content content content content content content"
    "content content content content content content";

  &__navigation {
    grid-area: navigation;
  }

  &__title {
    font-size: 28px;
    height: 100%;
    width: 100%;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 12px;
    padding: 16px;
    background: var(--color-secondary);
    color: var(--color-primary);
    grid-area: title;
  }

  &__content {
    height: 100%;
    width: 100%;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 4px;
    padding: 4px;
    background: var(--color-primary);
    color: var(--color-secondary);
    grid-area: content;
  }
}

.keen-slider {
  width: 100%;
  display: flex;
  align-items: center;
  height: 100%;
  overflow: hidden;
  position: relative;

  &__slide {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    background: var(--color-secondary);
    border-radius: 8px;
    height: 100%;
    color: var(--color-primary);
    font-size: 20px;
  }

  &__button-left {
    position: absolute;
    top: 50%;
    left: 1rem;
    background: var(--color-primary);
    border: none;
    width: 2rem;
    height: 2rem;
    border-radius: 4px;

    &:hover {
      cursor: pointer;
      background: var(--color-primary-light);
    }
  }

  &__button-right {
    position: absolute;
    top: 50%;
    right: 1rem;
    background: var(--color-primary);
    border: none;
    width: 2rem;
    height: 2rem;
    border-radius: 4px;

    
    &:hover {
      cursor: pointer;
      background: var(--color-primary-light);
    }
  }
}
</style>