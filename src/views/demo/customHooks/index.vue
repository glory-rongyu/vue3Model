<template>
    <h1>自定义hooks</h1>
    <div>
        <div>自定义useCount</div>
        <h3>current number: {{ current }}</h3>
        <button @click="plus(5)">+5</button>
        <button @click="minus(3)">-3</button>
        <button @click="set(233)">set 233</button>
        <button @click="reset()">reset</button>
        <div>------------------------------</div>
    </div>
</template>

<script lang="ts" setup>
import { watch } from 'vue'
import { useCount } from '../../../hooks/useCount'
import { usePoint } from '../../../hooks/usePoint'

const { current, minus, plus, set, reset } = useCount(0, { min: -999, max: 999 })

const point = usePoint()

watch(point, (newValue, oldValue) => {
    console.log('newValue, oldValue', newValue, oldValue)
})
</script>

<style scoped></style>
