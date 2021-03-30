/*
 * @Author: your name
 * @Date: 2021-03-26 10:24:41
 * @LastEditTime: 2021-03-29 17:04:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \echarts-map-demo\src\api\index.js
 */
import axios from 'axios'

// 可替换为真实的后端接口
function getGeoJson (areaName) {
  return axios.get(`/static/json/${areaName}.json`)
}

export default {
  getGeoJson
}
