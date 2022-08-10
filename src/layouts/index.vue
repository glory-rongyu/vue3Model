<template>
    <div class="default-layout">
        <div class="default-header">
            <Header />
        </div>
        <div class="default-container">
            <div class="left-side">
                <Sider />
            </div>
            <div class="right-container">
                <Container />
            </div>
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
    width: 100%;
    background: #f0f2f5;
    height: 100%;

    .default-header {
        height: 48px;
        background: #001529;
    }

    .default-container {
        width: 100vw;
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
            padding: 16px;
        }
    }
}
</style>
