/*
 * @Author: your name
 * @Date: 2021-03-23 15:59:48
 * @LastEditTime: 2021-03-23 15:59:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myself\echarts-map-demo\src\routers\index.js
 */
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
  {
    path: '/',
    redirect: '/home'
  }, {
    path: '/home',
    name: 'Home',
    component: () => import('@/pages/home')
  }
]

const router = new Router({
  mode: 'history', // 路由模式
  routes
})

export default router
