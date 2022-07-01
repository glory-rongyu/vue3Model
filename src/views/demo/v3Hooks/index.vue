<template>
    <h1>v3Hooks小试牛刀</h1>
    <div>loading:{{ loading }}</div>
    <el-space>
        <div>{{ state }}</div>
        <el-button type="primary" @click="toggle">toggle</el-button>
        <el-button type="primary" @click="setToggle">setToggle</el-button>
    </el-space>
</template>

<script lang="ts" setup>
import { useRequest, useToggle } from 'v3hooks'
import { onMounted, ref, watchEffect } from 'vue'
import { getUserList } from '../../../api/users'

const platform = ref<string>('安装 App')
const platform2 = ref<string>('安装中...')
const [state, [toggle]] = useToggle(platform, platform2, '不安装')
const setToggle = () => {
    toggle(platform)
}
const { data, loading, run } = useRequest<any>(() => getUserList({ page: 1, pageSize: 10 }), {
    manual: true
})
onMounted(() => {
    run()
})

watchEffect(() => {
    console.log('data__', data.value)
    console.log('loading__', loading.value)
})
// console.log('loading__', loading)
// console.log('data__', data)
// console.log('data__', data)
</script>

<style scoped></style>
