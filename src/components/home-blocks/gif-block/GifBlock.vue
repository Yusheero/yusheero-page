<script setup>

</script>

<template>
  <div class="gif-block"></div>
</template>

<style lang="scss" scoped>
.gif-block {
  height: 100%;
  width: 100%;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  background: #1f1f23;
  color: var(--color-primary);
  background-image: url('@/components/home-blocks/gif-block/images/huh-cat.gif');
  background-size: cover;
  background-repeat: no-repeat;
}
</style>