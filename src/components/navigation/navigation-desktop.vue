<script setup>
import { Eye, MessageCircleMore, PanelsTopLeft, Smile , SquareLibrary, BicepsFlexed, BriefcaseBusiness } from 'lucide-vue-next';
</script>

<template>
  <div class="navigation">
    <router-link title="Home" class="navigation__button navigation__home" :to="{name: 'Home'}"><PanelsTopLeft color="black" size="60" stroke-width="1.8" /></router-link>
    <router-link title="Projects" class="navigation__button navigation__projects" :to="{name: 'Projects'}"><BriefcaseBusiness color="black" size="28" stroke-width="1.8" /></router-link>
    <router-link title="Experience" class="navigation__button navigation__experience" :to="{name: 'Experience'}"><BicepsFlexed color="black" size="28" stroke-width="1.8" /></router-link>
    <router-link title="Blog" class="navigation__button navigation__blog" :to="{name: 'Blog'}"><MessageCircleMore color="black" size="28" stroke-width="1.8" /></router-link>
    <router-link title="Reviews" class="navigation__button navigation__reviews" :to="{name: 'Reviews'}"><Eye color="black" size="28" stroke-width="1.8" /></router-link>
    <router-link title="Library" class="navigation__button navigation__game" :to="{name: 'Library'}"><SquareLibrary color="black" size="28" stroke-width="1.8" /></router-link>
  </div>
</template>

<style lang="scss" scoped>
.navigation {
  padding: 4px;
  height: 100%;
  width: 100%;
  border-radius: 8px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-template-areas:
    "home home projects"
    "home home experience"
    "blog reviews game";
  gap: 4px;
  background: var(--color-primary);
  color: var(--color-primary);

  &__button {
    background: var(--color-secondary);
    border-radius: 4px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      background: var(--color-primary-light);
      cursor: pointer;
    }
  }

  &__home {
    grid-area: home;
  }

  &__projects {
    grid-area: projects;
  }

  &__experience {
    grid-area: experience;
  }

  &__blog {
    grid-area: blog;
  }

  &__reviews {
    grid-area: reviews;
  }

  &__game {
    grid-area: game;
  }
}
</style>