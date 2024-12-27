<script setup>
import { SquareArrowOutUpRight } from 'lucide-vue-next';
</script>

<template>
  <div class="pc-block-mobile">
    <a class="pc-block-mobile__item" href="https://www.dns-shop.ru/product/f58b8ed34d4f526f/plata-gigabyte-lga1155-h61-ga-h61m-s2pv-2xddr3-1xpci-ex16-dvidsub-sata2-usb2-matx/">
      <p>MOTHERBOARD - GIGABYTE GA-H61M-S2PV</p>
      <SquareArrowOutUpRight class="pc-block-mobile__image" />
    </a>

    <a class="pc-block-mobile__item" href="https://www.dns-shop.ru/product/ae1e1278e5118499/processor-intel-core-i3-3240-34ghz--3mb-2xddr3-1333-hdgraphics2500-tdp-55w-lga1155--oem/">
      <p>CPU - i3-3240</p>
      <SquareArrowOutUpRight class="pc-block-mobile__image" />
    </a>

    <a class="pc-block-mobile__item" href="https://www.dns-shop.ru/product/02f2e1ace0813120/operativnaa-pamat-kingston-hyperx-fury-black-series/">
      <p>RAM - FURY DDR3 2x8GB</p>
      <SquareArrowOutUpRight class="pc-block-mobile__image" />
    </a>

    <a class="pc-block-mobile__item" href="https://www.dns-shop.ru/product/d03b607639273330/videokarta-gigabyte-geforce-gt-710-lp-gv-n710d5-2gl/">
      <p>VIDEOCARD - Gigabyte NVIDIA GeForce GT 710</p>
      <SquareArrowOutUpRight class="pc-block-mobile__image" />
    </a>

    <a class="pc-block-mobile__item" href="https://www.dns-shop.ru/product/afc2b197b1515d0f/klaviatura-provodnaa-royal-kludge-r75/">
      <p>KEYBOARD - RK R75PRO</p>
      <SquareArrowOutUpRight class="pc-block-mobile__image" />
    </a>
  </div>
</template>

<style lang="scss" scoped>
.pc-block-mobile {
  height: 100%;
  width: 100%;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 4px;
  padding: 4px;
  background: rgb(255, 255, 255, 0.25);
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
    text-decoration: none;
    font-size: 14px;
    line-height: 1.2;

    &:active {
      text-decoration: none;
    }
  }

  &__image {
    height: 32px;
    width: 32px;
  }
}
</style>