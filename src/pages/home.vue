<!--
 * @Author: your name
 * @Date: 2021-03-23 16:00:55
 * @LastEditTime: 2021-03-25 20:43:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myself\echarts-map-demo\src\pages\home.vue
-->
<template>
  <div class="wrapper">
    <Map ref="map" />
    <div class="area-name">
      <ul>
        <li v-for="(item, index) in areaName" :key="index" @click="areaNameClick">{{item}}</li>
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
      areaName: ['物流区', '商业区', '开发区', '政治区', '产业区', '城郊南', '开发区', '城郊东']
    }
  },
  methods: {
    areaNameClick () {
      this.$refs.map.zoomMap()
    }
  }
}
</script>
<style lang="less" scoped>
.wrapper {
  width: 100%;
  height: 100%;
  .area-name {
    position: absolute;
    left: 0;
    top: 0;
    &:hover {
      cursor: pointer;
    }
  }
}
</style>
