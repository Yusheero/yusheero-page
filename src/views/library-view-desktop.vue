<script setup>
import Navigation from '@/components/navigation/navigation.vue';
import data from '@/data/library.json';
import LibraryItem from '../components/library-components/library-item.vue';

const libraryData = data;
console.log('libraryData', libraryData);

</script>

<template>
  <div class="page-container">
    <div class="library-view-desktop">
      <Navigation class="library-view-desktop__navigation" />
      <div class="library-view-desktop__title">Library Page</div>
      <div class="library-view-desktop__content content">
        <LibraryItem v-for="(category, index) in libraryData" :data="category" :index="index" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/style.scss';

.library-view-desktop {
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
    flex-wrap: wrap;
    gap: 4px;
    padding: 4px;
    background: var(--color-primary);
    color: var(--color-secondary);
    grid-area: content;
  }
}
</style>