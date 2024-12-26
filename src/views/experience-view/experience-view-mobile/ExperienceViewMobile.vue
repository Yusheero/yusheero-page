<script setup>
import Navigation from '@/components/navigation/Navigation.vue';
</script>

<template>
  <div class="page-container">
    <div class="experience-view-mobile">
      <Navigation class="experience-view-mobile__navigation" />
      <div class="experience-view-mobile__title">Experience Page</div>
      <div class="experience-view-mobile__content">Content</div>
    </div>
  </div>
</template>

<style lang="scss">
@import '@/assets/styles/style.scss';

.experience-view-mobile {
  width: 100%;
  padding: 16px;
  color: var(--color-secondary);
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>