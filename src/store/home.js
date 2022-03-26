import { reqCategoryList, reqBannerList, reqFloorList } from '@/api'

//home模块仓库
const state = {
  //state中的数据初始值,需要匹配服务器返回的数据类型。
  categoryList: [],
  bannerList: [],
  floorList: []
}
const mutations = {
  CATEGORYLIST(state, categoryList) {
    state.categoryList = categoryList
  },
  GETBANNERLIST(state, bannerList) {
    state.bannerList = bannerList
  },
  GETFLOORLIST(state, floorList) {
    state.floorList = floorList
  }
}

const actions = {
  //通过API接口函数调用，向服务器发送请求，获取服务器数据
  async categoryList({ commit }) {
    let result = await reqCategoryList()

    if (result.code === 200) {
      commit('CATEGORYLIST', result.data)
    }
  },
  async getBannerList({ commit }) {
    let result = await reqBannerList()
    if (result.code === 200) {
      commit('GETBANNERLIST', result.data)
    }
  },
  async getFloorList({ commit }) {
    let result = await reqFloorList()
    if (result.code === 200) {
      commit('GETFLOORLIST', result.data)
    }
  }
}
const getters = {}

export default {
  state,
  mutations,
  actions,
  getters
}
