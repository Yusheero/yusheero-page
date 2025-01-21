<script setup>
import Navigation from '@/components/navigation/navigation.vue';
import ViewsTemplateDesktop from '@/components/views-template/views-template-desktop.vue';
import data from '@/data/library.json';

const libraryData = data;
console.log('libraryData', libraryData);

</script>

<template>
  <ViewsTemplateDesktop>
    <div class="game-view-desktop">
      <Navigation class="game-view-desktop__navigation" />
      <div class="game-view-desktop__title">Library Page</div>
      <div class="game-view-desktop__content content">
        <div class="content__sections">
          <div v-for="category in libraryData" class="content__sections-item section">
            <div class="section__item" v-for="data in category">
              {{ data.title }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </ViewsTemplateDesktop>
</template>

<style lang="scss">
@import '@/assets/style/style.scss';

.game-view-desktop {
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
    padding: 16px;
    // TODO:Убрать хардкод у height
    height: 100%;
    width: 25%;
    background: var(--color-orange);
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 12px;
  }
}

.section {
  &__item {
    background: var(--color-primary);
    padding: 8px;
    border-radius: 8px;
    width: 100%;
    text-align: center;
  }
}
</style>