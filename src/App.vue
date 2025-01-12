<script setup>
import { ref, onBeforeMount, onMounted, onUnmounted } from 'vue'
import { useStore } from '@/store/store';
import TWallpaper from '@twallpaper/vue'
import '@twallpaper/vue/css'

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

/** Background приложения */
const enabled = ref(true)
const twallpaper = ref()
const options = ref({
  colors: [
    '#d05baa',
    '#291046',
    '#3c2693',
    '#7a213d'
  ],
  fps: 80,
  tails: 300,
  pattern: {
    mask: false,
  }
})
</script>

<template>
  <main class="main">
    <!-- <TWallpaper ref="twallpaper" v-if="enabled" :options="options" /> -->
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
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 22px;
  background: var(--color-white);
}

@media (max-width: 768px) {
  .main {
    height: 100%;
  }
}
</style>
