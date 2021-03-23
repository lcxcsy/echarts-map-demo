<!--
 * @Author: your name
 * @Date: 2021-03-23 16:00:55
 * @LastEditTime: 2021-03-23 16:56:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myself\echarts-map-demo\src\pages\home.vue
-->
<template>
  <div class="wrapper">
    <Map />
  </div>
</template>

<script>
import Map from '@/components/echarts/map'
export default {
  name: 'Home',
  components: {
    Map
  }
}
</script>
<style lang="less" scoped>
.wrapper {
  width: 100%;
  height: 100%;
}
</style>
