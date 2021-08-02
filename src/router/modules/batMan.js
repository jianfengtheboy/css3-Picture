/*
 * @Author: Sun
 * @LastEditors: Sun
 * @Email: jianfengtheboy@163.com
 * @Date: 2021-07-29 13:18:36
 * @LastEditTime: 2021-07-29 13:20:39
 * @Description: 蝙蝠侠
 */
const batManRoutes = [
  {
    path: '/batMan',
    name: 'batMan',
    component: () => import('@/views/batMan/batMan.vue'),
    meta: {
      title: '蝙蝠侠'
    }
  }
]

const batManMap = []
batManRoutes.concat().forEach(route => {
  const map = {
    name: route.name,
    meta: route.meta
  }
  batManMap.push(map)
})

export {
  batManRoutes,
  batManMap
}