<script setup>

import { useStore } from '@/store/store';

const store = useStore()
</script>

<template>
  <HeaderMobile v-if="store.isMobile" />
  <HeaderDesktop v-if="!store.isMobile" />
</template>

<style lang="scss" scoped>
</style>