<template>
    <h3>子组件接收参数:num is {{ props.number }}</h3>
    <el-button @click="handleAdd">触发父级点击事件</el-button>
    <div>-----------------</div>
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

// 1.接收父组件传值
const props = defineProps<{
    number: number
}>()

// 2.想要设置默认值，通过 withDefaults 编译器宏
// interface Props {
//     msg?: string
//     labels?: string[]
// }
//
// const props = withDefaults(defineProps<Props>(), {
//     msg: 'hello',
//     labels: () => ['one', 'two']
// })

// 抛出事件
// const emit = defineEmits<{
//     (e: 'change', id: number): void
//     (e: 'update', value: string): void
// }>()
const emit = defineEmits<{
    // eslint-disable-next-line no-unused-vars
    (e: 'add'): void
}>()

const handleAdd = () => emit('add')

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
