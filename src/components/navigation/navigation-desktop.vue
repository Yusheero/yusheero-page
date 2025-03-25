<script setup>

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
    <router-link 
      title="Plans" 
      class="navigation__button" 
      :to="{name: 'Plans'}"
    >
      plans
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
.navigation {
  height: 100%;
  width: 140px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  color: var(--color-primary);

  &__button {
    border: 2px solid var(--color-primary);
    color: var(--color-primary);
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    font-size: 1rem;
    font-weight: 600;
    padding: 0.8rem 1rem;

    &:hover {
      background: var(--color-primary-light);
      transition: background 0.3s ease;
      cursor: pointer;
    }
  }
}
</style>