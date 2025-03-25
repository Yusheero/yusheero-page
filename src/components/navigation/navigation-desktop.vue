
<script setup>
import { Eye, MessageCircleMore, PanelsTopLeft, SquareLibrary, BicepsFlexed, BriefcaseBusiness } from 'lucide-vue-next';
</script>

<template>
  <div class="navigation">
    <router-link 
      title="Home" 
      class="navigation__button" 
      :to="{name: 'Home'}"
    >
      home
    </router-link>
    <router-link 
      title="Projects" 
      class="navigation__button" 
      :to="{name: 'Projects'}"
    >
      projects
    </router-link>
    <router-link 
      title="Experience" 
      class="navigation__button" 
      :to="{name: 'Experience'}"
    >
      experience
    </router-link>
    <router-link 
      title="Blog" 
      class="navigation__button" 
      :to="{name: 'Blog'}"
    >
      blog
    </router-link>
    <router-link 
      title="Reviews" 
      class="navigation__button" 
      :to="{name: 'Reviews'}"
    >
      reviews
    </router-link>
    <router-link 
      title="Library" 
      class="navigation__button" 
      :to="{name: 'Library'}"
    >
      library
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
.navigation {
  padding: 4px;
  height: 100%;
  width: 100%;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  background: var(--color-primary);
  color: var(--color-primary);

  &__button {
    background: var(--color-secondary);
    border-radius: 4px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    font-size: 1.25rem;
    font-weight: 600;
    padding: 0.5rem 1rem;

    &:hover {
      background: var(--color-primary-light);
      cursor: pointer;
    }
  }
}
</style>