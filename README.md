<!--
 * @Author: your name
 * @Date: 2021-03-23 16:00:28
 * @LastEditTime: 2021-03-23 21:03:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \echarts-map-demo\README.md
-->

# 基于 Echarts 的自定义地图的实现

> 通过[http://geojson.io/](http://geojson.io/)自定义 GeoJSON 数据，通过 Echarts 进行地图展示

## 项目准备

通过 npm 安装 Echarts

```npm

npm install echarts@4.9.0
```

## 加载一个最简单的 Echarts 地图

1. 要加载一个最简单的 Echarts 地图，首先要获取区域的 [GeoJson](https://geojson.org/) 数据，GeoJson 数据可以在阿里云 [GeoAtlas](http://datav.aliyun.com/tools/atlas/#&lat=30.332329214580188&lng=106.72278672066881&zoom=3.5) 中获取到。

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
      echarts.registerMap('tinghu', geoData)
      this.chartInstance = echarts.init(this.$refs.mapChart)
      const options = {
        backgroundColor: '#091c3d', // 背景颜色
        // geo用于地图的绘制
        geo: {
          show: true,
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

**GeoAtlas** 生成的 GeoJson 数据只能是中国境内省市，最小单位是到区，例如盐城市亭湖区。在实际的项目中，我们可能需要细分到街道、甚至自定义区域的划分，这时候我们可以通过[http://geojson.io/#map=2/20.0/0.0](http://geojson.io/#map=2/20.0/0.0)网站实现自定义地图。

![img](https://github.com/Chenxi-Lau/echarts-map-demo/blob/master/src/assets/CustomMap.png)

我一共把亭湖区分成七个子模块，定义每个模块的 adcode，以及每个模块的 properties 里面都要设置 parent

```json
// 子模块的 properties
"parent": {
"adcode": 320900 // 亭湖的adcode
}
```

然后把原本亭湖区的 GeoJson 数据中换成修改后的 GeoJson 数据，生成效果图如下：

![img](https://github.com/Chenxi-Lau/echarts-map-demo/blob/master/src/assets/CustomEchartMap.png)
