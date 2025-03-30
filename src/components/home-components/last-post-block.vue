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
const truncateText = (text, length = 250) => {
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
    <div class="last-post-block__content">
      <div class="last-post-block__header">
        <h2 class="last-post-block__title" :title="blogLastPost.title">
          {{ blogLastPost.title }}
        </h2>
        <div class="last-post-block__badge">
          <span>Blog</span>
        </div>
      </div>
      <div class="last-post-block__body">
        <p class="last-post-block__text">{{ truncatedText }}</p>
      </div>
      
      <div class="last-post-block__tags">
        <span class="tag" v-for="(tag, index) in postTags" :key="index">
          {{ tag }}
        </span>
      </div>
      
      <div class="last-post-block__footer">
        <div class="last-post-block__date">
          <Calendar size="14" />
          <span>{{ formattedDate }}</span>
        </div>
        
        <div class="last-post-block__links">
          <router-link 
            class="last-post-block__link" 
            :to="{name: 'Blog'}"
          >
            read
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.last-post-block {
  position: relative;
  width: 100%;
  height: 100%;
  cursor: pointer;
  border-radius: 5px;
  overflow: hidden;
  
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
    padding: 16px;
    border-bottom: 1px solid rgba(79, 250, 154, 0.3);
  }
  
  &__title {
    margin: 0;
    font-size: 20px;
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
    padding: 6px 8px;
    border-radius: 4px;
    font-size: 14px;
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
  
  &__link {
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
</style>