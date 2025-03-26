<script setup>
import { ref, computed } from 'vue';
import { useStore } from '@/store/store';
import { Github, ExternalLink, Calendar, Tag, Code, ChevronRight } from 'lucide-vue-next';

// Типизированные пропсы
const props = defineProps({
  projectsData: {
    type: Object,
    required: true
  }
});

const isHovered = ref(false);
const isFlipped = ref(false);

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
    :class="{ 
      'clickable': projectsData.readMore, 
      'is-flipped': isFlipped 
    }"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <!-- Передняя часть карточки -->
    <div class="projects-item__front">
      <div v-if="projectsData.category" class="projects-item__badge" :class="`category-${projectsData.category}`">
        <Tag size="12" />
        <span>{{ projectsData.category }}</span>
      </div>
      
      <div class="projects-item__content">
        <h2 class="projects-item__title" :title="projectsData.title">
          {{ truncatedTitle }}
        </h2>
        <p class="projects-item__text">{{ projectsData.text }}</p>
        
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
            <ExternalLink :class="{ 'icon-animated': isHovered }" size="18" />
            <span class="tooltip"></span>
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
            <Github :class="{ 'icon-animated': isHovered }" size="18" />
            <span class="tooltip"></span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/style.scss';

.projects-item {
  width: 100%;
  height: 100%;
  position: relative;
  perspective: 1000px;
  cursor: pointer;
  
  &__front {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    position: absolute;
    top: 0;
    left: 0;
    backface-visibility: hidden;
    transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s ease;
    overflow: hidden;
    background: var(--color-primary-light);
    color: var(--color-white);
    transform: rotateY(0);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  &__badge {
    position: absolute;
    top: 12px;
    right: 12px;
    z-index: 5;
    display: flex;
    align-items: center;
    gap: 5px;
    background-color: rgba(0, 0, 0, 0.25);
    color: white;
    padding: 4px 10px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.5px;
    backdrop-filter: blur(4px);
    
    &.category-web {
      background-color: rgba(41, 121, 255, 0.7);
    }
    
    &.category-3D {
      background-color: rgba(255, 87, 34, 0.7);
    }
    
    &.category-tools {
      background-color: rgba(76, 175, 80, 0.7);
    }
  }
  
  &__content {
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 20px;
  }
  
  &__title {
    font-family: "Gabarito", serif;
    font-size: 22px;
    font-weight: 700;
    margin: 0 0 12px 0;
    position: relative;
  }
  
  &__text {
    font-size: 15px;
    line-height: 1.5;
    margin: 0;
    opacity: 0.9;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }
  
  &__date {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 13px;
    color: var(--color-white);
    margin-top: 16px;
    opacity: 0.8;
  }
  
  &__links {
    margin-top: auto;
    display: flex;
    justify-content: flex-end;
    gap: 12px;
    padding-top: 16px;
  }
  
  &__link,
  &__github,
  &__more {
    position: relative;
    width: 36px;
    height: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.15);
    border-radius: 50%;
    color: var(--color-white);
    text-decoration: none;
    transition: all 0.3s ease;
    z-index: 10;
  }
  
  &__flip-hint {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    background-color: rgba(0, 0, 0, 0.5);
    padding: 4px 10px;
    border-radius: 20px;
    font-size: 11px;
    opacity: 0.7;
    transition: opacity 0.3s ease;
    
    &:hover {
      opacity: 1;
    }
  }
}
</style>