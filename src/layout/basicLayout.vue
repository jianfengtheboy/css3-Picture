<!--
 * @Author: Sun
 * @LastEditors: Sun
 * @Email: jianfengtheboy@163.com
 * @Date: 2021-04-13 13:44:09
 * @LastEditTime: 2021-04-18 19:43:57
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
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import TabHeader from '@/components/TabHeader.vue'
import { useRoute } from 'vue-router'

export default defineComponent({
  name: 'basicLayout',
  components: {
    TabHeader
  }
})
</script>

<style lang="scss" scoped>
.slide-enter, .slide-leave-to {
  opacity: 0;
}
.slide-enter-to, .slide-leave {
  opacity: 1;
}
.slide-enter-active, .slide-leave-active {
  transition: all 0.5s;
}

.basicLayout {
  width: 100%;
  height: 100%;
}
</style>