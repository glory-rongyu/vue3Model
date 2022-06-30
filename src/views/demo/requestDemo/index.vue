<template>
    <h1>axios封裝使用</h1>
    <el-space>
        <el-button type="primary" @click="handleGetRequest">发起get请求</el-button>
        <el-button type="primary" @click="handlePostRequest">发起post请求</el-button>
        <el-button @click="cancelRequest('/api/user/list?page=1&&pageSize=10')">取消请求</el-button>
        <el-button @click="cancelAllRequest">取消全部请求</el-button>
    </el-space>
    <h3>console.log.....</h3>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import { getUserList, getUserList2 } from '../../../api/users'
import { cancelAllRequest, cancelRequest } from '../../../utils/axios'
// import request, { cancelAllRequest, cancelRequest } from '../../../utils/axios'

onMounted(() => {})

const handleGetRequest = async () => {
    const res = await getUserList({ page: 1, pageSize: 10 })
    console.log('res__', res)
    // request({ url: '/api/user/list?user=Glory', data: { page: 1, pageSize: 10 } })
    //     .then(res => {
    //         console.log('res_', res)
    //     })
    //     .catch(err => console.log('err_', err))
}

const handlePostRequest = async () => {
    const res = await getUserList2({ page: 1, pageSize: 15 })
    console.log('res__', res)
    // request({ url: '/api/user/list2', data: { page: 1, pageSize: 15 }, method: 'POST' })
    //     .then(res => {
    //         console.log('res_', res)
    //     })
    //     .catch(err => console.log('err_', err))
}
</script>

<style scoped></style>
