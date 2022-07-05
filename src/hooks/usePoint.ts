import { onBeforeMount, onMounted, reactive } from 'vue'

export function usePoint() {
    const point = reactive({
        x: 0,
        y: 0
    })

    const savePoint = (event: any) => {
        point.x = event.pageX
        point.y = event.pageY
        console.log('event.pageX,event.pageY', event.pageX, event.pageY)
    }

    onMounted(() => {
        window.addEventListener('click', savePoint)
    })

    onBeforeMount(() => {
        window.removeEventListener('click', savePoint)
    })

    return point
}
