<script setup></script>

<template>
  <div class="about-block">
    <div class="about-block__titles">
      <h1 class="about-block__title">Hello, I am Yusheero</h1>
      <h2 class="about-block__subtitle">Frontend Developer</h2>
    </div>
    <div class="about-block__location"><img src="./images/map-pinned.svg" alt="">Vladivostok, Russia</div>
  </div>
</template>

<style lang="scss">
.about-block {
  height: 100%;
  width: 100%;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 12px;
  padding: 24px;
  background: var(--color-secondary);
  color: var(--color-primary);

  &__titles {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 12px;
  }

  &__title {
    font-size: 32px;
  }

  &__subtitle {
    font-size: 20px;
  }

  &__location {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 6px;
  }
}
</style>