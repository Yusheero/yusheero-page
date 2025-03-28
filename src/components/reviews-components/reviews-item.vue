<script setup>
import { computed } from 'vue';
import { Calendar, Tag } from 'lucide-vue-next';

// Получаем данные отзыва
const props = defineProps({
  reviewData: Object,
});

// Обрезаем длинные имена
const truncatedName = computed(() => {
  if (!props.reviewData.name) return '';
  return props.reviewData.name.length > 25 
    ? props.reviewData.name.slice(0, 25) + '...' 
    : props.reviewData.name;
});

// Генерируем теги по умолчанию для отзывов
const defaultTags = computed(() => {
  // Базовые теги для отзывов
  return ['Review', 'Feedback', 'User'];
});
</script>

<template>
  <div class="reviews-item">
    <div class="reviews-item__content">
      <div class="reviews-item__header">
        <h2 class="reviews-item__title" :title="reviewData.name">
          {{ truncatedName }}
        </h2>
        <div class="reviews-item__badge">
          <span>Review</span>
        </div>
      </div>
      
      <div class="reviews-item__body">
        <p class="reviews-item__text">{{ reviewData.text }}</p>
      </div>
      
      <div class="reviews-item__tags">
        <span class="tag" v-for="(tag, index) in defaultTags" :key="index">
          {{ tag }}
        </span>
      </div>
      
      <div class="reviews-item__footer">
        <div class="reviews-item__date">
          <Calendar size="14" />
          <span>{{ reviewData.date }}</span>
        </div>
        
        <div class="reviews-item__links">
          <a class="reviews-item__link" href="#" @click.prevent>
            read more
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/style.scss';

// Переменные терминального стиля
$terminal-green: #4afa9a;
$terminal-dark-green: #052505;
$terminal-frame: rgba(79, 250, 154, 0.3);
$terminal-text: #4afa9a;
$terminal-background: rgba(10, 26, 18, 0.95);

.reviews-item {
  position: relative;
  width: 100%;
  height: 100%;
  cursor: pointer;
  border-radius: 5px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  overflow: hidden;
  font-family: 'GABARITO', serif;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(79, 250, 154, 0.3);
    
    .reviews-item__title {
      color: white;
    }
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
    font-family: 'GABARITO', serif;
    font-weight: 600;
    transition: color 0.2s ease;
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
    font-family: 'GABARITO', serif;
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
      font-family: 'GABARITO', serif;
      transition: background-color 0.2s ease;
      
      &:hover {
        background-color: rgba(79, 250, 154, 0.3);
      }
    }
  }
  
  &__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: auto;
    border-top: 1px solid rgba(79, 250, 154, 0.3);
    min-height: 40px;
    font-family: 'GABARITO', serif;
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
    font-family: 'GABARITO', serif;
    
    &:hover {
      background-color: rgba(79, 250, 154, 0.2);
      color: white;
    }
  }
}
</style>