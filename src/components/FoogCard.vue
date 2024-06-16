<template>
<el-row>
  <el-col :span="8" v-for="(o, index) in 1" :key="o" :offset="index > 0 ? 1 : 0">
    <el-card :body-style="{ padding: '10px' }">
      <img src="../assets/food1.png" class="image">
      <div style="padding: 14px;">
        <span>好吃的把子肉</span>
        <div class="bottom clearfix">
          <time class="time">肥而不腻的把子肉，让你做梦流口水</time>
          <el-button type="text" class="button">想吃</el-button>
        </div>
      </div>
    </el-card>
  </el-col>
  <el-col :span="8" v-for="(o, index) in 1" :key="o" :offset="index > 0 ? 1 : 0">
    <el-card :body-style="{ padding: '10px' }">
      <img src="../assets/food2.png" class="image">
      <div style="padding: 14px;">
        <span>好吃的烧烤</span>
        <div class="bottom clearfix">
          <time class="time">滋滋冒油的大串烧烤，与啤酒绝配</time>
          <el-button type="text" class="button">想吃</el-button>
        </div>
      </div>
    </el-card>
  </el-col>
  <el-col :span="8" v-for="(o, index) in 1" :key="o" :offset="index > 0 ? 1 : 0">
    <el-card :body-style="{ padding: '10px' }">
      <img src="../assets/food3.png" class="image">
      <div style="padding: 14px;">
        <span>好吃的包子</span>
        <div class="bottom clearfix">
          <time class="time">美味的包子像白胖娃娃一样</time>
          <el-button type="text" class="button">想吃</el-button>
        </div>
      </div>
    </el-card>
  </el-col>
</el-row>

</template>
<style>
  .time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 400px;
    height: 200px;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
</style>

<script>
export default {
  data() {
    return {
      currentDate: new Date()
    };
  }
}
</script>