<script setup>
const emit = defineEmits(['toggle']);

const toggleLanguage = () => {
  emit('toggle');
};
</script>

<template>
  <button 
    class="language-switcher" 
    @click="toggleLanguage"
    title="Сменить язык"
  >
    EN
  </button>
</template>

<style lang="scss" scoped>
.language-switcher {
  width: 100%;
  height: 36px;
  background: none;
  border: 1px solid rgba(79, 250, 154, 0.5);
  color: #4FFA9A;
  padding: 4px 8px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 12px;
  font-weight: 700;
  transition: all 0.3s ease;
  text-shadow: 0 0 5px rgba(79, 250, 154, 0.5);
  
  &:hover {
    background-color: rgba(79, 250, 154, 0.1);
    border-color: rgba(79, 250, 154, 0.8);
    box-shadow: 0 0 10px rgba(79, 250, 154, 0.3);
  }
  
  &:active {
    transform: scale(0.95);
  }
}
</style> 