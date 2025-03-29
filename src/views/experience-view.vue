<script setup>
import { useStore } from '@/store/store';
import { defineAsyncComponent } from 'vue';
import { createAsyncComponent } from '@/components/AsyncComponentLoaders';

// Ленивая загрузка компонентов для мобильной и десктопной версий
const ExperienceViewMobile = defineAsyncComponent(
  createAsyncComponent(() => import('@/views/experience-view-mobile.vue'))
);

const ExperienceViewDesktop = defineAsyncComponent(
  createAsyncComponent(() => import('@/views/experience-view-desktop.vue'))
);

const store = useStore()
</script>

<template>
  <ExperienceViewMobile v-if="store.isMobile" />
  <ExperienceViewDesktop v-if="!store.isMobile" />
</template>

<style lang="scss"></style>