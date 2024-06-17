<template>
  <div class="attractions">
    <h1>济南旅游景点</h1>
    <p>探索济南的著名景点，包括千佛山、大明湖等。</p>
    <el-container>
      <el-aside width="200px">
        <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
          <el-menu :default-openeds="['1', '3']">
            <el-submenu index="1">
              <template slot="title"
                ><i class="el-icon-view"></i>千佛山</template
              >
              <el-menu-item-group>
                <el-menu-item index="1-1">概览</el-menu-item>
                <el-menu-item index="1-2">建议</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title"><i class="el-icon-map-location"></i>大明湖</template>
              <el-menu-item-group>
                <el-menu-item index="2-1">概览</el-menu-item>
                <el-menu-item index="2-2">建议</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title"><i class="el-icon-s-opportunity"></i>趵突泉</template>
              <el-menu-item-group>
                <el-menu-item index="3-1">概览</el-menu-item>
                <el-menu-item index="3-2">建议</el-menu-item>
              </el-menu-item-group>

            </el-submenu>
          </el-menu>
        </el-aside>
      </el-aside>
      <el-main>Main</el-main>
    </el-container>
  </div>
</template>
  
  <script>
export default {
  name: "AttractionsPage",
};
</script>
  
  <style scoped>
.attractions {
  text-align: center;
}
.el-aside {
  background-color: #ffffff;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
.el-aside {
  color: #333;
}
</style>
  