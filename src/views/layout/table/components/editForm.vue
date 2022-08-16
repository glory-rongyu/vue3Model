<template>
    <el-dialog v-model="dialogFormVisible" :title="isEdit ? '编辑' : '新建'" width="600px" @close="$emit('handleCancel')">
        <el-form ref="ruleFormRef" :label-width="formLabelWidth" :model="ruleForm" :rules="rules" status-icon>
            <el-form-item label="name" prop="name">
                <el-input v-model="ruleForm.name" autocomplete="off" />
            </el-form-item>
            <el-form-item label="company" prop="company">
                <el-input v-model="ruleForm.company" autocomplete="off" />
            </el-form-item>
            <el-form-item label="address" prop="address">
                <el-input v-model="ruleForm.address" autocomplete="off" />
            </el-form-item>
        </el-form>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="$emit('handleCancel')">取消</el-button>
                <el-button v-loading="loading" type="primary" @click="submitForm(ruleFormRef)">确定</el-button>
            </span>
        </template>
    </el-dialog>
</template>

<script lang="ts" setup>
import { computed, onMounted, reactive, ref, watch } from 'vue'
import { FormInstance, FormRules } from 'element-plus'
import { useRequest } from 'v3hooks'
import { User } from '../../../../types/user'
import { updateUserInfo } from '../../../../api/users'
import useCurrentInstance from '../../../../hooks/useCurrentInstance'
import { useRequestMessageIsError } from '../../../../utils/default'

const { proxy } = useCurrentInstance()

const { formValues, isEdit, visible } = defineProps<{
    formValues: User
    isEdit: boolean
    visible: boolean
    // handleCancel: () => void
}>()
const emit = defineEmits(['handleCancel'])

const dialogFormVisible = computed({
    get: () => visible,
    set: () => emit('handleCancel')
})

// const dialogFormVisible = ref<boolean>(visible)
const ruleFormRef = ref<FormInstance>()
const formLabelWidth = '120px'
const defaultForm = {
    name: '',
    company: '',
    address: ''
}

const ruleForm = reactive(isEdit ? JSON.parse(JSON.stringify(formValues)) : defaultForm)

const rules = reactive<FormRules>({
    name: [{ required: true, message: '此项为必填项', trigger: 'blur' }],
    company: [{ required: true, message: '此项为必填项', trigger: 'blur' }],
    address: [{ required: true, message: '此项为必填项', trigger: 'blur' }]
})

const { data, loading, run } = useRequest<any>(() => updateUserInfo(ruleForm), {
    manual: true
})

onMounted(() => {
    console.log('formValues, isEdit, visible_', formValues, isEdit, visible)
})

watch(data, (newValue, oldValue) => {
    console.log('newValue__oldValue', newValue, oldValue)
    if (useRequestMessageIsError(data)) {
        proxy?.$message.error(data?.value?.message ?? `${isEdit ? '编辑' : '新增'}失败`)
    } else {
        proxy?.$message.success('success')
        emit('handleCancel')
    }
})

const submitForm = async (formEl: FormInstance | undefined) => {
    if (!formEl) return
    await formEl.validate(async (valid, fields) => {
        if (valid) {
            console.log('submit!')
            console.log('params_is_', ruleForm)
            // const data: any = await updateUserInfo(ruleForm)
            // // console.log('data_', data)
            // if (defaultRequestMessageIsError(data)) {
            //     proxy?.$message.error(data?.message ?? `${isEdit ? '编辑' : '新增'}失败`)
            // } else proxy?.$message.success('success')
            await run()
        } else {
            console.log('error submit!', fields)
        }
    })
}
</script>
<style scoped>
.dialog-footer button:first-child {
    margin-right: 10px;
}
</style>
