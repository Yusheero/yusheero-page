<script setup>
import ContactsBlock from '@/components/home-blocks/contacts-block/ContactsBlock.vue';
import GifBlock from '@/components/home-blocks/gif-block/GifBlock.vue';
import LogoBlock from '@/components/home-blocks/logo-block/LogoBlock.vue';
import Navigation from '@/components/navigation/Navigation.vue';
import NameBlock from '@/components/home-blocks/name-block/NameBlock.vue';
import TechBlock from '@/components/home-blocks/tech-block/TechBlock.vue';
import WatchStream from '@/components/watch-stream/WatchStream.vue'
import ReviewsBlock from '../../../components/home-blocks/reviews-block/reviews-block.vue';
import LastPostBlock from '../../../components/home-blocks/last-post-block/last-post-block.vue';
import DonateBlock from '../../../components/home-blocks/donate-block/donate-block.vue';
</script>

<template>
<div class="home-view-mobile">
  <div class="home-view-mobile__header">
    <Navigation />
    <WatchStream />
  </div>
  <LogoBlock />
  <NameBlock />
  <GifBlock />
  <LastPostBlock />
  <DonateBlock />
  <TechBlock />
  <ReviewsBlock />
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