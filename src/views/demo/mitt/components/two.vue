<template>
    <h3>这是接收mitt的组件</h3>
    <h3>person is {{ person.name }}--{{ person.age ? person.age + '岁' : '-' }}</h3>
    <h3>person is {{ name }}--{{ age ? age + '岁' : '-' }}</h3>
    <h3>钱多多--当前余额:{{ money }}</h3>
</template>

<script lang="ts" setup>
import { onMounted, reactive, Ref, ref, toRefs } from 'vue'
import mittBus from '../../../../mitt/index'

const money: Ref<Number> = ref(0)
const person: any = reactive({
    name: '',
    age: 0
})

const { name, age } = toRefs(person)

mittBus.on('*', (type, e) => console.log(type, e))

onMounted(() => {
    // mittBus.on('person', (e: any) => {
    //     console.log('person is ', e)
    //     person.name = e.name
    //     person.age = e.age
    // })
    mittBus.on('person', (e: any) => {
        console.log('person is ', e)
        name.value = e.name
        age.value = e.age
    })
    mittBus.on('money', (e: any) => {
        console.log('money is ', e)
        money.value = e
    })
})
</script>

<style scoped></style>
