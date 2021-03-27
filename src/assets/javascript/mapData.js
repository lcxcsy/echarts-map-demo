/*
 * @Author: your name
 * @Date: 2021-03-26 10:45:56
 * @LastEditTime: 2021-03-27 11:23:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \echarts-map-demo\src\assets\js\lines.js
 */
const areaMap = {
  '亭湖': 'th',
  '城郊南': 'cjn',
  '物流区': 'wl',
  '商业区': 'sy',
  '政治区': 'zz',
  '城郊区': 'cjd',
  '开发区': 'kf',
  '产业区': 'cy'
}

// 自定义撒点坐标
const scatterPrimaryData = {
  'th': [
    {
      name: '区政府',
      value: [120.19416332244873, 33.38300620236494]
    }
  ]
}

const scatterGeneralData = {
  'th': [
    { name: '机场',
      value: [120.20347595214844, 33.431154816588574]
    }
  ]
}

// 自定义飞线坐标
const moveLinesData = {
  'th': [
    {
      fromName: '区政府',
      toName: '机场',
      coords: [
        [120.20347595214844, 33.431154816588574], [120.19416332244873, 33.38300620236494]
      ]
    }
  ],
  'warning': []
}

export {
  areaMap,
  scatterPrimaryData,
  scatterGeneralData,
  moveLinesData
}
