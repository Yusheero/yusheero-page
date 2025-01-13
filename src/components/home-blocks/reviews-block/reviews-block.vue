<script setup>
import { Smile } from 'lucide-vue-next';
</script>
<template>
  <div class="reviews-block">
    REVIEWS FROM TWITCH VIEWERS
    <router-link class="reviews-block__button" :to="{name: 'Reviews'}"><Smile color="white" size="20" stroke-width="1.5" /></router-link>
  </div>
</template>

<style lang="scss" scoped>
.reviews-block {
  height: 100%;
  width: 100%;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 22px;
  padding: 24px;
  color: var(--color-secondary);
  background: var(--color-sakura);
  border: 2px solid var(--color-primary);
  box-sizing: border-box;
  position: relative;

  &__button {
    position: absolute;
    top: 4px;
    right: 4px;
    background: var(--color-primary);
    border-radius: 6px;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      background: var(--color-primary-light);
      cursor: pointer;
    }
  }
}
</style>