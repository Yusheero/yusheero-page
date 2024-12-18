<script setup></script>

<template>
  <div class="navigation">
    <div class="navigation__title">Navigation</div>
    <div class="navigation__icons">
      <img class="navigation__icon" src="./images/folder.svg" alt="nav-icon">
      <img class="navigation__icon" src="./images/folder.svg" alt="nav-icon">
      <img class="navigation__icon" src="./images/folder.svg" alt="nav-icon">
      <img class="navigation__icon" src="./images/folder.svg" alt="nav-icon">
    </div>
  </div>
</template>

<style lang="scss">
  .navigation {
    height: 230px;
    width: 230px;
    border-radius: 10px;
    border: var(--color-secondary) solid 2px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 12px;

    &__icons {
      display: grid;
      grid-template-columns: repeat(2, 50px);
      grid-template-rows: repeat(2, 50px);
      align-items: center;
      justify-content: center;
      gap: 6px;
    }

    &__icon {
      width: 50px;
      height: 50px;
    }
  }
</style>