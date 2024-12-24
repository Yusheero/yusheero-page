<script setup>
import ContactsBlock from '../../../components/home-blocks/contacts-block/ContactsBlock.vue';
import GifBlock from '../../../components/home-blocks/gif-block/GifBlock.vue';
import LanguagesBlock from '../../../components/home-blocks/languages-block/LanguagesBlock.vue';
import LogoBlock from '../../../components/home-blocks/logo-block/LogoBlock.vue';
import TwitchBlock from '../../../components/home-blocks/twitch-block/TwitchBlock.vue';
import Navigation from '../../../components/navigation/Navigation.vue';
import NameBlock from '../../../components/home-blocks/name-block/NameBlock.vue';
import PcSpecsBlock from '../../../components/home-blocks/pc-specs-block/PcSpecsBlock.vue';
import ExperienceBlock from '../../../components/home-blocks/experience-block/ExperienceBlock.vue';
import TechBlock from '../../../components/home-blocks/tech-block/TechBlock.vue';
</script>

<template>
<div class="home-view">
  <Navigation />
  <LogoBlock />
  <NameBlock />
  <PcSpecsBlock />
  <ExperienceBlock />
  <LanguagesBlock />
  <TechBlock />
  <ContactsBlock />
  <TwitchBlock />
  <GifBlock />
</div>
</template>

<style lang="scss">
@import '../../../assets/styles/style.scss';

.home-view {
  width: 100%;
  padding: 16px;
  color: var(--color-secondary);
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>