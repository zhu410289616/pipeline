<template>
    <div>
        <table>
            <tr>
                <td>数据:</td>
                <td>
                    <el-input placeholder="请输入内容" v-model="input" clearable>
                    </el-input>
                </td>
                <td>
                    <el-button>发送</el-button>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            input: ''
        }
    }
}
</script>

<style>
</style>