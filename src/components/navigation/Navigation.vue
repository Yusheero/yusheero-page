<script setup></script>

<template>
  <div class="navigation">
    <router-link class="navigation__button" :to="{name: 'Home'}"></router-link>
    <router-link class="navigation__button" :to="{name: 'Projects'}"></router-link>
    <router-link class="navigation__button" :to="{name: 'Contacts'}"></router-link>
    <router-link class="navigation__button" :to="{name: 'Blog'}"></router-link>
  </div>
</template>

<style lang="scss">
.navigation {
  padding: 16px;
  height: 100%;
  width: 100%;
  border-radius: 10px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  justify-content: center;
  align-items: center;
  gap: 16px;
  background: var(--color-secondary);
  color: var(--color-primary);

  &__button {
    height: 76px;
    background: var(--color-primary);
    border-radius: 8px;
    border: none;

    &:hover {
      background: var(--color-primary-light);
      cursor: pointer;
      transition: background .3s;
    }
  }
}
</style>