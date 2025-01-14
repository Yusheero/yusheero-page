<script setup>
import { useKeenSlider } from 'keen-slider/vue'
import TechBlockMobile from '@/components/home-components/tech-block-mobile.vue';
import { useStore } from '@/store/store';

const store = useStore()

const animation = { duration: 15000, easing: (t) => t }

const [container, slider] = useKeenSlider({ 
  loop: true,
  initial: 0,
  slides: {
    perView: 11,
    spacing: 8
  },
  created(s) {
    s.moveToIdx(5, true, animation)
  },
  updated(s) {
    s.moveToIdx(s.track.details.abs + 5, true, animation)
  },
  animationEnded(s) {
    s.moveToIdx(s.track.details.abs + 5, true, animation)
  },
})
</script>

<template>
  <TechBlockMobile v-if="store.isMobile" />
  <div v-else class="tech-block">
    <div ref="container" class="keen-slider">
      <div class="keen-slider__slide keen-slider__slide-js number-slide1"></div>
      <div class="keen-slider__slide keen-slider__slide-ts number-slide2"></div>
      <div class="keen-slider__slide keen-slider__slide-vite number-slide3"></div>
      <div class="keen-slider__slide keen-slider__slide-vue number-slide4"></div>
      <div class="keen-slider__slide keen-slider__slide-sass number-slide5"></div>
      <div class="keen-slider__slide keen-slider__slide-nuxt number-slide6"></div>
      <div class="keen-slider__slide keen-slider__slide-router number-slide6"></div>
      <div class="keen-slider__slide keen-slider__slide-pinia number-slide6"></div>
      <div class="keen-slider__slide keen-slider__slide-npm number-slide6"></div>
      <div class="keen-slider__slide keen-slider__slide-git number-slide6"></div>
      <div class="keen-slider__slide keen-slider__slide-nodejs number-slide6"></div>
      <div class="keen-slider__slide keen-slider__slide-threejs number-slide6"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import url('keen-slider/keen-slider.css');

.tech-block {
  height: 100%;
  width: 100%;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
  color: var(--color-secondary);
}

.keen-slider__slide {
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--color-secondary);
  border-radius: 8px;
  height: 105px;
  color: var(--color-primary);
  font-size: 20px;

  &-js {
    background-image: url('@/assets/images/js.png');
    background-size: cover;
  }

  &-ts {
    background-image: url('@/assets/images/ts.png');
    background-size: cover;
  }

  &-vite {
    background-image: url('@/assets/images/vite.png');
    background-size: cover;
  }

  &-vue {
    background-image: url('@/assets/images/vue.png');
    background-size: cover;
  }

  &-sass {
    background-image: url('@/assets/images/sass.png');
    background-size: cover;
  }

  &-nuxt {
    background-image: url('@/assets/images/nuxt.png');
    background-size: cover;
  }

  &-router {
    background-image: url('@/assets/images/router.png');
    background-size: cover;
  }

  &-pinia {
    background-image: url('@/assets/images/pinia.png');
    background-size: cover;
  }

  &-npm {
    background-image: url('@/assets/images/npm.png');
    background-size: cover;
  }

  &-git {
    background-image: url('@/assets/images/git.png');
    background-size: cover;
  }

  &-nodejs {
    background-image: url('@/assets/images/nodejs.png');
    background-size: cover;
  }

  &-threejs {
    background-image: url('@/assets/images/threejs.png');
    background-size: cover;
  }  
}
</style>