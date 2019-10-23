<template>
<div class="app">

    <!-- 标签页 -->
    <template>
        <el-tabs v-model="activeName" @tab-click="handleTabClick">
            <el-tab-pane label="服务端" name="first">
                <el-row>
                    <HostPort></HostPort>
                    <el-button @click="handleServerAction">启动服务</el-button>
                </el-row>
                
            </el-tab-pane>
            <el-tab-pane label="搬运工" name="second">
                配置管理
            </el-tab-pane>
            <el-tab-pane label="客户端" name="third">
                角色管理
            </el-tab-pane>
            <el-tab-pane label="记事本" name="fourth">
                定时任务补偿
            </el-tab-pane>
        </el-tabs>
    </template>

    
    
</div>
</template>

<script>
import HostPort from './HostPort.vue'

export default {
    components: { HostPort },
    data() {
        return {
            activeName: 'first'
        }
    },
    methods: {
        handleTabClick(tab, event) {
            console.log(tab, event);
        },
        handleServerAction() {

        }
    }
}
</script>

<style>
</style>