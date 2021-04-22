/*
 * @Author: Sun
 * @LastEditors: Sun
 * @Email: jianfengtheboy@163.com
 * @Date: 2021-04-20 23:29:56
 * @LastEditTime: 2021-04-20 23:31:57
 * @Description: 猫头鹰
 */
const owlRoutes = [
  {
    path: '/owl',
    name: 'owl',
    component: () => import('@/views/owl/owl.vue'),
    meta: {
      title: '猫头鹰'
    }
  }
]

const owlMap = []
owlRoutes.concat().forEach(route => {
  const map = {
    name: route.name,
    meta: route.meta
  }
  owlMap.push(map)
})

export {
  owlRoutes,
  owlMap
}
