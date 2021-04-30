<!--
 * @Author: Sun
 * @LastEditors: Sun
 * @Email: jianfengtheboy@163.com
 * @Date: 2021-04-25 16:53:50
 * @LastEditTime: 2021-04-27 13:45:16
 * @Description: 小黄鸭
-->
<template>
  <div class="duck">
    <div class="container">
      <div class="header">
        <div class="eye">
          <div class="eye-inner"></div>
        </div>
        <div class="mouth"></div>
      </div>
      <div class="body">

      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'duck'
})
</script>

<style lang="scss" scoped>
@import '@/styles/mixin.scss';

.duck {
  @include common;
  position: relative;

  .container {
    position: absolute;
    width: 360px;
    height: 360px;
    top: 50%;
    left: 50%;
    margin: -180px 0 0 -180px;

    .header {
      position: absolute;
      width: 100px;
      height: 100px;
      @include border-radius(50%);
      background: #f5cb21;

      .eye {
        position: absolute;
        top: 30px;
        left: 20px;
        width: 35px;
        height: 35px;
        @include border-radius(50%);
        background: #eee685;

        .eye-inner {
          position: absolute;
          top: 5px;
          width: 25px;
          height: 25px;
          @include border-radius(50%);
          background: #333;
        }
      }
    }
  }
}
</style>
