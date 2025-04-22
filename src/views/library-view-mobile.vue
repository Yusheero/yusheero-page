<script setup>
import NavigationMobile from '@/components/navigation/navigation-mobile.vue';
import LibraryItemMobile from '@/components/library-components/library-item-mobile.vue';
import data from '@/data/library.json';

// Получаем данные библиотеки
const libraryData = data;
</script>

<template>
  <div class="library-view-mobile">
    <NavigationMobile class="library-view-mobile__navigation" />
    <div class="library-view-mobile__content">
      <div v-for="item in libraryData" :key="item.id" class="library-view-mobile__item-wrapper">
        <LibraryItemMobile 
          :data="item.items" 
          :index="item.name" 
          :route="`/library/${item.id}`"
          class="library-view-mobile__item" 
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '@/assets/style/style.scss';

// Переменные терминального стиля
$terminal-green: #4afa9a;
$terminal-dark-green: #052505;
$terminal-frame: rgba(79, 250, 154, 0.3);
$terminal-text: #4afa9a;
$terminal-background: rgba(10, 26, 18, 0.95);

.library-view-mobile {
  width: 100%;
  height: 100vh;
  display: flex;
  gap: 8px;
  flex-direction: column;
  padding: 64px 8px 8px 8px;

  &__content {
    height: 100%;
    width: 100%;
    border-radius: 10px;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    padding: 12px;
    background: $terminal-background;
    border: 1px solid $terminal-frame;
    box-shadow: 0 0 8px rgba(79, 250, 154, 0.2);
    color: $terminal-text;
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

  &__header {
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }
  
  &__item-wrapper {
    width: 100%;
    margin-bottom: 8px;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
  
  &__item {
    width: 100%;
    height: 100%;
  }
}
</style>
