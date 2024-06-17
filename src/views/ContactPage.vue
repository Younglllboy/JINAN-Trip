<template>
  <div class="contact">
    <h1>联系我们</h1>
    <p>如有任何疑问，请联系我们。</p>
    <el-input
      type="textarea"
      :rows="10"
      placeholder="请输入内容"
      v-model="textarea"
    >
    </el-input>
    <input onclick="alert('感谢你的反馈')" type="submit" />
    <el-rate
      v-model="value"
      disabled
      show-score
      text-color="#ff9900"
      score-template="{value}"
      texts="满意"
    >
    </el-rate>
  </div>
</template>
  
  <script>
export default {
  name: "ContactPage",
  data() {
    return {
      textarea: "",
      value: 4.5,
    };
  },
};
</script>
  
  <style scoped>
.contact {
  text-align: center;
}
</style>
  