<script setup>
import HomeViewMobile from '@/views/home-view-mobile.vue';
import HomeViewDesktop from '@/views/home-view-desktop.vue';
import { useStore } from '@/store/store';

const store = useStore()
</script>

<template>
  <HomeViewMobile v-if="store.isMobile" />
  <HomeViewDesktop v-if="!store.isMobile" />
</template>

<style lang="scss"></style>