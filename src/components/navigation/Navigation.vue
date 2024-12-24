<script setup>
import NavigationDesktop from './navigation-desktop/NavigationDesktop.vue';
import NavigationMobile from './navigation-mobile/NavigationMobile.vue';

import { useStore } from '../../store/store';

const store = useStore()
</script>

<template>
  <NavigationMobile v-if="store.isMobile" />
  <NavigationDesktop v-if="!store.isMobile" />
</template>

<style lang="scss" scoped>

</style>