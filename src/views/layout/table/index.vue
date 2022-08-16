<template>
    <el-space style="margin-bottom: 12px">
        <el-button icon="Plus" type="primary" @click="handleAdd">添加</el-button>
        <el-button v-if="multipleSelection.length > 0" icon="Delete" type="danger">删除</el-button>
    </el-space>
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
                <!--                <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">-->
                <!--                    删除-->
                <!--                </el-button>-->
                <el-popconfirm title="确定要删除吗?" @confirm="handleDelete(scope.$index, scope.row)">
                    <template v-slot:reference>
                        <el-button size="small" type="danger"> 删除</el-button>
                    </template>
                </el-popconfirm>
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
    <edit-form
        v-if="editFormVisible"
        :formValues="editFormValues"
        :isEdit="!!editFormValues && Object.keys(editFormValues).length > 0"
        :visible="editFormVisible"
        @handleCancel="handleCancel"
    />
</template>

<script lang="ts" setup>
import { ElTable } from 'element-plus'
import { onMounted, ref, watch } from 'vue'
import { useRequest } from 'v3hooks'
import { deleteUser, getUserList } from '../../../api/users'
import EditForm from './components/editForm.vue'
import { User } from '../../../types/user'
import { defaultRequestMessageIsError, useRequestMessageIsError } from '../../../utils/default'
import useCurrentInstance from '../../../hooks/useCurrentInstance'

const props = defineProps<{
    containerHeight: number
}>()

const { containerHeight } = props

const { proxy } = useCurrentInstance()
const page = ref<number>(1)
const pageSize = ref<number>(10)
const multipleTableRef = ref<InstanceType<typeof ElTable>>()
const multipleSelection = ref<User[]>([])
const editFormVisible = ref<boolean>(false)
const editFormValues = ref<User | null>(null)

const {
    data: tableData,
    loading,
    run: tableRun
} = useRequest<any>(() => getUserList({ page: page.value, pageSize: pageSize.value }), {
    manual: false
})

onMounted(() => {
    // console.log('props_', props)
    // console.log('props_containerHeight', containerHeight)
})

watch(tableData, (newValue, oldValue) => {
    console.log('newValue__oldValue', newValue, oldValue)
    if (useRequestMessageIsError(tableData)) {
        proxy?.$message.error(tableData?.value?.message ?? `error`)
    }
})

watch([page, pageSize], (newValue, oldValue) => {
    console.log('newValue__oldValue', newValue, oldValue)
    tableRun()
})

watch([editFormVisible, editFormValues], (newValue, oldValue) => {
    console.log('newValue__oldValue', newValue, oldValue)
})

const handleSelectionChange = (val: User[]) => {
    multipleSelection.value = val
    console.log('handleSelectionChange_val', val)
}

const handleCancel = () => {
    console.log('handleCancel__xxx')
    editFormVisible.value = false
    editFormValues.value = null
}

const handleAdd = () => {
    editFormVisible.value = true
    editFormValues.value = null
}

const handleEdit = (index: number, row: User) => {
    console.log(index, row)
    editFormVisible.value = true
    editFormValues.value = row
}
const handleDelete = async (index: number, row: User) => {
    console.log(index, row)
    const data: any = await deleteUser({ id: Number(row.id) })
    // console.log('data_', data)
    if (defaultRequestMessageIsError(data)) {
        proxy?.$message.error(data?.message ?? `删除失败`)
    } else {
        proxy?.$message.success('success')
        tableRun()
    }
}

const handleSizeChange = (val: number) => {
    pageSize.value = val
}
const handleCurrentChange = (val: number) => {
    page.value = val
}
</script>

<style scoped></style>
