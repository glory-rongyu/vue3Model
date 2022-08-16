<template>
    <div class="default-layout">
        <Header class="default-header" />
        <div class="default-container">
            <Sider class="left-side" />
            <Container class="right-container" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import Sider from './components/sider.vue'
import Header from './components/header.vue'
import Container from './components/container.vue'
</script>

<style lang="less" scoped>
.default-layout {
    width: 100vw;
    background: #f0f2f5;
    height: 100%;

    .default-header {
        width: 100vw;
        height: 48px;
        background: #001529;
    }

    .default-container {
        width: 100%;
        display: flex;

        .left-side {
            overflow: hidden;
            //padding-top: 48px;
            flex: 0 0 208px;
            max-width: 208px;
            min-width: 208px;
            width: 208px;
        }

        .right-container {
            flex: 1;
            margin: 16px;
        }
    }
}
</style>
