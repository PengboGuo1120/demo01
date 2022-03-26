import { reqGetSearchInfo } from '@/api'

//search模块仓库
const state = {
  searchList: {}
}
const mutations = {
  GETSEARCHLIST(state, searchList) {
    state.searchList = searchList
  }
}
const actions = {
  //获取Search模块数据
  async getSearchList({ commit }, params = {}) {
    let result = await reqGetSearchInfo(params)
    if (result.code === 200) {
      commit('GETSEARCHLIST', result.data)
    }
  }
}
// 简化仓库中的数组
const getters = {
  // 服务器返回数据后 若网络问题（无网络网速慢）返回的是undefined 需要提供一个默认空数组
  goodsList(state) {
    return state.searchList.goodsList || []
  },
  trademarkList(state) {
    return state.searchList.trademarkList
  },
  attrsList() {
    return state.searchList.attrsList
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
