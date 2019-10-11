<template>
  <div>
    <!-- 菜单组件 -->
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
    >
      <!-- 子菜单：用户管理 -->
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>用户管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="11" @click="navUser">用户管理</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <el-menu-item index="12" @click="navPwd">密码重置</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <!-- 子菜单：商品管理 -->
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>商品管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="21">商品分类</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <el-menu-item index="22">商品管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <!-- 子菜单：订单管理 -->
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-document"></i>
          <span>订单管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="31">订单管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <!-- 子菜单：会员管理 -->
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span>会员管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="41">会员管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    navUser() {
      this.$router.push("/admin/admin");
    },
    navPwd(){
       this.$router.push("/admin/pwdReset");
    }
  }
};
</script>

<style scoped>
</style>