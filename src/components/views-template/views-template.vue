<script setup>
import ViewsTemplateDesktop from '@/components/views-template/views-template-desktop.vue';
import ViewsTemplateMobile from '@/components/views-template/views-template-mobile.vue';
import { useStore } from '@/store/store';

const store = useStore()
</script>

<template>
  <div class="page-container">
    <ViewsTemplateMobile v-if="store.isMobile" />
    <ViewsTemplateDesktop v-else />
  </div>
</template>

<style lang="scss" scoped></style>