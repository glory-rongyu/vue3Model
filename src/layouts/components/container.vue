<template>
    <el-scrollbar :height="screenHeight - 80" class="container-scrollbar">
        <div class="container-page">
            <router-view :containerHeight="screenHeight - 104"></router-view>
        </div>
    </el-scrollbar>
</template>

<script lang="ts" setup>
import { useWindowSize } from '@vueuse/core'
import { onMounted, watch } from 'vue'

const { height: screenHeight } = useWindowSize()

onMounted(() => {
    console.log('container__screenHeight__', screenHeight.value)
})

watch(screenHeight, (newValue, oldValue) => {
    console.log('newValue__oldValue', newValue, oldValue)
})
</script>

<style lang="less">
.container-scrollbar {
    border-radius: 2px;
    background: #fff;

    .container-page {
        height: 100%;
        padding: 12px;

        .table-pagination {
            width: 100%;
            display: flex;
            justify-content: end;
            margin-top: 10px;
        }
    }
}
</style>
