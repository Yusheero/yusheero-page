<script setup>
const props = defineProps({
  href: 'string',
  className: 'string',
})
</script>

<template>
  <div :class="['contacts-block-item']" :href="props.href">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.contacts-block-item {
  text-decoration: none;
  color: var(--color-primary);
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
  gap: 6px;
  font-size: 18px;
  border-radius: 6px;
  padding: 8px;

  &:hover {
    background: var(--color-primary-light);
  }

  &__telegram {
    grid-area: telegram;
    background: #229ED9;
  }

  &__discord {
    grid-area: discord;
    background: #5865F2;
  }

  &__github {
    grid-area: github;
    background: #000000;
  }

  &__inst {
    grid-area: inst;
    background: rgb(64,93,230);
    background: linear-gradient(145deg, rgba(64,93,230,1) 0%, rgba(131,58,180,1) 50%, rgba(225,48,108,1) 100%);
  }

  &__steam {
    grid-area: steam;
    background: #000000;
  }

  &__gmail {
    grid-area: gmail;
    background: #c01818;
  }

  &__linkedin {
    grid-area: linkedin;
    background: #15468b;
  }

  &__youtube {
    grid-area: youtube;
    background: #c01818;
  }
}
</style>