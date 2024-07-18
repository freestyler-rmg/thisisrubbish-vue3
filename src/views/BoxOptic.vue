<template>
  <div class="container">
    <div class="inner-container">
      <div class="bbbbbox">
        <div class="box odd">
          <div class="box even">
            <div class="box odd">
              <div class="box even">
                <div class="box odd">
                  <div class="box even">
                    <div class="box odd">
                      <div class="box even">
                        <div class="box odd">
                          <div class="box even">
                            <div class="box odd">
                              <div class="box even">
                                <div class="box odd">
                                  <div class="box even">
                                    <div class="box odd">
                                      <div class="box even">
                                        <div class="box odd">
                                          <div class="box even">
                                            <div class="box odd">
                                              <div class="box even">
                                                <div class="box odd">
                                                  <div class="box even">
                                                    <div class="box odd">
                                                      <div class="box even">
                                                        <div class="box odd"></div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <router-link :to="{ name: 'ScrollingGradient' }"><sakura-link /></router-link>
  </div>
</template>

<script setup>
import SakuraLink from '../components/SakuraLink.vue'
</script>

<style lang="scss" scoped>
$lineWidth: 16px;

.container {
  max-width: 777px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  overflow: hidden;
}

.inner-container {
  overflow: hidden;
  width: 100%;
  display: flex;
}

.bbbbbox {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 0;
  overflow: hidden;
}

.box {
  position: relative;
  border: $lineWidth solid transparent;
  display: block;
  font-size: 0;
  line-height: 0;
  letter-spacing: 0;
  box-sizing: border-box;
  background-color: #fff;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    outline-width: $lineWidth;
    outline-style: solid;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }
  &.odd {
    outline: 0;
  }
  &.odd::before {
    animation-name: gethighfirst;
    outline-color: #333;
  }
  &.odd::after {
    animation-name: gethighsecond;
    outline-color: #fff;
  }
  &.even {
    border-color: #333;
  }
  &.even::before {
    animation-name: gethighfirst;
    outline-color: #fff;
  }
  &.even::after {
    animation-name: gethighsecond;
    outline-color: #333;
  }
}

@keyframes gethighfirst {
  0% {
    outline-width: 0;
  }
  50% {
    outline-width: $lineWidth;
  }
  100% {
    outline-width: $lineWidth;
  }
}
@keyframes gethighsecond {
  0% {
    outline-width: 0;
  }
  50% {
    outline-width: 0;
  }
  100% {
    outline-width: $lineWidth;
  }
}
</style>
