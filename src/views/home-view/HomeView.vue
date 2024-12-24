<script setup>
import HomeViewMobile from './home-view-mobile/HomeViewMobile.vue';
import HomeViewDesktop from './home-view-desktop/HomeViewDesktop.vue';
import { useStore } from '../../store/store';

const store = useStore()
</script>

<template>
  <HomeViewMobile v-if="store.isMobile" />
  <HomeViewDesktop v-if="!store.isMobile" />
</template>

<style lang="scss">

</style>