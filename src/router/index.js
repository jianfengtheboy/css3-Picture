/*
 * @Author: Sun
 * @LastEditors: Sun
 * @Email: jianfengtheboy@163.com
 * @Date: 2021-04-13 11:16:37
 * @LastEditTime: 2022-11-28 11:47:47
 * @Description: 路由配置
 */
import { createRouter, createWebHashHistory } from 'vue-router'
import BasicLayout from '@/layout/basicLayout.vue'

import { mainRoutes } from '@/router/modules/main'
import { QQRoutes } from '@/router/modules/qqLogo'
import { owlRoutes } from '@/router/modules/owl'
import { grassHopperRoutes } from '@/router/modules/grasshopper'
import { animalShapeRoutes } from '@/router/modules/animalShape'
import { duckRoutes } from '@/router/modules/duck'
import { dancingDuckRoutes } from '@/router/modules/dancingDuck'
import { catRoutes } from '@/router/modules/cat'
import { batManRoutes } from '@/router/modules/batMan'
import { buttonBirdsRoutes } from '@/router/modules/buttonBirds'

const routes = [
  {
    path: '/',
    name: 'basicLayout',
    component: BasicLayout,
    redirect: '/mainPage',
    children: [
      ...mainRoutes,
      ...QQRoutes,
      ...owlRoutes,
      ...grassHopperRoutes,
      ...animalShapeRoutes,
      ...duckRoutes,
      ...dancingDuckRoutes,
      ...catRoutes,
      ...batManRoutes,
      ...buttonBirdsRoutes
    ]
  }
]

// Vue-router新版本中，需要使用createRouter来创建路由
export default createRouter({
  // 指定路由的模式,此处使用的是hash模式
  history: createWebHashHistory(),
  routes
})
