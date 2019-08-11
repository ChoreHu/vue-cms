// b1. 导入VueRouter
import VueRouter from 'vue-router'
// c2 导入这些路由模板
import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'

//b6. 覆盖默认路由active高亮的类 用mui的类名
//c3. 注册这些路由
var router = new VueRouter({
  routes: [
    { path: "/", redirect: "/home" },
    { path: "/home", component: HomeContainer },
    { path: "/member", component: MemberContainer },
    { path: "/shopcar", component: ShopcarContainer },
    { path: "/search", component: SearchContainer }
  ],
  linkActiveClass: "mui-active" //覆盖默认高亮的类名router-link-active mui的
});

// 把路由对象暴露出去
export default router