<template>
  <div>
    <!-- // c1 新建这些路由模板 -->

    <!-- d3. 加入轮播图代码片段 -->
    <mt-swipe :auto="4000">
      <mt-swipe-item
        v-for="item in lunbotuList"
        :key="item.id"
      >
        <img
          :src="item.img"
          alt=""
        >
      </mt-swipe-item>
    </mt-swipe>

    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
          <img src="../../images/menu1.png" alt="">
          <div class="mui-media-body">新闻资讯</div>
        </a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
          <img src="../../images/menu2.png" alt="">
          <div class="mui-media-body">图片分享</div>
        </a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
          <img src="../../images/menu3.png" alt="">
          <div class="mui-media-body">商品购买</div>
        </a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
          <img src="../../images/menu4.png" alt="">
          <div class="mui-media-body">留言反馈</div>
        </a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
          <img src="../../images/menu5.png" alt="">
          <div class="mui-media-body">视频专区</div>
        </a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
          <img src="../../images/menu6.png" alt="">
          <div class="mui-media-body">联系我们</div>
        </a></li>
    </ul>
  </div>
</template>

<script>
const axios = require("axios");
export default {
  data() {
    return {
      lunbotuList: []
    };
  },
  created() {
    this.getLunbotu();
  },
  methods: {
    getLunbotu() {
      axios.get("http://www.liulongbin.top:3005/api/getlunbo").then(result => {
        this.lunbotuList = result.data.message;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
// d4. 为轮播图设置样式
.mint-swipe {
  height: 200px;
  .mint-swipe-item {
    &:nth-child(1) {
      background-color: pink;
    }
    &:nth-child(2) {
      background-color: skyblue;
    }
    &:nth-child(3) {
      background-color: green;
    }

    img {
      width: 100%;
      height: 100%;
    }
  }
}
.mui-table-view {
  background-color: #fff;

  img {
    width: 3.75rem;
    height: 3.75rem;
  }
}

.mui-grid-view.mui-grid-9 .mui-table-view-cell {
  border: none;
}
</style>
