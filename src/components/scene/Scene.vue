<script setup>
import SceneDesktop from './scene-desktop/SceneDesktop.vue';
import SceneMobile from './scene-mobile/SceneMobile.vue';
import { useStore } from '@/store/store';

const store = useStore()
</script>
<template>
  <SceneMobile v-if="store.isMobile" />
  <SceneDesktop v-else />
</template>
<style lang="scss" scoped>
  
</style>