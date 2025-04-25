<script setup>
import { useStore } from '@/store/store';

const store = useStore()
</script>

<template>
  <div class="gif-block"></div>
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
  color: var(--color-primary);
  background-image: url('@/assets/images/guts.gif');
  background-size: cover;
  background-repeat: no-repeat;
  filter: hue-rotate(165deg);

  @media (max-width: 768px) {
    height: 300px;
  }
}
</style>