<template>
  <div class="container">
    <div class="additional-container">
      <div class="go-away">
        <div class="longggggg" v-for="long in 8" :key="long">
          <div class="boxxxxx" v-for="box in 50" :key="long + box"><div></div></div>
        </div>
      </div>
    </div>

    <router-link :to="{ name: 'Revolver' }"><sakura-link y="50%" /></router-link>
  </div>
</template>

<script setup>
import SakuraLink from '../components/SakuraLink.vue'
</script>

<style lang="scss" scoped>
$color-one-fresh: #333;
$color-one-pale: #ddd;
$color-two-fresh: #222;
$color-two-pale: #ccc;

.container {
  background: linear-gradient(to bottom, $color-one-fresh, #fff);
  max-width: 777px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  overflow: hidden;
  display: flex;
}

.additional-container {
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: baseline;
}

.go-away {
  flex: 0 0 777px;
  transform-style: preserve-3d;
  transform: perspective(40px) rotateX(15deg) scaleX(3) translate3d(0, 10px, -40px);
}

.longggggg {
  width: 100%;
  font-size: 0;
  letter-spacing: 0;
  line-height: 0;
  .boxxxxx {
    display: inline-block;
    width: 4%;
    position: relative;
    &::before,
    &::after {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      width: 100%;
      padding-top: 0;
      animation-duration: 0.3s;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
    }

    & > div {
      width: 100%;
      padding-top: 100%;
    }

    &::before {
      animation-name: first;
    }
    &::after {
      animation-name: second;
    }

    &:nth-child(even) {
      &::before {
        background-color: $color-one-pale;
      }
      &::after,
      & > div {
        background-color: $color-two-pale;
      }

      &:nth-child(n + 26) {
        &::before {
          background-color: $color-one-fresh;
        }
        &::after,
        & > div {
          background-color: $color-two-fresh;
        }
      }
    }

    &:nth-child(odd) {
      &::before {
        background-color: $color-two-fresh;
      }
      &::after,
      & > div {
        background-color: $color-one-fresh;
      }

      &:nth-child(n + 26) {
        &::before {
          background-color: $color-two-pale;
        }
        &::after,
        & > div {
          background-color: $color-one-pale;
        }
      }
    }
  }
}

@keyframes first {
  from {
    padding-top: 0;
  }
  50% {
    padding-top: 100%;
  }
  to {
    padding-top: 100%;
  }
}
@keyframes second {
  from {
    padding-top: 0;
  }
  50% {
    padding-top: 0;
  }
  to {
    padding-top: 100%;
  }
}
</style>
