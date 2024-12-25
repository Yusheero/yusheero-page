<script setup>
import BlogViewMobile from '@/views/blog-view/blog-view-mobile/BlogViewMobile.vue';
import BlogViewDesktop from '@/views/blog-view/blog-view-desktop/BlogViewDesktop.vue';
import { useStore } from '@/store/store';

const store = useStore()
</script>

<template>
  <BlogViewMobile v-if="store.isMobile" />
  <BlogViewDesktop v-if="!store.isMobile" />
</template>

<style lang="scss">

</style>