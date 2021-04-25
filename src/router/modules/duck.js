/*
 * @Author: Sun
 * @LastEditors: Sun
 * @Email: jianfengtheboy@163.com
 * @Date: 2021-04-25 16:54:40
 * @LastEditTime: 2021-04-25 16:55:25
 * @Description: 小黄鸭
 */
const duckRoutes = [
  {
    path: '/duck',
    name: 'duck',
    component: () => import('@/views/duck/duck.vue'),
    meta: {
      title: '小黄鸭'
    }
  }
]

const duckMap = []
duckRoutes.concat().forEach(route => {
  const map = {
    name: route.name,
    meta: route.meta
  }
  duckMap.push(map)
})

export {
  duckRoutes,
  duckMap
}
