<script setup>
defineProps({
  blogData: Object,
})
</script>

<template>
  <div class="blog-item">
    <h2 class="blog-item__header">{{ blogData.title }}</h2>
    <div class="blog-item__main">
      <p class="blog-item__text">{{ blogData.text }}</p>
    </div>
    <div class="blog-item__bottom">
      <p class="blog-item__date">{{ blogData.date }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/style.scss';

.blog-item {
  font-family: "Gabarito", serif;
  font-weight: 600;
  width: 100%;
  height: 100%;
  background: var(--color-purple);
  color: var(--color-primary);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 8px;

  &__header {
    width: 100%;
    height: 120px;
    font-size: 24px;
    font-weight: 700;
    color: var(--color-primary);
    border-bottom: 2px solid var(--color-primary);
    padding: 16px;
    background: var(--color-white);
    border-top-right-radius: 6px;
    border-top-left-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  &__main {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    gap: 12px;
    padding: 16px;
  }

  &__text {
    font-size: 20px;
    font-weight: 500;
  }

  &__date {
    background: var(--color-primary);
    color: var(--color-secondary);
    padding: 6px;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    height: 100%;
  }

  &__bottom {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    gap: 12px;
    padding: 16px;
  }

  &__button {
    background: var(--color-sakura);
    border-radius: 6px;
    width: 70px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      background: var(--color-primary-light);
      cursor: pointer;
    }
  }
}
</style>