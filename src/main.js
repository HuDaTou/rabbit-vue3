// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { useIntersectionObserver } from '@vueuse/core'

// 引入初始化文件
import '@/styles/common.scss'


const app = createApp(App)
app.use(ElementPlus)
app.use(createPinia())
app.use(router)


app.mount('#app')

// 定义全局指令
app.directive('img-lazy', {
    mounted (el, binding) {
        // el：指令绑定的元素 .eg img
        // binding：bingding.value 指令等于号后面绑定的表达式的值
        // console.log(el,binding.value);
        useIntersectionObserver(
            el,
            ([{ isIntersecting }], ) => {
             console.log(isIntersecting);
             if (isIntersecting) {
                // 进入视口区域
                el.src = binding.value
             }
            },
          )
    }
})
