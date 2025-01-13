<script setup>
import { useStore } from '@/store/store';
import LibraryViewDesktop from './library-view-desktop/LibraryViewDesktop.vue';
import LibraryViewMobile from './library-view-mobile/LibraryViewMobile.vue';

const store = useStore()
</script>

<template>
  <LibraryViewMobile v-if="store.isMobile" />
  <LibraryViewDesktop v-if="!store.isMobile" />
</template>

<style lang="scss">

</style>