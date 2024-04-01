import { getBannerAPI } from "@/api/Home";
import { ref, onMounted } from "vue";
export function useBanner() {
    // 获取轮播图数据
    const BannerList = ref([])

    const getBanner = async () => {
        const { result } = await getBannerAPI({
            distributionSite: '2'
        })
        BannerList.value = result
    }

    onMounted(() => {
        getBanner()
    })
    return {
        BannerList
    }
}

