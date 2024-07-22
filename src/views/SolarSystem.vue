<template>
  <div class="container">
    <div class="inner-container">
      <div class="sun"></div>
      <div class="planet mercury" />
      <div class="planet venus" />
      <div class="planet earth" />
      <div class="planet mars" />
      <div class="planet jupiter" />
      <div class="planet saturn" />
      <div class="planet uranus" />
      <div class="planet neptune" />
      <!-- <div class="planet testing" /> -->
    </div>

    <!-- <router-link :to="{ name: 'BoxOptic' }"><sakura-link /></router-link> -->
  </div>
</template>

<script setup>
import SakuraLink from '../components/SakuraLink.vue'
</script>

<style lang="scss" scoped>
$earth-dia: 20px;
$mercury-dia: 0.38 * $earth-dia;
$venus-dia: 0.95 * $earth-dia;
$mars-dia: 0.53 * $earth-dia;
$jupiter-dia: 11.21 * $earth-dia;
$saturn-dia: 9.45 * $earth-dia;
$uranus-dia: 4.01 * $earth-dia;
$neptune-dia: 3.88 * $earth-dia;

$sun-dia: $earth-dia * 50;

$earth-dist-dia: 100px + $sun-dia;
$mercury-dist-dia: (0.39 * $earth-dist-dia) + $sun-dia;
$venus-dist-dia: (0.72 * $earth-dist-dia) + $sun-dia;
$mars-dist-dia: (1.52 * $earth-dist-dia) + $sun-dia;
$jupiter-dist-dia: (5.2 * $earth-dist-dia) + $sun-dia;
$saturn-dist-dia: (9.54 * $earth-dist-dia) + $sun-dia;
$uranus-dist-dia: (19.2 * $earth-dist-dia) + $sun-dia;
$neptune-dist-dia: (30.1 * $earth-dist-dia) + $sun-dia;

$earth-orbital: 1s;
$mercury-orbital: 0.24 * $earth-orbital;
$venus-orbital: 0.62 * $earth-orbital;
$mars-orbital: 1.88 * $earth-orbital;
$jupiter-orbital: 11.9 * $earth-orbital;
$saturn-orbital: 29.5 * $earth-orbital;
$uranus-orbital: 84 * $earth-orbital;
$neptune-orbital: 165 * $earth-orbital;

// unfinished logic for different tilt
$tilt: 90deg;

.container {
  max-width: 777px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  overflow: hidden;
  background-color: #333;
}

.inner-container {
  max-width: 777px;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  transform-style: preserve-3d;
  transform: scale(0.3) rotateX($tilt);
  div {
    border-radius: 50%;
  }
}

.sun {
  width: $sun-dia;
  height: $sun-dia;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.3);
  transform: rotateX(-($tilt));
}

.planet {
  position: absolute;
  width: 0;
  height: 0;
  animation-name: orbit;
  transform: rotateZ(0deg);
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  transform-style: preserve-3d;
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 50%;
    border: 1px solid #636363;
  }
  &::after {
    content: '';
    border-radius: 50%;
    background-color: #fff;
    position: absolute;
    top: 0;
    left: 50%;
    animation-name: rotation;
    transform: translateX(-50%) rotateX(-($tilt)) rotateY(0deg);
    transform-origin: center;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }
}

.testing {
  width: $mercury-dist-dia;
  height: $mercury-dist-dia;
  animation-duration: 12s;
  &::after {
    width: 500px;
    height: 500px;
    top: calc(500px / 2 * -1);
    animation-duration: 12s;
    // background-image: linear-gradient(to bottom left, #fff 0%, #fff 50%, #f00 50%, #f00 100%);
    // transform: translateX(-50%) rotateX(-90deg) rotateY(0deg);
    // transform: translateX(-50%) rotateX(-90deg) rotateY(45deg);
  }
}

.mercury {
  width: $mercury-dist-dia;
  height: $mercury-dist-dia;
  animation-duration: $mercury-orbital;
  &::after {
    width: $mercury-dia;
    height: $mercury-dia;
    top: calc($mercury-dia / 2 * -1);
    animation-duration: $mercury-orbital;
  }
}

.venus {
  width: $venus-dist-dia;
  height: $venus-dist-dia;
  animation-duration: $venus-orbital;
  &::after {
    width: $venus-dia;
    height: $venus-dia;
    top: calc($venus-dia / 2 * -1);
    animation-duration: $venus-orbital;
  }
}

.earth {
  width: $earth-dist-dia;
  height: $earth-dist-dia;
  animation-duration: $earth-orbital;
  &::after {
    width: $earth-dia;
    height: $earth-dia;
    top: calc($earth-dia / 2 * -1);
    animation-duration: $earth-orbital;
  }
}

.mars {
  width: $mars-dist-dia;
  height: $mars-dist-dia;
  animation-duration: $mars-orbital;
  &::after {
    width: $mars-dia;
    height: $mars-dia;
    top: calc($mars-dia / 2 * -1);
    animation-duration: $mars-orbital;
  }
}

.jupiter {
  width: $jupiter-dist-dia;
  height: $jupiter-dist-dia;
  animation-duration: $jupiter-orbital;
  &::after {
    width: $jupiter-dia;
    height: $jupiter-dia;
    top: calc($jupiter-dia / 2 * -1);
    animation-duration: $jupiter-orbital;
  }
}

.saturn {
  width: $saturn-dist-dia;
  height: $saturn-dist-dia;
  animation-duration: $saturn-orbital;
  &::after {
    width: $saturn-dia;
    height: $saturn-dia;
    top: calc($saturn-dia / 2 * -1);
    animation-duration: $saturn-orbital;
  }
}

.uranus {
  width: $uranus-dist-dia;
  height: $uranus-dist-dia;
  animation-duration: $uranus-orbital;
  &::after {
    width: $uranus-dia;
    height: $uranus-dia;
    top: calc($uranus-dia / 2 * -1);
    animation-duration: $uranus-orbital;
  }
}

.neptune {
  width: $neptune-dist-dia;
  height: $neptune-dist-dia;
  animation-duration: $neptune-orbital;
  &::after {
    width: $neptune-dia;
    height: $neptune-dia;
    top: calc($neptune-dia / 2 * -1);
    animation-duration: $neptune-orbital;
  }
}

@keyframes orbit {
  from {
    transform: rotateZ(0deg);
  }
  to {
    transform: rotateZ(360deg);
  }
}

@keyframes rotation {
  0% {
    transform: translateX(-50%) rotateX(-($tilt)) rotateY(0deg);
  }
  25% {
    transform: translateX(-50%) rotateX(-($tilt)) rotateY(90deg);
  }
  50% {
    transform: translateX(-50%) rotateX(-($tilt)) rotateY(180deg);
  }
  75% {
    transform: translateX(-50%) rotateX(-($tilt)) rotateY(270deg);
  }
  100% {
    transform: translateX(-50%) rotateX(-($tilt)) rotateY(360deg);
  }
}
</style>
