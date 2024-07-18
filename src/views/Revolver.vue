<template>
  <div class="container">
    <div class="inner-container">
      <div class="bg-radial" />
      <div class="box">
        <div class="inside one" />
        <div class="inside two" />
        <div class="inside three" />
        <div class="inside four" />
        <div class="inside five" />
        <div class="inside six" />
      </div>
    </div>

    <router-link :to="{ name: 'BoxOptic' }"><sakura-link /></router-link>
  </div>
</template>

<script setup>
import SakuraLink from '../components/SakuraLink.vue'
</script>

<style lang="scss" scoped>
.container {
  max-width: 777px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  overflow: hidden;
  background-color: #333;
}

.inner-container {
  padding: 80px;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
}

.bg-radial {
  width: 1000px;
  height: 1000px;
  position: absolute;
  background-image: radial-gradient(#fff 0%, #fff 34%, #333 35%);
}

.box {
  max-width: 300px;
  width: 100%;
  position: relative;
  flex: 0 1 auto;
  z-index: 2;

  .inside {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    padding-top: 100%;
    transform: translateY(-50%);
    animation-duration: 1s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    &::before,
    &::after {
      content: '';
      box-shadow: 0 0 0 7px #333;
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
    }
  }

  .one {
    animation-name: left;
    &::before {
      transform: rotate(15deg);
    }

    &::after {
      transform: rotate(30deg);
    }
  }

  .two {
    animation-name: right;
    &::before {
      transform: rotate(45deg);
    }

    &::after {
      transform: rotate(60deg);
    }
  }

  .three {
    animation-name: left;
    &::before {
      transform: rotate(75deg);
    }

    &::after {
      transform: rotate(90deg);
    }
  }

  .four {
    animation-name: right;
    &::before {
      transform: rotate(105deg);
    }

    &::after {
      transform: rotate(120deg);
    }
  }

  .five {
    animation-name: left;
    &::before {
      transform: rotate(135deg);
    }

    &::after {
      transform: rotate(150deg);
    }
  }

  .six {
    animation-name: right;
    &::before {
      transform: rotate(165deg);
    }

    &::after {
      transform: rotate(180deg);
    }
  }
}

@keyframes left {
  to {
    transform: translateY(-50%) rotate(-15deg);
  }
}

@keyframes right {
  to {
    transform: translateY(-50%) rotate(15deg);
  }
}
</style>
