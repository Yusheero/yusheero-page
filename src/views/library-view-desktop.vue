<script setup>
import Navigation from '@/components/navigation/navigation.vue';
import ViewsTemplateDesktop from '@/components/views-template/views-template-desktop.vue';
import data from '@/data/library.json';
import { SquareArrowOutUpRight } from 'lucide-vue-next';

const libraryData = data;
console.log('libraryData', libraryData);

</script>

<template>
  <ViewsTemplateDesktop>
    <div class="library-view-desktop">
      <Navigation class="library-view-desktop__navigation" />
      <div class="library-view-desktop__title">Library Page</div>
      <div class="library-view-desktop__content content">
        <div class="content__sections">
          <div v-for="(category, index) in libraryData" class="content__sections-item section">
            <div class="section__title">
              {{ index }}
            </div>
            <div class="section__item" v-for="data in category">
              <p class="section__item-title">{{ data.title }}</p>
              <div class="section__item-info">
                <p v-if="data.genre" class="section__item-genre">{{ data.genre }}</p>
                <a v-if="data.link" class="section__item-link" :href="data.link"><SquareArrowOutUpRight color="black" size="18" stroke-width="1.5" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </ViewsTemplateDesktop>
</template>

<style lang="scss">
@import '@/assets/style/style.scss';

.library-view-desktop {
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
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      gap: 4px;
      padding: 4px;
      background: var(--color-primary);
      color: var(--color-secondary);
      grid-area: content;
    }
}

.content {
  &__sections {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 4px;
  }

  &__sections-item {
    padding: 4px;
    // TODO:Убрать хардкод у height
    height: 100%;
    width: 25%;
    background: var(--color-secondary);
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 4px;
  }
}

.section {
  &__title {
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 32px;
    color: var(--color-primary);
  }

  &__item {
    height: 70px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
    font-size: 16px;
    background: var(--color-orange);
    color: var(--color-primary);
    padding: 8px 8px;
    border-radius: 6px;
    width: 100%;
    text-align: center;
    border: 1px solid var(--color-primary);
  }

  &__item-info {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }

  &__item-genre {
    width: 60px;
    background: var(--color-secondary);
    padding: 4px;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 400;
  }

  &__item-link {
    background: var(--color-secondary);
    padding: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
  }
}
</style>