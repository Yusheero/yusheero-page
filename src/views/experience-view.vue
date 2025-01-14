<script setup>
import { useStore } from '@/store/store';
import ExperienceViewMobile from '@/views/experience-view-mobile.vue'
import ExperienceViewDesktop from '@/views/experience-view-desktop.vue'

const store = useStore()
</script>

<template>
  <ExperienceViewMobile v-if="store.isMobile" />
  <ExperienceViewDesktop v-if="!store.isMobile" />
</template>

<style lang="scss"></style>