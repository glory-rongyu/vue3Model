<template>
    <svg aria-hidden="true">
        <use :fill="color" :xlink:href="symbolId" />
    </svg>
</template>

<script>
import { computed, defineComponent } from 'vue'

export default defineComponent({
    name: 'SvgIcon',
    props: {
        prefix: {
            type: String,
            default: 'icon'
        },
        name: {
            type: String,
            required: true
        },
        color: {
            type: String,
            default: '#333'
        }
    },
    setup(props) {
        const symbolId = computed(() => `#${props.prefix}-${props.name}`)
        return { symbolId }
    }
})
</script>
