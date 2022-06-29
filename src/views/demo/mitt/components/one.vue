<template>
    <h3>这是发起mitt的组件</h3>
    <el-space>
        <el-button type="primary" @click="handleSendPerson">发送人员</el-button>
        <el-button type="primary" @click="handleSendMoney">提额</el-button>
        <el-button type="warning" @click="handleRemovePerson">移除监听人员</el-button>
        <el-button type="warning" @click="handleRemoveAll">移除监听全部</el-button>
    </el-space>
    <div>-----------------</div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import mittBus from '../../../../mitt/index'

onMounted(() => {
    // mittBus.emit('person', { name: 'glory', age: 18 })
})

const handleSendPerson = () => {
    mittBus.emit('person', { name: 'glory', age: 18 })
}
const handleSendMoney = () => {
    mittBus.emit('money', 999999)
}

// 指定监听移除
const handleRemovePerson = () => {
    mittBus.off('person')
}

// 所有监听移除
const handleRemoveAll = () => {
    // 清除所有event 将不会监听
    mittBus.all.clear()
}
</script>

<style scoped></style>
