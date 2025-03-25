<script setup>
import ContactsBlockMobile from '@/components/home-components/contacts-block-mobile.vue';
import { useStore } from '@/store/store';
import { TelegramIcon, DiscordIcon, GitHubIcon, InstagramIcon, SteamIcon, GmailIcon, LinkedInIcon, YouTubeIcon } from 'vue3-simple-icons'

const store = useStore()
</script>

<template>
  <ContactsBlockMobile v-if="store.isMobile" />
  <div v-else class="contacts-block">
    <a class="contacts-block__item contacts-block__telegram" href="https://t.me/yusheero_dev">
      <TelegramIcon style="fill: white" size="24px" />
    </a>
    <a class="contacts-block__item contacts-block__discord" href="https://discord.gg/Zv2h3TAACx">
      <DiscordIcon style="fill: white" size="24px" />
    </a>
    <a class="contacts-block__item contacts-block__github" href="https://github.com/Yusheero">
      <GitHubIcon style="fill: white" size="24px" />
    </a>
    <a class="contacts-block__item contacts-block__inst" href="https://www.instagram.com/yusheero_dev/">
      <InstagramIcon style="fill: white" size="24px" />
    </a>
    <a class="contacts-block__item contacts-block__steam" href="">
      <SteamIcon style="fill: white" size="24px" />
    </a>
    <a class="contacts-block__item contacts-block__gmail" href="">
      <GmailIcon style="fill: white" size="24px" />
    </a>
    <a class="contacts-block__item contacts-block__linkedin" href="">
      <LinkedInIcon style="fill: white" size="24px" />
    </a>
    <a class="contacts-block__item contacts-block__youtube" href="">
      <YouTubeIcon style="fill: white" size="24px" />
    </a>
  </div>
</template>

<style lang="scss" scoped>
.contacts-block {
  border-radius: 12px;
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 8px;
  grid-template-areas:
    "telegram discord github inst"
    "steam gmail linkedin youtube";
  gap: 4px;
  padding: 4px;
  color: var(--color-secondary);
  background: var(--color-primary);

  &__item {
    text-decoration: none;
    color: var(--color-primary);
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-end;
    gap: 6px;
    font-size: 18px;
    border-radius: 8px;
    padding: 8px;

    &:hover {
      background: var(--color-primary-light);
    }
  }

  &__telegram {
    grid-area: telegram;
    background: #229ED9;
  }

  &__discord {
    grid-area: discord;
    background: #5865F2;
  }

  &__github {
    grid-area: github;
    background: #000000;
  }

  &__inst {
    grid-area: inst;
    background: rgb(64,93,230);
    background: linear-gradient(145deg, rgba(64,93,230,1) 0%, rgba(131,58,180,1) 50%, rgba(225,48,108,1) 100%);
  }

  &__steam {
    grid-area: steam;
    background: #000000;
  }

  &__gmail {
    grid-area: gmail;
    background: #c01818;
  }

  &__linkedin {
    grid-area: linkedin;
    background: #15468b;
  }

  &__youtube {
    grid-area: youtube;
    background: #c01818;
  }
}
</style>