<template>
  <div id="app">
    <HdView></HdView>
    <div class="main">
      <router-view></router-view>
    </div>
    <FtView></FtView>
  </div>
</template>

<script>
import HdView from './components/HdView.vue'
import FtView from './components/FtView.vue'

export default {
  components: {
    HdView,
    FtView
  }
}
</script>

<style lang="less">
*{padding: 0;margin: 0;font-family: "微软雅黑"; box-sizing: border-box;}
a{text-decoration: none;}
ul, li { list-style: none;}
#app {
  width: 1000px;
  margin: 0 auto;
  border:1px solid #41b883;
  box-shadow: 0 0 20px rgba(31, 53, 43, 0.5);
}
.main{
  min-height: 200px;
}
</style>
