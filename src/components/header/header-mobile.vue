<script setup>
import NavigationMobile from '../navigation/navigation-mobile.vue';
import WatchStream from '../watch-stream/watch-stream.vue';
</script>

<template>
  <div class="header-mobile">
    <div class="header-mobile__container">
      <NavigationMobile />
      <WatchStream />
    </div> 
  </div>
</template>

<style lang="scss" scoped>
.header-mobile {
  padding: 8px;
  position: fixed;
  top: -4px;
  left: 0;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  &__container {
    padding: 4px;
    width: 100%;
    max-width: 768px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 4px;
    background: var(--color-primary);
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
  }
}
</style>