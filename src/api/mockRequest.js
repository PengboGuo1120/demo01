// 对axios进行二次封装
// 为了使用请求、响应拦截器

import axios from 'axios'

//引入进度条插件:start进度条开始；done进度条结束
import nprogress from 'nprogress'
//引入进度条样式
import 'nprogress/nprogress.css'

const requests = axios.create({
  //配置对象
  // 请求路径默认/api
  baseURL: '/mock',
  // 请求超时的时间
  timeout: 5000
})
// 请求拦截器：发送请求前，拦截器可以检测到，在请求发出前可以进行操作
requests.interceptors.request.use(config => {
  // 配置对象中包含headers
  //进度条开始
  nprogress.start()
  return config
})
// 响应拦截器
requests.interceptors.response.use(
  res => {
    //进度条结束
    nprogress.done()
    return res.data
  },
  error => {
    //响应失败的回调函数
    return Promise.reject(new Error('Failed 失败'))
  }
)

export default requests
