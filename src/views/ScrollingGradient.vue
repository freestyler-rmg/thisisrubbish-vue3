<template>
  <div class="container">
    <div class="inner-container">
      <div v-for="box in 7" :key="box" class="box" />
    </div>
    <router-link :to="{ name: 'FantasyZone' }"><sakura-link /></router-link>
  </div>
</template>

<script setup>
import SakuraLink from '../components/SakuraLink.vue'
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  max-width: 777px;
  height: 100vh;
  margin: 0 auto;
}

.inner-container {
  width: 100%;
  max-width: 777px;
  height: 100vh;
  display: flex;
}

.box {
  background-color: #fff;
  flex: 0 1 100%;
  background: linear-gradient(to bottom, #ddd 0%, #333 25%, #ddd 50%, #333 75%, #ddd 100%);
  background-size: 100% 200%;
  animation-name: animateBackground;
  animation-duration: 2s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  box-shadow: inset 0 0 70px #333;
  &:nth-child(2),
  &:nth-child(6) {
    animation-delay: 0.3s;
  }
  &:nth-child(3),
  &:nth-child(5) {
    animation-delay: 0.6s;
  }
  &:nth-child(4) {
    animation-delay: 0.9s;
  }
}

@keyframes animateBackground {
  from {
    background-position: 0% 0%;
    box-shadow: inset 0 0 70px #333;
  }

  50% {
    background-position: 0% 50%;
    box-shadow: inset 0 0 30px #333;
  }

  to {
    background-position: 0% 100%;
    box-shadow: inset 0 0 70px #333;
  }
}
</style>
