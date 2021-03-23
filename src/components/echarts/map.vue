<!--
 * @Author: 刘晨曦
 * @Date: 2021-03-23 16:02:15
 * @LastEditTime: 2021-03-23 19:08:12
 * @LastEditors: Please set LastEditors
 * @Description: Echarts地图的引入
 * @FilePath: \myself\echarts-map-demo\src\components\echarts\map.vue
-->
<template>
  <div id="map" ref="mapChart"></div>
</template>

<script>
import geoData from '@/assets/json/tinghu'
import echarts from 'echarts'
export default {
  name: 'Map',
  data () {
    return {
      chartInstance: null // Echarts的实例对象
    }
  },
  mounted () {
    this.initMap()
  },
  methods: {
    initMap () {
      // 注册可用的地图，必须在包括 geo 组件或者 map 图表类型的时候才能使用。
      echarts.registerMap('tinghu', geoData)
      this.chartInstance = echarts.init(this.$refs.mapChart)
      const options = {
        backgroundColor: '#091c3d',
        // 用于地图的绘制
        geo: {
          show: true,
          map: 'tinghu' // 上面已经注册的地图
        }
      }
      this.chartInstance && this.chartInstance.setOption(options)
    }
  }
}
</script>

<style lang="less" scoped>
#map {
  width: 100%;
  height: 100%;
}
</style>
