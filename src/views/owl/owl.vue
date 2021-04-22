<!--
 * @Author: Sun
 * @LastEditors: Sun
 * @Email: jianfengtheboy@163.com
 * @Date: 2021-04-20 23:27:19
 * @LastEditTime: 2021-04-22 15:54:51
 * @Description: 猫头鹰
-->
<template>
  <div class="owl">
    <div class="mini-owl">
      <div class="body">
        <div class="belly"></div>
        <div class="eye left-eye"></div>
        <div class="eye right-eye"></div>
        <div class="beak"></div>
      </div> 
      <div class="wings left-wing"></div>
      <div class="wings right-wing"></div>
      
      <div class="left-foot"></div>
      <div class="right-foot"></div> 
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'owl'
})
</script>

<style lang="scss" scoped>
@import '@/styles/mixin.scss'; 

.owl {
  @include common;
  .mini-owl {
    width: 250px;
    height: 240px;
    background-color: #f2b22e;
    @include border-radius(60% 60% 70% 70%);
    position: absolute;
    left: 50%;
    margin-left: -125px;
    top: 50%;
    margin-top: -120px;
  }

  .mini-owl:before, .mini-owl:after {
    content: "";
    display: block;
    position: absolute;
    width: 0;
    height: 0;
    border-top: 15px solid transparent;
    border-left: 90px solid #f2b22e;
    border-bottom: 50px solid transparent;
    @include border-radius(10% 0 0 0);
  }

  .mini-owl:before {
    left: 10px;
    top: 13px;
    @include transform(rotate(10deg));
  }

  .mini-owl:after {
    @include transform(rotate(-110deg) scale(-1));
    right: -13px;
    top: 24px;
  }

  .belly {
    position: absolute;
    width: 160px;
    height: 100px;
    @include border-radius(60% 60% 70% 70%);
    left: 50%;
    margin-left: -80px;
    bottom: 0;
    background-color: #f3cc74;
    background-image: -webkit-radial-gradient(#f2b22e 20%, transparent 24%),
                      -webkit-radial-gradient(#f2b22e 20%, transparent 24%);
    background-image: radial-gradient(#f2b22e 20%, transparent 24%),
                      radial-gradient(#f2b22e 20%, transparent 24%);
    background-size: 30px 30px;
    background-position: 0 0, 15px 15px;
  }

  .eye {
    position: absolute;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: white;
    z-index: 9999;
    top: 55px;
  }

  .eye:after {
    content: "";
    background: black;
    width: 40px;
    height: 40px;
    @include border-radius(50%);
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -20px;
  }

  .left-eye {
    left: 30px;
  }

  .right-eye {
    right: 30px;
  }

  .beak {
    position: absolute;
    left: 50px;
    top: 84px;
    width: 0;
    height: 0;
    border-left: 75px solid transparent;
    border-right: 75px solid transparent;
    border-top: 90px solid #e27326;
    @include transform(scale(.25));
  }

  .wings {
    position: absolute;
    height: 100px;
    width: 40px;
    background: #f2b22e;
    @include border-radius(50%);
    z-index: -1;
    top: 90px;
  }

  .left-wing {
    @include transform(rotate(50deg));
    left: -5px;
  }

  .right-wing {
    @include transform(rotate(-50deg));
    right: -5px;
  }

  .left-foot, .right-foot {
    position: absolute;
    bottom: 1px;
    height: 25px;
    width: 12px;
    background-color: #e27326;
    @include border-radius(50%);
  }

  .left-foot {
    left: 45px;
  }
  .right-foot {
    right: 45px;
  }

  .left-foot:before, .right-foot:before, 
  .left-foot:after, .right-foot:after {
    content: '';
    position: absolute;
    @include border-radius(50%);
    background: #e27326;
    width: 12px;
  }

  .left-foot:before, 
  .right-foot:before {
    left: -8px;
  }
  .left-foot:after, 
  .right-foot:after {
    right: -8px;
  }
  .left-foot:before, 
  .right-foot:after {
    bottom: 8px;
    height: 24px;
  }
  .left-foot:after, 
  .right-foot:before {
    bottom: 0px;
    height: 20px;
  }
}
</style>
