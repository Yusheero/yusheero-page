<script setup>
import ContactsBlock from '@/components/home-components/contacts-block.vue';
import GifBlock from '@/components/home-components/gif-block.vue';
import LogoBlock from '@/components/home-components/logo-block.vue';
import NameBlock from '@/components/home-components/name-block.vue';
import TechBlock from '@/components/home-components/tech-block.vue';
import ReviewsBlock from '@/components/home-components/reviews-block.vue';
import LastPostBlock from '@/components/home-components/last-post-block.vue';
import Header from '../components/header/header.vue';
</script>

<template>
<div class="home-view-mobile">
  <Header />
  <LogoBlock />
  <NameBlock />
  <GifBlock />
  <LastPostBlock />
  <TechBlock />
  <ReviewsBlock />
  <ContactsBlock />
</div>
</template>

<style lang="scss">
@import '@/assets/style/style.scss';

.home-view-mobile {
  width: 100%;
  padding: 60px 8px 0 8px;
  color: var(--color-secondary);
  display: flex;
  flex-direction: column;
  gap: 8px;
}
</style>