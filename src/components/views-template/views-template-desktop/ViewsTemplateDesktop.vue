<script setup>

</script>

<template>
  <div class="page-container">
    <div class="views-template-desktop">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss">
@import '@/assets/styles/style.scss';

.experience-view-desktop {
  height: 100%;
  width: 100%;
  color: var(--color-secondary);
  display: grid;
  grid-template-columns: 150px 150px 100px 300px 400px 100px;
  grid-template-rows: 150px 250px 102px 200px;
  gap: 8px;
  grid-template-areas:
    "navigation title title title title title"
    "content content content content content content"
    "content content content content content content"
    "content content content content content content";
}
</style>