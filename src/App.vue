<script setup>
import { ref } from 'vue'
import TWallpaper from '@twallpaper/vue'
import '@twallpaper/vue/css'

const enabled = ref(true)
const twallpaper = ref()
const options = ref({
  colors: [
    '#103969',
    '#720881',
    '#7b279c',
    '#790035'
  ],
  fps: 60,
  tails: 80,
  pattern: {
    mask: false,
  }
})
</script>

<template>
  <main class="main">
    <TWallpaper ref="twallpaper" v-if="enabled" :options="options" />
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
}
</style>
