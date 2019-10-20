<template>
    <div>
        <h2>header</h2>
        
        <div class="container">
            <router-view></router-view>
        </div>
        
        <h2>footer</h2>
    </div>
</template>

<script>
export default {
    name: 'Test',
    data() {
        message: 'pipeline'
    }
}
</script>

<style>
</style>