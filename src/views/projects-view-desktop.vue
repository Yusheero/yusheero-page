<script setup>
import Navigation from '@/components/navigation/navigation.vue';
import ViewsTemplateDesktop from '@/components/views-template/views-template-desktop.vue'
</script>

<template>
  <ViewsTemplateDesktop>
    <div class="projects-view-desktop">
      <Navigation class="projects-view-desktop__navigation" />
      <div class="projects-view-desktop__title">Projects Page</div>
      <div class="projects-view-desktop__content">
        Content
      </div>
    </div>
  </ViewsTemplateDesktop>
</template>

<style lang="scss">
@import '@/assets/style/style.scss';

.projects-view-desktop {
  height: 100%;
  width: 100%;
  color: var(--color-secondary);
  display: grid;
  grid-template-columns: 150px 150px 100px 300px 400px 100px;
  grid-template-rows: 150px 250px 102px 200px;
  gap: 8px;
  grid-template-areas:
    "navigation title title title title title"
    "content content content content content content"
    "content content content content content content"
    "content content content content content content";

    &__navigation {
      grid-area: navigation;
    }

    &__title {
      font-size: 28px;
      height: 100%;
      width: 100%;
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 12px;
      padding: 16px;
      background: var(--color-secondary);
      color: var(--color-primary);
      grid-area: title;
    }

    &__content {
      height: 100%;
      width: 100%;
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 12px;
      padding: 16px;
      background: var(--color-primary);
      color: var(--color-secondary);
      grid-area: content;
    }
}
</style>