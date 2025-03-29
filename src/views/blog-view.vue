<script setup>
import { defineAsyncComponent } from 'vue';
import { useStore } from '@/store/store';
import { createAsyncComponent } from '@/components/AsyncComponentLoaders';

// Ленивая загрузка компонентов для мобильной и десктопной версий
const BlogViewMobile = defineAsyncComponent(
  createAsyncComponent(() => import('@/views/blog-view-mobile.vue'))
);

const BlogViewDesktop = defineAsyncComponent(
  createAsyncComponent(() => import('@/views/blog-view-desktop.vue'))
);

const store = useStore()
</script>

<template>
  <BlogViewMobile v-if="store.isMobile" />
  <BlogViewDesktop v-if="!store.isMobile" />
</template>

<style lang="scss"></style>