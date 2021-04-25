<!--
 * @Author: Sun
 * @LastEditors: Sun
 * @Email: jianfengtheboy@163.com
 * @Date: 2021-04-18 18:51:52
 * @LastEditTime: 2021-04-25 17:27:29
 * @Description: qq-logo
-->
<template>
  <div class="qqLogo">
    <div class="qq">
      <!--头-->
      <div class="head">
        <!--左眼-->
        <div class="left eye">
          <!--眼球-->
          <div class="innerLeftEye"></div>
        </div>
        <!--右眼-->
        <div class="right eye">
          <!--眼球-->
          <div class="innerRightEye">
            <!--月牙眼球两端圆弧修饰-->
            <div class="fix"></div>
          </div>
        </div>
        <!--上嘴唇-->
        <div class="mouthTopContainer">
          <div class="mouthTop"></div>
        </div>
        <!--下嘴唇-->
        <div class="mouthBottomContainer">
          <div class="mouthBottom"></div>
        </div>
        <!--嘴唇上下层次感-->
        <div class="lipsContainer">
          <div class="lips">
            <!--左右上下嘴唇咬合阴影-->
            <div class="lipShadow left"></div>
            <div class="lipShadow right"></div>
          </div>
        </div>
      </div>
      <!--身体-->
      <div class="body">
        <!--内轮廓-->
        <div class="innerWrapper">
          <div class="inner"></div>
        </div>
        <!--外轮廓-->
        <div class="outerWrapper">
          <div class="outer"></div>
        </div>
        <!--围巾-->
        <div class="scarf">
          <div class="scarfShadowLeft"></div>
          <div class="scarfShadowRight"></div>
        </div>
        <!--围巾尾-->
        <div class="scarfEnd">
          <div class="scarfEndShadow"></div>
        </div>
      </div>
      <!--手-->
      <div class="handWrapper">
        <div class="leftHandTopContainer">
          <div class="leftHandTop"></div>
        </div>
        <div class="leftHandBottomContainer">
          <div class="leftHandBottom"></div>
        </div>
        <div class="rightHandTopContainer">
          <div class="rightHandTop"></div>
        </div>
        <div class="rightHandBottomContainer">
          <div class="rightHandBottom"></div>
        </div>
      </div>
      <!--脚-->
      <div class="footWrapper">
        <div class="leftFootTopWrapper">
          <div class="leftFootTop"></div>
        </div>
        <div class="leftFootBottomWrapper">
          <div class="leftFootBottom"></div>
        </div>
        <!--脚趾间隔线条-->
        <div class="toe left"></div>
        <div class="rightFootTopWrapper">
          <div class="rightFootTop"></div>
        </div>
        <div class="rightFootBottomWrapper">
          <div class="rightFootBottom"></div>
        </div>
        <!--脚趾间隔线条-->
        <div class="toe right"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'qqLogo'
})
</script>

<style lang="scss" scoped>
@import '@/styles/mixin.scss';

.qqLogo {
  @include common;
  .qq {
    font: 12px Tahoma, arial, sans-serif;
    position: relative;
    margin: 15vh auto 0;
    width: 420px;
    height: 400px;
    .head {
      position: absolute;
      top: 18px;
      left: 96px;
      width: 234px;
      height: 185px;
      border: 1px solid #000;
      border-top-left-radius: 117px 117px;
      border-top-right-radius: 117px 117px;
      border-bottom-left-radius: 117px 68px;
      border-bottom-right-radius: 117px 68px;
      background: #000;
      z-index: 10;
      
      .eye {
        position: absolute;
        width: 44px;
        height: 66px;
        border:1px solid #000;
        @include border-radius(50%);
        background: #fff;
      }
      .left.eye {
        left : 62px;
        top: 50px;
      }

      .right.eye {
        left: 132px;
        top: 50px;
      }

      .innerLeftEye {
        position: absolute;
        top: 20px;
        left: 20px;
        width: 18px;
        height: 24px;
        @include border-radius(50%);
        border: 1px solid #000;
        background: #000;
      }

      .innerLeftEye::after {
        content: "";
        position: absolute;
        top: 6px;
        left: 9px;
        width: 6px;
        z-index: 11;
        height: 8px;
        @include border-radius(50%);
        background: #fff;
      }

      .innerRightEye {
        position: absolute;
        top: 20px;
        left: 8px;
        width: 18px;
        height: 24px;
        border-top-left-radius: 50% 90%;
        border-top-right-radius: 50% 90%;
        border-bottom-left-radius: 50% 10%;
        border-bottom-right-radius: 50% 10%;
        background: #000;
        @include box-shadow(0 -1px 2px #000);
      }

      .innerRightEye::after {
        content: "";
        position: absolute;
        bottom: -1px;
        left: 4px;
        width: 10px;
        height: 13px;
        border-top-left-radius: 50% 100%;
        border-top-right-radius: 35% 80%;
        background: #fff;
      }

      .fix {
        position: absolute;
        top: 19px;
        width: 4px;
        height: 4px;
        @include border-radius(50%);
        background: #000;
      }

      .fix::after {
        content: "";
        position: absolute;
        top: 0;
        left: 14px;
        width: 4px;
        height: 4px;
        @include border-radius(50%);
        background: #000;
      }

      .mouthTopContainer {
        position: absolute;
        top: 120px;
        left: 39px;
        z-index: 1;
        width: 160px;
        height: 29px;
        overflow: hidden;
      }

      .mouthTop {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        width: 159px;
        height: 34px;
        border:1px solid #FFA600;
        border-top-left-radius: 45% 34px;
        border-top-right-radius: 45% 34px;
        background: #FFA600;
      }

      .mouthBottomContainer {
        position: absolute;
        top: 148px;
        left: 39px;
        z-index: 1;
        width: 160px;
        height: 15px;
        overflow: hidden;
      }

      .mouthBottom {
        position: absolute;
        top: -4px;
        left: 0;
        z-index: 1;
        width: 159px;
        height: 24px;
        border:1px solid #FFA600;
        border-top: none;
        border-bottom-left-radius: 45% 24px;
        border-bottom-right-radius: 45% 24px;
        background: #FFA600;
      }

      /* 嘴唇上下层次感-咬合部位 */
      .lipsContainer {
        position: absolute;
        top: 146px;
        left: 60px;
        width: 116px;
        height: 24px;
      }

      .lips {
        position: absolute;
        top: 0;
        left: 0;
        width: 116px;
        height: 24px;
        border:1px solid #FFA600;
        border-bottom-left-radius: 50% 100%;
        border-bottom-right-radius: 50% 100%;
        background: #FFA600;
      }

      .lipShadow {
        position: absolute;
        width: 0;
        height: 0;
        border-top: 20px solid transparent;
        border-bottom: 20px solid transparent;
        border-right: 8px solid #000;
        @include transform-origin(top, right);
        z-index: 2;
      }

      .lipShadow.left {
        top: 4px;
        left: -12px;
        @include transform(rotate(-60deg));
      }

      .lipShadow.right {
        top: 4px;
        left: 111px;
        @include transform(rotate(60deg) rotateY(180deg));
      }
    }

    .body {
      position: absolute;
      top: 135px;
      left: 48px;
      width: 326px;
      height: 300px;

      .scarf {
        position: absolute;
        top: -2px;
        left: 34px;
        z-index: 5;
        width: 258px;
        height: 110px;
        border: 4px solid #000;
        border-top-left-radius: 30px 34px;
        border-top-right-radius: 38px 34px;
        border-bottom-left-radius: 50% 76px;
        border-bottom-right-radius: 50% 76px;
        border-top: none;
        background: #FB0009;
      }

      .scarfShadowLeft  {
        position: absolute;
        top: 0;
        left: 6px;
        width: 60px;
        height: 70px;
        border-top: 6px solid #000;
        border-top-left-radius: 90px 120px;
        border-top-right-radius: 30px 30px;
        @include transform(rotate(-79deg));
      }

      .scarfShadowRight  {
        position: absolute;
        top: 8px;
        left: 143px;
        width: 100px;
        height: 70px;
        border-right: 6px solid #000;
        border-bottom-right-radius: 70px 70px;
      }

      .scarfEnd {
        position: absolute;
        left: 74px;
        top: 90px;
        width: 52px;
        height: 64px;
        border:3px solid #000;
        border-bottom-left-radius: 50% 43%;
        border-bottom-right-radius: 15px;
        border-top-left-radius: 20% 57%;
        background: #FB0009;
        z-index: 4;
      }

      .scarfEndShadow {
        position: absolute;
        top: 6px;
        left: 12px;
        width: 20px;
        height: 20px;
        border-top: 6px solid #000;
        border-top-left-radius: 30px 30px;
        @include transform-origin(top, right);
        @include transform(skewX(4deg) scaleY(1.5) rotate(-60deg));
      }

      .innerWrapper {
        position: absolute;
        left: 30px;
        top: 76px;
        width: 280px;
        height: 200px;
        overflow: hidden;
      }

      .inner {
        position: absolute;
        left: 25px;
        top: -71px;
        width: 218px;
        height: 210px;
        border:1px solid #000;
        @include border-radius(50%);
        background: #fff;
        z-index: 4;
      }

      /* QQ body -> outerWrapper */
      .outerWrapper {
        position: absolute;
        top: 54px;
        left: 32px;
        width: 262px;
        height: 250px;
        overflow: hidden;
      }

      .outer {
        position: absolute;
        top: -84px;
        width: 260px;
        height: 250px;
        border: 1px solid #000;
        @include border-radius(125px);
        background: #000;
        z-index: 3
      }
    }

    .handWrapper {
      position: absolute;
      top: 219px;
      left: 7px;

      .leftHandTopContainer {
        position: absolute;
        top: 55px;
        left: 50px;
        width: 118px;
        height: 26px;
        @include transform-origin(bottom, left);
        @include transform(rotate(-70deg));
        overflow: hidden;
      }

      .leftHandTop {
        width: 128px;
        height: 54px;
        border: 1px solid #050346;
        border-top-left-radius: 44% 38px;
        border-top-right-radius: 56% 33px;
        background: #000;
      }

      .leftHandBottomContainer {
        position: absolute;
        top: 78px;
        left: 50px;
        width: 100px;
        height: 30px;
        @include transform-origin(top, left);
        @include transform(rotate(-70deg));
        overflow: hidden;
      }

      .leftHandBottom {
        position: absolute;
        top: -26px;
        width: 128px;
        height: 44px;
        border:1px solid #050346;
        border-bottom-left-radius: 48% 20px;
        border-bottom-right-radius: 52% 23px;
        background: #000;
      }

      .rightHandTopContainer {
        position: absolute;
        top: 47px;
        left: 240px;
        width: 118px;
        height: 34px;
        @include transform-origin(bottom, right);
        @include transform(rotate(65deg));
        overflow: hidden;
      }

      .rightHandTop {
        position: absolute;
        left: -30px;
        width: 148px;
        height: 54px;
        border:1px solid #050346;
        border-top-left-radius: 59% 48px;
        border-top-right-radius: 41% 54px;
        background: #000;
      }

      .rightHandBottomContainer {
        position: absolute;
        top: 81px;
        left: 248px;
        width: 110px;
        height: 58px;
        @include transform-origin(top, right);
        @include transform(rotate(90deg));
        overflow: hidden;
      }
      .rightHandBottom {
        position: absolute;
        top: 1px;
        left: 38px;
        width: 68px;
        height: 28px;
        border:1px solid #000;
        border-bottom-right-radius: 100% 40px;
        background: #000;
      }
    }

    .footWrapper {
      position: absolute;
      top: 292px;
      left: 80px;
      width: 300px;
      height: 80px;
      .toe {
        position: absolute;
        width: 25px;
        height: 20px;
        border-top: 4px solid #000;
        border-top-left-radius: 10px 10px;
        border-top-right-radius: 30px 30px;
        @include transform-origin(top, left);
        z-index: 10;
      }

      .leftFootTopWrapper {
        position: absolute;
        top: 16px;
        left: -1px;
        width: 130px;
        height: 37px;
        overflow: hidden;
      }

      .leftFootTop {
        position: absolute;
        top: -10px;
        left: 3px;
        width: 120px;
        height: 60px;
        border:4px solid #000;
        border-top-left-radius: 80% 70%;
        background: #FF9C00;
      }

      .toe.left {
        top: 50px;
        left: 2px;
        @include transform(rotate(-45deg));
      }

      .leftFootBottomWrapper {
        position: absolute;
        top: 52px;
        left: -1px;
        width: 130px;
        height: 38px;
        overflow: hidden;
      }

      .leftFootBottom {
        position: absolute;
        top: -30px;
        left: 3px;
        width: 120px;
        height: 60px;
        border:4px solid #000;
        border-top-left-radius: 50% 44%;
        border-top-right-radius: 50% 44%;
        border-bottom-left-radius: 50% 56%;
        border-bottom-right-radius: 50% 56%;
        background: #FF9C00;
      }

      .rightFootTopWrapper {
        position: absolute;
        top: 22px;
        left: 134px;
        width: 130px;
        height: 38px;
        overflow: hidden;
      }

      .rightFootTop {
        position: absolute;
        top: 0;
        left: 4px;
        width: 120px;
        height: 60px;
        border:4px solid #000;
        border-top-right-radius: 32% 65%;
        background: #FF9C00;
      }

      .toe.right {
        top: 50px;
        left: 264px;
        @include transform(rotate(45deg) rotateY(180deg));
      }

      .rightFootBottomWrapper {
        position: absolute;
        top: 52px;
        left: 134px;
        width: 134px;
        height: 38px;
        overflow: hidden;
      }

      .rightFootBottom {
        position: absolute;
        top: -30px;
        left: 3px;
        width: 120px;
        height: 60px;
        border:4px solid #000;
        border-top-left-radius: 50% 56%;
        border-top-right-radius: 50% 56%;
        border-bottom-left-radius: 50% 44%;
        border-bottom-right-radius: 50% 44%;
        background: #FF9C00;
      }
    }
  }
}
</style>
