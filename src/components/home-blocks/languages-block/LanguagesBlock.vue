<script setup>
import { useStore } from '../../../store/store';
import LanguagesBlockMobile from './language-block-mobile/LanguagesBlockMobile.vue'

const store = useStore()
</script>

<template>
  <LanguagesBlockMobile v-if="store.isMobile" />
  <div v-else class="languages-block">
    <div class="languages-block__language-main">Russian</div>
    <div class="languages-block__language-second">
      <div class="languages-block__language english">English</div>
      <div class="languages-block__language japanese">Japanese</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.languages-block {
  height: 100%;
  width: 100%;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 4px;
  padding: 4px;
  background: rgb(255, 255, 255, 0.25);
  color: var(--color-primary);

  &__language-main {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    background: var(--color-primary);
    color: var(--color-secondary);
  }

  &__language-second {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4px;

    .english {
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 8px;
      background: var(--color-primary);
      color: var(--color-secondary);
    }

    .japanese {
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 8px;
      background: var(--color-primary);
      color: var(--color-secondary);
    }
  }
}
</style>