/*
 * @Author: Sun
 * @LastEditors: Sun
 * @Email: jianfengtheboy@163.com
 * @Date: 2021-04-25 15:27:42
 * @LastEditTime: 2021-04-25 15:28:48
 * @Description: 螃蟹🦀️
 */
const crabRoutes = [
  {
    path: '/crab',
    name: 'crab',
    component: () => import('@/views/crab/crab.vue'),
    meta: {
      title: '螃蟹'
    }
  }
]

const crabMap = []
crabRoutes.concat().forEach(route => {
  const map = {
    name: route.name,
    meta: route.meta
  }
  crabMap.push(map)
})

export {
  crabRoutes,
  crabMap
}
