import { createApp } from 'vue'
import { createPinia, Pinia } from 'pinia'
import piniaPersist from 'pinia-plugin-persist'
// import mitt from 'mitt'
import ElementPlus from 'element-plus'
import router from './router/static'
import 'element-plus/dist/index.css'
// import CodeDiff from 'v-code-diff'
import App from './App.vue'

const pinia: Pinia = createPinia()
// 持久化
pinia.use(piniaPersist)

const app = createApp(App)
app.use(pinia)
app.use(ElementPlus)
app.use(router)
app.mount('#app')

// 全局注册mitt
// app.config.globalProperties.$mittBus = mitt()

// 初始化
// createApp(App).mount('#app')
// 全局引入
// createApp(App).use(CodeDiff).mount('#app');
// const app = createApp(App);
// app.use(CodeDiff);
// app.mount('#app');
