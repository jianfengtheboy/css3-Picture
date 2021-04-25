<!--
 * @Author: Sun
 * @LastEditors: Sun
 * @Email: jianfengtheboy@163.com
 * @Date: 2021-04-22 16:22:29
 * @LastEditTime: 2021-04-25 23:28:41
 * @Description: 动物图形变化
-->
<template>
  <div class="animalShape">
    <div class="iframestyleset">
      <iframe
        name="iframeMap"
        id="iframeMapViewComponent" 
        v-bind:src="getPageUrl"
        width="100%"
        height="100%"
        frameborder="0"
        scrolling="no"
        ref="iframeDom">
      </iframe>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'animalShape',
  data() {
    return {
      getPageUrl: 'src/views/animalShape/vendor/index.html'
    }
  }
})
</script>

<style lang="scss" scoped>
@import '@/styles/mixin.scss'; 

.animalShape {
  @include common;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  .iframestyleset {
    width: 100%;
    height: 100%;
  }
}
</style>
