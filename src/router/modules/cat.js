/*
 * @Author: Sun
 * @LastEditors: Sun
 * @Email: jianfengtheboy@163.com
 * @Date: 2021-04-30 17:08:43
 * @LastEditTime: 2021-04-30 17:10:18
 * @Description: 猫
 */
const catRoutes = [
  {
    path: '/cat',
    name: 'cat',
    component: () => import('@/views/cat/cat.vue'),
    meta: {
      title: '猫'
    }
  }
]

const catMap = []
catRoutes.concat().forEach(route => {
  const map = {
    name: route.name,
    meta: route.meta
  }
  catMap.push(map)
})

export {
  catRoutes,
  catMap
}
