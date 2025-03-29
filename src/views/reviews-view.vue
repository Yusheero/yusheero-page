<script setup>
import { defineAsyncComponent } from 'vue';
import { useStore } from '@/store/store';
import { createAsyncComponent } from '@/components/AsyncComponentLoaders';

// Ленивая загрузка компонентов для мобильной и десктопной версий
const ReviewsViewMobile = defineAsyncComponent(
  createAsyncComponent(() => import('@/views/reviews-view-mobile.vue'))
);

const ReviewsViewDesktop = defineAsyncComponent(
  createAsyncComponent(() => import('@/views/reviews-view-desktop.vue'))
);

const store = useStore()
</script>

<template>
  <ReviewsViewMobile v-if="store.isMobile" />
  <ReviewsViewDesktop v-if="!store.isMobile" />
</template>

<style lang="scss"></style>