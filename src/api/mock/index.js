/*
 * @Author: your name
 * @Date: 2021-03-29 17:00:38
 * @LastEditTime: 2021-03-29 17:05:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \echarts-map-demo\src\api\mock\index.js
 */
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

let Mock = new MockAdapter(axios)

Mock.onGet('api/auth/login').reply(200, {
  code: '0',
  msg: 'success',
  data: []
})
