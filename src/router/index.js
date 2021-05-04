import Vue from 'vue'
import VueRouter from 'vue-router'
// 引入列表页面
// import ShowView from '../components/ShowView.vue'
const ShowView = () => import('../components/ShowView.vue')
// 引入添加博客页面
// import AddBlog from '../components/AddBlog.vue'
const AddBlog = () => import('../components/AddBlog.vue')

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/show', component: ShowView },
  { path: '/show', component: ShowView },
  { path: '/add', component: AddBlog }
]

const router = new VueRouter({
  mode: 'hash',
  routes
})

export default router
