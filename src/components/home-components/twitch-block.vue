<script setup>
import { TwitchIcon } from 'vue3-simple-icons'
</script>

<template>
  <div class="flip-container">
    <div class="flipper">
      <div class="front">
        <a class="twitch-block" href="https://www.twitch.tv/yusheero">
          <div class="twitch-block__content">
            <TwitchIcon class="twitch-block__icon" />
          </div>
        </a>
      </div>
      <div class="back">
        <a class="twitch-block" href="https://www.twitch.tv/yusheero">
          <div class="twitch-block__content">
            <div class="twitch-block__text">Watch streams on Twitch</div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.flip-container {
  perspective: 1000px;
  width: 100%;
  height: 100%;
}

.flipper {
  transition: transform 1.2s;
  transform-style: preserve-3d;
  position: relative;
  width: 100%;
  height: 100%;
  animation: smooth-flip 12s ease-in-out infinite;
}

@keyframes smooth-flip {
  0% {
    transform: rotateY(0deg);
  }
  20% {
    transform: rotateY(0deg);
  }
  30% {
    transform: rotateY(180deg);
  }
  70% {
    transform: rotateY(180deg);
  }
  80% {
    transform: rotateY(0deg);
  }
  100% {
    transform: rotateY(0deg);
  }
}

.front, .back {
  backface-visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.front {
  z-index: 2;
  transform: rotateY(0deg);
}

.back {
  transform: rotateY(180deg);
}

.twitch-block {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  overflow: hidden;
  text-decoration: none;
  
  &__content {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(10, 26, 18, 0.95);
    border: 1px solid #4FFA9A;
    border-radius: 5px;
    box-shadow: 0 0 20px rgba(79, 250, 154, 0.3);
    color: #4FFA9A;
    overflow: hidden;
  }
  
  &__icon {
    width: 64px;
    height: 64px;
    fill: #4FFA9A !important;
    filter: drop-shadow(0 0 5px rgba(79, 250, 154, 0.5));
  }

  &__text {
    color: #4FFA9A;
    font-size: 16px;
    text-align: center;
    padding: 0 15px;
    text-decoration: none;
    font-weight: 600;
    text-shadow: 0 0 5px rgba(79, 250, 154, 0.5);
  }
}
</style>