<!--
 * @Author: 刘晨曦
 * @Date: 2021-03-23 16:02:15
 * @LastEditTime: 2021-03-25 20:05:06
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
import mapMethods from '@/mixins/mapMethods'
export default {
  name: 'Map',
  mixins: [mapMethods],
  data () {
    return {
      chartInstance: null, // Echarts的实例对象
      geoCoordinateMap: [
        [
          { name: '区政府', value: [120.19416332244873, 33.38300620236494] }
        ], [
          { name: '机场', value: [120.20347595214844, 33.431154816588574] }
        ]
      ], // 自定义撒点坐标
      moveLines: {
        'normal': [
          { fromName: '区政府', toName: '机场', coords: [[120.20347595214844, 33.431154816588574], [120.19416332244873, 33.38300620236494]] }
        ],
        'warning': []
      } // 自定义飞线坐标
    }
  },
  mounted () {
    const options = this.setOptionData(this.geoCoordinateMap[0], this.geoCoordinateMap[1], this.moveLines.normal)
    console.log(options)
    this.initMap(options)
  },
  methods: {
    // 初始化地图组件
    initMap (options) {
      // 注册可用的地图，必须在包括 geo 组件或者 map 图表类型的时候才能使用。
      echarts.registerMap('tinghu', geoData)
      this.chartInstance = echarts.init(this.$refs.mapChart)
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
