<script setup></script>

<template>
  <div class="about-block">
    <h1 class="about-block__title">Hello, I am Yusheero</h1>
    <h2 class="about-block__subtitle">Frontend Developer</h2>
  </div>
</template>

<style lang="scss">
  .about-block {
    height: 230px;
    width: 230px;
    border-radius: 10px;
    border: var(--color-secondary) solid 2px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 12px;
    padding: 10px;

    &__title {
      font-size: 18px;
    }

    &__subtitle {
      font-size: 14px;
    }
  }
</style>