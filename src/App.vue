<template>
  <div class="app-container">
    <!-- 顶部 Header 区域 -->
    <!-- a4. 使用mint-UI的 header组件 -->
    <mt-header title="固定在顶部"></mt-header>

    <!-- 中间路由 router-view 区域 -->
    <!-- f1 将每个路由的切换效果用动画标签包裹 -->
    <transition>
      <router-view></router-view>
    </transition>

    <!-- 底部 Tabbar 区域 -->
    <nav class="mui-bar mui-bar-tab">
      <!-- b5. 修改为router-link -->
			<router-link class="mui-tab-item" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" to="/shopcar">
        <!-- a4. 购物车是扩展样式 -->
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">0</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
  </div>
</template>

<script>
</script>


<style lang="scss" scoped>
// f2. 添加动画效果样式
.app-container {
  padding-top: 40px;
  overflow: hidden;
}
// 从右边进 从左边出
.v-enter {
  opacity: 0;
  transform: translateX(100%)
}

.v-leave-to {
  opacity: 0;
  //不应该和进入共享一个效果而是从反方向出去
  transform: translateX(-100%);
  //绝对定位脱离文档流让切换时不会出现下置BUG
  position: absolute;
}

.v-enter-active,
.v-leave-active {
  transition: 0.5s all ease;
}
</style>
