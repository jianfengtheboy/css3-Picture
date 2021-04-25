/*
 * @Author: Sun
 * @LastEditors: Sun
 * @Email: jianfengtheboy@163.com
 * @Date: 2021-04-22 16:23:33
 * @LastEditTime: 2021-04-22 22:02:20
 * @Description: 动物图形变化
 */
const animalShapeRoutes = [
  {
    path: '/animalShape',
    name: 'animalShape',
    component: () => import('@/views/animalShape/animalShape.vue'),
    meta: {
      title: 'animals'
    }
  }
]

const animalShapeMap = []
animalShapeRoutes.concat().forEach(route => {
  const map = {
    name: route.name,
    meta: route.meta
  }
  animalShapeMap.push(map)
})

export {
  animalShapeRoutes,
  animalShapeMap
}
