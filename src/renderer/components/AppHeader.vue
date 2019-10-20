<template>
    <div>
        <div>
            <DateTime></DateTime>
            <img id="logo" src="../assets/logo.png" >  
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
    height: auto;
    margin-bottom: 20px;
    width: auto;
  }

</style>