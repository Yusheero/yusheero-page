<script setup>

</script>

<template>
  <div class="contacts-block-mobile">
    <div class="contacts-block-mobile__links">
      <a class="contacts-block-mobile__item contacts-block-mobile__item-telegram" href=""><img class="contacts-block-mobile__image" src="../images/telegram.svg" alt=""></a>
      <a class="contacts-block-mobile__item contacts-block-mobile__item-discord" href=""><img class="contacts-block-mobile__image" src="../images/discord.svg" alt=""></a>
      <a class="contacts-block-mobile__item contacts-block-mobile__item-github" href=""><img class="contacts-block-mobile__image" src="../images/github.svg" alt=""></a>
      <a class="contacts-block-mobile__item contacts-block-mobile__item-inst" href=""><img class="contacts-block-mobile__image" src="../images/inst.svg" alt=""></a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.contacts-block-mobile {
  height: 120px;
  width: 100%;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  color: var(--color-secondary);
  background: var(--color-secondary);
  // background: var(--color-primary);

  &__text {
    font-size: 32px;
  }

  &__links {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
  }

  &__item {
    width: 100%;
    height: 100%;
    text-decoration: none;
    color: var(--color-primary);
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-end;
    gap: 6px;
    font-size: 18px;
    border-radius: 6px;
    padding: 4px;

    &-telegram {
      background: #229ED9;
    }

    &-discord {
      background: #5865F2;
    }

    &-github {
      background: #000000;
    }

    &-inst {
      background: rgb(64,93,230);
      background: linear-gradient(145deg, rgba(64,93,230,1) 0%, rgba(131,58,180,1) 50%, rgba(225,48,108,1) 100%);
    }

    &:hover {
      opacity: 85%;
    }
  }

  &__image {
    width: 40px;
    height: 40px;
  }
}
</style>