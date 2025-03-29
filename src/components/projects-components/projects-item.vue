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

// Добавляем некоторые теги по умолчанию, если их нет в данных
const defaultTags = computed(() => {
  if (props.projectsData.technologies && props.projectsData.technologies.length > 0) {
    return props.projectsData.technologies;
  }
  
  // Добавляем дефолтные теги в зависимости от категории
  const category = props.projectsData.category?.toLowerCase() || '';
  
  if (category === 'web') {
    return ['HTML', 'CSS', 'JavaScript'];
  } else if (category === 'mobile') {
    return ['React Native', 'Mobile'];
  } else if (category === 'desktop') {
    return ['Electron', 'Desktop'];
  }
  
  // Если нет категории, даем общие теги
  return ['JavaScript', props.projectsData.title?.split(' ')[0] || 'Project'];
});
</script>

<template>
  <div class="projects-item">
    <div class="projects-item__content">
      <div class="projects-item__header">
        <h2 class="projects-item__title" :title="projectsData.title">
          {{ truncatedTitle }}
        </h2>
        <div v-if="projectsData.category" class="projects-item__badge" :class="`category-${projectsData.category}`">
          <span>{{ projectsData.category }}</span>
        </div>
      </div>
      <div class="projects-item__body">
        <p class="projects-item__text">{{ projectsData.text }}</p>
      </div>
      
      <div class="projects-item__tags">
        <span class="tag" v-for="(tag, index) in defaultTags" :key="index">
          {{ tag }}
        </span>
      </div>
      
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
  width: 100%;
  height: 100%;
  cursor: pointer;
  border-radius: 5px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 0 20px rgba(79, 250, 154, 0.3);
  }
  
  &__content {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: rgba(10, 26, 18, 0.95);
    border: 1px solid #4FFA9A;
    border-radius: 5px;
    box-shadow: 0 0 20px rgba(79, 250, 154, 0.3);
    color: #E0E0E0;
    overflow: hidden;
  }
  
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px;
    border-bottom: 1px solid rgba(79, 250, 154, 0.3);
  }
  
  &__title {
    margin: 0;
    font-size: 16px;
    color: #4FFA9A;
    text-shadow: 0 0 5px rgba(79, 250, 154, 0.5);
    font-family: inherit;
    font-weight: 600;
  }
  
  &__badge {
    display: flex;
    align-items: center;
    background: rgba(10, 26, 18, 0.8);
    color: #4FFA9A;
    padding: 3px 8px;
    border-radius: 4px;
    font-size: 10px;
    font-weight: 600;
    border: 1px solid rgba(79, 250, 154, 0.5);
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  
  &__body {
    flex-grow: 1;
    padding: 12px;
    display: flex;
    flex-direction: column;
  }
  
  &__text {
    font-size: 14px;
    line-height: 1.5;
    margin: 0 0 10px;
    color: #CCCCCC;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
  }
  
  &__tags {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin: 10px 12px;
    
    .tag {
      background-color: rgba(79, 250, 154, 0.15);
      border: 1px solid rgba(79, 250, 154, 0.4);
      border-radius: 12px;
      padding: 3px 8px;
      font-size: 12px;
      color: #4FFA9A;
    }
  }
  
  &__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: auto;
    border-top: 1px solid rgba(79, 250, 154, 0.3);
    height: 40px;
  }
  
  &__date {
    height: 100%;
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 12px;
    color: #4FFA9A;
    padding: 0 12px;
    opacity: 0.8;
    min-width: 110px;
  }
  
  &__links {
    height: 100%;
    display: flex;
  }
  
  &__link,
  &__github {
    min-width: 80px;
    height: 100%;
    font-size: 14px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #4FFA9A;
    text-decoration: none;
    transition: all 0.3s ease;
    border-left: 1px solid rgba(79, 250, 154, 0.3);
    
    &:hover {
      background-color: rgba(79, 250, 154, 0.2);
    }
  }
}

.category-web {
  background: rgba(79, 154, 250, 0.3);
  border-color: rgba(79, 154, 250, 0.5);
  color: rgb(79, 154, 250);
}

.category-mobile {
  background: rgba(250, 79, 154, 0.3);
  border-color: rgba(250, 79, 154, 0.5);
  color: rgb(250, 79, 154);
}

.category-desktop {
  background: rgba(250, 200, 79, 0.3);
  border-color: rgba(250, 200, 79, 0.5);
  color: rgb(250, 200, 79);
}
</style>