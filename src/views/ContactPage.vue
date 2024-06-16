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
    <input type="submit" />
  </div>
</template>
  
  <script>
export default {
  name: "ContactPage",
  data() {
    return {
      textarea: "",
    };
  },
};
</script>
  
  <style scoped>
.contact {
  text-align: center;
}
</style>
  