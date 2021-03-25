<!--
 * @Author: your name
 * @Date: 2021-03-23 16:00:28
 * @LastEditTime: 2021-03-25 21:03:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \echarts-map-demo\README.md
-->

# 基于 Echarts 的自定义地图及地图撒点飞线功能的实现

> 在做可视化大屏项目的时候，地图模块基本是不可获取的模块，除了一些第三方地图插件，还可以 Echarts 进行实现，然后通过[http://geojson.io/](http://geojson.io/)自定义 GeoJSON 数据，实现自定义地图的展示。

## 项目准备

通过 npm 安装 Echarts

```npm

npm install echarts@4.9.0
```

## 加载一个最简单的 Echarts 地图

1. 首先，加载地图要获取区域的 [GeoJson](https://geojson.org/) 数据，GeoJson 数据可以通过阿里云 [GeoAtlas](http://datav.aliyun.com/tools/atlas/#&lat=30.332329214580188&lng=106.72278672066881&zoom=3.5) 平台下载。一个 GeoJson 数据格式大致如下：

```json
{
  "type": "FeatureCollection", // 集合
  "features": [
    {
      "type": "Feature", // 子集
      "properties": {
        // 相关属性
        "name": "",
        "adcode": "", // 区号，相当于唯一标识
        "center": "", // 中心点
        "level": "district",
        "parent": {}, // 父级
        "childrenNum": "childrenNum" // 子集数量
      },
      // 地理坐标
      "geometry": {
        "type": "MultiPolygon", // 类型 点 线 面
        "coordinates": [[[]]]
      }
    }
  ]
}
```

2. 然后通过 Echarts 中的 registerMap 注册一个地图，然后在 Options 中 geo 绘制注册的地图。

```vue
<template>
  <div id="map" ref="mapChart"></div>
</template>

<script>
import geoData from '@/assets/json/tinghu'
import echarts from 'echarts'
export default {
  name: 'Map',
  data() {
    return {
      chartInstance: null, // Echarts的实例对象
    }
  },
  mounted() {
    this.initMap()
  },
  methods: {
    initMap() {
      // 注册可用的地图，必须在包括 geo 组件或者 map 图表类型的时候才能使用。
      // echarts.registerMap('tinghu', geoData)
      this.chartInstance = echarts.init(this.$refs.mapChart)
      const options = {
        backgroundColor: '#091c3d', // 背景颜色
        // geo用于地图的绘制
        geo: {
          show: false,
          map: 'tinghu', // 上面已经注册的地图
        },
      }
      this.chartInstance && this.chartInstance.setOption(options)
    },
  },
}
</script>

<style lang="less" scoped>
#map {
  width: 100%;
  height: 100%;
}
</style>
```

生成的地图如下所示：

![img](https://github.com/Chenxi-Lau/echarts-map-demo/blob/master/src/assets/SimpleMap.png)

## 自定义地图

**GeoAtlas** 生成的 GeoJson 数据只能是中国境内省市，最小单位是到区，例如盐城市亭湖区。在实际的项目中，可能需要细分到街道、甚至自定义区域的划分，这时候可以通过[http://geojson.io/#map=2/20.0/0.0](http://geojson.io/#map=2/20.0/0.0)网站实现自定义地图。

首先，打开已经下载好的亭湖区的地图，然后在点击多边形图标（Draw A Ploygon）可以绘制自定义区域，右侧就会生成绘制的 GeoJson 数据。

![img](https://github.com/Chenxi-Lau/echarts-map-demo/blob/master/src/assets/CustomMap.png)

图中，一共把亭湖区分成七个子模块，然后设置每个模块的 properties 属性

```javascript
"properties": {
  "adcode": XXXXXX,
  "parent": {
    "adcode": 320900 // 亭湖区的adcode
  }
}
```

然后把项目中原本亭湖区的 GeoJson 数据中换成修改后的 GeoJson 数据，生成效果图如下：

![img](https://github.com/Chenxi-Lau/echarts-map-demo/blob/master/src/assets/CustomEchartMap.png)

## 地图撒点

地图撒点可以通过在 series 中定义散点图然后传入自定义数据，通过 label 和 itemStyle 可以设置标签和样式。

```javascript
// data中配置
geoCoordinateMap: [
  [{ name: '区政府', value: [120.19416332244873, 33.38300620236494] }],
  [{ name: '机场', value: [120.20347595214844, 33.431154816588574] }],
] // 自定义坐标的菜单

// options 中配置
series: [
  {
    name: 'government ',
    type: 'scatter',
    coordinateSystem: 'geo', // 地理坐标系
    data: this.geoCoordinateMap[0], // 传入散点的数据
    symbol:
      'image://https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1546977080,3431296399&fm=26&gp=0.jpg', // 标记的图形 可以使用URL链接 'image://http://xxx.xxx.xxx/a/b.png'
    symbolSize: 19, // 图形大小
    label: {
      normal: {
        formatter: '{b}',
        position: 'right',
        fontWeight: 'bold',
        show: true,
      },
    },
  },
  {
    name: 'airPort',
    type: 'scatter',
    coordinateSystem: 'geo', // 地理坐标系
    data: this.geoCoordinateMap[1], // 传入散点的数据
    label: {
      normal: {
        formatter: '{b}',
        position: 'right',
        show: true,
      },
    },
    itemStyle: {
      normal: {
        color: '#F4E925',
      },
    },
  },
]
```

## 点与点之间的飞线

同样，我们需要知道飞线的两个点的地理坐标，然后在 series 中定义 type:lines，然后在 data 中传入我们自定义的数据。

```javascript
// 自定义飞线坐标
moveLines: {
  'normal': [
    { fromName: '区政府', toName: '机场', coords: [[120.20347595214844, 33.431154816588574], [120.19416332244873, 33.38300620236494]] }
  ],
  'warning': [ ]
},
// series 模块
series: [
  {
    name: '线路',
    type: 'lines',
    coordinateSystem: 'geo', // 地理坐标系
    zlevel: 2,
    large: true,
    data: linesData, // 传入散点的数据
    lineStyle: {
      normal: {
        color: '#0fff17',
        width: 2,
        opacity: 1.0,
        curveness: 0.15,
      },
    },
  },
]
```

## Reference

1. [http://geojson.io/](http://geojson.io/)
2. [https://echarts.apache.org/zh/option.html#title](https://echarts.apache.org/zh/option.html#title)
