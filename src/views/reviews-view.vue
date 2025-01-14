<script setup>
import ReviewsViewMobile from '@/views/reviews-view-mobile.vue';
import ReviewsViewDesktop from '@/views/reviews-view-desktop.vue';
import { useStore } from '@/store/store';

const store = useStore()
</script>

<template>
  <ReviewsViewMobile v-if="store.isMobile" />
  <ReviewsViewDesktop v-if="!store.isMobile" />
</template>

<style lang="scss"></style>