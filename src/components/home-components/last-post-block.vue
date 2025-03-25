<script setup>
import { ArrowRight, Calendar, Clock, Hash } from 'lucide-vue-next';
import { ref, onMounted, computed } from 'vue';
import data from '@/data/blog.json';

const blogData = data.data;
const DataLength = blogData.length;
const blogLastPost = blogData[DataLength - 1];

// Для анимации текста
const isVisible = ref(false);
const isHovered = ref(false);

// Генерируем теги на основе заголовка и текста поста
const generateTags = (post) => {
  if (!post) return [];
  
  // Создаем теги на основе ключевых слов из заголовка и текста
  const combinedText = `${post.title} ${post.text}`.toLowerCase();
  
  // Список возможных ключевых слов/тем
  const possibleTags = [
    { keyword: 'design', tag: 'Design' },
    { keyword: 'redisign', tag: 'Redesign' },
    { keyword: 'layout', tag: 'Layout' },
    { keyword: 'model', tag: 'Model' },
    { keyword: 'threejs', tag: '3D' },
    { keyword: 'blog', tag: 'Blog' },
    { keyword: 'library', tag: 'Library' },
    { keyword: 'mobile', tag: 'Mobile' },
    { keyword: 'clean', tag: 'Clean Code' },
    { keyword: 'modern', tag: 'Modern' },
    { keyword: 'structure', tag: 'Structure' },
    { keyword: 'nuxt', tag: 'Nuxt.js' },
    { keyword: 'color', tag: 'Colors' }
  ];
  
  // Находим подходящие теги
  const tags = possibleTags
    .filter(item => combinedText.includes(item.keyword))
    .map(item => item.tag);
  
  // Если тегов нет или их мало, добавляем "Development" как общий тег
  if (tags.length < 2) {
    tags.push('Development');
  }
  
  // Возвращаем не более 3 тегов
  return tags.slice(0, 3);
};

// Форматирование даты
const formatDate = (dateString) => {
  // Проверяем, является ли входная строка корректной датой
  if (!dateString) return 'Нет даты';
  
  try {
    // Предполагаем, что дата может быть в формате "DD.MM.YYYY" или ISO
    let date;
    
    // Проверяем, если дата в формате "DD.MM.YYYY"
    if (dateString.includes('.')) {
      const [day, month, year] = dateString.split('.');
      date = new Date(`${year}-${month}-${day}`);
    } else {
      date = new Date(dateString);
    }
    
    // Проверяем, валидная ли дата
    if (isNaN(date.getTime())) {
      return dateString; // Возвращаем исходную строку, если дата невалидна
    }
    
    // Форматируем дату
    const options = { day: 'numeric', month: 'short', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  } catch (error) {
    console.error('Ошибка при форматировании даты:', error);
    return dateString; // Возвращаем исходную строку в случае ошибки
  }
};

// Создание обрезанной версии текста
const truncateText = (text, length = 120) => {
  if (!text) return '';
  if (text.length <= length) return text;
  return text.substring(0, length) + '...';
};

// Используем безопасное получение даты и текста
const formattedDate = formatDate(blogLastPost?.date || '');
const truncatedText = truncateText(blogLastPost?.text || '');
const postTags = computed(() => generateTags(blogLastPost));

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
      
      <div class="last-post-block__tags">
        <div 
          v-for="(tag, index) in postTags" 
          :key="index"
          class="last-post-block__tag"
        >
          <Hash size="12" strokeWidth="2.5" class="last-post-block__tag-icon" />
          {{ tag }}
        </div>
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
    gap: 1rem;
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
    background: var(--color-primary);
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
    font-size: 2rem;
    line-height: 1.2;
    transition: color 0.3s ease;
  }

  &__item-text {
    color: var(--color-primary);
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.5;
    margin-bottom: 1rem;
    opacity: 0.8;
  }
  
  &__tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: auto;
    width: 100%;
  }
  
  &__tag {
    display: flex;
    align-items: center;
    gap: 0.1rem;
    background-color: rgba(var(--color-sakura-rgb), 0.1);
    color: var(--color-sakura);
    font-size: 0.8rem;
    font-weight: 600;
    border-radius: 4px;
    transition: all 0.2s ease;
    
    &-icon {
      opacity: 0.7;
    }
  }
  
  &__item-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
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