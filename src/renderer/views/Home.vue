<template>
  <el-container class="container">
    <!-- 头部 -->
    <el-header>
      <el-row>
        <el-col :span="12">
          <el-image style="width: 210px; height: 54px" :src="url"></el-image>
        </el-col>
        <el-col class="logout" :span="12">
          <template>
            <div class="navOperater">
              <el-link type="info">退出系统</el-link>
            </div>
            <div class="navOperater">
              <el-avatar
                class="avatar"
                src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
              ></el-avatar>
            </div>
          </template>
        </el-col>
      </el-row>
    </el-header>
    <el-container>
      <!-- 侧边栏 -->
      <el-aside>
        <Aside />
      </el-aside>
      <!-- 内容区 -->
      <el-main>
        <template>
      
        </template>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
// 导入组件
import Aside from "@/components/aside/index.vue";

export default {
  name: "home",
  components: {
    Aside
  },
  data() {
    return {
      url: "/logo.png",
      fits: ["fill", "contain", "cover", "none", "scale-down"]
    };
  }
};
</script>
<style lang="scss" scoped>
body > .el-container {
  margin-bottom: 40px;
}
.container {
  height: 600px;
}
.el-header {
  text-align: left;
  background-color: white;
  .logout {
    text-align: right;
    .navOperater {
      width: 80px;
      height: 80px;
      float: right;
      line-height: 50px;
    }
  }
}
.el-main {
  background-color: #e9eef3;
  text-align: center;
}
</style>