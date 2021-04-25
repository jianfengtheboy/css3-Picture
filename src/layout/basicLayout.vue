<!--
 * @Author: Sun
 * @LastEditors: Sun
 * @Email: jianfengtheboy@163.com
 * @Date: 2021-04-13 13:44:09
 * @LastEditTime: 2021-04-25 18:02:44
-->
<template>
  <div class="basicLayout">
    <tab-header :title="title" :hasBack="hasBack"></tab-header>

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
import { defineComponent, onBeforeMount, reactive, toRefs, watch } from 'vue'
import TabHeader from '@/components/TabHeader.vue'
import { useRoute } from 'vue-router'

export default defineComponent({
  name: 'basicLayout',
  components: {
    TabHeader
  },
  setup() {
    const route = useRoute()
    const state = reactive({
      title: 'Home',
      hasBack: false
    })

    onBeforeMount(() => {
      const currRoute = sessionStorage.getItem('ROUTE')
      if (!currRoute) {
        sessionStorage.setItem('ROUTE', JSON.stringify({ title: 'Home' }))
      } else {
        let currTitle = ''
        if (currRoute.title !== route.meta.title) {
          currTitle = route.meta.title
        } else {
          currTitle = currRoute.title
        }
        state.title = currTitle
        state.hasBack = !['Home'].includes(currTitle)
        document.title = currTitle

        sessionStorage.setItem('ROUTE', JSON.stringify({ title: currTitle }))
      }
    })

    watch(
      () => route.meta,
      (curr, prev) => {
        state.title = curr.title
        state.hasBack = !['Home'].includes(curr.title)
        document.title = curr.title
      }
    )

    return {
      ...toRefs(state)
    }
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
  transition: all 0.3s;
}

.basicLayout {
  width: 100%;
  height: 100%;
}
</style>