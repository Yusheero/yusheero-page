<script setup>
import { TwitchIcon } from 'vue3-simple-icons'
</script>

<template>
  <a class="twitch-block" href="https://www.twitch.tv/yusheero">
    <TwitchIcon style="fill: white" size="64px" />
  </a>
</template>

<style lang="scss" scoped>
.twitch-block {
  border-radius: 12px;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  background: #8956FB;
  color: var(--color-primary);

  &:hover {
    background: #6633C0;
    transition: background 0.3s ease;
    cursor: pointer;
  }
}
</style>