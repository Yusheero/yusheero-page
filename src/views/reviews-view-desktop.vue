<script setup>
import Navigation from '@/components/navigation/navigation.vue';
import ViewsTemplateDesktop from '@/components/views-template/views-template-desktop.vue';
import ReviewsItem from '@/components/reviews-components/reviews-item.vue';
import data from '@/data/reviews.json';
import { useKeenSlider } from 'keen-slider/vue';

const [container, slider] = useKeenSlider({ 
  initial: 0,
  slides: {
    perView: 3,
    spacing: 4
  }
})

const reviewData = data.data;
</script>

<template>
  <div class="page-container">
    <div class="review-view-desktop">
      <Navigation class="review-view-desktop__navigation" />
      <div class="review-view-desktop__title">Reviews Page</div>
      <div class="review-view-desktop__content">
        <div ref="container" class="keen-slider">
          <ReviewsItem v-for="data in reviewData" :reviewData="data" class="keen-slider__slide" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/style.scss';

.review-view-desktop {
  position: relative;
  height: 100%;
  width: 100%;
  color: var(--color-secondary);
  display: grid;
  grid-template-columns: 10rem 10rem 10rem 14rem 8rem 29rem;
  grid-template-rows: 10rem 20rem 7rem 14rem;
  gap: 8px;
  grid-template-areas:
    "title title title title title title"
    "content content content content content content"
    "content content content content content content"
    "content content content content content content";

  &__navigation {
    position: absolute;
    top: 0;
    left: -148px;
    z-index: 100;
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
}
</style>