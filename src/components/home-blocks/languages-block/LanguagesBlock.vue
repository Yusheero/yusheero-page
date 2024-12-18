<script setup></script>

<template>
  <div class="languages-block">
    Language
  </div>
</template>

<style lang="scss">
.languages-block {
  height: 100%;
  width: 100%;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  padding: 16px;
  background: var(--color-secondary);
  color: var(--color-primary);

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