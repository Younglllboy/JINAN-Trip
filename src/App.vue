<template>
  <div id="app">
    <Title></Title>
    <Navbar class="navbar"></Navbar>
    <main class="content">
      <router-view />
      <div class="spacer"></div>
    </main>
    <Footer v-if="showFooter" class="footer"></Footer>

  </div>
 
</template>

<script>
import Title from "./components/TitleOn.vue";
import Navbar from "./components/NavbarOn.vue";
import Footer from "./components/FooterOn.vue";

export default {
  name: "App",
  components: {
    Title,
    Navbar,
    Footer,

  },
  data() {
    return {
      showFooter: false,
    };
  },
  methods: {
    handleScroll() {
      const bottomOfWindow =
        document.documentElement.scrollTop + window.innerHeight >=
        document.documentElement.offsetHeight;
      this.showFooter = bottomOfWindow;
    },
  },
  mounted() {
    //页面挂载时创建监听器
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    //页面销毁前移除监听器
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  height: 100%;
}
Title {
  background-color: #333;
  color: white;
  text-align: center;
  padding: 10px;
  width: 100%;
}
.navbar {
  position: sticky;
  top: 0;
  background-color: #666;
  color: white;
  text-align: center;
  padding: 10px;
  z-index: 1;
  width: 100%;
}
.spacer {
  height: 50vh; /* 增加页面高度以便于滚动测试 */
}
.content {
  flex: 1;
  overflow-y: scroll;
  padding-top: 10px; /* 增加内边距以适应导航栏 */
}
.footer {
  width: 100%;
  padding: 20px;
  background-color: #333;
  color: white;
  text-align: center;
  position: fixed;
  bottom: 0;
  z-index: 1;
}
</style>
