<script setup>

</script>
<template>
  <div ref="beerCanvas" class="donate-block">
    <div class="donate-block__title">BUY ME A BEER</div>
    <a class="donate-block__button" href="https://donatty.com/yusheero">SURE!</a>
  </div>
</template>

<style lang="scss" scoped>
.donate-block {
  height: 100%;
  min-height: 200px;
  width: 100%;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  color: var(--color-secondary);
  background: var(--color-primary);

  &__button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 10rem;
    height: 3rem;
    background: var(--color-orange);
    opacity: 0.9;
    border-radius: 0.3rem;
    font-size: 1rem;
    text-decoration: none;
    color: var(--color-secondary);

    &:hover {
      background: var(--color-primary-light);
      cursor: pointer;
    }
  }
}
</style>