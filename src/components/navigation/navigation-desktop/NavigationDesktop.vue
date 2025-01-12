<script setup>
import { Eye, Target, MessageCircleMore, PanelsTopLeft } from 'lucide-vue-next';
</script>

<template>
  <div class="navigation">
    <router-link class="navigation__button" :to="{name: 'Home'}"><PanelsTopLeft color="white" size="40" stroke-width="1.5" /></router-link>
    <router-link class="navigation__button" :to="{name: 'Projects'}"><Target color="white" size="40" stroke-width="1.5" /></router-link>
    <router-link class="navigation__button" :to="{name: 'Experience'}"><Eye color="white" size="40" stroke-width="1.5" /></router-link>
    <router-link class="navigation__button" :to="{name: 'Blog'}"><MessageCircleMore color="white" size="40" stroke-width="1.5" /></router-link>
  </div>
</template>

<style lang="scss" scoped>
.navigation {
  padding: 4px;
  height: 100%;
  width: 100%;
  border-radius: 10px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  justify-content: center;
  align-items: center;
  gap: 4px;
  background: var(--color-primary);
  color: var(--color-primary);

  &__button {
    height: 69px;
    background: var(--color-sakura);
    border-radius: 8px;
    border: none;
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