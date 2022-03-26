// 对axios进行二次封装
// 为了使用请求、响应拦截器

import axios from 'axios'

//引入进度条插件:start进度条开始；done进度条结束
import nprogress from 'nprogress'
//引入进度条样式
import 'nprogress/nprogress.css'
// 引入vuex
import store from '@/store'

let requests = axios.create({
  //配置对象
  // 请求路径默认/api
  baseURL: '/api',
  // 请求超时的时间
  timeout: 5000
})
// 请求拦截器：发送请求前，拦截器可以检测到，在请求发出前可以进行操作
requests.interceptors.request.use(config => {
  // 配置对象中包含headers 带uuid
  //进度条开始
  if (store.state.detail.uuid_token) {
    // 给请求头添加字段 需和后台服务器确认格式
    config.headers.userTempId = store.state.detail.uuid_token
  }
  // 判断是否有token
  if (store.state.user.token) {
    config.headers.token = store.state.user.token
  }
  nprogress.start()
  return config
})

//响应拦截器----当服务器手动请求之后，做出响应（相应成功）会执行的
requests.interceptors.response.use(
  res => {
    //进度条结束
    nprogress.done()
    //相应成功做的事情
    return res.data
  },
  err => {
    alert('服务器响应数据失败')
  }
)

export default requests
