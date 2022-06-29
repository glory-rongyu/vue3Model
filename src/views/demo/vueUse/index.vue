<template>
    <h1>vueUse使用</h1>
    <h3>鼠标标记点:x---{{ mouse.x }} y---{{ mouse.y }} 一秒后刷新</h3>
    <div>
        <el-space>
            <div>间隔: {{ counter }}</div>
            <el-button @click="pause">暂停</el-button>
            <el-button @click="resume">继续</el-button>
        </el-space>
    </div>
    <h3>Is Online: {{ online }}</h3>
    <div>............other...........</div>
</template>

<script lang="ts" setup>
import { reactive, watch } from 'vue'
import { debounceFilter, throttleFilter, useInterval, useLocalStorage, useMediaQuery, useMouse, useOnline, useTitle } from '@vueuse/core'

// 以节流的方式去改变 localStorage 的值
const storage = useLocalStorage('my-key', { foo: 'bar' }, { eventFilter: throttleFilter(1000) })

console.log('storage__', storage.value)

const mouse = reactive(useMouse({ eventFilter: debounceFilter(1000) }))

// "x" and "y" will be auto unwrapped, no `.value` needed
watch(mouse, (newValue, oldValue) => {
    console.log('newValue, oldValue', { ...newValue }, { ...oldValue })
})

useTitle('New Title')
console.log('isDark', useMediaQuery('(prefers-color-scheme: dark)').value)

// 间隔
const { counter, pause, resume } = useInterval(200, { controls: true })

const online = useOnline()
</script>

<style scoped></style>
