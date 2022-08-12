<template>
    <el-space direction="vertical">
        <el-button icon="Plus" type="primary">添加</el-button>
    </el-space>
    <!--    <el-divider />-->
    <el-table
        ref="multipleTableRef"
        v-loading="loading"
        :data="tableData?.list ?? []"
        :max-height="containerHeight - 84 ?? 400"
        border
        style="width: 100%"
        @selection-change="handleSelectionChange"
    >
        <el-table-column align="center" type="selection" width="55" />
        <el-table-column align="center" label="Name" prop="name" width="180" />
        <el-table-column align="center" label="Company" prop="company" width="180" />
        <el-table-column align="center" label="Address" prop="address" />
        <el-table-column align="center">
            <template #header>
                <span>操作</span>
            </template>
            <template #default="scope">
                <el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
        </el-table-column>
    </el-table>
    <div class="table-pagination">
        <el-pagination
            :current-page="page"
            :page-size="pageSize"
            :page-sizes="[10, 20, 50, 100]"
            :total="2000"
            layout="total,sizes,prev,pager,next,jumper"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
        />
    </div>
</template>

<script lang="ts" setup>
import { ElTable } from 'element-plus'
import { onMounted, ref, watch } from 'vue'
import { useRequest } from 'v3hooks'
import { getUserList } from '../../../api/users'

const props = defineProps<{
    containerHeight: number
}>()

// eslint-disable-next-line vue/no-setup-props-destructure
const { containerHeight } = props

interface User {
    company: string
    name: string
    address: string
}

const page = ref<number>(1)
const pageSize = ref<number>(10)
const multipleTableRef = ref<InstanceType<typeof ElTable>>()
const multipleSelection = ref<User[]>([])

const {
    data: tableData,
    loading,
    run: tableRun
} = useRequest<any>(() => getUserList({ page: page.value, pageSize: pageSize.value }), {
    manual: false
})

onMounted(() => {
    console.log('props_', props)
    console.log('props_containerHeight', containerHeight)
})

watch([page, pageSize], (newValue, oldValue) => {
    console.log('newValue__oldValue', newValue, oldValue)
    tableRun()
})

const handleSelectionChange = (val: User[]) => {
    multipleSelection.value = val
}

const handleEdit = (index: number, row: User) => {
    console.log(index, row)
}
const handleDelete = (index: number, row: User) => {
    console.log(index, row)
}

const handleSizeChange = (val: number) => {
    pageSize.value = val
}
const handleCurrentChange = (val: number) => {
    page.value = val
}
</script>

<style scoped></style>
