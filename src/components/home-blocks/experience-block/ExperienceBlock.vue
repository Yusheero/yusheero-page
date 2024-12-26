<script setup>
import { useStore } from '@/store/store';
import ExperienceBlockMobile from '@/components/home-blocks/experience-block/experience-block-mobile/ExperienceBlockMobile.vue';

const store = useStore()
</script>

<template>
  <ExperienceBlockMobile v-if="store.isMobile" />
  <div v-else class="experience-block">
    <div class="experience-block__content">
      Your AD could be here, but it won't be here
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/style.scss';

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

  &__content {
    text-align: center;
    width: 50%;
    font-size: 32px;
    line-height: 1.1;
  }
}
</style>