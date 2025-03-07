<script setup>

</script>

<template>
  <div class="plans">
    <router-link class="plans__button" to="/plans">
      plans
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
.plans {
  height: 3rem;
  width: 7rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 0.25rem;

  &__button {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: var(--color-secondary);
    background: var(--color-primary);
    font-size: 1rem;
    border-radius: 0.25rem;

    &:hover {
      background: var(--color-primary-light);
      cursor: pointer;
    }
  }
}
</style>