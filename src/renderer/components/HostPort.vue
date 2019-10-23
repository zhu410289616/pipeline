<template>
    <div class="title">
        Host:
        <el-autocomplete placeholder="请输入IP地址" v-model="currentHost" :fetch-suggestions="queryHosts" @select="handleHostSelect">
            <i class="el-icon-edit el-input__icon" slot="suffix" @click="handleIconClick"> </i>
            <template slot-scope="{ item }">
                <div class="name">{{ item.host }}</div>
            </template>
        </el-autocomplete>
        Port:
        <el-autocomplete placeholder="请输入端口号" v-model="currentPort"  :fetch-suggestions="queryPorts" @select="handlePortSelect">
            <i class="el-icon-edit el-input__icon" slot="suffix" @click="handleIconClick"> </i>
            <template slot-scope="{ item }">
                <div class="name">{{ item.port }}</div>
            </template>
        </el-autocomplete>
    </div>
</template>

<script>
export default {
    data() {
        return {
            hosts: [],
            ports: [],
            currentHost: '',
            currentPort: ''
        }
    },
    methods: {
        queryHosts(queryString, cb) {
            var hosts = this.hosts;
            cb(hosts);
        },
        handleHostSelect(item) {
            console.log(item);
            this.currentHost = item.host;
        },
        queryPorts(queryString, cb) {
            var ports = this.ports;
            cb(ports);
        },
        handlePortSelect(item) {
            console.log(item);
            this.currentPort = item.port;
        },
        handleIconClick(ev) {
            console.log(ev);
        },
        loadHostList() {
            return [
                { "host": "127.0.0.1" },
                { "host": "192.168.1.1" }
            ];
        },
        loadPortList() {
            return [
                { "port": "1921" },
                { "port": "1023" }
            ];
        }
    },
    mounted() {
        this.hosts = this.loadHostList()
        this.ports = this.loadPortList()
    }
}
</script>

<style>
</style>