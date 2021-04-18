/*
 * @Author: Sun
 * @LastEditors: Sun
 * @Email: jianfengtheboy@163.com
 * @Date: 2021-04-13 11:16:37
 * @LastEditTime: 2021-04-18 23:10:37
 * @Description: 路由配置
 */
import { createRouter, createWebHashHistory } from 'vue-router'
import BasicLayout from '@/layout/basicLayout.vue'

import { mainRoutes } from '@/router/modules/main'
import { QQRoutes } from '@/router/modules/qqLogo'
import { grassHopperRoutes } from '@/router/modules/grasshopper'

const routes = [
  {
    path: '/',
    name: 'basicLayout',
    component: BasicLayout,
    redirect: '/mainPage',
    children: [
      ...mainRoutes,
      ...QQRoutes,
      ...grassHopperRoutes
    ]
  }
]

// Vue-router新版本中，需要使用createRouter来创建路由
export default createRouter({
  // 指定路由的模式,此处使用的是hash模式
  history: createWebHashHistory(),
  routes
})
