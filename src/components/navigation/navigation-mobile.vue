<script setup>
import { Eye, Target, MessageCircleMore, PanelsTopLeft } from 'lucide-vue-next';
</script>

<template>
  <div class="navigation">
    <router-link class="navigation__button" :to="{name: 'Home'}"><PanelsTopLeft color="white" size="24" stroke-width="1.5" /></router-link>
    <router-link class="navigation__button" :to="{name: 'Projects'}"><Target color="white" size="24" stroke-width="1.5" /></router-link>
    <router-link class="navigation__button" :to="{name: 'Experience'}"><Eye color="white" size="24" stroke-width="1.5" /></router-link>
    <router-link class="navigation__button" :to="{name: 'Blog'}"><MessageCircleMore color="white" size="24" stroke-width="1.5" /></router-link>
  </div>
</template>

<style lang="scss" scoped>
.navigation {
  width: 310px;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4px;
  background: var(--color-primary);
  color: var(--color-primary);

  &__button {
    height: 44px;
    width: 44px;
    background: var(--color-sakura);
    border-radius: 6px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      background: var(--color-primary-light);
      cursor: pointer;
      transition: background .2s;
    }
  }
}
</style>