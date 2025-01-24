<script setup>
import { ArrowRight } from 'lucide-vue-next';

const props = defineProps({
  data: Array,
  index: String,
})
</script>

<template>
  <div class="library-item">
    <div class="library-item__item">
      <div class="library-item__title">{{ props.index }}</div>
      <div class="library-item__names">
        <p v-for="data in data" class="library-item__name">{{ data.title }}</p>
      </div>
    </div>
    <div class="library-item__button"><ArrowRight color="black" size="30" stroke-width="1.5" /></div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/style.scss';

.library-item {
  width: 100%;
  background: var(--color-secondary);
  border-radius: 6px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 12px;

  &__item {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 12px;
    font-size: 16px;
    color: var(--color-secondary);
    border-radius: 6px;
    text-align: center;
  }

  &__title {
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 32px;
    color: var(--color-primary);
  }

  &__names {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    padding: 4px;
  }

  &__name {
    color: var(--color-secondary);
    background: var(--color-primary);
    padding: 4px 14px;
    border-radius: 4px;
    font-size: 14px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 3rem;
  }

  &__button {
    width: 7rem;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-left: 2px solid var(--color-primary);
    background: var(--color-sakura);
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;

    &:hover {
      background: var(--color-primary-light);
      cursor: pointer;
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }
}
</style>