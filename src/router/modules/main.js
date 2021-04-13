/*
 * @Author: Sun
 * @LastEditors: Sun
 * @Email: jianfengtheboy@163.com
 * @Date: 2021-04-13 13:56:55
 * @LastEditTime: 2021-04-13 14:05:51
 */
const mainRoutes = [
  {
    path: '/mainPage',
    name: 'mainPage',
    component: () => import('@/views/main.vue'),
    meta: {
      title: 'Home'
    }
  }
]

const mainMap = []
mainRoutes.concat().forEach(route => {
  const map = {
    name: route.name,
    meta: route.meta
  }
  mainMap.push(map)
})

export {
  mainRoutes,
  mainMap
}
