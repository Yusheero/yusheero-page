<script setup>
import { onBeforeMount, onMounted, onUnmounted } from 'vue'
import { useStore } from '@/store/store';

const store = useStore();

const onResize = () => {
  store.isMobile = window.innerWidth <= 768
}

onMounted(() => {
  window.addEventListener('resize', onResize);
})

onUnmounted(() => { 
  window.removeEventListener('resize', onResize); 
})

onBeforeMount(() => {
  store.isMobile = window.innerWidth <= 768
  console.log('before mount', store.isMobile);
})
</script>

<template>
  <main class="main">
    <Router-view />
  </main>
</template>

<style lang="scss" scoped>
.main {
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Gabarito", serif;
  font-weight: 600;
  font-size: 22px;
  background: var(--color-primary);
}

@media (max-width: 768px) {
  .main {
    height: 100%;
  }
}
</style>
