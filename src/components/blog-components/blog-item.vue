<script setup>
import { computed } from 'vue';
import { Calendar, Tag } from 'lucide-vue-next';

// Типизированные пропсы
const props = defineProps({
  blogData: {
    type: Object,
    required: true
  }
});

// Обрезаем длинные названия
const truncatedTitle = computed(() => {
  if (!props.blogData.title) return '';
  return props.blogData.title.length > 25 
    ? props.blogData.title.slice(0, 25) + '...' 
    : props.blogData.title;
});

// Добавляем некоторые теги по умолчанию, если их нет в данных
const defaultTags = computed(() => {
  // Генерируем простые теги для блога
  return ['Blog', 'Article', 'Guide'];
});
</script>

<template>
  <div class="blog-item">
    <div class="blog-item__content">
      <div class="blog-item__header">
        <h2 class="blog-item__title" :title="blogData.title">
          {{ truncatedTitle }}
        </h2>
      </div>
      <div class="blog-item__body">
        <p class="blog-item__text">{{ blogData.text }}</p>
      </div>
      
      <div class="blog-item__tags">
        <span class="tag" v-for="(tag, index) in defaultTags" :key="index">
          {{ tag }}
        </span>
      </div>
      
      <div class="blog-item__footer">
        <div v-if="blogData.date" class="blog-item__date">
          <Calendar size="14" />
          <span>{{ blogData.date }}</span>
        </div>
        
        <div class="blog-item__links">
          <a 
            class="blog-item__link" 
            href="#" 
            target="_blank"
            rel="noopener noreferrer"
            @click.prevent
          >
            read
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/style.scss';

.blog-item {
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
    min-height: 40px;
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