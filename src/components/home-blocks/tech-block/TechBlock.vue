<script setup>
import { ref } from 'vue'
import { useKeenSlider } from 'keen-slider/vue'

const [container, slider] = useKeenSlider({ 
  loop: true,
  initial: 0,
  slides: {
    perView: 11,
    spacing: 10
  },
},
[
        // add plugins here
])
</script>

<template>
  <div class="tech-block">
    <div ref="container" class="keen-slider">
      <div class="keen-slider__slide number-slide1">JS</div>
      <div class="keen-slider__slide number-slide2">TS</div>
      <div class="keen-slider__slide number-slide3">Vite</div>
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
    </div>
  </div>
</template>

<style lang="scss">
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
}
</style>