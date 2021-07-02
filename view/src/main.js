import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
// 引入字体文件
import './assets/font/iconfont.css'
// 引入全局样式文件
import './assets/css/global.less'

import SocketService from '@/utils/socket_service'
// 对服务端进行websocket的连接
SocketService.Instance.connect()
// 其他的组件  this.$socket
Vue.prototype.$socket = SocketService.Instance

// 请求基本路径
axios.defaults.baseURL = 'http://39.107.140.111:8900/api/'
// 将axios挂载到vue原型上
// 在别的 用this.$http
Vue.prototype.$http = axios
// 将全局的echarts对象挂载
// 别的组件中 可以 通过this.$echarts
Vue.prototype.$echarts = window.echarts
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
