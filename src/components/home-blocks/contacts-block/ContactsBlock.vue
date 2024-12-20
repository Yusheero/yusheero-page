<script setup>
import { Send, Github, Instagram, Twitch } from 'lucide-vue-next';
</script>

<template>
  <div class="contacts-block">
    <div class="contacts-block__container">
      <div class="contacts-block__item">
        <Send color="white" size="30" stroke-width="1.5" />
        yusheero_dev
      </div>

      <div class="contacts-block__item">
        <Github color="white" size="30" stroke-width="1.5" />
        yusheero
      </div>

      <div class="contacts-block__item">
        <Instagram color="white" size="30" stroke-width="1.5" />
        yusheero_dev
      </div>

      <div class="contacts-block__item">
        <Twitch color="white" size="30" stroke-width="1.5" />
        yusheero
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.contacts-block {
  height: 100%;
  width: 100%;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
  padding: 16px;
  background: var(--color-secondary);
  color: var(--color-primary);

  &__container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 6px;
  }

  &__item {
    padding: 10px;
    border-radius: 8px;
    background: var(--color-primary);
    color: var(--color-secondary);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }
}
</style>