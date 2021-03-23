/*
 * @Author: 刘晨曦
 * @Date: 2021-03-23 15:59:10
 * @LastEditTime: 2021-03-23 16:00:20
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \myself\echarts-map-demo\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './routers'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
