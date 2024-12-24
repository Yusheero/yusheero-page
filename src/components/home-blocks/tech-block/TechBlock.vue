<script setup>
import { ref } from 'vue'
import { useKeenSlider } from 'keen-slider/vue'

const [container, slider] = useKeenSlider({ 
  loop: true,
  initial: 0,
  slides: {
    perView: 14,
    spacing: 12
  },
},
[
        // add plugins here
])
</script>

<template>
  <div class="tech-block">
    <div ref="container" class="keen-slider">
      <div class="keen-slider__slide keen-slider__slide-js number-slide1"></div>
      <div class="keen-slider__slide keen-slider__slide-ts number-slide2"></div>
      <div class="keen-slider__slide keen-slider__slide-vite number-slide3"></div>
      <div class="keen-slider__slide number-slide4">Vue</div>
      <div class="keen-slider__slide number-slide5">HTML</div>
      <div class="keen-slider__slide number-slide6">CSS</div>
      <div class="keen-slider__slide number-slide6">Sass</div>
      <div class="keen-slider__slide number-slide6">Router</div>
      <div class="keen-slider__slide number-slide6">Pinia</div>
      <div class="keen-slider__slide number-slide6">NPM</div>
      <div class="keen-slider__slide number-slide6">Git</div>
      <div class="keen-slider__slide number-slide6">NodeJS</div>
      <div class="keen-slider__slide number-slide6">ThreeJS</div>
      <div class="keen-slider__slide number-slide6">ThreeJS</div>
      <div class="keen-slider__slide number-slide6">ThreeJS</div>
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
  gap: 12px;
  padding: 10px;
  color: var(--color-secondary);
  border: var(--color-secondary) solid 2px;
}

.image {
  width: 60px;
  height: 60px;
}

.keen-slider__slide {
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--color-secondary);
  border-radius: 8px;
  height: 76px;
  color: var(--color-primary);
  font-size: 20px;

  &-js {
    background-image: url('./images/js.png');
    background-size: cover;
  }

  &-ts {
    background-image: url('./images/typescript.png');
    background-size: cover;
  }

  &-vite {
    background-image: url('./images/vite.png');
    background-size: cover;
  }
    
}
</style>