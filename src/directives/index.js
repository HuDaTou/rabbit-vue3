import { useIntersectionObserver } from '@vueuse/core'

export const lazyPlugin = {
    install (app) {
        // 定义全局指令
app.directive('img-lazy', {
    mounted (el, binding) {
        // el：指令绑定的元素 .eg img
        // binding：bingding.value 指令等于号后面绑定的表达式的值
        // console.log(el,binding.value);

        // 通过结构赋值的方式拿出停止方法
        const  { stop } = useIntersectionObserver(
            el,
            // isIntersecting的作用是进入视口区域为true的布尔值
            ([{ isIntersecting }], ) => {
                
             console.log(isIntersecting);
             if (isIntersecting) {
                // 进入视口区域
                el.src = binding.value
                stop()
             }
            },
          )
    }
})
    }
}