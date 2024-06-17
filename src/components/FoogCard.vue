<template>
<el-row>
  <el-col :span="8" v-for="(o, index) in 1" :key="o" :offset="index > 0 ? 1 : 0">
    <el-card :body-style="{ padding: '10px' }">
      <img src="../assets/food1.png" class="image">
      <div style="padding: 14px;">
        <span>好吃的把子肉</span>
        <div class="bottom clearfix">
          <time class="time">肥而不腻的把子肉，让你做梦流口水</time>
          <el-button type="text" @click="dialogFormVisible = true">想吃</el-button>
        
          <el-dialog title="请填写收货信息" :visible.sync="dialogFormVisible">
  <el-form :model="form">
    <el-form-item label="地址" :label-width="formLabelWidth">
      <el-input v-model="form.name" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="购买数量" :label-width="formLabelWidth">
      <el-select v-model="form.region" placeholder="请选择">
        <el-option label="尝鲜3个" value="3"></el-option>
        <el-option label="我要送礼6个" value="6"></el-option>
      </el-select>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
  </div>
</el-dialog>

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
          <el-button type="text" @click="dialogFormVisible = true">想吃</el-button>

<el-dialog title="请填写收货信息" :visible.sync="dialogFormVisible">
  <el-form :model="form">
    <el-form-item label="地址" :label-width="formLabelWidth">
      <el-input v-model="form.name" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="购买数量" :label-width="formLabelWidth">
      <el-select v-model="form.region" placeholder="请选择">
        <el-option label="尝鲜10串" value="10"></el-option>
        <el-option label="我要送礼20串" value="20"></el-option>
      </el-select>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
  </div>
</el-dialog>

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
          <el-button type="text" @click="dialogFormVisible = true">想吃</el-button>

          <el-dialog title="请填写收货信息" :visible.sync="dialogFormVisible">
  <el-form :model="form">
    <el-form-item label="地址" :label-width="formLabelWidth">
      <el-input v-model="form.name" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="购买数量" :label-width="formLabelWidth">
      <el-select v-model="form.region" placeholder="请选择">
        <el-option label="尝鲜4个" value="4"></el-option>
        <el-option label="我要送礼10个" value="10"></el-option>
      </el-select>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
  </div>
</el-dialog>

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
      currentDate: new Date(),
      dialogTableVisible: false,
        dialogFormVisible: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px'
    };
  }
}
</script>