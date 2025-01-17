// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { lazyPlugin } from '@/directives/index'

// 引入初始化文件
import '@/styles/common.scss'


const app = createApp(App)
app.use(ElementPlus)
app.use(createPinia())
app.use(router)
app.use(lazyPlugin)
app.mount('#app')


