<!--
 * @Author: Sun
 * @LastEditors: Sun
 * @Email: jianfengtheboy@163.com
 * @Date: 2021-04-13 14:35:42
 * @LastEditTime: 2021-04-13 17:43:53
-->
<template>
  <div class="headerPage">
    
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'tabHeader'
})
</script>

<style lang="scss" scoped>
@import '@/styles/mixin.scss'; 

.headerPage {
  @include position(fixed, 60px);
  background: #519a73;
  @include box-shadow(rgb(0 0 0 / 50%) 0px 0px 8px);
}
</style>
