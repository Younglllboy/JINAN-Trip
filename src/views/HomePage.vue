<template>
  <div class="home">
    <h1>欢迎来到济南泉城风光</h1>
    <p>济南，这座历史文化名城，吸引了无数游客前来探寻其独有的城市韵味。</p>
    <!--video controls>
        <source src="@/assets/videos/jinan.mp4" type="video/mp4">
        您的浏览器不支持视频播放。
      </video-->
    <form action="localhost:8080/searchrouter" method="post">
      <el-input type="text" placeholder="请输入内容" v-model="input" clearable></el-input>
      <el-button type="primary" icon="el-icon-search" onclick="alert('search')">搜索</el-button>
    </form>
    <div class="carousel-container">
      <Carousel :images="imagehome" /> <!--引入轮播组件-->
    </div>
  </div>
  
</template>

  <script>
  import Carousel from "../components/CarouSel.vue";
export default {
  name: "HomePage",
  components: {
    Carousel,
  },
  data() {
    return {
      input: "",
      imagehome: [
        require("../assets/history1.png"),
        require("../assets/history2.png"),
        require("../assets/food1.png"),
        require("../assets/logo.png"),
      ],
    };
  },

};
</script>
  
  <style scoped>
.home {
  text-align: center;
}
video {
  width: 80%;
  margin: 20px auto;
  display: block;
}
.carousel-container {
  width: 80%;
  height: 400px; /* 适应容器 */
  margin: 20px auto;
  border: 2px solid #ddd; /* 添加底盘以达到更好显示 */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 添加阴影 */
}
</style>
  