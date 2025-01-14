<script setup>
import { useStore } from '@/store/store';
import LibraryViewDesktop from '@/views/library-view-desktop.vue';
import LibraryViewMobile from '@/views/library-view-mobile.vue';

const store = useStore()
</script>

<template>
  <LibraryViewMobile v-if="store.isMobile" />
  <LibraryViewDesktop v-if="!store.isMobile" />
</template>

<style lang="scss"></style>