<!--
 * @Author: Sun
 * @LastEditors: Sun
 * @Email: jianfengtheboy@163.com
 * @Date: 2021-04-25 15:26:24
 * @LastEditTime: 2021-04-26 00:04:19
 * @Description: 螃蟹🦀️
-->
<template>
  <div class="crab">
    <div class="wrapper">
      <div class="heads">
        <div class="left-eye">
          <div class="left-eye-white"></div>
          <div class="left-eye-black">
            <div class="left-eye-inner-white"></div>
          </div>
        </div>
        <div class="right-eye">

        </div>
      </div>
      <div class="bodys">

      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'crab'
})
</script>

<style lang="scss" scoped>
@import '@/styles/mixin.scss'; 

.crab {
  @include common;
  position: relative;

  .wrapper {
    position: absolute;
    width: 400px;
    height: 400px;
    left: 50%;
    top: 50%;
    margin: -200px 0 0 -200px;

    .left-eye {
      position: absolute;
      width: 120px;
      height: 120px;
      border-radius: 50%;
      background: #f37521;
      z-index: 1;

      .left-eye-white {
        position: absolute;
        width: 90px;
        height: 90px;
        border-radius: 50%;
        top: 50%;
        left: 50%;
        margin: -45px 0 0 -45px;
        background: #fff;
        z-index: 2;
      }

      .left-eye-black {
        position: absolute;
        width: 40px;
        height: 40px;
        right: 22px;
        top: 30px;
        border-radius: 50%;
        background: #000;
        z-index: 3;

        .left-eye-inner-white {
          position: absolute;
          width: 15px;
          height: 15px;
          right: 6px;
          top: 6px;
          border-radius: 50%;
          background: #fff;
          z-index: 4;
        }
      }
    }
  }
}
</style>
