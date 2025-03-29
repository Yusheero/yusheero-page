<script setup>
import GifBlockMobile from '@/components/home-components/gif-block-mobile.vue';
import { useStore } from '@/store/store';

const store = useStore()
</script>

<template>
  <GifBlockMobile v-if="store.isMobile" />
  <div v-else class="gif-block"></div>
</template>

<style lang="scss" scoped>
.gif-block {
  border-radius: 12px;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  background: #1f1f23;
  color: var(--color-primary);
  background-image: url('@/assets/images/guts.gif');
  background-size: cover;
  background-repeat: no-repeat;
  filter: hue-rotate(125deg);
}
</style>