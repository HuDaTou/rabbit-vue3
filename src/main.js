import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 引入初始化文件
import '@/styles/common.scss'

// 测试接口函数
import { getCategory } from "@/api/testAPI";
getCategory().then(res => {
    console.log(res);
})
const app = createApp(App)
app.use(ElementPlus)
app.use(createPinia())
app.use(router)


app.mount('#app')
