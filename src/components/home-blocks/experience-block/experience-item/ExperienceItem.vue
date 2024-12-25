<script setup>
defineProps({
  company: String,
  job: String,
  dateStart: String,
  dateEnd: String
})
</script>

<template>
  <div class="experience-item">
    <div class="experience-item__title">{{ company }}</div>
    <div class="experience-item__job">{{ job }}</div>
    <div class="experience-item__date">{{ dateStart }} - {{ dateEnd }}</div>
  </div>
</template>

<style lang="scss">
.experience-item {
  height: 100%;
  width: 100%;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 12px;
  padding: 12px;
  background: var(--color-primary);
  color: var(--color-secondary);

  &__title {
    font-size: 32px;
  }

  &__job {
    font-size: 18px;
  }

  &__date {
    font-size: 12px;
  }
}

@media (max-width: 768px) {

}
</style>