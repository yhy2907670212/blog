import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 引入axios依赖
import axios from 'axios'

// 配置axios请求
Vue.prototype.axios = axios

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
