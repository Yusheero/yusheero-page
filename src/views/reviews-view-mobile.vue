<script setup>
import NavigationMobile from '@/components/navigation/navigation-mobile.vue';
import WatchStream from '@/components/watch-stream/watch-stream.vue';
import ViewsTemplateMobile from '@/components/views-template/views-template-mobile.vue';
import ReviewsItem from '@/components/reviews-components/reviews-item.vue';
</script>

<template>
  <ViewsTemplateMobile>
    <div class="rewievs-view-mobile">
      <div class="rewievs-view-mobile__header">
        <Navigation />
        <WatchStream />
      </div>
      <div class="rewievs-view-mobile__title">Blog Page</div>
      <div class="rewievs-view-mobile__content">
        <ReviewsItem />
      </div>
    </div>
  </ViewsTemplateMobile>
</template>

<style lang="scss">
@import '@/assets/style/style.scss';

.rewievs-view-mobile {
  width: 100%;
  height: 100%;
  display: flex;
  gap: 8px;
  flex-direction: column;

  &__title {
    height: 100%;
    width: 100%;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 16px;
    background: var(--color-secondary);
    color: var(--color-primary);
  }

  &__content {
    height: 100%;
    width: 100%;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4px;
    padding: 4px;
    background: rgb(255, 255, 255, 0.25);
    color: var(--color-secondary);
  }

  &__header {
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }

  &__image {
    // background-image: url('@/components/navigation/images/haha3.gif');
    background-size: cover;
    background-position: 100% 30%;
    border-radius: 8px;
    width: 100%;
    height: 100%;
  }
}
</style>