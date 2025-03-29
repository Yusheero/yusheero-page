<script setup>
import { defineAsyncComponent } from 'vue';
import { useStore } from '@/store/store';
import { createAsyncComponent } from '@/components/AsyncComponentLoaders';

// Ленивая загрузка компонентов для мобильной и десктопной версий
const ProjectsViewMobile = defineAsyncComponent(
  createAsyncComponent(() => import('@/views/projects-view-mobile.vue'))
);

const ProjectsViewDesktop = defineAsyncComponent(
  createAsyncComponent(() => import('@/views/projects-view-desktop.vue'))
);

const store = useStore()
</script>

<template>
  <ProjectsViewMobile v-if="store.isMobile" />
  <ProjectsViewDesktop v-if="!store.isMobile" />
</template>

<style lang="scss"></style>