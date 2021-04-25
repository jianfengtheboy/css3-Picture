<!--
 * @Author: Sun
 * @LastEditors: Sun
 * @Email: jianfengtheboy@163.com
 * @Date: 2021-04-25 16:56:23
 * @LastEditTime: 2021-04-25 18:00:54
 * @Description: 跳舞鸭
-->
<template>
  <div class="dancingDuck">
    <div class="container">
      <div class="chick"> 
        <div class="face">
          <div class="l-face-cover"></div>
          <div class="r-face-cover"></div>
          <div class="l-eye"></div>
          <div class="r-eye"></div>
          <div class="beak"></div>
          <div class="l-feather"></div>
          <div class="r-feather"></div>
        </div>
        <div class="body">
          <div class="l-leg"></div>
          <div class="r-leg"></div>
          <div class="l-hand"></div>
          <div class="r-hand"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'dancingDuck'
})
</script>

<style lang="scss" scoped>
@import '@/styles/mixin.scss';

.dancingDuck {
  overflow:hidden;
  @include animation(colorChange 3.6s infinite linear both);
}

@include frames(colorChange) {
  0% {
    background-color: #ddf08b;
  }
  20% {
    background-color: #edb272;
  }
  40% {
    background-color: #ed8272;
  }
  60%{
    background-color: #e0a6d2;
  }
  80% {
    background-color: #a2aceb;
  }
  100% {
    background-color: #a2ebcb;
  }
}

.container {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.chick {
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  position: relative;
}

.face {
  width: 20vmin;
  height: 17.5vmin;
  @include border-radius(50%);
  background-color: #f6f350;
  border-top: 0.6vmin solid #974549;
  border-left: 0.6vmin solid #974549;
  border-right: 0.6vmin solid #974549;
  position: relative;
  @include animation(dance 0.6s infinite both);
  z-index: 9;
}

.face:after {
  content:"";
  width: 21vmin;
  height: 12.5vmin;
  @include border-radius(40% 40% 50% 50%);
  background-color: #f6f350;
  border-bottom: 0.6vmin solid #974549;
  border-left: 0.6vmin solid #974549;
  border-right: 0.6vmin solid #974549;
  position: absolute;
  bottom: -5vmin;
  left: -1.5vmin;
}

.l-face-cover {
  width: 10vmin;
  height: 6vmin;
  background-color: #f6f350;
  position: absolute;
  top: 6vmin;
  left: 0.5vmin;
  z-index: 2;
}

.r-face-cover {
  width: 10vmin;
  height: 6vmin;
  background-color: #f6f350;
  position: absolute;
  top: 6vmin;
  right: 0.8vmin;
  z-index: 2;
}

.l-eye, .r-eye {
  width: 1.5vmin;
  height: 3vmin;
  @include border-radius(50%);
  background-color: #86252d;
  position: absolute;
  top: 9vmin;
  z-index: 3;
}

.l-eye {
  left: 6.5vmin;
}

.r-eye {
  right: 6.5vmin;
}

.beak {
  width: 5vmin;
  height: 4vmin;
  @include border-radius(49% 51% 49% 51% / 75% 77% 23% 25%);
  border: 0.6vmin solid #974549;
  background-color: #d4ae41;
  position: absolute;
  top: 12.5vmin;
  left: 7vmin;
  z-index: 2;
}

.l-feather, .r-feather {
  width: 1.5vmin;
  height: 5vmin;
  @include border-radius(50% 50% 0 0);
  background-color: #f1ed51;
  border: 0.5vmin solid #974549;
  position: absolute;
  top: -5vmin;
}

.l-feather {
  left: 7.5vmin;
}

.r-feather {
  right: 8.65vmin;
}

.body {
  width: 20vmin;
  height: 12.5vmin;
  @include border-radius(50%);
  background-color: #f6f350;
  border: 0.6vmin solid #9d4e3d;
  position: relative;
  top: 1.5vmin;
  z-index: 0;
  @include animation(bodyMoves 0.6s alternate 0.3s infinite linear both);
}

.l-leg, .r-leg {
  width: 2.5vmin;
  height: 5vmin;
  background-color: #d4ae41;
  border-left: 0.6vmin solid #9d4e3d;
  border-right: 0.6vmin solid #9d4e3d;
  border-top: 0.6vmin solid #9d4e3d;
  position: absolute;
  bottom: -4vmin;
}

.l-leg {
  left: 2vmin;
  @include transform(rotateZ(20deg));
}

.r-leg {
  right: 2vmin;
  @include transform(rotateZ(-20deg));
}

.l-leg:after, .r-leg:after {
  content:"";
  width: 5vmin;
  height: 2.5vmin;
  @include border-radius(50%);
  background-color: #d2a940;
  border-left: 0.6vmin solid #9d4e3d;
  border-right: 0.6vmin solid #9d4e3d;
  border-bottom: 0.6vmin solid #9d4e3d;
  position: absolute;
  bottom: -1.5vmin;
}

.l-leg:after {
  left: -2vmin;
  @include transform(rotateZ(-20deg));
}

.r-leg:after {
  right: -2vmin;
  @include transform(rotateZ(20deg));
}

.l-hand, .r-hand {
  width: 5vmin;
  height: 9vmin;
  @include border-radius(50%);
  background-color: #f6f350;
  border: 0.6vmin solid #9d4e3d;
  position: absolute;
}

.l-hand {
  left: -2vmin;
  @include transform(rotateZ(10deg));
  z-index: 4;
  @include animation(lMoves 0.6s infinite both linear);
}

.r-hand{
  right: -2vmin;
  @include transform(rotateZ(-10deg));
  @include animation(rMoves 0.6s infinite both linear);
}


@include frames(lMoves) {
  0% {
    @include transform(rotateZ(10deg));
  }
  50% {
    @include transform(rotateZ(40deg)); 
  }
  100% {
    @include transform(rotateZ(10deg));
  }
}

@include frames(rMoves) {
  0% {
    @include transform(rotateZ(-10deg));
  }
  50% {
    @include transform(rotateZ(-40deg));
  }
  100% {
    @include transform(rotateZ(-10deg));
  }
}

@include frames(dance) {
  0% {
    top: 0;
  }
  50% {
    top: 1.5vmin;
  }
  100% {
    top: 0;
  }
}

@include frames(bodyMoves) {
  0% {
    @include transform(rotateZ(10deg));
  }
  100% { 
    @include transform(rotateZ(-10deg));
  }
}
</style>
