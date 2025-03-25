<script setup>
import LogoBlock from '@/components/home-components/logo-block.vue';
import NameBlock from '@/components/home-components/name-block.vue';
import TechBlock from '@/components/home-components/tech-block.vue';
import ContactsBlock from '@/components/home-components/contacts-block.vue';
import GifBlock from '@/components/home-components/gif-block.vue';
import ReviewsBlock from '@/components/home-components/reviews-block.vue';
import LastPostBlock from '@/components/home-components/last-post-block.vue';
import Scene from '@/components/scene/scene.vue';
import Navigation from '@/components/navigation/navigation.vue';
import TwitchBlock from '@/components/home-components/twitch-block.vue';
</script>

<template>
  <div class="page-container">
    <div class="home-view-desktop">
      <Navigation class="home-view-desktop__navigation" />
      <LogoBlock class="home-view-desktop__logo" />
      <NameBlock class="home-view-desktop__name" />
      <Scene class="home-view-desktop__scene" />
      <TechBlock class="home-view-desktop__tech" />
      <ContactsBlock class="home-view-desktop__contacts" />
      <GifBlock class="home-view-desktop__gif" />
      <ReviewsBlock class="home-view-desktop__reviews" />
      <LastPostBlock class="home-view-desktop__last-post" />
      <TwitchBlock class="home-view-desktop__twitch" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/style.scss';

.home-view-desktop {
  position: relative;
  height: 100%;
  width: 100%;
  color: var(--color-primary);
  display: grid;
  grid-template-columns: 10rem 10rem 10rem 14rem 8rem 29rem;
  grid-template-rows: 10rem 20rem 7rem 14rem;
  gap: 8px;
  grid-template-areas:
    "logo twitch name name scene scene"
    "last-post last-post last-post last-post scene scene"
    "tech tech tech tech tech tech"
    "gif gif reviews reviews reviews contacts";

  &__navigation {
    position: absolute;
    top: 0;
    left: -148px;
    z-index: 100;
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

  &__email {
    grid-area: email;
  }

  &__twitch {
    grid-area: twitch;
  }

  &__contacts-bottom {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 8px;
    height: 3rem;
    width: 7rem;
    opacity: 0.9;
    border-radius: 4px;
    position: absolute;
    top: 0px;
    right: -120px;
    font-size: 18px;
    text-decoration: none;
    color: var(--color-secondary);
    background: var(--color-sakura);

    &:hover {
      background: var(--color-primary-light);
      cursor: pointer;
    }
  }
}
</style>