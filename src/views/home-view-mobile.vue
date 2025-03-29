<script setup>
import ContactsBlock from '@/components/home-components/contacts-block.vue';
import GifBlock from '@/components/home-components/gif-block.vue';
import NameBlock from '@/components/home-components/name-block.vue';
import TechBlock from '@/components/home-components/tech-block.vue';
import ReviewsBlock from '@/components/home-components/reviews-block.vue';
import LastPostBlock from '@/components/home-components/last-post-block.vue';
import NavigationMobile from '@/components/navigation/navigation-mobile.vue';
import LogoBlock from '@/components/home-components/logo-block.vue';
import TwitchBlock from '@/components/home-components/twitch-block.vue';
</script>

<template>
<div class="home-view-mobile">
  <NavigationMobile />
  <div class="home-view-mobile__top">
    <LogoBlock />
    <TwitchBlock />
  </div>
  <NameBlock />
  <LastPostBlock />
  <TechBlock />
  <ReviewsBlock />
  <GifBlock />
  <ContactsBlock />
</div>
</template>

<style lang="scss">
@import '@/assets/style/style.scss';

.home-view-mobile {
  width: 100%;
  height: 100%;
  padding: 64px 8px 8px 8px;
  color: var(--color-secondary);
  display: flex;
  flex-direction: column;
  gap: 8px;

  &__top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
    height: 180px;
  }
}
</style>