<script setup>

</script>

<template>
  <div class="watch-stream">
    <a class="watch-stream__twitch-link" href="https://www.twitch.tv/yusheero">Watch Stream</a>
  </div>
</template>

<style lang="scss" scoped>
.watch-stream {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: rgb(255, 255, 255, 0.25);
  border-radius: 4px;

  &__twitch-link {
    color: var(--color-secondary);
    font-size: 14px;
    text-decoration: none;
  }
}
</style>