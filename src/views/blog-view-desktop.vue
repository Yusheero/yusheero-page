<script setup>
import Navigation from '@/components/navigation/navigation.vue';
import ViewsTemplateDesktop from '@/components/views-template/views-template-desktop.vue';
import BlogItem from '@/components/blog-components/blog-item.vue';
import { useKeenSlider } from 'keen-slider/vue';

const [container, slider] = useKeenSlider({ 
  loop: true,
  initial: 0,
  slides: {
    perView: 11,
    spacing: 8
  }
})
</script>

<template>
  <ViewsTemplateDesktop>
    <div class="blog-view-desktop">
      <Navigation class="blog-view-desktop__navigation" />
      <div class="blog-view-desktop__title">Blog Page</div>
      <div class="blog-view-desktop__content">
        <div ref="container" class="keen-slider">
          <BlogItem class="keen-slider__slide keen-slider__slide-js" />
        </div>
      </div>
    </div>
  </ViewsTemplateDesktop>
</template>

<style lang="scss">
@import '@/assets/style/style.scss';

.blog-view-desktop {
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

.keen-slider__slide {
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--color-secondary);
  border-radius: 8px;
  height: 105px;
  color: var(--color-primary);
  font-size: 20px;
}
</style>