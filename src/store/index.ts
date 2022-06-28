import { defineStore } from 'pinia'
import { booksStore } from './books'
import { getUserList, userListType } from '../api/user'

export const mainStore = defineStore('main', {
    state: () => {
        return {
            msg: 'Hello world',
            count: 0,
            userList: [] as userListType[],
            token: ''
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
        },
        setToken() {
            this.token = 'TOKEN-9527'
        },
        resetToken() {
            this.token = ''
        }
    },
    // 开启持久化
    persist: {
        enabled: true,
        // storage:sessionStorage/localStorage,还可以自定义如下
        // https://seb-l.github.io/pinia-plugin-persist/
        // import Cookies from 'js-cookie'
        // const cookiesStorage: Storage = {
        //   setItem (key, state) {
        //     return Cookies.set('accessToken', state.accessToken, { expires: 3 })
        //   },
        //   getItem (key) {
        //     return JSON.stringify({
        //       accessToken: Cookies.getJSON('accessToken'),
        //     })
        //   },
        // }
        strategies: [{ storage: localStorage, paths: ['token'] }]
    }
})
