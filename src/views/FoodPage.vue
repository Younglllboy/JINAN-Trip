<template>
  <div class="food">
    <h1>济南地道美食</h1>
    <div class="gallery">
      <foog-card></foog-card>
    </div>
    <el-upload
      action="https://jsonplaceholder.typicode.com/posts/"
      list-type="picture-card"
      :on-preview="handlePictureCardPreview"
      :on-remove="handleRemove"
    >
      <i class="el-icon-plus"></i>
    </el-upload>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt="" />
    </el-dialog>
  </div>
</template>
  
  <script>
import FoogCard from "@/components/FoogCard.vue";
export default {
  components: { FoogCard },
  name: "FoodPage",
  data() {
    return {
      dialogImageUrl: "",
      dialogVisible: false,
    };
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
  },
};
</script>
  
  <style scoped>
.food {
  text-align: center;
}
.gallery {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.gallery img {
  width: 45%;
  margin: 10px;
}
</style>
  