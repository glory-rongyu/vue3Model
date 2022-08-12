<template>
    <router-view></router-view>
</template>

<script lang="ts" setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { onMounted } from 'vue'

// 打印环境变量
onMounted(() => {
    console.log('import.meta.env =', import.meta.env)
})
</script>

<style>
body {
    padding: 0;
    margin: 0;
}

/*#app {*/
/*    font-family: Avenir, Helvetica, Arial, sans-serif;*/
/*    -webkit-font-smoothing: antialiased;*/
/*    -moz-osx-font-smoothing: grayscale;*/
/*    background: #f0f2f5;*/
/*    !*text-align: center;*!*/
/*    !*color: #2c3e50;*!*/
/*    !*margin-top: 60px;*!*/
/*}*/
</style>
