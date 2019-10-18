<template>
    <div class="yv-header">
        <div class="yv-header-content">
            <img id="logo" src="../assets/logo.png" >
            <div class="header-important">
                <div class="header-title"><font id="header-title-font">育π网</font></div>
                <div  class="header-title-foo"><font id="header-title-font-foo">www.yvpai.com</font></div>
            </div>
 
            <div class="header-tabs">
                <DateTime></DateTime>
            </div>
 
            <div class="header-login-regist">
                <div class="header-login">登录</div>
                <div class="header-splid">|</div>
                <div class="header-login">注册</div>
            </div>
 
        </div>
    </div>
</template>

<script>
  import DateTime from './DateTime.vue'

  export default {
    components: { DateTime },
    data() {
      
    }
  }
</script>

<style>

  #logo {
    height: auto;
    margin-bottom: 20px;
    width: 420px;
  }

</style>