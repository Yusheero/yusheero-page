<script setup>

</script>

<template>
  <div class="gif-block-mobile"></div>
</template>

<style lang="scss" scoped>
.gif-block-mobile {
  height: 300px;
  width: 100%;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  background: #1f1f23;
  color: var(--color-primary);
  background-image: url('@/assets/images/huh-cat.gif');
  background-position: 100% 25%;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>