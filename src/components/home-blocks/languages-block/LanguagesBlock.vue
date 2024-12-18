<script setup></script>

<template>
  <div class="languages-block">
    <div class="languages-block__base">
      <h3>Russian</h3>
      <h3>English</h3>
    </div>
    <div class="languages-block__code">
      <h3>JavaScript</h3>
      <h3>TypeScript</h3>
    </div>
  </div>
</template>

<style lang="scss">
  .languages-block {
    height: 247px;
    width: 483px;
    border-radius: 10px;
    border: var(--color-secondary) solid 2px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 12px;
    padding: 16px;

    &__base {
      width: 100%;
      height: 50%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      gap: 6px;
    }

    &__code {
      width: 100%;
      height: 50%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      gap: 6px;
    }
  }
</style>