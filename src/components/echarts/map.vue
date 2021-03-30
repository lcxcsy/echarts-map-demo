<!--
 * @Author: 刘晨曦
 * @Date: 2021-03-23 16:02:15
 * @LastEditTime: 2021-03-29 19:12:22
 * @LastEditors: Please set LastEditors
 * @Description: Echarts地图的引入
 * @FilePath: \myself\echarts-map-demo\src\components\echarts\map.vue
-->
<template>
  <div id="map" ref="mapChart"></div>
</template>

<script>
import api from '@/api'
import echarts from 'echarts'
import mapMethods from '@/mixins/mapMethods'
import { areaMap, scatterPrimaryData, scatterGeneralData, moveLinesData } from '@/assets/javascript/mapData'

export default {
  name: 'Map',
  mixins: [mapMethods],
  data () {
    return {
      chartInstance: null // Echarts的实例对象
    }
  },
  async mounted () {
    this.initMap('th')
  },
  methods: {
    // 获取地图的JSON数据
    async getGeoJson (params) {
      const res = await api.getGeoJson(params)
      if (res.status === 200) {
        return res.data
      } else {
        return {}
      }
    },

    // 初始化地图组件
    async initMap (areaName) {
      // 地图的JSON数据
      const geoData = await this.getGeoJson(areaName)
      // 注册可用的地图，必须在包括 geo 组件或者 map 图表类型的时候才能使用。
      echarts.registerMap(areaName, geoData)
      // 配置地图的相关设置
      const options = this.setOptionData(
        areaName,
        scatterPrimaryData[areaName],
        scatterGeneralData[areaName],
        moveLinesData[areaName]
      )
      this.chartInstance = echarts.init(this.$refs.mapChart)
      this.chartInstance && this.chartInstance.setOption(options)
      this.chartInstance.on('click', this.handleMapClick)
    },
    // 点击地图的某一部分
    handleMapClick (params) {
      this.chartInstance.clear()
      this.initMap(areaMap[params.name])
    }
  }
}
</script>

<style lang="less" scoped>
#map {
  width: 100%;
  height: 100%;
  // background-image: url('../../assets/image/background.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
</style>
