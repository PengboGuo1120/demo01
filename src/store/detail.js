import { reqGoodsInfo, reqAddOrUpdateShopCart } from '@/api'
import { getUUID } from '@/utils/uuid_token'

const state = {
  goodInfo: {},
  // 游客的临时身份
  uuid_token: getUUID()
}
const mutations = {
  GETGOODINFO(state, goodInfo) {
    state.goodInfo = goodInfo
  }
}
const actions = {
  //获取产品信息action
  async getGoodInfo({ commit }, skuId) {
    let result = await reqGoodsInfo(skuId)
    if (result.code == 200) {
      commit('GETGOODINFO', result.data)
    }
  },
  // 添加产品进购物车 返回结果为promise对象
  async addOrUpdateShopCart({ commit }, { skuId, skuNum }) {
    let result = await reqAddOrUpdateShopCart(skuId, skuNum)
    if (result.code === 200) {
      // 返回成功标记
      return 'ok'
    } else {
      // 返回失败的标记
      return Promise.reject(new Error('fail'))
    }
  }
}
const getters = {
  categoryView(state) {
    // state初始状态为空{} 空对象属性值为undefined
    return state.goodInfo.categoryView || {}
  },
  skuInfo(state) {
    return state.goodInfo.skuInfo || {}
  },
  // 简化产品信息数据
  spuSaleAttrList(state) {
    return state.goodInfo.spuSaleAttrList || []
  }
}
export default {
  state,
  mutations,
  actions,
  getters
}
