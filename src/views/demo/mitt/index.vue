<template>
    <h1>mitt</h1>
    <One />
    <Two />
</template>

<script lang="ts" setup>
/**
 * @Description mitt
 * all 事件名称到已注册处理程序函数的映射。
 * on  为给定类型注册一个事件处理程序。
 * off 删除给定类型的事件处理程序。如果handler省略，则删除给定类型的所有处理程序。
 * emit 调用给定类型的所有处理程序。如果存在，'*'则在类型匹配的处理程序之后调用处理程序。
 *
 * 局部使用
 * import mitt from 'mitt'
 *
 * const emitter = mitt()
 *
 * // listen to an event
 * emitter.on('foo', e => console.log('foo', e) )
 *
 * // listen to all events
 * emitter.on('*', (type, e) => console.log(type, e) )
 *
 * // fire an event
 * emitter.emit('foo', { a: 'b' })
 *
 * // clearing all events
 * emitter.all.clear()
 *
 * // working with handler references:
 * function onFoo() {}
 * emitter.on('foo', onFoo)   // listen
 * emitter.off('foo', onFoo)  // unlisten
 *
 * @param  -
 * @author glory
 * @date 2022/6/29 10:17
 */

// 调用全局注册的 mitt $mittBus
// getCurrentInstance
import { onBeforeMount, onMounted } from 'vue'
import One from './components/one.vue'
import Two from './components/two.vue'
// import mittBus from '../../../mitt/index'

// const { proxy: { $mittBus } } = getCurrentInstance()

onBeforeMount(() => {
    // $mittBus.emit('mark', '哈哈哈')
})

onMounted(() => {
    // $mittBus.on('mark', (e: any) => console.log('mark', e))
})
</script>

<style scoped></style>
