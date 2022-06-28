import { defineStore } from 'pinia'
import { booksStore } from './books'
import { getUserList, userListType } from '../api/user'

export const mainStore = defineStore('main', {
    state: () => {
        return {
            msg: 'Hello world',
            count: 0,
            userList: [] as userListType[]
        }
    },
    getters: {
        getMessageRemark(state) {
            console.log('getter被调用')
            return `${state.msg}***${state.msg}`
        },
        // 另一个store的引用：获取bookStore中bookList
        getBookStoreList(): string[] {
            // const book = booksStore()
            // return book.bookList
            return booksStore().bookList
        }
    },
    /**
     * @Description 较vuex不同的是 actions 同步异步都支持
     * @param  -
     * @author glory
     * @date 2022/6/28 11:16
     */
    actions: {
        changeState() {
            this.count++
            this.msg = this.msg === 'Hello world' ? 'Be happier' : 'Hello world'
        },
        async loadUserList() {
            const list: userListType[] = await getUserList()
            this.userList = list
        }
    }
})
