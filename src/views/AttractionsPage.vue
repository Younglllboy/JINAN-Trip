<template>
  <div class="attractions">
    <h1>济南旅游景点</h1>
    <p>探索济南的著名景点，包括千佛山、大明湖等。</p>
    <el-container style="height: 1000px; border: 1px">

        <el-aside width="200px" style="background-color: rgb(252,234,234)">
          <el-menu><!--:default-openeds="['1','2','3']"-->
            <el-submenu index="1">
              <template slot="title"
                ><i class="el-icon-view"></i>千佛山</template
              >
              <el-menu-item-group>
                <el-menu-item index="1-1"><router-link to="/attractions/qianfoshan1">概览</router-link></el-menu-item>
                <el-menu-item index="1-2"><router-link to="/attractions/qianfoshan2">建议</router-link></el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title"><i class="el-icon-map-location"></i>大明湖</template>
              <el-menu-item-group>
                <el-menu-item index="2-1"><router-link to="/attractions/daminghu1">概览</router-link></el-menu-item>
                <el-menu-item index="2-2"><router-link to="/attractions/daminghu2">建议</router-link></el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title"><i class="el-icon-s-opportunity"></i>趵突泉</template>
              <el-menu-item-group>
                <el-menu-item index="3-1"><router-link to="/attractions/baotuquan1">概览</router-link></el-menu-item>
                <el-menu-item index="3-2"><router-link to="/attractions/baotuquan2">建议</router-link></el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-aside>

      <el-main>
        <jinanmap></jinanmap>
        <router-view/><!--link挂载至view-->
      </el-main>
    </el-container>
  </div>
</template>
  
  <script>

import Jinanmap from './Jinanmap.vue';

export default {
  components: { Jinanmap },

  name: "AttractionsPage",
  data() {
    return {

    };
  },
  methods: {

  },
};
</script>
  
  <style scoped>
.attractions {
  text-align: center;
}
.el-aside {
  background-color: #181616;
  color: #333;
  text-align: center;
  line-height: 500px;
  height: 1000px
}

.el-main {
  background-color: #fafafa;
  color: #333;
  text-align: center;
  line-height: 160px;
}

</style>
  