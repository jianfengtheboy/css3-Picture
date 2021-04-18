<!--
 * @Author: Sun
 * @LastEditors: Sun
 * @Email: jianfengtheboy@163.com
 * @Date: 2021-04-18 23:06:49
 * @LastEditTime: 2021-04-19 00:46:27
 * @Description: 蚱蜢🦗
-->
<template>
  <div class="grassHopper">
    <div class="wrapper">
      <div class="a"></div>
      <div class="b"></div>
      <div class="body">
        <div class="back"></div>
        <div class="shading">
          <div class="shading_back">
            <div class="stripe1"></div>
            <div class="stripe2"></div>
            <div class="stripe3"></div>
            <div class="stripe4"></div>
          </div>
        </div>
        <div class="eye"></div>
        <div class="wing"></div>
      </div>
      <div class="leg">
        <div class="curve1"></div>
        <div class="main"></div>
      </div>
      <div class="leg_part2"></div>
      <div class="foot"></div>
      <div class="leg2">
        <div class="curve1"></div>
        <div class="main"></div>
      </div>
      <div class="leg_part3"></div>
      <div class="small_leg"></div>
      <div class="small_leg small_leg2"></div>
      <div class="circle"></div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'grassHopper'
})
</script>

<style lang="scss" scoped>
@import '@/styles/mixin.scss'; 

.grassHopper {
  @include common;

  .wrapper {
    position: absolute;
    width: 270px;
    height: 100px;
    top: calc(50% - 30px);
    left: calc(50% - 90px);

    .body {
      position: absolute;
      top: 15px;
      left: 40px;
      width: 200px;
      height: 60px;
      z-index: 1;
      background: #32983e;
      @include transform(skew(-25deg));

      .eye {
        position: absolute;
        right: 10px;
        top: 10px;
        z-index: 1;
        width: 12px;
        height: 12px;
        @include border-radius(360px);
        background: #006837;
        @include animation(eye 2.5s 1s linear infinite);
      }

      .back {
        position: absolute;
        left: -90px;
        width: 220px;
        height: 60px;
        border-bottom-left-radius: 20px;
        background: #32983e;
        z-index: 0;
        @include transform(skew(55deg));
      }

      .wing {
        position: absolute;
        top: -3px;
        left: 25px;
        width: 120px;
        height: 60px;
        background: rgba(131,195,63,0.8);
        @include transform(rotate(3deg));
        z-index: 4;
        border-bottom-left-radius: 50px;

        &:before{
          content: '';
          position: absolute;
          left: -160px;
          width: 205px;
          height: 60px;
          border-bottom-left-radius: 400px;
          background: rgba(131,195,63,0.8);
          @include transform(skew(55deg));
        }
      }

      .shading {
        position: absolute;
        top: 0px;
        left: 0px;
        background: #39b549;
        height: 50px;
        width: 200px;
        border-bottom-right-radius: 170px;
        border-bottom-left-radius: 400px;

        .shading_back {
          position: absolute;
          top: 0px;
          left: -95px;
          background: #39b549;
          height: 50px;
          width: 120px;
          border-bottom-left-radius: 100px;
          @include transform(skew(55deg));
          z-index: 2;
          overflow: hidden;

          .stripe1 {
            position: absolute;
            top: -50px;
            left: -16px;
            width: 4px;
            height: 200px;
            background: #016a37;
            @include transform(skew(-55deg));
          }

          .stripe2 {
            position: absolute;
            top: -50px;
            left: 12px;
            width: 6px;
            height: 200px;
            background: #016a37;
            @include transform(skew(-50deg));
          }

          .stripe3 {
            position: absolute;
            top: -50px;
            left: 40px;
            width: 9px;
            height: 200px;
            background: #016a37;
            @include transform(skew(-45deg));
          }

          .stripe4 {
            position: absolute;
            top: -50px;
            left: 65px;
            width: 9px;
            height: 200px;
            background: #016a37;
            @include transform(skew(-40deg));
          }
        }
      }
    }

    .leg {
      position: absolute;
      top: -10px;
      left: -50px;
      width: 200px;
      height: 40px;
      z-index: 3;
      overflow: hidden;
      @include transform(rotate(40deg));
      @include border-radius(40px);

      .main {
        position: absolute;
        top: 1px;
        left: 5px;
        background: #009245;
        @include transform(skew(-30deg));
        width: 200px;
        height: 10px;
      }

      .curve1 {
        position: absolute;
        top: 10px;
        left: 245px;
        background: #009245;
        @include transform(skew(80deg));
        border-bottom-left-radius: 80px;
        width: 200px;
        height: 20px;
        border-bottom: 65px solid #007a3a;
      }
    }

    .leg_part2 {
      position: absolute;
      top: -68px;
      left: 18px;
      width: 6px;
      height: 175px;
      @include transform(rotate(-25deg));
      z-index: 6;
      background: #009245;
    }

    .foot {
      position: absolute;
      z-index: 1;
      left: 25px;
      top: 71px;
      width: 0;
      height: 0;
      @include transform(rotate(-102.5deg));
      border-top: 45px solid transparent;
      border-bottom: 10px solid transparent;
      border-right:10px solid #006635;

      &:after{
        content:'';
        position: absolute;
        right: -11px;
        bottom: -11px;
        height: 12px;
        width: 13px;
        background: #006635;
        border-top-left-radius: 100px;
        @include transform(rotate(102.5deg) skew(25deg));
      }
    }

    .leg2 {
      position: absolute;
      top: -10px;
      left: -70px;
      width: 200px;
      height: 40px;
      overflow: hidden;
      z-index: 0;
      @include border-radius(40px);
      @include transform(rotate(38deg));

      .main {
        position: absolute;
        top: 1px;
        left: 5px;
        background: #39b549;
        @include transform(skew(-30deg));
        width: 200px;
        height: 10px;
      }

      .curve1 {
        position: absolute;
        top: 10px;
        left: 245px;
        background: #39b549;
        @include transform(skew(80deg));
        border-bottom-left-radius: 80px;
        width: 200px;
        height: 20px;
        border-bottom: 65px solid #32983d;
      }
    }

    .leg_part3 {
      position: absolute;
      top: -70px;
      left: 4px;
      width: 6px;
      height: 175px;
      @include transform(rotate(-31deg));
      z-index: 0;
      background: #39b549;
    }

    .small_leg {
      position: absolute;
      top: 45px;
      left: 140px;
      width: 9px;
      height: 50px;
      z-index: 7;
      @include transform(rotate(-60deg));
      background: #006837;
    }

    .small_leg2 {
      @include transform(rotate(60deg) scaleX(-1));
      left: 180px;
      &:after {
        content: '';
        position: absolute;
        left: -50px;
        top: 0px;
        width: 0; 
        height: 0; 
        border-left: 50px solid transparent;
        border-right: 10px solid transparent;
        border-top: 10px solid #006837;
      }
    }

    .a {
      position: absolute;
      top: -70px;
      left: 24px;
      width: 240px;
      height: 100px;
      @include border-radius(360px);
      background: #3cb64b;
      z-index: 0;
      &:before{
        content: '';
        position: absolute;
        top: 2px;
        left: -3px;
        width: 240px;
        height: 100px;
        @include border-radius(360px);
        background: #fff;
        z-index: 0;
      }
    }

    .b {
      position: absolute;
      top: -60px;
      left: 20px;
      width: 240px;
      height: 90px;
      @include border-radius(360px);
      background: #3cb64b;
      z-index: 0;
      &:before{
        content: '';
        position: absolute;
        top: 2px;
        left: -3px;
        width: 240px;
        height: 90px;
        @include border-radius(360px);
        background: #fff;
        z-index: 0;
      }
    }

    .circle {
      position: absolute;
      top: -100px;
      left: -90px;
      z-index: 0;
      width: 400px;
      height: 400px;
      @include border-radius(400px);
      @include transform(rotateX(85deg));
      background: rgba(0, 0, 0, 0.1);
    }

    .credits {
      position: absolute;
      bottom: 0px;
      left: 0px;
      font-family: Helvetica, Arial;
      color: #39b549;
      background: rgba(131,195,63,0.4);
      border-top-right-radius: 6px;
      padding: 5px 10px 5px 10px;
      a {
        text-decoration: none;
        color: #006837;
      }
    }
  }
}

@keyframes eye {
  0% {
    width: 12px;
    height: 12px;
    @include border-radius(360px);
  }
  5% {
    width: 12px;
    height: 1px;
    @include border-radius(0px);
  }
  10% {
    width: 12px;
    height: 12px;
    @include border-radius(360px);
  }
}
</style>
