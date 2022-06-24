import * as VueRouter from 'vue-router'
// import {RouteRecordRaw} from 'vue-router';

// const pageTitle = (name: string): string => `pagesTitle.${name}`;

const routes: Array<VueRouter.RouteRecordRaw> = [
    {
        path: '/',
        name: '/',
        component: () => import('/@/views/home/index.vue'),
        meta: {
            title: 'home' // 首页
            // title: pageTitle('home'), // 首页
        }
    }
]

const router = VueRouter.createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: VueRouter.createWebHashHistory(),
    routes // `routes: routes` 的缩写
})

export default router
