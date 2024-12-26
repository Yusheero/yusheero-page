<script setup>

</script>

<template>
  <div class="experience-block-mobile">
    <div class="experience-block-mobile__content">
      Your AD could be here, but it won't be here
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/style.scss';

.experience-block-mobile {
  height: 300px;
  width: 100%;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 8px;
  background: rgb(255, 255, 255, 0.25);
  color: var(--color-primary);

  &__content {
    text-align: center;
    width: 70%;
    font-size: 32px;
    line-height: 1.1;
  }
}
</style>