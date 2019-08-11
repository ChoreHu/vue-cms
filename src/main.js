// 入口文件
import Vue from "vue"
import app from "./App.vue"
// a1.导入MUI
import './lib/mui/css/mui.min.css' 
// a2.导入mint_UI
import { Header } from 'mint-ui'
// a3.注册组件
Vue.component(Header.name, Header);

var vm = new Vue({
  el: "#app",
  render: h => h(app)
})