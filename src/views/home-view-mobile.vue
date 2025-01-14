<script setup>
import ContactsBlock from '@/components/home-components/contacts-block.vue';
import GifBlock from '@/components/home-components/gif-block.vue';
import LogoBlock from '@/components/home-components/logo-block.vue';
import NameBlock from '@/components/home-components/name-block.vue';
import TechBlock from '@/components/home-components/tech-block.vue';
import ReviewsBlock from '@/components/home-components/reviews-block.vue';
import LastPostBlock from '@/components/home-components/last-post-block.vue';
import DonateBlock from '@/components/home-components/donate-block.vue';
import WatchStream from '@/components/watch-stream/watch-stream.vue'
import Navigation from '@/components/navigation/navigation.vue';
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
@import '@/assets/style/style.scss';

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