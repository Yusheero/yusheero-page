<script setup>
import BlogViewMobile from '@/views/blog-view-mobile.vue';
import BlogViewDesktop from '@/views/blog-view-desktop.vue';
import { useStore } from '@/store/store';

const store = useStore()
</script>

<template>
  <BlogViewMobile v-if="store.isMobile" />
  <BlogViewDesktop v-if="!store.isMobile" />
</template>

<style lang="scss"></style>