<!--
 * @Author: your name
 * @Date: 2021-03-23 16:00:55
 * @LastEditTime: 2021-03-27 11:44:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myself\echarts-map-demo\src\pages\home.vue
-->
<template>
  <div class="wrapper">
    <Map ref="map" />
    <div class="area-name-wrapper">
      <ul class="area-name">
        <li v-for="(item, index) in areaName" :key="index" @click="areaNameClick(item.value)">{{item.label}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Map from '@/components/echarts/map'
export default {
  name: 'Home',
  components: {
    Map
  },
  data () {
    return {
      areaName: [
        { label: '亭湖区', value: 'th' },
        { label: '物流区', value: 'wl' },
        { label: '商业区', value: 'sy' },
        { label: '开发区', value: 'kf' },
        { label: '政治区', value: 'zz' },
        { label: '产业区', value: 'cy' },
        { label: '城郊南', value: 'cjn' },
        { label: '开发区', value: 'kf' },
        { label: '城郊东', value: 'cjd' }
      ]
    }
  },
  methods: {
    areaNameClick (value) {
      this.$refs.map.initMap(value)
    }
  }
}
</script>
<style lang="less" scoped>
.wrapper {
  width: 100%;
  height: 100%;
  .area-name-wrapper {
    position: absolute;
    width: 100px;
    height: 100%;
    left: 0;
    top: 25%;
    .area-name {
      list-style: none;
      color: #fff;
      line-height: 40px;
      letter-spacing: 4px;
      cursor: pointer;
      li:hover {
        color: #ffc125;
        font-weight: bold;
      }
    }
  }
}
</style>
