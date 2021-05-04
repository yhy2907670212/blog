<template>
  <div class="hearder">
      <div class="logo" @click="clickLogo">
        <!-- logo -->
          <img src="../assets/images/logo.png" alt="">
          <div class="text">
            <span>Vue</span>
            博客系统
          </div>
      </div>
      <div class="nav">
        <router-link to="/show">博客列表</router-link>
        <router-link to="/add">添加博客</router-link>
      </div>
  </div>
</template>

<script>
export default {
  methods: {
    clickLogo () {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="less" scoped>
.hearder {
    height: 80px;
    background-color: #2f6f52;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0  30px;
}
.logo{
  cursor: pointer;
  display: flex;
  align-items: center;
  img{
    height: 60px;
  }
  .text {
    padding-left: 10px;
    color: #fff;
    font-size: 20px;
    span{
      display: block;
      font-size: 14px;
      opacity: 0.7;
    }
  }
}
.nav{
  display: flex;
  a{
    display: block;
    border-radius: 5px;
    padding: 5px 20px;
    color: #FFf;
    font-size: 18px;
    margin-left: 10px;
    &:hover, &.active {
      color: #2f6f52;
      background-color: #fff;
    }
  }
}
</style>
