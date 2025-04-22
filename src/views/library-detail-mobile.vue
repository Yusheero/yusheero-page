<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import NavigationMobile from '@/components/navigation/navigation-mobile.vue';
import ViewsTemplateMobile from '@/components/views-template/views-template-mobile.vue';
import data from '@/data/library.json';
import { ChevronLeft } from 'lucide-vue-next';

const route = useRoute();
const router = useRouter();
const categoryId = route.params.category;
const categoryData = ref(null);
const items = ref([]);

// Возврат на предыдущую страницу
const goBack = () => {
  router.push('/library');
};

onMounted(() => {
  // Находим категорию по id из параметров маршрута
  categoryData.value = data.find(category => category.id === categoryId);
  
  // Если категория найдена, получаем её элементы
  if (categoryData.value) {
    items.value = categoryData.value.items || [];
  } else {
    console.error('Category not found:', categoryId);
  }
});
</script>

<template>
  <ViewsTemplateMobile>
    <div class="library-detail-mobile">
      <div class="library-detail-mobile__header">
        <button class="back-button" @click="goBack">
          <ChevronLeft size="24" />
          <span>Back</span>
        </button>
        <NavigationMobile class="navigation" />
      </div>
      
      <div class="library-detail-mobile__content">
        <div v-if="items.length > 0" class="items-grid">
          <div v-for="(item, index) in items" :key="index" class="library-item">
            <div class="library-item__content">
              <div class="library-item__title">{{ item.title }}</div>
              <div class="library-item__description">{{ item.description }}</div>
              
              <div v-if="item.link" class="library-item__link-container">
                <a :href="item.link" target="_blank" rel="noopener noreferrer" class="library-item__link">
                  Visit Resource
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div v-else class="empty-state">
          <p>No items found in this category.</p>
        </div>
      </div>
    </div>
  </ViewsTemplateMobile>
</template>

<style lang="scss" scoped>
@import '@/assets/style/style.scss';

// Переменные терминального стиля
$terminal-green: #4afa9a;
$terminal-dark-green: #052505;
$terminal-frame: rgba(79, 250, 154, 0.3);
$terminal-text: #4afa9a;
$terminal-background: rgba(10, 26, 18, 0.95);
$terminal-highlight: rgba(79, 250, 154, 0.15);
$terminal-button: rgba(79, 250, 154, 0.2);
$terminal-button-hover: rgba(79, 250, 154, 0.4);

.library-detail-mobile {
    padding: 64px 8px 8px 8px;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    gap: 12px;
  
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    
    .back-button {
      display: flex;
      align-items: center;
      gap: 4px;
      background: $terminal-button;
      border: 1px solid $terminal-frame;
      color: $terminal-text;
      border-radius: 6px;
      padding: 8px 12px;
      font-size: 14px;
      cursor: pointer;
      transition: all 0.2s ease;
      
      &:active {
        background: $terminal-button-hover;
        transform: scale(0.98);
      }
    }
    
    .navigation {
      height: 40px;
    }
  }
  
  &__title {
    width: 100%;
    border-radius: 10px;
    text-align: center;
    padding: 16px;
    background: $terminal-background;
    border: 1px solid $terminal-frame;
    color: $terminal-text;
    font-size: 18px;
    font-weight: bold;
    box-shadow: 0 0 8px rgba(79, 250, 154, 0.2);
  }
  
  &__content {
    flex-grow: 1;
    width: 100%;
    border-radius: 10px;
    background: $terminal-background;
    border: 1px solid $terminal-frame;
    box-shadow: 0 0 8px rgba(79, 250, 154, 0.2);
    padding: 8px;
    overflow-y: auto;
    
    /* Стилизация скроллбара */
    &::-webkit-scrollbar {
      width: 6px;
    }
    
    &::-webkit-scrollbar-track {
      background: rgba(79, 250, 154, 0.1);
      border-radius: 4px;
    }
    
    &::-webkit-scrollbar-thumb {
      background: rgba(79, 250, 154, 0.5);
      border-radius: 4px;
      
      &:hover {
        background: rgba(79, 250, 154, 0.7);
      }
    }
  }
}

.items-grid {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.library-item {
  background: rgba(10, 26, 18, 0.7);
  border: 1px solid $terminal-frame;
  border-radius: 8px;
  overflow: hidden;
  
  &__content {
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  
  &__title {
    font-size: 16px;
    font-weight: 600;
    color: $terminal-text;
    text-shadow: 0 0 5px rgba(79, 250, 154, 0.3);
  }
  
  &__description {
    font-size: 14px;
    color: rgba(255, 255, 255, 0.8);
    line-height: 1.4;
  }
  
  &__link-container {
    margin-top: 8px;
  }
  
  &__link {
    display: inline-block;
    padding: 8px 16px;
    background: $terminal-button;
    border: 1px solid $terminal-frame;
    border-radius: 4px;
    color: $terminal-text;
    text-decoration: none;
    font-size: 14px;
    transition: all 0.2s ease;
    
    &:active {
      background: $terminal-button-hover;
      transform: scale(0.98);
    }
  }
}

.empty-state {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  color: rgba(255, 255, 255, 0.7);
  font-size: 14px;
}
</style> 