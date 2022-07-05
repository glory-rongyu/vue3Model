import { ref, Ref, watch } from 'vue'

export interface CountRange {
    min: number
    max: number
}

interface Result {
    current: Ref<number>
    minus: (num: number) => void
    plus: (num: number) => void
    set: (num: number) => void
    reset: () => void
}

export function useCount(init: number, range: CountRange): Result {
    const current = ref(init)

    const minus = (num: number) => {
        current.value -= num
    }

    const plus = (num: number) => {
        current.value += num
    }

    const set = (num: number) => {
        current.value = num
    }

    const reset = () => {
        current.value = init
    }

    watch(current, (newVal: number, oldVal: number) => {
        if (newVal === oldVal) return
        if (newVal < +range.min) {
            current.value = +range.min
        } else if (newVal > +range.max) {
            current.value = +range.max
        }
    })

    return { current, minus, plus, set, reset }
}
