<template>
    <h1>pinia使用及持久化</h1>
    <div>{{ store.msg }}</div>
    <div>Count now is : {{ store.count }}</div>
    <div>pinia使用storeToRefs解构</div>
    <div>Count now is:{{ count }}</div>
    <h3>getter获取:{{ store.getMessageRemark }}</h3>
    <div>
        <el-button type="primary" @click="handleObjClick">修改所有状态（$patch+对象）</el-button>
    </div>
    <div>---------------------------</div>
    <div>
        <el-button type="primary" @click="handleFuncClick">修改所有状态（$patch+函数）</el-button>
    </div>
    <div>---------------------------</div>
    <div>
        <el-button type="primary" @click="handleActionClick">修改多个状态（action）</el-button>
    </div>
    <div>---------------------------</div>
    <h3>store相互调用</h3>
    <div>
        <ul>
            <li v-for="(item, index) in store.getBookStoreList" :key="index">{{ item }}</li>
        </ul>
    </div>
    <div>---------------------------</div>
    <h3>模拟请求users</h3>
    <div>
        <div v-if="userList.length <= 0">loading</div>
        <ul v-else>
            <li v-for="(item, index) in userList" :key="index">{{ item.name }}---{{ item.age }}</li>
        </ul>
    </div>
    <div>---------------------------</div>
    <h2>持久化</h2>
    <div>token is {{ token }}</div>
    <el-space>
        <el-button type="primary" @click="store.setToken">存储token</el-button>
        <el-button @click="store.resetToken">清空token</el-button>
    </el-space>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'
import { mainStore } from '../../../store'

/**
 * @Description 传统结构不具备响应式 Pinia解构方法：storeToRefs
 * @param  -
 * @author glory
 * @date 2022/6/28 10:42
 */

const store: any = mainStore()
const { count, token, userList } = storeToRefs(store)

onMounted(() => {
    store.loadUserList()
})

/**
 * @Description 通过$patch修改数据 $patch 方法可以接受两个类型的参数，函数 和 对象
 * $patch + 对象
 * $patch + 函数： 通过函数方式去使用的时候，函数接受一个 state 的参数，state 就是 store 仓库中的 state
 * @param  -
 * @author glory
 * @date 2022/6/28 10:50
 */

// 法一 直接使用
// store.count++

// 法二 $patch + 对象
const handleObjClick = () => {
    // eslint-disable-next-line no-param-reassign
    // store.count++
    store.$patch({
        count: store.count + 2,
        msg: store.msg === 'Hello world' ? 'Be happier' : 'Hello world'
    })
}
// 法三 $patch + 函数
const handleFuncClick = () => {
    store.$patch((state: { count: number; msg: string }) => {
        // eslint-disable-next-line no-param-reassign
        state.count += 2
        // eslint-disable-next-line no-param-reassign
        state.msg = state.msg === 'Hello world' ? 'Be happier' : 'Hello world'
    })
}

// 法四 通过 action 修改多个状态
const handleActionClick = () => {
    store.changeState()
}
</script>

<style scoped></style>
