<script setup>
import { defineAsyncComponent } from 'vue';
import { useStore } from '@/store/store';
import { createAsyncComponent } from '@/components/AsyncComponentLoaders';

// Ленивая загрузка компонентов для мобильной и десктопной версий
const LibraryDetailMobile = defineAsyncComponent(
  createAsyncComponent(() => import('@/views/library-detail-mobile.vue'))
);

const LibraryDetailDesktop = defineAsyncComponent(
  createAsyncComponent(() => import('@/views/library-detail-desktop.vue'))
);

const store = useStore();
</script>

<template>
  <LibraryDetailMobile v-if="store.isMobile" />
  <LibraryDetailDesktop v-if="!store.isMobile" />
</template>

<style lang="scss"></style> 