<script setup>
import ReviewsViewMobile from '@/views/reviews-view/reviews-view-mobile/ReviewsViewMobile.vue';
import ReviewsViewDesktop from '@/views/reviews-view/reviews-view-desktop/ReviewsViewDesktop.vue';
import { useStore } from '@/store/store';

const store = useStore()
</script>

<template>
  <ReviewsViewMobile v-if="store.isMobile" />
  <ReviewsViewDesktop v-if="!store.isMobile" />
</template>

<style lang="scss">

</style>