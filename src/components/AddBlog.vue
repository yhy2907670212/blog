<template>
    <div class="addBlog">
        <div class="addMain">
            <div class="row">
                <div class="text">博客标题：</div>
                <div class="iptBox">
                    <input type="text" v-model="itemObj.title">
                </div>
            </div>

            <div class="row rowAuthor">
                <div class="text">作者：</div>
                <div class="iptBox">
                    <input type="text" v-model="itemObj.author">
                </div>
            </div>

            <div class="row">
                <div class="text">分类：</div>
                <div class="iptBox">
                    <select v-model="itemObj.classify">
                        <option v-for="item in classList" :key="item.id">{{item.classname}}</option>
                        <option>css3</option>
                        <option>Vue</option>
                    </select>
                </div>
            </div>

            <div class="row rowArea">
                <div class="text">博客内容：</div>
                <div class="iptBox">
                    <textarea v-model="itemObj.content"></textarea>
                </div>
            </div>

            <div class="row ">
                <div class="text"></div>
                <div class="iptBox">
                    <button @click="onSubmit">发布博客</button>
                </div>
            </div>

            <div v-show="itemObj.title || itemObj.classify || itemObj.author || itemObj.content">
                <h1 class="blShowBox">博客预览</h1>
                <BlogItem :itemObj="itemObj"/>
            </div>
        </div>
    </div>
</template>

<script>
import BlogItem from './BlogItem.vue'
export default {
  data () {
    return {
      itemObj: {
        title: '',
        posttime: new Date().getTime() / 1000,
        classify: '',
        author: '',
        content: ''
      },
      classList: []
    }
  },
  components: {
    BlogItem
  },
  created () {
    this.getClassify()
  },
  methods: {
    // 获取分类列表
    getClassify () {
      this.axios({
        url: 'https://ku.qingnian8.com/dataApi/blog/classBlog.php'
      }).then(res => {
        console.log(res)
        this.classList = res.data
      })
    },
    // 点击提交
    onSubmit () {
      // for (var i in this.itemObj) {
      //     if (this.itemObj[i].trim() == '') {
      //         alert('请按照要求填写');
      //         return;
      //     }
      // }
      if (this.itemObj.title == '' || this.itemObj.classify == '' || this.itemObj.author == '' || this.itemObj.content == '') {
        alert('请按照要求填写！')
        return
      }
      this.pushData()
      alert('发布成功！')
      this.$router.push('/')
    },
    // 添加博客
    pushData () {
      htis.axios({
        url: 'https://ku.qingnian8.com/dataApi/blog/addBlog.php',
        params: this.itemObj
      }).then(res => {
        console.log(res)
      })
    }
  }
}
</script>

<style lang="less" scoped>
input, textarea, select {outline: none;}
.addBlog {
    padding: 50px 30px;
    min-height: 830px;
}
.addMain {
    padding: 0 80px;
    font-size:  18px;
    color: #333;
    .row{
        padding: 10px 0;
        display: flex;
        align-items: center;
        .text{
            width: 20%;
            text-align: right;
            padding-right: 10px;
        }
        .iptBox{
            width: 80%;
            input, textarea{
                width: 100%;
                padding: 10px;
                height: 38px;
                border: 1px solid #ccc;
                border-radius: 3px;
                transition: 0.3s;
                font-size: 16px;
                color: #666;
                &:focus {
                    border-color: #2f6f52;
                    box-shadow: 0 0 10px rgba(65, 184, 131, 0.3);
                }
            }
            select{
                width: 50%;
                height: 38px;
                border: 1px solid #ccc;
                border-radius: 3px;
                padding: 0 10px;
                font-size: 16px;
                color: #333;
            }
            textarea{
                height: 150px;
            }
            button{
                width: 50%;
                height: 38px;
                background-color: #41B883;
                color: #fff;
                border: none;
                border-radius: 3px;
                cursor: pointer;
                transition: 0.3s;
                &:hover{
                    background-color: #2f6f52;
                }
            }
        }
    }
    .rowArea{
        align-items: flex-start;
    }
}
.blShowBox{
    font-size: 22px;
    color: #555;
    padding: 50px 0 30px;
    text-align: center;
    border-top: 1px solid #e4e4e4;
    margin-top: 30px;
}
</style>
