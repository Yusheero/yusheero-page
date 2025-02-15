<script setup>
import { useStore } from '@/store/store';
import { Github, Eye } from 'lucide-vue-next';
const store = useStore()

defineProps({
  projectsData: Object,
})
</script>

<template>
  <div class="projects-item">
    <h2 class="projects-item__header">{{ projectsData.title }}</h2>
    <div class="projects-item__main">
      <p class="projects-item__text">{{ projectsData.text }}</p>
    </div>
    <div class="projects-item__bottom">
      <a class="projects-item__link" href=""><Eye color="white" size="20" stroke-width="1.5" /></a>
      <router-link class="projects-item__button" :to="{}"><Github color="white" size="20" stroke-width="1.5" /></router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/style.scss';

.projects-item {
  font-family: "Gabarito", serif;
  font-weight: 600;
  width: 100%;
  height: 100%;
  background: var(--color-purple);
  color: var(--color-primary);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 8px;

  &__header {
    width: 100%;
    height: 120px;
    font-size: 28px;
    font-weight: 700;
    color: var(--color-secondary);
    border-bottom: 2px solid var(--color-primary);
    padding: 16px;
    background: var(--color-orange);
    border-top-right-radius: 6px;
    border-top-left-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  &__main {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    gap: 12px;
    padding: 16px;
  }

  &__text {
    font-size: 22px;
    font-weight: 500;
  }

  &__date {
    background: var(--color-primary);
    color: var(--color-secondary);
    padding: 6px;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    height: 100%;
  }

  &__bottom {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 4px;
    padding: 16px;
  }

  &__button {
    background: var(--color-sakura);
    border-radius: 6px;
    width: 35px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      background: var(--color-primary-light);
      cursor: pointer;
    }
  }

  &__link {
    background: var(--color-sakura);
    border-radius: 6px;
    width: 35px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      background: var(--color-primary-light);
      cursor: pointer;
    }
  }
}
</style>