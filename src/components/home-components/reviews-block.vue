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
    <div class="reviews-block__content">
      <div class="reviews-block__header">
        <h2 class="reviews-block__title">{{ reviewsLastPost.name }}</h2>
        <div class="reviews-block__badge">
          <span>Review</span>
        </div>
      </div>
      
      <div class="reviews-block__body">
        <p class="reviews-block__text">{{ truncatedText }}</p>
      </div>
      
      <div class="reviews-block__footer">
        <div class="reviews-block__date">
          <Calendar size="14" class="reviews-block__icon" />
          <span>{{ formattedDate }}</span>
        </div>
        
        <div class="reviews-block__links">
          <router-link 
            class="reviews-block__link" 
            :to="{name: 'Reviews'}"
          >
            more
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.reviews-block {
  position: relative;
  width: 100%;
  height: 100%;
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
    padding: 14px;
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
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 12px;
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
  
  &__icon {
    color: #4FFA9A;
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