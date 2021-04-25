/*
 * @Author: Sun
 * @LastEditors: Sun
 * @Email: jianfengtheboy@163.com
 * @Date: 2021-04-25 16:56:58
 * @LastEditTime: 2021-04-25 16:57:56
 * @Description: 跳舞鸭
 */
const dancingDuckRoutes = [
  {
    path: '/dancingDuck',
    name: 'dancingDuck',
    component: () => import('@/views/dancingDuck/dancingDuck.vue'),
    meta: {
      title: '跳舞鸭'
    }
  }
]

const dancingDuckMap = []
dancingDuckRoutes.concat().forEach(route => {
  const map = {
    name: route.name,
    meta: route.meta
  }
  dancingDuckMap.push(map)
})

export {
  dancingDuckRoutes,
  dancingDuckMap
}
