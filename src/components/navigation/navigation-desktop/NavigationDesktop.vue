<script setup>
import { Eye, Target, MessageCircleMore, PanelsTopLeft, Smile , SquareLibrary } from 'lucide-vue-next';
</script>

<template>
  <div class="navigation">
    <router-link class="navigation__button navigation__home" :to="{name: 'Home'}"><PanelsTopLeft color="white" size="60" stroke-width="1.5" /></router-link>
    <router-link class="navigation__button navigation__projects" :to="{name: 'Projects'}"><Target color="white" size="25" stroke-width="1.5" /></router-link>
    <router-link class="navigation__button navigation__experience" :to="{name: 'Experience'}"><Eye color="white" size="25" stroke-width="1.5" /></router-link>
    <router-link class="navigation__button navigation__blog" :to="{name: 'Blog'}"><MessageCircleMore color="white" size="25" stroke-width="1.5" /></router-link>
    <router-link class="navigation__button navigation__reviews" :to="{name: 'Reviews'}"><Smile  color="white" size="25" stroke-width="1.5" /></router-link>
    <router-link class="navigation__button navigation__game" :to="{name: 'Library'}"><SquareLibrary color="white" size="25" stroke-width="1.5" /></router-link>
  </div>
</template>

<style lang="scss" scoped>
.navigation {
  padding: 4px;
  height: 100%;
  width: 100%;
  border-radius: 10px;
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
    background: var(--color-sakura);
    border-radius: 8px;
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