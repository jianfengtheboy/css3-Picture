<!--
 * @Author: Sun
 * @LastEditors: Sun
 * @Email: jianfengtheboy@163.com
 * @Date: 2021-04-13 13:44:09
 * @LastEditTime: 2021-04-13 16:48:59
-->
<template>
  <div class="basicLayout">
    <tab-header></tab-header>

    <router-view v-slot="{ Component }">
      <transition name="slide">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </transition>
    </router-view>

    <tab-footer></tab-footer>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import TabHeader from '@/components/TabHeader.vue'
import TabFooter from '@/components/TabFooter.vue'

export default defineComponent({
  name: 'basicLayout',
  components: {
    TabHeader,
    TabFooter
  }
})
</script>

<style lang="scss" scoped>
.slide-enter-active,.slide-leave-active {
  transition: all 0.3s;
}

.slide-enter,.slide-leave-to {
  transform: translate3d(100%,0,0);
}

.basicLayout {
  width: 100%;
  height: 100%;
}
</style>