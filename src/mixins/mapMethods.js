/*
 * @Author: your name
 * @Date: 2021-03-25 19:34:46
 * @LastEditTime: 2021-03-29 19:19:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \echarts-map-demo\src\mixins\mapMethods.js
 */
import { tipData } from '@/assets/javascript/mapData'
export default {
  methods: {
    // 设置地图的数据
    // pData 散点重要数据
    // gData 散点普通数据
    // mData 飞线数据
    setOptionData (areaName, pData = [], gData = [], mData = []) {
      return {
        backgroundColor: '#090F27',
        // 标题
        title: {
          top: 20,
          text: '江苏省盐城市亭湖区自定义地图',
          subtext: '',
          x: 'center',
          textStyle: {
            color: '#ccc'
          }
        },
        // 用于地图的绘制
        geo: {
          show: true,
          map: areaName, // 上面已经注册的地图
          roam: true, // 开启鼠标缩放和平移漫游
          data: tipData,
          itemStyle: { // 地图区域的多边形图形样式
            normal: {
              areaColor: 'transparent',
              borderColor: '#3fdaff',
              borderWidth: 2,
              shadowColor: 'rgba(72, 118, 255, 0.5)',
              shadowBlur: 30
            },
            emphasis: {
              areaColor: '#2B91B7'
            }
          },
          label: {
            normal: {
              show: true,
              textStyle: {
                color: '#fff'
              }
            },
            emphasis: {
              show: true,
              textStyle: {
                color: '#ffc125' // 滑过文字颜色
              }
            }
          },
          regions: [{
            name: '物流区',
            itemStyle: {
              areaColor: '#ccff00',
              color: 'red'
            }
          }]
        },
        // 提示框
        tooltip: {
          show: true,
          trigger: 'item',
          formatter: '{b}'
        },
        //
        series: [
          // 区政府的散点 type: effectScatter 带有涟漪特效动画的散点（气泡）图
          {
            name: 'government ',
            type: 'scatter',
            coordinateSystem: 'geo', // 地理坐标系
            data: pData, // 传入散点的数据
            symbol: 'image://https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1546977080,3431296399&fm=26&gp=0.jpg', // 标记的图形 可以使用URL链接 'image://http://xxx.xxx.xxx/a/b.png'
            symbolSize: 20, // 图形大小
            label: {
              normal: {
                formatter: '{b}',
                position: 'right',
                fontWeight: 'bold',
                show: true
              }
            }
          },
          // 机场的散点
          {
            name: 'airPort',
            type: 'scatter',
            coordinateSystem: 'geo', // 地理坐标系
            data: gData, // 传入散点的数据
            label: {
              normal: {
                formatter: '{b}',
                position: 'right',
                show: true
              }
            },
            itemStyle: {
              normal: {
                color: '#F4E925'
              }
            }
          },
          // 区政府与机场之间的飞线
          {
            name: '线路',
            type: 'lines',
            coordinateSystem: 'geo', // 地理坐标系
            zlevel: 2,
            large: true,
            data: mData, // 传入散点的数据
            lineStyle: {
              normal: {
                color: '#0fff17',
                width: 2,
                opacity: 1.0,
                curveness: 0.15
              }
            }
          },
          // 配置地图的相关数据
          {
            type: 'map',
            name: areaName,
            geoIndex: 0,
            data: tipData
          }
        ]
      }
    },

    // 缩放地图
    zoomMap () {
      console.log('执行缩放功能')
    }
  }
}
