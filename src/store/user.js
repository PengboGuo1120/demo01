// 登陆注册仓库
import { reqGetCode, reqUserRegister, reqUserLogin, reqUserInfo, reqLogOut } from '@/api'
import { setToken, getToken, removeToken } from '@/utils/token'

const state = {
  code: '',
  token: getToken(),
  userinfo: {}
}
const mutations = {
  GETCODE(state, code) {
    state.code = code
  },
  USERLOGIN(state, token) {
    state.token = token
  },
  GETUSERINFO(state, userinfo) {
    state.userinfo = userinfo
  },
  CLEAR(state) {
    // 清空仓库中相关用户信息 清空本地存储信息
    state.token = ''
    state.userinfo = {}
    removeToken()
  }
}
const actions = {
  // 获取验证码
  async getCode({ commit }, phone) {
    let result = await reqGetCode(phone)
    if (result.code === 200) {
      commit('GETCODE', result.data)
      return 'ok'
    } else {
      return Promise.reject(new Error('Failed'))
    }
  },
  // 完成注册
  async userRegister({ commit }, user) {
    let result = await reqUserRegister(user)
    if (result.code == 200) {
      return 'ok'
    } else {
      return Promise.reject(new Error('注册失败'))
    }
  },
  // 用户登录(登陆成功后服务器返回token) vuex存储的数据并不是持久化 --- 刷新后仓库数据消失
  async userLogin({ commit }, data) {
    let result = await reqUserLogin(data)
    // token 是用户的唯一标志 通过token获取用户信息进行展示
    if (result.code === 200) {
      // 用户登陆成功获取到token
      commit('USERLOGIN', result.data.token)
      // 持久化存储token
      setToken(result.data.token)
      return 'ok'
    } else {
      return Promise.reject(new Error('服务器返回失败'))
    }
  },
  // 获取用户信息
  async getUserInfo({ commit }) {
    let result = await reqUserInfo()
    if (result.code === 200) {
      commit('GETUSERINFO', result.data)
      return 'ok'
    } else {
      return Promise.reject(new Error('获取用户信息失败'))
    }
  },
  // 退出登录
  async userLogOut({ commit }) {
    // 向服务器发起请求通知服务器清除服务器token
    let result = await reqLogOut()
    if (result.code === 200) {
      commit('CLEAR')
      return 'ok'
    } else {
      return Promise.reject(new Error('退出登录失败'))
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
