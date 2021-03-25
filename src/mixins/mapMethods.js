/*
 * @Author: your name
 * @Date: 2021-03-25 19:34:46
 * @LastEditTime: 2021-03-25 20:00:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \echarts-map-demo\src\mixins\mapMethods.js
 */
export default {
  methods: {
    // 设置地图的数据
    // scatterPrimaryData 散点重要数据
    // scatterGeneralData 散点普通数据
    // linesData 飞线数据
    setOptionData (scatterPrimaryData, scatterGeneralData, linesData) {
      return {
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
          }
        },
        //
        series: [
          // 区政府的散点 type: effectScatter 带有涟漪特效动画的散点（气泡）图
          {
            name: 'government ',
            type: 'scatter',
            coordinateSystem: 'geo', // 地理坐标系
            data: scatterPrimaryData, // 传入散点的数据
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
            data: scatterGeneralData, // 传入散点的数据
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
            data: linesData, // 传入散点的数据
            lineStyle: {
              normal: {
                color: '#0fff17',
                width: 2,
                opacity: 1.0,
                curveness: 0.15
              }
            }
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
