<script setup>
import AvatarBlock from '../components/home-blocks/avatar-block/AvatarBlock.vue';
import AboutBlock from '../components/home-blocks/about-block/AboutBlock.vue';
import LanguagesBlock from '../components/home-blocks/languages-block/LanguagesBlock.vue';
import Navigation from '../components/navigation/Navigation.vue';
</script>

<template>
  <div class="home-view">
    <div class="page-container">
      <Navigation />
      <!-- <AvatarBlock /> -->
      <!-- <AboutBlock /> -->
      <!-- <LanguagesBlock /> -->
    </div>
  </div>
</template>

<style lang="scss">

.home-view {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--color-secondary);
}
</style>