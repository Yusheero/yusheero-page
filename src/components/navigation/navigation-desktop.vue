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
    position: relative;
    overflow: hidden;
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
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  

    &:hover {
      transform: translateX(-6px);
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
      color: var(--color-sakura);
      border-color: var(--color-sakura);
      
      &::after {
        width: 80%;
      }
      
      &::before {
        width: 300px;
        height: 300px;
      }
    }
    
    &:active {
      transform: translateY(0);
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    }
  }
  
  /* Анимация для активной ссылки */
  .router-link-active {
    background: var(--color-primary);
    color: var(--color-secondary);
    border-color: var(--color-primary);
    
    &:hover {
      color: var(--color-secondary);
    }
  }
}
</style>