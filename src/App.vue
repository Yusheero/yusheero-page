<script setup>
</script>

<template>
  <main class="main">
    <Router-view />
  </main>
</template>

<style lang="scss" scoped>
.main {
  position: relative;
  background-color: var(--color-primary);
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 22px;
}
</style>
