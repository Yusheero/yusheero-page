<script setup>
import { SquareArrowOutUpRight } from 'lucide-vue-next';
import { useStore } from '../../../store/store';
import PcSpecsBlockMobile from './pc-specs-block-mobile/PcSpecsBlockMobile.vue';

const store = useStore()
</script>

<template>
  <PcSpecsBlockMobile v-if="store.isMobile" />
  <div v-else class="pc-block">
    <div class="pc-block__item">
      <div class="pc-block__item-text">
        MOTHERBOARD - GIGABYTE GA-H61M-S2PV
      </div>
      <a 
        class="pc-block__button"
        href="https://www.dns-shop.ru/product/f58b8ed34d4f526f/plata-gigabyte-lga1155-h61-ga-h61m-s2pv-2xddr3-1xpci-ex16-dvidsub-sata2-usb2-matx/"
      >
      <SquareArrowOutUpRight /></a>
    </div>

    <div class="pc-block__item">
      <div class="pc-block__item-text">
        CPU - i3-3240
      </div>
      <a 
        class="pc-block__button"
        href="https://www.dns-shop.ru/product/ae1e1278e5118499/processor-intel-core-i3-3240-34ghz--3mb-2xddr3-1333-hdgraphics2500-tdp-55w-lga1155--oem/"
      >
      <SquareArrowOutUpRight /></a>
    </div>

    <div class="pc-block__item">
      <div class="pc-block__item-text">
        RAM - FURY DDR3 2x8GB
      </div>
      <a 
        class="pc-block__button"
        href="https://www.dns-shop.ru/product/02f2e1ace0813120/operativnaa-pamat-kingston-hyperx-fury-black-series/"
      >
      <SquareArrowOutUpRight /></a>
    </div>

    <div class="pc-block__item">
      <div class="pc-block__item-text">
        VIDEOCARD - Gigabyte NVIDIA GeForce GT 710
      </div>
      <a 
        class="pc-block__button"
        href="https://www.dns-shop.ru/product/d03b607639273330/videokarta-gigabyte-geforce-gt-710-lp-gv-n710d5-2gl/"
      >
      <SquareArrowOutUpRight /></a>
    </div>

    <div class="pc-block__item">
      <div class="pc-block__item-text">
        KEYBOARD - RK R75PRO
      </div>
      <a 
        class="pc-block__button"
        href="https://www.dns-shop.ru/product/afc2b197b1515d0f/klaviatura-provodnaa-royal-kludge-r75/"
      >
      <SquareArrowOutUpRight /></a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.pc-block {
  height: 100%;
  width: 100%;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 4px;
  gap: 4px;
  background: rgb(255, 255, 255, 0.25);
  color: var(--color-primary);
  font-size: 14px;
  line-height: 1.2;

  &__item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 6px;
    width: 100%;
    height: 50px;
    background: var(--color-primary);
    color: var(--color-secondary);
    border-radius: 4px;
  }

  &__item-text {
    width: 80%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0 8px;
  }

  &__button {
    border-left: 1px solid #fff;
    text-decoration: none;
    color: var(--color-secondary);
    height: 100%;
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;

    &:active {
      text-decoration: none;
      color: var(--color-secondary);
    }

    &:hover {
      cursor: pointer;
      color: #c35aca;
      background: #fff;
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
    }
  }
}
</style>