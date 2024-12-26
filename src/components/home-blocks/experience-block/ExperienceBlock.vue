<script setup>
import { useStore } from '@/store/store';
import ExperienceItem from '@/components/home-blocks/experience-block/experience-item/ExperienceItem.vue'
import ExperienceBlockMobile from '@/components/home-blocks/experience-block/experience-block-mobile/ExperienceBlockMobile.vue';

const store = useStore()
</script>

<template>
  <ExperienceBlockMobile v-if="store.isMobile" />
  <div v-else class="experience-block">
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

<style lang="scss" scoped>
.experience-block {
  height: 100%;
  width: 100%;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  padding: 4px;
  background: rgb(255, 255, 255, 0.25);
  color: var(--color-primary);
}
</style>