<!--
 * @Author: Sun
 * @LastEditors: Sun
 * @Email: jianfengtheboy@163.com
 * @Date: 2021-04-13 11:19:23
 * @LastEditTime: 2022-11-28 11:46:01
 * @Description: main.vue
-->
<template>
  <div class="mainPage">
    <div class="mainCotent">
      <div class="mainList">
        <div class="vite-cell-2 mainItem" v-for="(item, index) in pages" :key="index">
          <div class="mainItemContent" @click="toPageDetail(item)">
            <div class="itemImage" :style="{ backgroundImage: 'url(' + item.url + ')' }"></div>
            <div class="itemName">{{item.name}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import mainConfig from './main.config'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'mainPage',
  setup() {
    const pages = ref(mainConfig.pages.filter(item => item.show === true))
    const router = useRouter()

    const toPageDetail = (item) => {
      sessionStorage.setItem('ROUTE', JSON.stringify({ title: item.name }))
      router.push({
        name: item.path
      })
    }
    
    return {
      pages,
      toPageDetail
    }
  }
})
</script>

<style lang="scss" scoped>
@import '@/styles/mixin.scss'; 

.mainPage {
  @include common;
  .mainCotent {
    padding: 0 30px;
  }
  .mainList {
    padding: 20px 0 40px;
    @include clearfix;
    .mainItem {
      height: 120px;
      margin-bottom: 20px;
      &:nth-child(6) {
        .mainItemContent {
          margin-right: 0;
        }
      }
      .mainItemContent {
        padding: 20px 10px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin-right: 20px;
        cursor: pointer;
        @include border-radius(8px);
        @include box-shadow(0px 5px 20px 0px rgb(33 34 39 / 12%));
        &:hover {
          @include transform(translateY(-3px) translateZ(0));
          @include transition(all 0.5s);
        }
        .itemImage {
          width: 80px;
          height: 80px;
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center;
        }
        .itemName {
          font-size: 20px;
          color: #519a73;
          margin-left: 20px;
        }
      }
    }
  }
}
</style>
