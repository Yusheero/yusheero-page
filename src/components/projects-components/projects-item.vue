<script setup>
import { computed } from 'vue';
import { Calendar, Tag } from 'lucide-vue-next';

// Типизированные пропсы
const props = defineProps({
  projectsData: {
    type: Object,
    required: true
  }
});

// Обрезаем длинные названия
const truncatedTitle = computed(() => {
  if (!props.projectsData.title) return '';
  return props.projectsData.title.length > 25 
    ? props.projectsData.title.slice(0, 25) + '...' 
    : props.projectsData.title;
});

// Получаем год из даты
const getYear = computed(() => {
  if (!props.projectsData.dateCreated) return '';
  const dateParts = props.projectsData.dateCreated.split('.');
  return dateParts.length > 2 ? dateParts[2] : '';
});
</script>

<template>
  <div 
    class="projects-item"
  >
    <div v-if="projectsData.category" class="projects-item__badge" :class="`category-${projectsData.category}`">
      <span>{{ projectsData.category }}</span>
    </div>
    
    <div class="projects-item__content">
      <h2 class="projects-item__title" :title="projectsData.title">
        {{ truncatedTitle }}
      </h2>
      <p class="projects-item__text">{{ projectsData.text }}</p>
      
      <div class="projects-item__footer">
        <div v-if="projectsData.dateCreated" class="projects-item__date">
          <Calendar size="14" />
          <span>{{ projectsData.dateCreated }}</span>
        </div>

        <div class="projects-item__links">
          <a 
            v-if="projectsData.link" 
            class="projects-item__link" 
            :href="projectsData.link" 
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Посетить сайт проекта"
            @click.stop
          >
            page
          </a>
          <a 
            v-if="projectsData.linkGithub || projectsData.githubLink" 
            class="projects-item__github" 
            :href="projectsData.linkGithub || projectsData.githubLink" 
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub репозиторий"
            @click.stop
          >
            github
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/style.scss';

.projects-item {
  position: relative;
  perspective: 1000px;
  cursor: pointer;
  width: 100%;
  height: 100%;
  border-radius: 9px;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s ease;
  overflow: hidden;
  background: var(--color-primary-light);
  color: var(--color-white);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  
  &__badge {
    position: absolute;
    top: 12px;
    right: 12px;
    z-index: 5;
    display: flex;
    align-items: center;
    gap: 5px;
    background: var(--color-primary-light);
    color: white;
    padding: 6px 14px;
    border-radius: 6px;
    font-size: 12px;
    font-weight: 600;
  }
  
  &__content {
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    height: 100%;
    background: var(--color-secondary);
    border-radius: 8px;
    border: 3px solid var(--color-primary);
  }
  
  &__title {
    font-family: "Gabarito", serif;
    font-size: 1.5rem;
    font-weight: 700;
    position: relative;
    padding: 1rem;
    color: var(--color-primary);
  }
  
  &__text {
    padding: 1rem;
    font-size: 15px;
    line-height: 1.5;
    margin: 0;
    opacity: 0.9;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    color: var(--color-primary);
  }

  &__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: auto;
    border-top: 2px solid var(--color-primary);
  }
  
  &__date {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 13px;
    color: var(--color-primary);
    opacity: 0.8;
    padding: 1rem;
  }
  
  &__links {
    display: flex;
    justify-content: flex-end;
    height: 100%;
  }
  
  &__link,
  &__github {
    width: 5rem;
    height: 100%;
    font-size: 14px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--color-primary);
    text-decoration: none;
    transition: all 0.3s ease;
    z-index: 10;
    border-left: 2px solid var(--color-primary);

    &:hover {
      background-color: var(--color-sakura);
    }
  }
}
</style>