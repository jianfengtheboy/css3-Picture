<!--
 * @Author: Sun
 * @LastEditors: Sun
 * @Email: jianfengtheboy@163.com
 * @Date: 2021-04-25 15:26:24
 * @LastEditTime: 2021-07-29 11:10:58
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
      <div class="bodys" ref="bodys"></div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue'

export default defineComponent({
  name: 'crab',

  setup() {
    const bodys = ref(null)

    onMounted(() => {
      console.log('bodys', bodys.value)
    })

    return {
      bodys
    }
  }
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
      border-top-left-radius: 105px;
      border-top-right-radius: 85px;
      border-bottom-right-radius: 105px;
      border-bottom-left-radius: 90px;
      background: #f37521;
      z-index: 1;

      .left-eye-white {
        position: absolute;
        width: 84px;
        height: 84px;
        border-top-left-radius: 95px;
        border-top-right-radius: 78% 85px;
        border-bottom-right-radius: 95% 85px;
        border-bottom-left-radius: 75px;
        top: 55%;
        left: 51%;
        margin: -42px 0 0 -42px;
        background: #fff;
        z-index: 2;
      }

      .left-eye-black {
        position: absolute;
        width: 48px;
        height: 46px;
        right: 22px;
        top: 37px;
        @include border-radius(50%);
        background: #000;
        z-index: 3;

        .left-eye-inner-white {
          position: absolute;
          width: 16px;
          height: 18px;
          right: 4px;
          top: 8px;
          @include border-radius(50%);
          background: #fff;
          z-index: 4;
        }
      }
    }

    .bodys {
      position: absolute;
      bottom: 45px;
      width: 400px;
      height: 250px;
      border-top-left-radius: 52%;
      border-top-right-radius: 35%;
      border-bottom-right-radius: 48%;
      border-bottom-left-radius: 35%;
      background: #f37521;
      @include transform(skew(-15deg));
    }
  }
}
</style>
