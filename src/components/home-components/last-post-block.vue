<script setup>
import { ArrowRight, Calendar, Clock } from 'lucide-vue-next';
import { ref, onMounted } from 'vue';
import data from '@/data/blog.json';

const blogData = data.data;
const DataLength = blogData.length;
const blogLastPost = blogData[DataLength - 1];

// Для анимации текста
const isVisible = ref(false);
const isHovered = ref(false);

// Форматирование даты
const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { 
    day: 'numeric', 
    month: 'short', 
    year: 'numeric' 
  });
};

// Создание обрезанной версии текста
const truncateText = (text, length = 120) => {
  if (text.length <= length) return text;
  return text.substring(0, length) + '...';
};

const formattedDate = formatDate(blogLastPost.date);
const truncatedText = truncateText(blogLastPost.text);

onMounted(() => {
  // Запускаем анимацию появления после монтирования компонента
  setTimeout(() => {
    isVisible.value = true;
  }, 300);
});
</script>

<template>
  <div 
    class="last-post-block" 
    :class="{ 'is-visible': isVisible }"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <div class="last-post-block__item">
      <div class="last-post-block__item-badge">Blog</div>
      
      <div class="last-post-block__item-header">
        <div class="last-post-block__item-title">{{ blogLastPost.title }}</div>
        <div class="last-post-block__item-text">{{ truncatedText }}</div> 
      </div>
      
      <div class="last-post-block__item-footer">
        <div class="last-post-block__item-date">
          <Calendar size="14" strokeWidth="2" class="last-post-block__icon" />
          <span>{{ formattedDate }}</span>
        </div>
        
        <router-link class="last-post-block__read-more" :to="{name: 'Blog'}">
          Read more
          <ArrowRight size="14" strokeWidth="2" class="last-post-block__arrow" :class="{ 'arrow-animate': isHovered }" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.last-post-block {
  border-radius: 12px;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 0.3rem;
  gap: 0.5rem;
  color: var(--color-secondary);
  background: var(--color-primary);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  transition: all 0.6s cubic-bezier(0.215, 0.61, 0.355, 1);

  &__item {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    background: var(--color-secondary);
    border-radius: 8px;
    padding: 1.5rem;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    overflow: hidden;
  }
  
  &__item-badge {
    position: absolute;
    top: 0;
    right: 1.5rem;
    background: var(--color-sakura);
    color: white;
    font-size: 1rem;
    font-weight: 700;
    padding: 0.5rem 1rem;
    border-radius: 0 0 8px 8px;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  &__item-header {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 1rem;
    width: 100%;
  }

  &__item-title {
    color: var(--color-primary);
    font-weight: 800;
    font-size: 1.7rem;
    line-height: 1.2;
    transition: color 0.3s ease;
    
    &:hover {
      color: var(--color-sakura);
    }
  }

  &__item-text {
    color: var(--color-primary);
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.5;
    margin-bottom: 1rem;
    opacity: 0.8;
  }
  
  &__item-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: auto;
  }

  &__item-date {
    font-size: 0.85rem;
    color: var(--color-primary);
    opacity: 0.7;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.3rem;
  }
  
  &__read-more {
    font-size: 0.9rem;
    font-weight: 600;
    color: var(--color-sakura);
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 0.3rem;
    transition: color 0.3s ease;
    
    &:hover {
      color: var(--color-primary);
    }
  }
}
</style>