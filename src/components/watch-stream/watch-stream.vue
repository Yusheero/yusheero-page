<script setup>
import { TwitchIcon } from 'vue3-simple-icons';
</script>

<template>
  <div class="watch-stream">
    <TwitchIcon style="fill: white" size="24px" />
    <a class="watch-stream__twitch-link" href="https://www.twitch.tv/yusheero">Watch Stream</a>
  </div>
</template>

<style lang="scss" scoped>
.watch-stream {
  height: 44px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
  background: var(--color-orange);
  border-radius: 4px;

  &__twitch-link {
    color: var(--color-secondary);
    font-size: 12px;
    text-decoration: none;
  }
}
</style>