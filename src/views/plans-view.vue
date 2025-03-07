<script setup>
import { useStore } from '@/store/store';
import PlansViewDesktop from '@/views/plans-view-desktop.vue';
import PlansViewMobile from '@/views/plans-view-mobile.vue';

const store = useStore()
</script>

<template>
  <PlansViewMobile v-if="store.isMobile" />
  <PlansViewDesktop v-if="!store.isMobile" />
</template>

<style lang="scss"></style>