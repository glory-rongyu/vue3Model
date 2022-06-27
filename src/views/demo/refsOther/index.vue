<template>
    <div>refs-other</div>
    <div>
        <div>----------------------</div>
        <div>ref</div>
        <div>countRef:{{ countRef }}</div>
        <div>objCountRef:{{ objCountRef.count }}</div>
        <div>爱好：{{ hobbyRef.join('---') }}</div>
        <div>----------------------</div>
        <div>relative</div>
        <div>姓名：{{ reactiveObj.name }}</div>
        <div v-if="reactiveObj.age > 0">年龄：{{ reactiveObj.age }}</div>
        <div>地址：{{ reactiveObj.address.provoince }} - {{ reactiveObj.address.city }} - {{ reactiveObj.address.street }}</div>
        <div>学校：{{ reactiveObj.school || '自学成才' }}</div>
        <div>----------------------</div>
        <div>toref使用</div>
        <div>姓名--reactiveObj2.name：{{ reactiveObj2.name }}</div>
        <div>姓名2--nameRef：{{ nameRef }}</div>
        <div>年龄：{{ reactiveObj2.age }}</div>
        <div>----------------------</div>
        <div>torefs使用</div>
        <div>姓名--reactiveObj3.name：{{ reactiveObj3.name }}</div>
        <div>年龄--reactiveObj3.age：{{ reactiveObj3.age }}</div>
        <div>toRefs之后</div>
        <div>姓名--name：{{ toRefsValue.name }}</div>
        <div>年龄--age：{{ toRefsValue.age }}</div>

        <div>----------------------</div>
    </div>
</template>

<script setup lang="ts">
/**
     * @Description:
     * @param ref relative 对比使用以及 toRef,toRefs，watch，computed
     *ref函数：
     语法：const xxx = ref (initValue)
     接受的数据类型：基本类型，引用类型
     作用：把参数加工成一个响应式对象，全称为reference对象(我们下面一律简称为ref对象)
     核心原理：如果使用的是基本类型响应式依赖Object.defineProperty( )，如果ref使用的是引用类型，底层ref会借助reactive的proxy 定义响应式
     * reactive 只能 给对象添加响应式
     语法：const xxx = ref (源对象)
     接受的数据类型：引用类型
     作用：把参数加工成一个代理对象，全称为proxy对象
     核心原理：基于Es6的Proxy实现，通过Reflect反射代理操作源对象，相比于reactive定义的浅层次响应式数据对象，reactive定义的是更深层次的响应式数据对象
     # 注：reactive申明的无法直接替换整个对象，如果有这个需求请使用ref
     *
     *
     *第一种写法：除了对象都用ref来定义
     *第二种写法：都用reactive来定义，然后用toRefs进行导出到页面使用
     *
     * @author glory
     * @date 2022/6/27
     */
import { ref, reactive, toRef, toRefs } from 'vue'

/**
 * @Description:
 * @param ref用法及使用
 * @author glory
 * @date 2022/6/27
 */
// 值类型
const countRef = ref(1)
// 对象
const objCountRef = ref({ count: 1 })
// 数组
const hobbyRef = ref(['爬山', '游泳'])
setTimeout(() => {
    // 通过value改变值
    countRef.value = 2
    objCountRef.value.count = 3
    hobbyRef.value.push('吃饭')
}, 4000)

/**
 * @Description:
 * @param relative用法及使用
 * @author glory
 * @date 2022/6/27
 */

// 响应式对象
const reactiveObj = reactive({
    name: '太凉',
    age: 18,
    hobby: ['游泳', '爬山'],
    address: {
        provoince: '北京',
        city: '北京',
        street: '东城区长安街'
    }
})

// 过3秒后改变
setTimeout(() => {
    // update1:改变name属性
    reactiveObj.name = '冰箱太凉'

    // update2:深度改变 address属性
    reactiveObj.address.provoince = '山东省' // 年龄改为30
    reactiveObj.address.city = '临沂市'

    // update3：新增 school属性
    reactiveObj.school = '清华北大'

    // update4：删除 年龄属性
    delete reactiveObj.age

    // update5：数组 添加一项
    reactiveObj.hobby.push('打豆豆')
}, 3000)

/**
 * @Description:
 * @param toRef 针对一个响应式对象（reactive 封装）的 prop（属性）创建一个ref，且保持响应式两者 保持引用关系
 * @author glory
 * @date 2022/6/27
 */
// 响应式对象
const reactiveObj2 = reactive({
    name: '太凉',
    age: 18
})

// 通过toRef创建一个Ref响应式
const nameRef = toRef(reactiveObj2, 'name')

// 过3秒后改变 两者 保持引用关系
setTimeout(() => {
    // update1:改变name属性
    reactiveObj2.name = '冰箱太凉'
}, 3000)

// 过6秒后改变 两者 保持引用关系
setTimeout(() => {
    // update1:改变name属性
    nameRef.value = '我就是冰箱太凉'
}, 6000)
/**
 * @Description:
 * @param toRefs 是一种用于破坏响应式对象并将其所有属性转换为 ref 的实用方法
 * @author glory
 * @date 2022/6/27
 */
// 响应式对象
const reactiveObj3 = reactive({
    name: '太凉',
    age: 18
})

// 通过toRefs创建一个响应式对象属性的Ref
const toRefsValue = toRefs(reactiveObj3)

// 过3秒后改变  两者保持引用关系
setTimeout(() => {
    reactiveObj3.name = '冰箱太凉'
    reactiveObj3.age = '30'
}, 3000)

// 过6秒后改变 两者保持引用关系
setTimeout(() => {
    toRefsValue.name.value = '我就是宇宙小超人'
    toRefsValue.age.value = '101'
}, 6000)
</script>

<style scoped></style>
