<script setup>
import NavigationDesktop from '@/components/navigation/navigation-desktop.vue';
import NavigationMobile from '@/components/navigation/navigation-mobile.vue';
import { useStore } from '@/store/store';

const store = useStore()
</script>

<template>
  <div>
    <NavigationMobile v-if="store.isMobile" />
    <NavigationDesktop v-if="!store.isMobile" />
  </div>
</template>

<style lang="scss" scoped>

</style>