<script setup>
import data from '@/data/plans.json'

const plansData = data.data;
const actualPlansData = plansData.filter((item) => {
  return item.status === 'inwork'
})
</script>

<template>
  <div class="plans-block">
    <div v-for="data in actualPlansData" class="plans-block__item">
      <h2 class="plans-block__title">{{ data.title }}</h2>
      <p>{{'create date: '}} {{ data.date }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.plans-block {
  height: 100%;
  width: 100%;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 4px;
  padding: 4px;
  background: #1f1f23;
  color: var(--color-secondary);

  &__item {
    padding: 8px;
    font-size: 10px;
    width: 100%;
    height: 33%;
    background: rgb(255, 255, 255, 0.25);
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    gap: 4px;
  }

  &__title {
    font-size: 16px;
  }
}
</style>