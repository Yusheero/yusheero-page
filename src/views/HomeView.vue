<script setup>
import LogoBlock from '../components/home-blocks/logo-block/LogoBlock.vue';
import NameBlock from '../components/home-blocks/name-block/NameBlock.vue';
import LanguagesBlock from '../components/home-blocks/languages-block/LanguagesBlock.vue';
import Navigation from '../components/navigation/Navigation.vue';
import ExperienceBlock from '../components/home-blocks/experience-block/ExperienceBlock.vue';
import TechBlock from '../components/home-blocks/tech-block/TechBlock.vue';
import ContactsBlock from '../components/home-blocks/contacts-block/ContactsBlock.vue';
import InterestsBlock from '../components/home-blocks/interests-block/InterestsBlock.vue';
import PcSpecsBlock from '../components/home-blocks/pc-specs-block/PcSpecsBlock.vue';
</script>

<template>
  <div class="page-container">
    <div class="home-view">
      <Navigation class="home-view__navigation" />
      <LogoBlock class="home-view__logo" />
      <NameBlock class="home-view__name" />
      <PcSpecsBlock class="home-view__pc" />
      <ExperienceBlock class="home-view__experience" />
      <LanguagesBlock class="home-view__languages" />
      <TechBlock class="home-view__tech" />
      <ContactsBlock class="home-view__contacts" />
      <InterestsBlock class="home-view__interests" />
    </div>
  </div>
</template>

<style lang="scss">
@import '../assets/styles/style.scss';

.home-view {
  height: 100%;
  width: 100%;
  color: var(--color-secondary);
  display: grid;
  grid-template-columns: 150px 150px 100px 300px 500px;
  grid-template-rows: 150px 250px 100px 200px;
  gap: 16px;
  grid-template-areas:
    "navigation logo name name experience"
    "languages languages languages pc experience"
    "tech tech tech tech tech"
    "contacts contacts contacts interests interests";

    &__navigation {
      grid-area: navigation;
    }

    &__logo {
      grid-area: logo;
    }

    &__name {
      grid-area: name;
    }

    &__languages {
      grid-area: languages;
    }

    &__experience {
      grid-area: experience;
    }

    &__tech {
      grid-area: tech;
    }

    &__contacts {
      grid-area: contacts;
    }

    &__interests {
      grid-area: interests;
    }

    &__pc {
      grid-area: pc;
    }
}
</style>