<script setup>
import ProjectsViewMobile from '@/views/projects-view/projects-view-mobile/ProjectsViewMobile.vue';
import ProjectsViewDesktop from '@/views/projects-view/projects-view-desktop/ProjectsViewDesktop.vue';
import { useStore } from '@/store/store';

const store = useStore()
</script>

<template>
  <ProjectsViewMobile v-if="store.isMobile" />
  <ProjectsViewDesktop v-if="!store.isMobile" />
</template>

<style lang="scss">

</style>