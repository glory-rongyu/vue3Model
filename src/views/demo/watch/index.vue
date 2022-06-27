<template>
    <div>watch使用及computed</div>
    <div>
        <div>----------------------</div>
        <div>watch</div>
        <div>{{ name }}</div>
        <el-button @click="setName" type="primary">改变名称</el-button>
        <div>
            <div>{{ area.province + '---' + area.city }}</div>
            <el-button @click="setArea">改变城市</el-button>
        </div>
        <div>----------------------</div>
        <div>computed</div>
        <div>num:{{ number }}</div>
        <div>double:{{ double }}</div>
    </div>
</template>

<script setup lang="ts">
import { ref, watch, reactive, watchEffect, computed } from 'vue'

/**
 * @Description:
 * @param watch（prop, (newValue, oldValue) => {}）监听新旧属性
 * @author glory
 * @date 2022/6/27
 */
const name = ref('张三')
const setName = () => {
    name.value = '李四'
}
watch(name, (newValue, oldValue) => {
    console.log('newValue, oldValue', newValue, oldValue)
})

// 如果是应用对象监听对象中的某个属性
const area = reactive({
    province: '广东',
    city: '深圳'
})
const setArea = () => {
    area.province = '湖南'
    area.city = '长沙'
}

// watch引用类型中的一个属性
// watch(()=>area.province,(newValue,oldValue) => {
//   console.log(newValue,oldValue);
// })

// 监听多个属性
// watch([() => area.province, () => area.city], (newValue, oldValue) => {
//   console.log(newValue, oldValue);
// });

// 立即监听和深度监听
// watch([() => area.province, () => area.city], (newValue, oldValue) => {
//   console.log(newValue, oldValue);
// },{
//     immediate: true,
//     deep: true
//   });

// watchEffect 用到那个属性就会监听那个属性
watchEffect(() => {
    console.log(area.province, area.city, name.value)
})

/**
 * @Description:
 * @param computed
 * @author glory
 * @date 2022/6/27
 */
const number = ref(1)
const double = computed(() => number.value * 2)
setTimeout(() => {
    number.value++
}, 1000)
</script>

<style scoped></style>
