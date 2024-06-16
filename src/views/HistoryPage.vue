<template>
  <div class="history">
    <h1>济南的历史</h1>
    <p>了解济南丰富的历史文化，体验古城的魅力。</p>
    <div class="carousel-container">
      <Carousel :images="carouselImages" /> <!--引入轮播组件-->
    </div>
    <div class="description">
      <p>
        济南，位于中国山东省，是一座有着悠久历史和丰富文化底蕴的城市。其历史可以追溯到数千年前，从史前时期到现代，济南经历了多个重要的历史阶段和文化发展。<br>
        史前时期
济南地区早在新石器时代就有人类活动，距今约8000年的大汶口文化遗址和距今约4000年的<span><a href="https://baike.baidu.com/item/%E9%BE%99%E5%B1%B1%E6%96%87%E5%8C%96%E9%81%97%E5%9D%80/10670865?fr=ge_ala">龙山文化遗址</a></span>，证明了这一地区的早期文明。<br>
隋唐时期
隋朝统一中国后，济南成为<span><a href="https://upimg.baike.so.com/doc/5594565-32390693.html">齐州</a></span>治所。唐代，济南被称为“齐州”，是山东地区的重要城市之一。此时，济南的文化、经济和交通都得到了进一步的发展，尤其是唐玄宗时期的诗人杜甫曾在济南生活和创作，留下了许多描写济南风光的诗篇。<br>
近现代
20世纪初，随着铁路的修建和现代工业的发展，济南逐渐成为山东省的工业和商业中心。抗日战争时期，济南是中国抗日斗争的重要战场之一。1948年，济南解放，成为中华人民共和国的一部分。<br>
当代
中华人民共和国成立后，济南继续作为山东省的省会。改革开放以来，济南的经济和城市建设得到了快速发展，成为中国东部地区的重要经济、文化和交通中心之一。今天的济南，以其丰富的历史文化遗产和现代化的城市面貌，吸引着来自世界各地的游客和投资者。<br>

      </p>
    </div>
    <div class="animated-box"></div>
  </div>
</template>
  
  <script>
import Carousel from "../components/CarouSel.vue";
export default {
  name: "HistoryPage",
  components: {
    Carousel,
  },
  data() {
    return {
      carouselImages: [
        require("../assets/history1.png"),
        require("../assets/history2.png"),
        //require("../assets/logo.png"),
      ],
    };
  },
};
</script>
  
  <style scoped>
.history {
  position: relative;/*子级绝对定位，避免相对窗口固定，父级需要改为相对定位*/
  text-align: center;
  padding: 20px;
  min-height: 500px; /*确保容器足够高*/
}
.carousel-container {
  width: 80%;
  height: 300px; /* 适应容器 */
  margin: 20px auto;
  border: 2px solid #ddd; /* 添加底盘以达到更好显示 */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 添加阴影 */
}
.description {
  width: 80%;
  margin: 20px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  text-align: left;
}
.animated-box {
  position: absolute;/*脱离文档流显示*/ 
  top: 20px;
  right: 20px;
  width: 100px;
  height: 100px;
  background: url("../assets/donghua1.png") no-repeat center center;
  background-size: cover;
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}
</style>
<!--relative相对于自身定位，随流偏移，absolute相对于上一个绝对或相对定位
元素定位，为了使一个元素不发生偏移要将其设置为absolute，此时为保证其与父元素位置不变
需要定义父元素为相对定位这样便于维护-->
  