<script setup>
import LogoBlock from '@/components/home-blocks/logo-block/LogoBlock.vue';
import NameBlock from '@/components/home-blocks/name-block/NameBlock.vue';
import Navigation from '@/components/navigation/Navigation.vue';
import Scene from '@/components/scene/Scene.vue';
import TechBlock from '@/components/home-blocks/tech-block/TechBlock.vue';
import ContactsBlock from '@/components/home-blocks/contacts-block/ContactsBlock.vue';
import GifBlock from '@/components/home-blocks/gif-block/GifBlock.vue';
import ReviewsBlock from '../../../components/home-blocks/reviews-block/reviews-block.vue';
import LastPostBlock from '@/components/home-blocks/last-post-block/last-post-block.vue';
import DonateBlock from '@/components/home-blocks/donate-block/donate-block.vue';
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
      <a class="home-view__contacts-bottom" href="https://www.twitch.tv/yusheero">Watch Stream</a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/style.scss';

.home-view {
  position: relative;
  height: 100%;
  width: 100%;
  color: var(--color-primary);
  display: grid;
  grid-template-columns: 150px 150px 100px 300px 100px 400px;
  grid-template-rows: 150px 250px 102px 200px;
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
    width: 200px;
    height: 40px;
    background: var(--color-orange);
    opacity: 0.9;
    border-radius: 4px;
    position: absolute;
    bottom: -50px;
    right: 0;
    font-size: 16px;
    text-decoration: none;
    color: var(--color-secondary);

    &:hover {
      background: var(--color-primary-light);
      cursor: pointer;
    }
  }
}
</style>