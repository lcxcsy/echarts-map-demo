/*
 * @Author: your name
 * @Date: 2021-03-26 10:45:56
 * @LastEditTime: 2021-03-29 17:07:05
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
  '城郊东': 'cjd',
  '开发区': 'kf',
  '产业区': 'cy'
}

// 地图的颜色
const areaColor = {
  'wl': '#ff9900',
  'sy': '66ccff'
}

// 每个区域悬浮的数据
const tipData = [
  {
    name: '城郊南',
    value: 85
  },
  {
    name: '物流区',
    value: 70
  }, {
    name: '商业区',
    value: 75
  }, {
    name: '政治区',
    value: 80
  }, {
    name: '城郊东',
    value: 78
  }, {
    name: '开发区',
    value: 77
  }, {
    name: '产业区',
    value: 79
  }
]

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
  ],
  'wl': [
    {
      name: '探头',
      value: [120.15266418457031, 33.4586563255238]
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
  areaColor,
  tipData,
  scatterPrimaryData,
  scatterGeneralData,
  moveLinesData
}
