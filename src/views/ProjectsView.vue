<script setup>
import Navigation from '../components/navigation/Navigation.vue';
</script>

<template>
  <div class="page-container">
    <div class="projects-view">
      <Navigation class="projects-view__navigation" />
      <div class="projects-view__title">Projects Page</div>
    </div>
  </div>
</template>

<style lang="scss">
@import '../assets/styles/style.scss';

.projects-view {
  height: 100%;
  width: 100%;
  color: var(--color-secondary);
  display: grid;
  grid-template-columns: 200px 200px 100px 300px 500px;
  grid-template-rows: 200px 250px 100px 250px;
  gap: 16px;
  grid-template-areas:
    "navigation title title title title"
    "languages languages languages slot experience"
    "tech tech tech tech tech"
    "contacts contacts interests interests interests";

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
}
</style>