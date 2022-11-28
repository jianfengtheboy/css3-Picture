/*
 * @Author: Sun
 * @LastEditors: Sun
 * @Email: jianfengtheboy@163.com
 * @Date: 2022-11-28 11:06:14
 * @LastEditTime: 2022-11-28 11:19:16
 * @Description: 
 */
const buttonBirdsRoutes = [
  {
    path: '/buttonBirds',
    name: 'buttonBirds',
    component: () => import('@/views/buttonBirds/buttonBirds.vue'),
    meta: {
      title: '小鸟按钮'
    }
  }
]

const buttonBirdsMap = []
buttonBirdsRoutes.concat().forEach(route => {
  const map = {
    name: route.name,
    meta: route.meta
  }
  buttonBirdsMap.push(map)
})

export {
  buttonBirdsRoutes,
  buttonBirdsMap
}