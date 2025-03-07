<script setup>
import { ArrowRight } from 'lucide-vue-next';
</script>

<template>
  <div class="plans">
      navigation
      <ArrowRight color="white" size="20" stroke-width="1.5" />
  </div>
</template>

<style lang="scss" scoped>
.plans {
  height: 2rem;
  width: 7.5rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 0.25rem;
  font-size: 1rem;
  background: var(--color-primary);
  color: var(--color-secondary);
}
</style>