<template>
    <el-scrollbar :height="screenHeight - 48">
        <el-menu class="el-menu-vertical-demo" router unique-opened @close="handleClose" @open="handleOpen">
            <template v-for="item in menuList">
                <el-sub-menu v-if="item.children && item.children.length > 0" :key="item.path" :index="item.path">
                    <template #title>
                        <el-icon>
                            <component :is="item.icon" />
                        </el-icon>
                        <span>{{ item.title }}</span>
                    </template>

                    <el-menu-item v-for="itemSec in item.children" :key="itemSec.path" :index="itemSec.path">
                        {{ itemSec.title }}
                    </el-menu-item>
                </el-sub-menu>
                <el-menu-item v-else :key="item.path" :index="item.path">
                    <template #title>
                        <el-icon>
                            <component :is="item.icon" />
                        </el-icon>
                        <span>{{ item.title }}</span>
                    </template>
                </el-menu-item>
            </template>
        </el-menu>
    </el-scrollbar>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import { useWindowSize } from '@vueuse/core'
// import { arrayToTree, treeToArray } from '../../utils/methods'

type menuItem = {
    title: string
    id: number
    pid: number
    path: string
    icon?: string
    children?: menuItem[]
}

const menuList: menuItem[] = [
    {
        title: '首页',
        id: 999,
        pid: 0,
        path: '/layout/home',
        icon: 'House'
    },
    {
        title: 'Dashboard',
        id: 1,
        pid: 0,
        path: '/layout/dashboard',
        icon: 'DataBoard',
        children: [
            {
                title: '分析页',
                id: 4,
                pid: 1,
                path: '/layout/dashboard/analysis'
            },
            {
                title: '监控页',
                id: 5,
                pid: 1,
                path: '/layout/dashboard/monitor'
            },
            {
                title: '工作台',
                id: 6,
                pid: 1,
                path: '/layout/dashboard/workplace'
            }
        ]
    },
    {
        title: '表单页',
        id: 2,
        pid: 0,
        path: '/layout/form',
        icon: 'Document',
        children: [
            {
                title: '基础表单',
                id: 7,
                pid: 2,
                path: '/layout/form/basic-form'
            },
            {
                title: '分步表单',
                id: 8,
                pid: 2,
                path: '/layout/form/step-form'
            },
            {
                title: '高级表单',
                id: 9,
                pid: 2,
                path: '/layout/form/advanced-form'
            }
        ]
    },
    {
        title: '列表页',
        id: 3,
        pid: 0,
        path: '/layout/list',
        icon: 'List',
        children: [
            {
                title: '查询表格',
                id: 10,
                pid: 3,
                path: '/layout/list/table-list'
            },
            {
                title: '标准列表',
                id: 11,
                pid: 3,
                path: '/layout/list/basic-list'
            },
            {
                title: '卡片列表',
                id: 12,
                pid: 3,
                path: '/layout/list/card-list'
            }
        ]
    }
]

const { height: screenHeight } = useWindowSize()

onMounted(() => {
    // console.log('treeToArray__', treeToArray(menuList))
    // console.log('arrayToTree__', arrayToTree(treeToArray(menuList)))
})

const handleOpen = (key: string, keyPath: string[]) => {
    console.log('handleOpen', key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
    console.log('handleClose', key, keyPath)
}
</script>

<style lang="less" scoped>
.el-menu-vertical-demo {
    min-height: calc(100vh - 48px);
}
</style>
