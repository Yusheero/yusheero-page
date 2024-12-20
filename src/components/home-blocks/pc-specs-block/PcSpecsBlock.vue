<script setup>
import { SquareArrowOutUpRight } from 'lucide-vue-next';
</script>

<template>
  <div class="pc-block">
    <div class="pc-block__item">
      MOTHERBOARD - GIGABYTE GA-H61M-S2PV
      <a 
        class="pc-block__button" 
        href="https://www.dns-shop.ru/product/f58b8ed34d4f526f/plata-gigabyte-lga1155-h61-ga-h61m-s2pv-2xddr3-1xpci-ex16-dvidsub-sata2-usb2-matx/"
      >
      <SquareArrowOutUpRight /></a>
    </div>

    <div class="pc-block__item">
      CPU - i3-3240
      <a 
        class="pc-block__button"
        href="https://www.dns-shop.ru/product/ae1e1278e5118499/processor-intel-core-i3-3240-34ghz--3mb-2xddr3-1333-hdgraphics2500-tdp-55w-lga1155--oem/"
      >
      <SquareArrowOutUpRight /></a>
    </div>

    <div class="pc-block__item">
      RAM - FURY DDR3 2x8GB
      <a 
        class="pc-block__button"
        href="https://www.dns-shop.ru/product/02f2e1ace0813120/operativnaa-pamat-kingston-hyperx-fury-black-series/"
      >
      <SquareArrowOutUpRight /></a>
    </div>

    <div class="pc-block__item">
      VIDEOCARD - Gigabyte NVIDIA GeForce GT 710
      <a 
        class="pc-block__button"
        href="https://www.dns-shop.ru/product/d03b607639273330/videokarta-gigabyte-geforce-gt-710-lp-gv-n710d5-2gl/"
      >
      <SquareArrowOutUpRight /></a>
    </div>

    <div class="pc-block__item">
      KEYBOARD - RK R75PRO
      <a 
        class="pc-block__button"
        href="https://www.dns-shop.ru/product/afc2b197b1515d0f/klaviatura-provodnaa-royal-kludge-r75/"
      >
      <SquareArrowOutUpRight /></a>
    </div>
  </div>
</template>

<style lang="scss">
.pc-block {
  height: 100%;
  width: 100%;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 8px;
  background: var(--color-secondary);
  color: var(--color-primary);
  font-size: 14px;
  line-height: 1.1;

  &__item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 6px;
    width: 100%;
    background: var(--color-primary);
    color: var(--color-secondary);
    padding: 6px;
    border-radius: 4px;
  }

  &__button {
    text-decoration: none;
    color: var(--color-secondary);

    &:active {
      text-decoration: none;
      color: var(--color-secondary);
    }

    &:hover {
      cursor: pointer;
      color: #c35aca;
    }
  }
}
</style>