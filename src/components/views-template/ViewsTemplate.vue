<script setup>
import ViewsTemplateDesktop from './views-template-desktop/ViewsTemplateDesktop.vue';
import ViewsTemplateMobile from './views-template-mobile/ViewsTemplateMobile.vue';
import { useStore } from '@/store/store';

const store = useStore()
</script>

<template>
  <div class="page-container">
    <ViewsTemplateMobile v-if="store.isMobile" />
    <ViewsTemplateDesktop v-else />
  </div>
</template>

<style lang="scss">
@import '@/assets/styles/style.scss';
</style>