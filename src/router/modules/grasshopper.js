/*
 * @Author: Sun
 * @LastEditors: Sun
 * @Email: jianfengtheboy@163.com
 * @Date: 2021-04-18 23:05:12
 * @LastEditTime: 2021-04-18 23:11:50
 * @Description: 蚱蜢
 */
const grassHopperRoutes = [
  {
    path: '/grassHopper',
    name: 'grassHopper',
    component: () => import('@/views/grassHopper/grassHopper.vue'),
    meta: {
      title: '蚱蜢'
    }
  }
]

const grassHopperMap = []
grassHopperRoutes.concat().forEach(route => {
  const map = {
    name: route.name,
    meta: route.meta
  }
  grassHopperMap.push(map)
})

export {
  grassHopperRoutes,
  grassHopperMap
}
