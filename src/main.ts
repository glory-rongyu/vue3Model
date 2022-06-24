import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import router from './router/static'
import 'element-plus/dist/index.css'
// import CodeDiff from 'v-code-diff';
import App from './App.vue'

const app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.mount('#app')

// 初始化
// createApp(App).mount('#app')
// 全局引入
// createApp(App).use(CodeDiff).mount('#app');
// const app = createApp(App);
// app.use(CodeDiff);
// app.mount('#app');
