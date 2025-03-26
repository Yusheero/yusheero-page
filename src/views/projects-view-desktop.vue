<script setup>
import Navigation from '@/components/navigation/navigation.vue';
import ProjectsItem from '@/components/projects-components/projects-item.vue';
import data from '@/data/projects.json';

const projectsData = data.data;

</script>

<template>
  <div class="page-container">
    <div class="projects-view-desktop">
      <Navigation class="projects-view-desktop__navigation" />
      <div class="projects-view-desktop__content">
        <ProjectsItem v-for="data in projectsData" :projectsData="data" class="projects-view-desktop__item" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/style.scss';

.projects-view-desktop {
  position: relative;
  height: 100%;
  width: 100%;
  color: var(--color-secondary);
  display: grid;
  grid-template-columns: 10rem 10rem 10rem 14rem 8rem 32rem;
  grid-template-rows: 10rem 20rem 7rem 16rem;
  gap: 8px;
  grid-template-areas:
    "content content content content content content"
    "content content content content content content"
    "content content content content content content"
    "content content content content content content";

  &__navigation {
    position: absolute;
    top: 0;
    left: -148px;
    z-index: 100;
  }

  &__content {
    height: 100%;
    width: 100%;
    border-radius: 10px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 4px;
    padding: 4px;
    background: var(--color-primary);
    color: var(--color-secondary);
    grid-area: content;
  }

  &__item {
    height: 100%;
    width: 100%;
    border-radius: 10px;
    background: var(--color-secondary);
    color: var(--color-primary);
  }
}
</style>