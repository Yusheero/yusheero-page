<script setup></script>

<template>
  <div class="avatar-block">
    <img class="avatar-block__image" src="./images/avatar.jpg" alt="avatar">
  </div>
</template>

<style lang="scss">
  .avatar-block {
    height: 230px;
    width: 230px;
    border-radius: 10px;

    &__image {
      width: 100%;
      height: 100%;
      border-radius: 8px;
      border: var(--color-secondary) solid 2px
    }
  }
</style>