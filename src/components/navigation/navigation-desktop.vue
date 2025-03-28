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
    <a
      class="navigation__button navigation__button--disabled"
      @click.prevent 
      href="#"
    >
      library
    </a>
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
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: #4FFA9A;

  &__button {
    position: relative;
    overflow: hidden;
    border: 1px solid rgba(79, 250, 154, 0.5);
    color: #4FFA9A;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    font-size: 14px;
    font-weight: 500;
    padding: 10px;
    transition: all 0.2s ease;
    background-color: rgba(10, 26, 18, 0.95);
    text-shadow: 0 0 5px rgba(79, 250, 154, 0.3);
    letter-spacing: 0.5px;
  
    &:hover {
      background-color: rgba(79, 250, 154, 0.15);
      text-shadow: 0 0 8px rgba(79, 250, 154, 0.6);
    }
    
    /* Стили для отключенной кнопки library */
    &--disabled {
      color: #FF5555;
      border-color: rgba(255, 85, 85, 0.5);
      text-shadow: 0 0 5px rgba(255, 85, 85, 0.3);
      
      &:hover {
        background-color: rgba(255, 85, 85, 0.15);
        text-shadow: 0 0 8px rgba(255, 85, 85, 0.6);
      }
    }
  }
  
  /* Анимация для активной ссылки */
  .router-link-active {
    background-color: rgba(79, 250, 154, 0.2);
    border-color: rgba(79, 250, 154, 0.8);
    box-shadow: 0 0 10px rgba(79, 250, 154, 0.3);
    font-weight: 600;
    
    &:hover {
      background-color: rgba(79, 250, 154, 0.25);
    }
  }
}
</style>