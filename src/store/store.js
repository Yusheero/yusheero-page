import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useStore = defineStore('store',() => {
  const isMobile = ref('false');
  const noScene = ref('true');

  return { isMobile, noScene }
})