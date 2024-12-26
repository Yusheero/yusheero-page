<script setup>
import { useKeenSlider } from 'keen-slider/vue'
import TechBlockMobile from '@/components/home-blocks/tech-block/tech-block-mobile/TechBlockMobile.vue';
import { useStore } from '@/store/store';

const store = useStore()

const animation = { duration: 15000, easing: (t) => t }

const [container, slider] = useKeenSlider({ 
  loop: true,
  initial: 0,
  slides: {
    perView: 11,
    spacing: 12
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
},
[
        // add plugins here
])
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
  height: 100px;
  color: var(--color-primary);
  font-size: 20px;

  &-js {
    background-image: url('./images/js.png');
    background-size: cover;
  }

  &-ts {
    background-image: url('./images/ts.png');
    background-size: cover;
  }

  &-vite {
    background-image: url('./images/vite.png');
    background-size: cover;
  }

  &-vue {
    background-image: url('./images/vue.png');
    background-size: cover;
  }

  &-sass {
    background-image: url('./images/sass.png');
    background-size: cover;
  }

  &-nuxt {
    background-image: url('./images/nuxt.png');
    background-size: cover;
  }

  &-router {
    background-image: url('./images/router.png');
    background-size: cover;
  }

  &-pinia {
    background-image: url('./images/pinia.png');
    background-size: cover;
  }

  &-npm {
    background-image: url('./images/npm.png');
    background-size: cover;
  }

  &-git {
    background-image: url('./images/git.png');
    background-size: cover;
  }

  &-nodejs {
    background-image: url('./images/nodejs.png');
    background-size: cover;
  }

  &-threejs {
    background-image: url('./images/threejs.png');
    background-size: cover;
  }  
}
</style>