<script setup>
// Заменяем прямые импорты на динамические для ленивой загрузки
import { defineAsyncComponent } from 'vue';
import { useStore } from '@/store/store';
import { createAsyncComponent } from '@/components/AsyncComponentLoaders';

// Ленивая загрузка с использованием хелпера для создания асинхронных компонентов
const HomeViewMobile = defineAsyncComponent(
  createAsyncComponent(() => import('@/views/home-view-mobile.vue'))
);

const HomeViewDesktop = defineAsyncComponent(
  createAsyncComponent(() => import('@/views/home-view-desktop.vue'))
);

const store = useStore()
</script>

<template>
  <HomeViewMobile v-if="store.isMobile" />
  <HomeViewDesktop v-if="!store.isMobile" />
</template>

<style lang="scss">
// Стили для асинхронных компонентов вынесены в отдельный файл
// и импортируются в главном файле стилей
</style>