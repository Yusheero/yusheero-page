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
  height: 100%;
  width: 100%;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  background: #1f1f23;
  color: var(--color-primary);
  background-image: url('@/assets/images/huh-cat.gif');
  background-size: cover;
  background-repeat: no-repeat;
  background-position-y: -80px;
}
</style>