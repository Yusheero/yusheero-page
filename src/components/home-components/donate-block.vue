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
  width: 100%;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  color: var(--color-secondary);
  background: var(--color-primary);
  font-size: 1rem;

  &__button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 6rem;
    height: 3rem;
    background: var(--color-primary);
    opacity: 0.9;
    border-radius: 0.5rem;
    font-size: 1rem;
    text-decoration: none;
    color: var(--color-secondary);
    border: 2px solid var(--color-secondary);

    &:hover {
      background: var(--color-primary-light);
      cursor: pointer;
    }
  }
}
</style>