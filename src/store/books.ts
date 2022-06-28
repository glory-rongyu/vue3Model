import { defineStore } from 'pinia'

export const booksStore = defineStore('books', {
    state: () => {
        return {
            bookList: ['三体1', '三体2', '三体3']
        }
    },
    getters: {},
    actions: {}
})
