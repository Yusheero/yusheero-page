<script setup></script>

<template>
  <div class="logo-block">
    <img class="logo-block__image" src="@/assets/images/avatar.jpg" alt="avatar">
  </div>
</template>

<style lang="scss" scoped>
  .logo-block {
    height: 100%;
    width: 100%;
    border-radius: 12px;

    &__image {
      width: 100%;
      height: 100%;
      border-radius: 12px;
      margin-bottom: -4px;
    }
  }
</style>