<script setup>
import HeaderMobile from './header-mobile.vue';
import HeaderDesktop from './header-desktop.vue';
import { useStore } from '@/store/store';

const store = useStore()
</script>

<template>
  <HeaderMobile v-if="store.isMobile" />
  <HeaderDesktop v-if="!store.isMobile" />
</template>

<style lang="scss" scoped>
</style>