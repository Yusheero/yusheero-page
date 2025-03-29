<script setup>
import { defineAsyncComponent } from 'vue';
import { useStore } from '@/store/store';
import { createAsyncComponent } from '@/components/AsyncComponentLoaders';

// Ленивая загрузка компонентов для мобильной и десктопной версий
const PlansViewMobile = defineAsyncComponent(
  createAsyncComponent(() => import('@/views/plans-view-mobile.vue'))
);

const PlansViewDesktop = defineAsyncComponent(
  createAsyncComponent(() => import('@/views/plans-view-desktop.vue'))
);

const store = useStore()
</script>

<template>
  <PlansViewMobile v-if="store.isMobile" />
  <PlansViewDesktop v-if="!store.isMobile" />
</template>

<style lang="scss"></style>