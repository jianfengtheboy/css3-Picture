/*
 * @Author: Sun
 * @LastEditors: Sun
 * @Email: jianfengtheboy@163.com
 * @Date: 2021-04-18 18:50:59
 * @LastEditTime: 2021-04-18 22:02:05
 * @Description: qq-logo
 */
const QQRoutes = [
  {
    path: '/qqLogo',
    name: 'qqLogo',
    component: () => import('@/views/qqLogo/qqLogo.vue'),
    meta: {
      title: 'QQ企鹅'
    }
  }
]

const QQMap = []
QQRoutes.concat().forEach(route => {
  const map = {
    name: route.name,
    meta: route.meta
  }
  QQMap.push(map)
})

export {
  QQRoutes,
  QQMap
}