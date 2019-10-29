<template>
<div class="app">

    <!-- 标签页 -->
    <template>
        <el-tabs v-model="activeName" @tab-click="handleTabClick">
            <el-tab-pane label="服务端" name="first">
                <div style="display: flex">

                <div  style="border:1px solid #001; padding: 5px;">
                <table>
                    <tr>
                        <td>
                        <HostPort></HostPort>
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <el-button style="width:100%" @click="handleServerAction">启动服务</el-button>
                        </td>
                    </tr>
                </table>
                </div>

                <div style="width:auto;border:1px dashed #000; margin: 0px 5px 0px 5px">
                    <template v-for="{msg, index} in dataSender">
                        <DataSend @click="sendDataAction"></DataSend>
                    </template>
                </div>

                </div>

                <div></div>
                
                

                

                
                
            </el-tab-pane>

            <el-tab-pane label="搬运工" name="second">
                配置管理
                <div style="width:250px">
                <el-row>
                    <HostPort></HostPort>
                </el-row>
                <el-row>
                    <el-col>
                    <el-button style="width:100%" @click="handleServerAction">启动</el-button>
                    </el-col>
                </el-row>
                </div>
            </el-tab-pane>
            <el-tab-pane label="客户端" name="third">
                角色管理
                <el-input type="textarea" :rows="2" placeholder="请输入自定义编码器逻辑代码" v-model="encoderTextArea">
                </el-input>
                <el-button style="width:100%" @click="encoderLogicAction">执行</el-button>
            </el-tab-pane>
            <el-tab-pane label="记事本" name="fourth">
                定时任务补偿
                <el-row>
                    <el-col>
                    <el-button style="width:100%" @click="testAction">启动</el-button>
                    </el-col>
                </el-row>
            </el-tab-pane>
        </el-tabs>
    </template>

    
    
</div>
</template>

<script>
import HostPort from './HostPort.vue'
import DataSend from './DataSend.vue'

import net from 'net'
import TcpService from '../../brook/TcpService.js'

export default {
    components: { HostPort, DataSend, TcpService },
    data() {
        return {
            activeName: 'first',
            dataSender: [
                {name:"1", value:"one"},
                {name:"2", value:"two"},
                {name:"3", value:"three"}
            ],
            encoderTextArea: 'var jsText = "return function(){alert(1+1)}"; var jscode = new Function(jsText)(); jscode();',
            encoderTextArea1: 'function test(str){console.log(str);alert(str)};test("sdf")',
            decoderTextArea: ''
        }
    },
    mounted() {
    },
    methods: {
        
        sendDataAction: function() {
            console.log('sendDataAction');
        },

        handleTabClick: function(tab, event) {
            console.log(tab, event);
        },
        handleServerAction: function() {
            console.log('handleServerAction 1');
            TcpService.startServer(1921);
            console.log('handleServerAction 2, sum: ' + TcpService.testSum(2,3));
        },
        encoderLogicAction: function() {
            eval(this.encoderTextArea);
        },
        testAction: function() {
            this.$utils.testFunction();
        }
        
    }
}
</script>

<style>
</style>