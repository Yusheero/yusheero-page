<script setup>
import { SquareArrowOutUpRight } from 'lucide-vue-next';

const props = defineProps({
  data: Array,
  index: String,
})
</script>

<template>
  <div class="library-item">
    <div class="library-item__title">{{ props.index }}</div>
    <div class="library-item__item" v-for="data in props.data">
      <p class="library-item__item-title">{{ data.title }}</p>
      <div class="library-item__item-info">
        <p v-if="data.genre" class="library-item__item-genre">{{ data.genre }}</p>
        <a v-if="data.link" class="library-item__item-link" :href="data.link"><SquareArrowOutUpRight color="black" size="18" stroke-width="1.5" /></a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/style.scss';

.library-item {
  padding: 4px;
  height: 100%;
  width: 25%;
  background: var(--color-secondary);
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 4px;

  &__title {
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 32px;
    color: var(--color-primary);
  }

  &__item {
    height: 70px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
    font-size: 16px;
    background: var(--color-orange);
    color: var(--color-primary);
    padding: 8px 8px;
    border-radius: 6px;
    width: 100%;
    text-align: center;
    border: 1px solid var(--color-primary);
  }

  &__item-info {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }
}
</style>