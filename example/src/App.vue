<template>
  <div id="app">
    <rate-demo></rate-demo>
  </div>
</template>
<script>
  import RateDemo from './RateDemo.vue'
  export default {
    components: {
        RateDemo
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  #app {
    width: 1000px;
    margin: 60px auto;
    font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
