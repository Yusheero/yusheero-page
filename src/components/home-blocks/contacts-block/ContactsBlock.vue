<script setup>
import { Send, Github, Instagram, Twitch } from 'lucide-vue-next';
</script>

<template>
  <div class="contacts-block">
    <div class="contacts-block__links">
      <a class="contacts-block__item" href=""><img class="contacts-block__image" src="./images/telegram.svg" alt="">yusheero</a>
      <a class="contacts-block__item" href=""><img class="contacts-block__image" src="./images/twitch.svg" alt="">yusheero</a>
      <a class="contacts-block__item" href=""><img class="contacts-block__image" src="./images/github.svg" alt="">yusheero</a>
      <a class="contacts-block__item" href=""><img class="contacts-block__image" src="./images/inst.svg" alt="">yusheero_dev</a>
    </div>
    <a class="contacts-block__item" href=""><img class="contacts-block__image" src="./images/discord.svg" alt="">discord</a>
  </div>
</template>

<style lang="scss">
.contacts-block {
  height: 100%;
  width: 100%;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 6px;
  padding: 8px;
  color: var(--color-secondary);
  border: var(--color-secondary) solid 2px;

  &__text {
    font-size: 32px;
  }

  &__links {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 6px;
  }

  &__item {
    width: 100%;
    text-decoration: none;
    color: var(--color-primary);
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 6px;
    font-size: 18px;
    border: var(--color-primary) solid 2px;
    border-radius: 6px;
    padding: 4px;
    background: var(--color-secondary);

    &:hover {
      background: var(--color-primary-light);
      transition: background .3s;
    }
  }

  &__image {
    width: 42px;
    height: 42px;
  }
}
</style>