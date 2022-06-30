<template>
    <div class="page">
        <h1>Vue使用及插件用例</h1>
        <el-space>
            <el-button type="primary" @click="goWhereByUrl('/demo/default')">生命周期</el-button>
            <el-button type="primary" @click="goWhereByUrlName('demo-refs-other')">ref使用及其他</el-button>
            <el-button type="primary" @click="goWhereByUrlName('demo-watch')">watch使用及计算属性</el-button>
            <el-button type="primary" @click="goWhereByUrlName('demo-pinia')">pinia使用</el-button>
            <el-button type="primary" @click="goWhereByUrlName('demo-mitt')">mitt使用</el-button>
            <el-button type="primary" @click="goWhereByUrlName('demo-axios')">axios封装使用</el-button>
            <el-button type="primary" @click="goWhereByUrlName('demo-vueUse')">vueUse小试牛刀</el-button>
            <el-button type="primary" @click="goWhereByUrlName('demo-vCodeDiff')">v-code-diff</el-button>
        </el-space>
        <router-view />
    </div>
</template>

<script lang="ts" setup>
import { onBeforeRouteLeave, useRouter } from 'vue-router' // useRoute
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

<style lang="less" scoped>
.page {
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>
