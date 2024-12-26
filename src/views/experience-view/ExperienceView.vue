<script setup>
import { useStore } from '@/store/store';
import ExperienceViewMobile from '@/views/experience-view/experience-view-mobile/ExperienceViewMobile.vue'
import ExperienceViewDesktop from '@/views/experience-view/experience-view-desktop/ExperienceViewDesktop.vue'

const store = useStore()
</script>

<template>
  <ExperienceViewMobile v-if="store.isMobile" />
  <ExperienceViewDesktop v-if="!store.isMobile" />
</template>

<style lang="scss">

</style>