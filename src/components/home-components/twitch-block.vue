<script setup>
import { TwitchIcon } from 'vue3-simple-icons'
</script>

<template>
  <div class="flip-container">
    <div class="flipper">
      <div class="front">
        <a class="twitch-block" href="https://www.twitch.tv/yusheero">
          <TwitchIcon style="fill: white" size="64px" />
        </a>
      </div>
      <div class="back">
        <a class="twitch-block twitch-block--back" href="https://www.twitch.tv/yusheero">
          <div class="twitch-block__text">Watch streams on Twitch</div>
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
  border-radius: 12px;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  background: #8956FB;
  color: var(--color-primary);
  text-decoration: none;

  &--back {
    background: #6633C0;
  }

  &__text {
    color: white;
    font-size: 1rem;
    text-align: center;
    padding: 0 1rem;
    text-decoration: none;
    font-family: "Gabarito", serif;
    font-weight: 600;
  }

  &:hover {
    cursor: pointer;
  }
}
</style>