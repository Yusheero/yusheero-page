<script setup>
import { defineAsyncComponent } from 'vue';
import { useStore } from '@/store/store';
import { createAsyncComponent } from '@/components/AsyncComponentLoaders';

// Ленивая загрузка компонентов для мобильной и десктопной версий
const LibraryViewMobile = defineAsyncComponent(
  createAsyncComponent(() => import('@/views/library-view-mobile.vue'))
);

const LibraryViewDesktop = defineAsyncComponent(
  createAsyncComponent(() => import('@/views/library-view-desktop.vue'))
);

const store = useStore()
</script>

<template>
  <LibraryViewMobile v-if="store.isMobile" />
  <LibraryViewDesktop v-if="!store.isMobile" />
</template>

<style lang="scss"></style>