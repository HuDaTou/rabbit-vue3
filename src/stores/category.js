import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getCategoryAPI } from "@/api/layout";

export const useCategoryStore = defineStore('category', () => {
// 导航列表的数据管理
// state导航列表数据
// 创建一个响应式数据
const categoryList = ref([])

// 获取导航数据的方法
// 调用API，并进行封装
const getCategory = async () => {
  const res = await getCategoryAPI()
  // 将数据data提取出来赋值给响应式数组
  categoryList.value = res.result
}
return {
    categoryList,
    getCategory
}
})
