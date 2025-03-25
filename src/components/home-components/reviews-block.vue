<script setup>
import { ArrowRight, Calendar, Star, Quote, ThumbsUp } from 'lucide-vue-next';
import { ref, onMounted } from 'vue';

import data from '@/data/reviews.json';
const reviewsData = data.data;
const DataLength = reviewsData.length;
const reviewsLastPost = reviewsData[DataLength - 1];

// Для анимации блока
const isVisible = ref(false);
const isHovered = ref(false);

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
const truncateText = (text, length = 200) => {
  if (!text) return '';
  if (text.length <= length) return text;
  return text.substring(0, length) + '...';
};

// Используем безопасное получение даты и текста
const formattedDate = formatDate(reviewsLastPost?.date || '');
const truncatedText = truncateText(reviewsLastPost?.text || '');

// Генерируем рейтинг (для демонстрационных целей)
const rating = 4; // Предполагаем 5-звездочный рейтинг для последнего отзыва

onMounted(() => {
  // Запускаем анимацию появления после монтирования компонента
  setTimeout(() => {
    isVisible.value = true;
  }, 300);
});
</script>

<template>
  <div 
    class="reviews-block" 
    :class="{ 'is-visible': isVisible }"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <div class="reviews-block__item">
      <div class="reviews-block__item-badge">Latest Review</div>
      
      <div class="reviews-block__item-header">
        <div class="reviews-block__item-author">{{ reviewsLastPost.name }}</div>
        
        <div class="reviews-block__rating">
          <Star 
            v-for="star in rating" 
            :key="star" 
            :size="16" 
            :fill="'var(--color-yellow)'" 
            :color="'var(--color-yellow)'" 
            strokeWidth="1.5" 
          />
        </div>
      </div>
      
      <div class="reviews-block__item-text">{{ truncatedText }}</div>
      
      <div class="reviews-block__item-footer">
        <div class="reviews-block__item-date">
          <Calendar size="14" strokeWidth="2" class="reviews-block__icon" />
          <span>{{ formattedDate }}</span>
        </div>
        
        <router-link class="reviews-block__read-more" :to="{name: 'Reviews'}">
          Check more
          <ArrowRight size="14" strokeWidth="2" class="reviews-block__arrow" :class="{ 'arrow-animate': isHovered }" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.reviews-block {
  border-radius: 12px;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
    gap: 1.5rem;
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
    right: 2rem;
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
    gap: 0.5rem;
    width: 100%;
  }

  &__item-author {
    color: var(--color-sakura);
    font-weight: 800;
    font-size: 1.5rem;
    line-height: 1.2;
    position: relative;
    display: inline-block;
  }
  
  &__rating {
    display: flex;
    gap: 3px;
    margin-top: 0.2rem;
  }

  &__item-text {
    color: var(--color-primary);
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.5;
    opacity: 0.8;
    font-style: italic;
    position: relative;
    
    &::before {
      content: '"';
      font-size: 1.5rem;
      line-height: 0;
      margin-right: 0.2rem;
      vertical-align: -0.3em;
      opacity: 0.5;
    }
    
    &::after {
      content: '"';
      font-size: 1.5rem;
      line-height: 0;
      margin-left: 0.2rem;
      vertical-align: -0.3em;
      opacity: 0.5;
    }
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