<template>
    <h1>vue3生命周期</h1>
    <div>num:{{ count }}</div>
    <el-button type="primary" @click="handleNumAdd">num++</el-button>
</template>

<script lang="ts" setup>
// defineProps
import { onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const pageParams = route.query
console.log('pageParams__', pageParams)
const count = ref(0)
// const isShow = ref(true)

const handleNumAdd = () => count.value++

/**
 * @Description:vue3生命周期钩子
 * @param -
 * @author glory
 * @date 2022/6/27
 */

// 组合式API的生命周期钩子
onBeforeMount(() => {
    console.log('挂载前,onBeforeMount 开始调用')
})

onMounted(() => {
    console.log('挂载后，onMounted 开始调用')
})

onBeforeUpdate(() => {
    console.log('更新前,onBeforeUpdate 开始调用')
})

onUpdated(() => {
    console.log('更新后,onUpdated 开始调用')
})

onBeforeUnmount(() => {
    console.log('卸载前，onBeforeUnmount 开始调用')
})

onUnmounted(() => {
    console.log('卸载后，onUnmounted 开始调用')
})
</script>

<style scoped></style>
