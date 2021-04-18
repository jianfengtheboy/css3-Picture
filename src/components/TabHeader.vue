<!--
 * @Author: Sun
 * @LastEditors: Sun
 * @Email: jianfengtheboy@163.com
 * @Date: 2021-04-13 14:35:42
 * @LastEditTime: 2021-04-18 22:55:24
-->
<template>
  <div class="headerPage">
    <div class="headerContent">
      <div class="headerPageInfo">
        <icon-home v-if="!hasBack"></icon-home>
        <div class="headerTitle">{{title}}</div>
      </div>
      <div v-if="hasBack" class="headerBack" @click="backAction">返回</div>
    </div>
  </div>
</template>

<script>
import { defineComponent, onMounted, reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'tabHeader',
  setup() {
    const router = useRouter()
    const state = reactive({
      title: 'Home',
      hasBack: false
    })
    
    const backAction = () => {
      router.back()
    }

    router.afterEach((to) => {
      state.title = to.meta.title
      document.title = to.meta.title
      state.hasBack = !['Home'].includes(to.meta.title)
    })

    return {
      ...toRefs(state),
      backAction
    }
  }
})
</script>

<style lang="scss" scoped>
@import '@/styles/mixin.scss';

.headerPage {
  @include position(fixed, top, 0, 60px);
  background: #519a73;
  @include box-shadow(rgb(0 0 0 / 50%) 0px 0px 8px);
  .headerContent {
    padding: 0 30px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .headerPageInfo {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      font-size: 24px;
      color: #fff;
      .i-icon {
        font-size: 26px;
      }
      .headerTitle {
        margin-left: 6px;
      }
    }
    .headerBack {
      cursor: pointer;
      padding: 7px 12px;
      background: #fff;
      @include border-radius(4px);
    }
  }
}
</style>
