<template>
    <div class="page">
        <h1>home</h1>
        <el-space>
            <el-button @click="goWhereByUrl('/demo/default')">生命周期</el-button>
            <el-button @click="goWhereByUrlName('demo-vCodeDiff')" type="primary">v-code-diff</el-button>
            <el-button type="success">成功按钮</el-button>
            <el-button type="info">信息按钮</el-button>
            <el-button type="warning">警告按钮</el-button>
            <el-button type="danger">危险按钮</el-button>
        </el-space>
        <router-view />
    </div>
</template>

<script setup lang="ts">
import { useRouter, onBeforeRouteLeave } from 'vue-router' // useRoute
/**
 * @Description:
 * @param 路由及传参
 * @author glory
 * @date 2022/6/27
 */
// const route = useRoute()
const router = useRouter()
// console.log('route__', route)
// console.log('router__', router)

onBeforeRouteLeave((to, from) => {
    console.log('组合式Api：vue-router中的onBeforeRouteLeave')
    console.log('to__', to)
    console.log('form__', from)
})

const goWhereByUrl = (url: string) => {
    // return router.push(url)
    return router.push({ path: url, query: { id: '9527' } })
}
const goWhereByUrlName = (urlName: string) => {
    // return router.push({ name: urlName, query: { id: '9527' } })
    return router.push({ name: urlName, params: { id: '9527' } })
}
</script>

<style scoped lang="less">
.page {
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>
