<template>
  <div id="app">
    <el-container>
      <el-header style="height:60px">
        <AppHeader></AppHeader>
      </el-header>

      <el-container>
        <el-aside style="width:160px">
          <el-menu default-active="$route.path" class="el-menu-vertical-demo" router @select="handleSelect">
              <el-menu-item index="/TcpProxy"><i class="el-icon-message"></i>导航一</el-menu-item>
              <el-menu-item index="/HttpProxy"><i class="el-icon-menu"></i>导航二</el-menu-item>
              <el-menu-item index="/About"><i class="el-icon-setting"></i>导航三</el-menu-item>
              <el-menu-item v-for="(item, i) in navList" :key="i" :index="item.path">
                {{ item.name }}
              </el-menu-item>
          </el-menu>
        </el-aside>

        <el-main>
          <!-- 路由出口 -->
          <!-- 路由匹配到的组件将渲染在这里 -->
          <router-view></router-view>
        </el-main>
      </el-container>

      <el-footer>
        <AppFooter></AppFooter>
      </el-footer>
    </el-container>
    
  </div>
</template>

<script>
  import AppHeader from './components/AppHeader.vue'
  import AppFooter from './components/AppFooter.vue'

  export default {
    name: 'pipeline',
    components: { AppHeader, AppFooter },
    data() {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
        navList: [
          {name:'tcp-service', path:'/TcpService'},
          {name:'tcp-proxy', path:'/TcpProxy'},
          {name:'http-proxy', path:'/HttpProxy'},
          {name:'about', path:'/About'}
        ]
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        switch(key) {
            case '1':
                this.$router.push('/TcpProxy');
                break;
            case '2':
                this.$router.push('/HttpProxy');
                break;
            case '3':
                this.$router.push('/About');
                break;
            default:
                break;
        }
      }
    }
  }
</script>

<style>
  /* CSS */
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }
</style>
