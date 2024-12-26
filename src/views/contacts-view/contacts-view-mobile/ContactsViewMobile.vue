<script setup>
import Navigation from '../../../components/navigation/Navigation.vue';
</script>

<template>
  <div class="page-container">
    <div class="contacts-view-mobile">
      <Navigation class="contacts-view-mobile__navigation" />
      <div class="contacts-view-mobile__title">Contacts Page</div>
      <div class="contacts-view-mobile__content">Content</div>
    </div>
  </div>
</template>

<style lang="scss">
@import '@/assets/styles/style.scss';

.contacts-view-mobile {
  width: 100%;
  padding: 16px;
  color: var(--color-secondary);
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>