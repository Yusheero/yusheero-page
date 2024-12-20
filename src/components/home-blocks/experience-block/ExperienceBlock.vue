<script setup>
import ExperienceItem from './experience-item/ExperienceItem.vue';
</script>

<template>
  <div class="experience-block">
    <ExperienceItem 
      :company="'DNS Technologies'"
      :job="'Technical support specialist'"
      :dateStart="'18 August 2023'"
      :dateEnd="'18 February 2024'"
    />
    <ExperienceItem
      :company="'DNS Technologies'"
      :job="'Frontend Developer'"
      :dateStart="'18 February 2024'"
      :dateEnd="'Now'"
    />
  </div>
</template>

<style lang="scss">
.experience-block {
  height: 100%;
  width: 100%;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 8px;
  background: var(--color-secondary);
  color: var(--color-primary);
}
</style>