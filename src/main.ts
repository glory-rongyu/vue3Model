import { createApp } from 'vue'
import { createPinia, Pinia } from 'pinia'
import piniaPersist from 'pinia-plugin-persist'
// import mitt from 'mitt'
import ElementPlus, { ElMessage } from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import 'virtual:svg-icons-register'
import * as ElIcons from '@element-plus/icons-vue'
// import SvgIcon from '@/components/SvgIcon.vue'
import router from './router'
import 'element-plus/dist/index.css'
// import CodeDiff from 'v-code-diff'
import App from './App.vue'

const pinia: Pinia = createPinia()
// 持久化
pinia.use(piniaPersist)

const app = createApp(App)

for (const name in ElIcons) {
    app.component(name, (ElIcons as any)[name])
}

// 全局注册svg
// app.component('SvgIcon', SvgIcon)

app.use(pinia)
app.use(ElementPlus, { locale: zhCn })
app.use(router)
app.mount('#app')
app.config.globalProperties.$message = ElMessage

// 全局注册mitt
// app.config.globalProperties.$mittBus = mitt()

// 初始化
// createApp(App).mount('#app')
// 全局引入
// createApp(App).use(CodeDiff).mount('#app');
// const app = createApp(App);
// app.use(CodeDiff);
// app.mount('#app');
