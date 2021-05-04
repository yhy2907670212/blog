<template>
    <div class="showView">
        <BlogItem
        v-for="item in listArr"
        :key="item.id"
        :itemObj="item"/>

        <div class="pageGroup">
            <div class="btn btnLeft" @click="btnLeft">&lt; 上一页</div>
            <div class="btn btnRight" @click="btnRight">下一页 &gt;</div>
        </div>

        <div class="toast" v-show="showToast">
            数据加载中....
        </div>
    </div>
</template>

<script>
import BlogItem from './BlogItem.vue'

export default {
  data () {
    return {
      // 数据加载页面的显示与隐藏
      showToast: false,
      listArr: [],
      // 页码
      page: 1
    }
  },
  components: {
    BlogItem
  },
  created () {
    // 获取网络数据
    this.getData()
  },
  methods: {
    // 获取请求数据
    getData () {
      this.axios({
        url: 'https://ku.qingnian8.com/dataApi/blog/showBlog.php',
        params: {
          page: this.page
        }
      }).then(res => {
        console.log(res)
        this.listArr = res.data
        this.showToast = false
      })
    },
    // 点击上一页触发
    btnLeft () {
      if (this.page < 1) {
        alert('已经是第一页了')
        this.page = 1
        return
      }
      this.showToast = true
      this.page--
      this.getData()
      this.scrTop()
    },
    // 点击下一页触发
    btnRight () {
      if (this.listArr.length < 9 || this.listArr.length == 0) {
        alert('已经没有更多了')
        return
      }
      this.showToast = true
      this.page++
      this.getData()
      // 翻页刷新后跳到第一条数据
      this.scrTop()
    },
    // 返回顶部的函数
    scrTop () {
      if (document.body.scrollTop) {
        document.body.scrollTop = 0
      } else {
        document.documentElement.scrollTop = 0
      }
    }
  }
}
</script>

<style lang="less" scoped>
.showView{
    padding:30px;
}
.pageGroup{
    padding: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    .btn{
        border: 1px solid #2f6f52;
        padding: 10px 20px;
        color: #2f6f52;
        font-size: 18px;
        margin: 0 10px;
        cursor: pointer;
        transition: 0.3s;
        &:hover {
            color: #fff;
            background-color: #2f6f52;
        }
    }

}
.toast{
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1000;
    background:rgba(0, 0, 0, 0.3);
    color: #fff;
    font-size: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
