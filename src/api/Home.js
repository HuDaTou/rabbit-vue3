import http from "@/utils/http";

export function getBannerAPI(params = {}) {
  // 默认为1 商品为2
  const {distributionSite = '1' } = params
    return http({
        url: '/home/banner',
        params: {
          distributionSite
        }
})

}

/**
 * @description: 获取新鲜好物
 * @param {*}
 * @return {*}
 */
export const findNewAPI = () => {
    return http({
      url:'/home/new'
    })
  }

  /**
 * @description: 获取所有商品模块
 * @param {*}
 * @return {*}
 */
export const getGoodsAPI = () => {
  return http({
    url: '/home/goods'
  })
}