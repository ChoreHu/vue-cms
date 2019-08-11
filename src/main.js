// 入口文件
import Vue from "vue"
// b1. 导入VueRouter
import VueRouter from "vue-router"
// b3. 导入路由文件
import router from "./router.js"

import app from "./App.vue"

// a1.导入MUI
import './lib/mui/css/mui.min.css' 
// a5.导入扩展样式
// a6.导入extra css文件和font文件
import './lib/mui/css/icons-extra.css'
// a2.导入mint_UI
import { Header } from 'mint-ui'
// d1. 引入轮播图组件
import { Swipe, SwipeItem } from 'mint-ui';

// e2. 导入vuex 和 axios
import Vuex from 'vuex'
import Axios from 'axios'


// d2. 注册轮播图组件
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
// a3.注册组件
Vue.component(Header.name, Header);

// b2.注册路由
Vue.use(VueRouter)

// e3.注册Vuex 和 Axios
Vue.use(Vuex)
Vue.prototype.$ajax = Axios;

var vm = new Vue({
  el: "#app",
  render: h => h(app),
  //b4. 挂载路由对象
  router
})