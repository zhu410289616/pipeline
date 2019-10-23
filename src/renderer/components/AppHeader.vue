<template>
    <div>
        <div>
            <DateTime></DateTime>
            <img id="logo" src="../assets/logo.png" v-show="false">  
        </div>
    </div>
</template>

<script>
  import DateTime from './DateTime.vue'

  export default {
    components: { DateTime },
    
  }
</script>

<style>

  #logo {
    width: 30%;
    height: 30%;
    margin-bottom: 20px;
  }

</style>