import { getCategoryAPI } from "@/api/category";
import { ref, onMounted } from "vue";
import { useRoute , onBeforeRouteUpdate} from "vue-router";

export function useCategory() {
    // 获取分类的数据
const categoryData = ref({})
const route = useRoute()


const getCategory = async (id = route.params.id) => {
  const { result } = await getCategoryAPI(id)
  categoryData.value = result
}
onMounted(() => {
  getCategory()
})

// 目标：路由参数变化的时候 可以吧分类数据接口重新发送
onBeforeRouteUpdate((to) => {
  // console.log("路由发生变化了");
  getCategory(to.params.id)
})
  return {
    categoryData
  }

    
}