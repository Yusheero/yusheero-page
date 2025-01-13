<script setup>
import Navigation from '@/components/navigation/Navigation.vue';
import ViewsTemplateDesktop from '@/components/views-template/views-template-desktop/ViewsTemplateDesktop.vue';
import ReviewsItem from '../../../components/reviews-components/reviews-item.vue';
</script>

<template>
  <ViewsTemplateDesktop>
    <div class="review-view-desktop">
      <Navigation class="review-view-desktop__navigation" />
      <div class="review-view-desktop__title">Reviews Page</div>
      <div class="review-view-desktop__content">
        <ReviewsItem />
      </div>
    </div>
  </ViewsTemplateDesktop>
</template>

<style lang="scss">
@import '@/assets/styles/style.scss';

.review-view-desktop {
  height: 100%;
  width: 100%;
  color: var(--color-secondary);
  display: grid;
  grid-template-columns: 150px 150px 100px 300px 400px 100px;
  grid-template-rows: 150px 250px 102px 200px;
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
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      gap: 4px;
      padding: 4px;
      background: var(--color-primary);
      color: var(--color-secondary);
      grid-area: content;
    }
}
</style>