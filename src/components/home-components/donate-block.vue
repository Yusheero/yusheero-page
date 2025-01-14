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
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  padding: 24px;
  color: var(--color-secondary);
  background: var(--color-primary);

  &__button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 40px;
    background: var(--color-orange);
    opacity: 0.9;
    border-radius: 4px;
    font-size: 16px;
    text-decoration: none;
    color: var(--color-secondary);
    border: 2px solid var(--color-primary);

    &:hover {
      background: var(--color-primary-light);
      cursor: pointer;
    }
  }
}
</style>