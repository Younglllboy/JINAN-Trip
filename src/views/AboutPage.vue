<template>
  <div class="about">
    <div id="little"><h1>关于</h1></div>
    <div class="centered-div">
      <p>{{ text }}</p>
    </div>
  </div>
</template>
  
  <script>
export default {
  name: "AboutPage",
  data() {
    return {
      text: "泉城济南，这座历史文化名城吸引了无数游客前来探寻其独有的城市韵味。济南的泉水景观成为网红打卡地，使济南在诸多城市中脱颖而出，成为受欢迎的旅游目的地。济南的泉水文化不仅增加了城市的独特魅力，还为济南的不断发展增添了信心。请以“济南泉城风光”或“济南地道美食”为主题，设计和制作一个网站，宣传济南的独特风景或美食文化，以此助力济南的经济和旅游业发展。",
    };
  },
};
</script>
  
  <style scoped>
.about {
  text-align: left;
}
#little {
  text-align: center;
}
template {
  display: flex;
  justify-content: left; /* 水平居中 */
  align-items: center; /* 垂直居中 */
  height: 100vh; /* 使内容占满整个视窗高度 */
  margin: 0; /* 移除默认的body外边距 */
  font-family: Arial, sans-serif;
}
.centered-div {
  display: flex;
  justify-content: left; /* 水平居中 */
  width: 80%; /* 根据需要调整大小 */
  height: 80vh; /* 根据需要调整大小 */
  margin: auto; /* 使div居中 */
  padding: 20px;
  box-sizing: border-box; /* 包括padding在内计算宽高 */
  border: 2px solid #000; /* 添加边框以便于查看 */
  overflow-wrap: break-word; /* 允许长单词换行 */
  background-color: #fcfcfc; /* 背景颜色 */
}
</style>
  