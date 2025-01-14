<script setup>
import SceneDesktop from '@/components/scene/scene-desktop.vue';
import SceneMobile from '@/components/scene/scene-mobile.vue';
import { useStore } from '@/store/store';

const store = useStore()
</script>
<template>
  <SceneMobile v-if="store.isMobile" />
  <SceneDesktop v-else />
</template>
<style lang="scss" scoped></style>