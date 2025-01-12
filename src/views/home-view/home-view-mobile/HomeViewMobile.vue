<script setup>
import ContactsBlock from '@/components/home-blocks/contacts-block/ContactsBlock.vue';
import GifBlock from '@/components/home-blocks/gif-block/GifBlock.vue';
import LogoBlock from '@/components/home-blocks/logo-block/LogoBlock.vue';
import Navigation from '@/components/navigation/Navigation.vue';
import NameBlock from '@/components/home-blocks/name-block/NameBlock.vue';
import ExperienceBlock from '@/components/home-blocks/experience-block/ExperienceBlock.vue';
import TechBlock from '@/components/home-blocks/tech-block/TechBlock.vue';
import WatchStream from '@/components/watch-stream/WatchStream.vue'
</script>

<template>
<div class="home-view-mobile">
  <div class="home-view-mobile__header">
    <Navigation />
    <WatchStream />
  </div>
  <LogoBlock />
  <NameBlock />
  <ExperienceBlock />
  <GifBlock />
  <TechBlock />
  <ContactsBlock />
</div>
</template>

<style lang="scss">
@import '@/assets/styles/style.scss';

.home-view-mobile {
  width: 100%;
  padding: 8px;
  color: var(--color-secondary);
  display: flex;
  flex-direction: column;
  gap: 8px;

  &__header {
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }

  &__twitch-link {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: rgb(255, 255, 255, 0.25);
    border-radius: 4px;
    font-size: 14px;
    text-decoration: none;
    color: var(--color-secondary);
  }
}
</style>