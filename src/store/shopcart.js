import { reqCartList, reqDeleteCartById, reqUpdateCheckedById } from '@/api'

const state = {
  cartList: []
}
const mutations = {
  GETCARTLIST(state, cartList) {
    state.cartList = cartList
  }
}
const actions = {
  // 获取购物车列表数据
  async getCartList({ commit }) {
    let result = await reqCartList()
    if (result.code === 200) {
      commit('GETCARTLIST', result.data)
    }
  },
  // 删除购物车某一个商品
  async deleteCartListBySkuId({ commit }, skuId) {
    let result = await reqDeleteCartById(skuId)
    if (result.code === 200) {
      return 'ok'
    } else {
      Promise.reject(new Error('failed'))
    }
  },
  // 修改产品选中状态
  async updateCheckedById({ commit }, { skuId, isChecked }) {
    let result = await reqUpdateCheckedById(skuId, isChecked)
    if (result.code === 200) {
      return 'ok'
    } else {
      return Promise.reject(new Error('failed'))
    }
  },
  //删除全部勾选item
  deleteAllCheckedItem({ dispatch, getters }) {
    // context 可以理解为小仓库 包含数据和dispatch等方法
    // 获取购物车全部产品
    let promiseAll = []
    getters.cartList.cartInfoList.forEach(item => {
      let promise = item.isChecked == 1 ? dispatch('deleteCartListBySkuId', item.skuId) : ''
      // 将每一次返回的promise对象添加到空数组
      promiseAll.push(promise)
    })
    return Promise.all(promiseAll)
  },
  // 修改全部选中状态

  updateAllItemChecked({ dispatch, state }, isChecked) {
    let promiseAll = []
    state.cartList[0].cartInfoList.forEach(item => {
      let promise = dispatch('updateCheckedById', { skuId: item.skuId, isChecked })
      promiseAll.push(promise)
    })
    return Promise.all(promiseAll)
  }
}
const getters = {
  cartList(state) {
    return state.cartList[0] || {}
  }
}
export default {
  state,
  mutations,
  actions,
  getters
}
