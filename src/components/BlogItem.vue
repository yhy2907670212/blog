<template>
    <div class="itembox">
            <div class="top">
                <h2>{{itemObj.title}}</h2>
                <div class="time">{{getMyData(itemObj.posttime)}}</div>
            </div>
            <div class="center">
                {{itemObj.content}}
            </div>
            <div class="info">
                <div class="list">
                    所属分类： <span>{{itemObj.classify}}</span>
                </div>
                <div class="author">
                    作者： <span>{{itemObj.author}}</span>
                </div>
            </div>
    </div>
</template>

<script>
import common from '../assets/js/common.js'
export default {
  props: {
    itemObj: {
      type: Object,
      default: function () {
        return {}
      }
    }
  },
  created () {},
  methods: {
    getMyData (time) {
      return common.myDate(time, 3)
    }
  }
}
</script>

<style lang="less" scoped>
.itembox {
    padding: 30px 0;
    .top{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 10px;
        h2{
            font-size: 25px;
            color: #333;
            width: 750px;
            word-wrap: break-word;
            white-space: normal;
            word-break: break-all;
        }
        .time{
            font-size: 14px;
            color: #888;
        }
    }
    .center{
        background-color: #f6f6f6;
        border-radius: 5px;
        padding: 15px 10px;
        font-size:  18px;
        line-height: 1.8em;
        color: #444;
        margin-bottom: 10px;
        word-wrap: break-word;
        white-space: normal;
        word-break: break-all;
    }
    .info{
        display: flex;
        justify-content: space-between;
        font-size:  14px;
        color: #888;
        span {
            font-size: 16px;
            color: #666;
        }
    }
}
</style>
