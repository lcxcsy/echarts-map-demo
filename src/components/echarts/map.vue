<!--
 * @Author: 刘晨曦
 * @Date: 2021-03-23 16:02:15
 * @LastEditTime: 2021-03-24 14:00:49
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
      chartInstance: null, // Echarts的实例对象
      geoCoordinateMap: [
        [
          { name: '区政府', value: [120.19416332244873, 33.38300620236494] }
        ], [
          { name: '机场', value: [120.20347595214844, 33.431154816588574] }
        ]
      ] // 自定义坐标的菜单
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
        title: {
          top: 20,
          text: '盐城市亭湖区自定义区域图',
          subtext: '',
          x: 'center',
          textStyle: {
            color: '#ccc'
          }
        },
        // 用于地图的绘制
        geo: {
          show: true,
          map: 'tinghu', // 上面已经注册的地图
          roam: true, // 开启鼠标缩放和平移漫游
          itemStyle: { // 每个子模块的样式
            normal: {
              areaColor: 'transparent',
              borderColor: '#3fdaff',
              borderWidth: 2,
              shadowColor: 'rgba(63, 218, 255, 0.5)',
              shadowBlur: 30
            },
            emphasis: {
              areaColor: '#2B91B7'
            }
          }
        },
        //
        series: [
          {
            name: 'government ',
            type: 'scatter',
            coordinateSystem: 'geo', // 地理坐标系
            data: this.geoCoordinateMap[0], // 传入散点的数据
            symbol: 'image://https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1546977080,3431296399&fm=26&gp=0.jpg', // 标记的图形 可以使用URL链接 'image://http://xxx.xxx.xxx/a/b.png'
            symbolSize: 19, // 图形大小
            label: {
              normal: {
                formatter: '{b}',
                position: 'right',
                fontWeight: 'bold',
                show: true
              },
              emphasis: {
                formatter: '{b}',
                position: 'right',
                fontWeight: 'bold',
                show: true
              }
            }
          }, {
            name: 'airPort',
            type: 'scatter',
            coordinateSystem: 'geo', // 地理坐标系
            data: this.geoCoordinateMap[1], // 传入散点的数据
            label: {
              normal: {
                formatter: '{b}',
                position: 'right',
                show: true
              },
              emphasis: {
                show: true
              }
            },
            itemStyle: {
              normal: {
                color: '#F4E925'
              },
              emphasis: {
                color: '#c00'
              }
            }
          }
        ]
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
