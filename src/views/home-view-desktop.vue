<script setup>
import LogoBlock from '@/components/home-components/logo-block.vue';
import NameBlock from '@/components/home-components/name-block.vue';
import TechBlock from '@/components/home-components/tech-block.vue';
import ContactsBlock from '@/components/home-components/contacts-block.vue';
import GifBlock from '@/components/home-components/gif-block.vue';
import ReviewsBlock from '@/components/home-components/reviews-block.vue';
import LastPostBlock from '@/components/home-components/last-post-block.vue';
import DonateBlock from '@/components/home-components/donate-block.vue';
import Scene from '@/components/scene/scene.vue';
import Navigation from '@/components/navigation/navigation.vue';
import { TwitchIcon } from 'vue3-simple-icons';
</script>

<template>
  <div class="page-container">
    <div class="home-view">
      <Navigation class="home-view__navigation" />
      <LogoBlock class="home-view__logo" />
      <NameBlock class="home-view__name" />
      <Scene class="home-view__scene" />
      <TechBlock class="home-view__tech" />
      <ContactsBlock class="home-view__contacts" />
      <GifBlock class="home-view__gif" />
      <ReviewsBlock class="home-view__reviews" />
      <LastPostBlock class="home-view__last-post" />
      <DonateBlock class="home-view__donate" />
      <a class="home-view__contacts-bottom" href="https://www.twitch.tv/yusheero"><TwitchIcon style="fill: white" size="24px" />Watch Stream</a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/style.scss';

.home-view {
  position: relative;
  height: 100%;
  width: 100%;
  color: var(--color-primary);
  display: grid;
  grid-template-columns: 10rem 10rem 5rem 20rem 5rem 25rem;
  grid-template-rows: 10rem 15rem 10rem 12rem;
  gap: 8px;
  grid-template-areas:
    "navigation logo name name scene scene"
    "last-post last-post last-post donate scene scene"
    "tech tech tech tech tech tech"
    "gif reviews reviews reviews reviews contacts";

  &__navigation {
    grid-area: navigation;
  }

  &__logo {
    grid-area: logo;
  }

  &__name {
    grid-area: name;
  }

  &__scene {
    grid-area: scene;
  }

  &__tech {
    grid-area: tech;
  }

  &__contacts {
    grid-area: contacts;
  }

  &__gif {
    grid-area: gif;
  }

  &__reviews {
    grid-area: reviews;
  }

  &__last-post {
    grid-area: last-post;
  }

  &__donate {
    grid-area: donate;
  }

  &__contacts-bottom {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 8px;
    width: 200px;
    height: 50px;
    background: var(--color-sakura);
    opacity: 0.9;
    border-radius: 4px;
    position: absolute;
    bottom: -60px;
    right: 0;
    font-size: 18px;
    text-decoration: none;
    color: var(--color-secondary);

    &:hover {
      background: var(--color-primary-light);
      cursor: pointer;
    }
  }
}
</style>