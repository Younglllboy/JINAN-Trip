<template>
  <div class="home">
    <h1>欢迎来到济南泉城风光</h1>
    <p>济南，这座历史文化名城，吸引了无数游客前来探寻其独有的城市韵味。</p>
    <div class="search-container">
      <input type="text" v-model="searchQuery" placeholder="搜索景点或美食" />
      <button @click="search">搜索</button>
    </div>
    <div class="carousel-container">
      <Carousel :images="imagehome" />
      <!--引入轮播组件-->
    </div>
    <div class="recommendations">
      <h2>推荐景点</h2>
      <div class="cards">
        <div
          class="card"
          v-for="(spot, index) in recommendedSpots"
          :key="index"
        >
          <img :src="spot.image" :alt="spot.name" />
          <div class="card-content">
            <h3>{{ spot.name }}</h3>
            <p>{{ spot.description }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="latest-news">
      <h2>最新资讯</h2>
      <ul>
        <li v-for="(news, index) in latestNews" :key="index">
          <a :href="news.link">{{ news.title }}</a>
          <p>{{ news.summary }}</p>
          <el-link
            type="primary"
            v-if="index == 0"
            href="http://localhost:8080/login"
            >我要报名</el-link
          >
        </li>
      </ul>
    </div>
    <p>一份问卷小调查</p>

    <el-button type="primary" @click="dialog = true">点我填写</el-button>
    <el-drawer
      title="有朋自远方来，不亦乐乎"
      :before-close="handleClose"
      :visible.sync="dialog"
      direction="ltr"
      custom-class="demo-drawer"
      ref="drawer"
    >
      <div class="demo-drawer__content">
        <el-form :model="form">


          <el-form-item label="爱济南">
    <el-radio-group v-model="form.resource">
      <el-radio label="超级无敌爱"></el-radio>
      <el-radio label="一般般啦"></el-radio>
    </el-radio-group>
  </el-form-item>


          <el-form-item label="你想对济南说？" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="你是否来过济南？" :label-width="formLabelWidth">
            <el-select v-model="form.region" placeholder="请选择">
              <el-option label="来过" value="yes"></el-option>
              <el-option label="还木有" value="no"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <div class="demo-drawer__footer">
          <el-button @click="cancelForm">取 消</el-button>
          <el-button
            type="primary"
            @click="$refs.drawer.closeDrawer()"
            :loading="loading"
            >{{ loading ? "提交中 ..." : "确 定" }}</el-button>
        </div>
      </div>
    </el-drawer>
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

      dialog: false,
      loading: false,

      searchQuery: "",
      imagehome: [
        require("../assets/history1.png"),
        require("../assets/history2.png"),
        require("../assets/daminghu.png"),
        require("../assets/baotuquan.png"),
        require("../assets/qianfoshan.png"),
      ],
      recommendedSpots: [
        {
          name: "趵突泉",
          image: require("../assets/baotuquan.png"),
          description: "趵突泉是济南最著名的泉水之一，素有“天下第一泉”之称。",
        },
        {
          name: "大明湖",
          image: require("../assets/daminghu.png"),
          description: "大明湖风景优美，是济南的一大自然景观，历史悠久。",
        },
        {
          name: "千佛山",
          image: require("../assets/qianfoshan.png"),
          description: "千佛山是济南的名山之一，拥有丰富的历史文化遗产。",
        },
        {
          name: "印象济南",
          image: require("../assets/yinxiangjinan.png"),
          description: "印象济南是济南有名商业街之一，国家4A景区",
        },
      ],
      latestNews: [
        {
          title: "济南泉水节即将开幕",
          summary:
            "一年一度的济南泉水节即将拉开帷幕，届时将有丰富多彩的活动。敬请期待！",
          link: "http://www.jnqsj.cn/",
        },
        {
          title: "济南美食节吸引大量游客",
          summary:
            "济南美食节上，各地美食汇聚一堂，吸引了众多游客前来品尝美味。",
          link: "https://baijiahao.baidu.com/s?id=1801822338085660682&wfr=spider&for=pc",
        },
        {
          title: "济南旅游业发展势头强劲",
          summary: "随着泉水景观和历史文化的宣传，济南的旅游业发展势头强劲。",
          link: "http://www.jnwljt.com/",
        },
      ],

      form: {
        come: "",
        say: "",
        likejinan: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      formLabelWidth: "80px",
      timer: null,
    };
  },
  methods: {
    search() {
      //alert(`搜索内容：${this.searchQuery}`);
      // 在这里添加实际的搜索逻辑
      const query = this.searchQuery.trim(); //去掉空格
      if (query) {
        // 映射表，根据搜索词进行路由跳转
        const routesMap = {
          把子肉: "food",
          烧烤: "food",
          美食: "food",
          千佛山: "attractions",
          旅游: "attractions",
          景点: "attractions",
          大明湖: "attractions",
          趵突泉: "attractions",
          历史: "history",
          文化: "culture",
          // 可添加更多的关键词映射
        };
        for (const key in routesMap) {
          if (query.includes(key)) {
            const routeName = routesMap[key];
            if (routeName) {
              this.$router.push("/" + routeName);
            } else {
              alert("未找到相关内容"); // 或者跳转到一个默认页面
            }
          }
        }
        //const routeName = routesMap[query];
        //if (routeName) {
        //this.$router.push("/"+routeName);
        //} else {
        //alert('未找到相关内容'); // 或者跳转到一个默认页面
        //}
      }
    },
    handleClose(done) {
      if (this.loading) {
        return;
      }
      this.$confirm("确定要提交表单吗？")
        .then(() => {
          this.loading = true;
          this.timer = setTimeout(() => {
            done();
            // 动画关闭需要一定的时间
            setTimeout(() => {
              this.loading = false;
            }, 400);
          }, 2000);
        })
        .catch(() => {});
        alert('感谢参与此次问卷');
    },
    cancelForm() {
      this.loading = false;
      this.dialog = false;
      clearTimeout(this.timer);
      
    },
  },
};
</script>
  
  <style scoped>
.home {
  text-align: center;
}
.search-container {
  margin: 20px auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.search-container input {
  width: 300px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 4px 0 0 4px;
}

.search-container button {
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  background-color: #007bff;
  color: white;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
}

.search-container button:hover {
  background-color: #0056b3;
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
.recommendations,
.latest-news {
  margin: 40px 0;
}

.cards {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.card {
  width: 300px;
  margin: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.card-content {
  padding: 20px;
  text-align: left;
}

.latest-news ul {
  list-style: none;
  padding: 0;
}

.latest-news li {
  margin: 20px 0;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.latest-news a {
  font-size: 18px;
  color: #007bff;
  text-decoration: none;
}

.latest-news a:hover {
  text-decoration: underline;
}

.latest-news p {
  margin-top: 10px;
  font-size: 14px;
  color: #555;
}
</style>
  