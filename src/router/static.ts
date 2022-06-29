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
        },
        children: [
            {
                path: '/demo',
                name: 'demo',
                component: () => import('/@/views/demo/default/index.vue'),
                redirect: '/demo/default',
                children: [
                    {
                        path: '/demo/default',
                        name: 'demo-default',
                        component: () => import('/@/views/demo/lifeCycle/index.vue'),
                        meta: {
                            title: 'demo-default' // 首页
                            // title: pageTitle('home'), // 首页
                        }
                    },
                    {
                        path: '/demo/refs-other',
                        name: 'demo-refs-other',
                        component: () => import('/@/views/demo/refsOther/index.vue'),
                        meta: {
                            title: 'demo-refs-other' // 首页
                            // title: pageTitle('home'), // 首页
                        }
                    },
                    {
                        path: '/demo/watch',
                        name: 'demo-watch',
                        component: () => import('/@/views/demo/watch/index.vue'),
                        meta: {
                            title: 'demo-watch' // 首页
                            // title: pageTitle('home'), // 首页
                        }
                    },
                    {
                        path: '/demo/pinia',
                        name: 'demo-pinia',
                        component: () => import('/@/views/demo/pinia/index.vue'),
                        meta: {
                            title: 'demo-pinia' // 首页
                            // title: pageTitle('home'), // 首页
                        }
                    },
                    {
                        path: '/demo/mitt',
                        name: 'demo-mitt',
                        component: () => import('/@/views/demo/mitt/index.vue'),
                        meta: {
                            title: 'demo-mitt' // 首页
                            // title: pageTitle('home'), // 首页
                        }
                    },
                    {
                        path: '/demo/vCodeDiff',
                        name: 'demo-vCodeDiff',
                        component: () => import('/@/views/demo/vCodeDiff/index.vue'),
                        meta: {
                            title: 'demo-vCodeDiff' // 首页
                            // title: pageTitle('home'), // 首页
                        }
                    }
                ]
            }
        ]
    }
]

const router = VueRouter.createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: VueRouter.createWebHashHistory(),
    routes // `routes: routes` 的缩写
})

export default router
