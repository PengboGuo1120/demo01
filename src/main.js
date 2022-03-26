// import { createApp } from 'vue'
import Vue from 'vue'
import App from './App.vue'
// import 三级联动组件 --- 全局
import TypeNav from '@/components/TypeNav'
//引入轮播图Carousel组件
import Carousel from '@/components/Carousel'
//引入分頁器组件
import Pagination from '@/components/Pagination'

// import vuex仓库
import store from './store'

//引入mockjs
import '@/mock/mockServer'
//引入Swiper样式
import 'swiper/css/swiper.css'

// 引入路由
import router from './router'

// 统一接收API文件夹中的请求函数
import * as API from '@/api'

// 引入elementUI
import { MessageBox } from 'element-ui'

// 引入懒加载插件
import VueLazyload from 'vue-lazyload'
import coldplayCover from './assets/images/lazyLoadImg.gif'

// 引入表单验证插件
import '@/plugins/validate.js'

// 注册懒加载插件
Vue.use(VueLazyload, {
  // 默认图
  loading: coldplayCover
})

//注册全局组件
Vue.component(TypeNav.name, TypeNav)
Vue.component(Carousel.name, Carousel)
Vue.component(Pagination.name, Pagination)
// elementUI注册
Vue.prototype.$msgbox = MessageBox
Vue.prototype.$alert = MessageBox.alert

new Vue({
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this
    Vue.prototype.$API = API
  },
  // 注册路由
  router,
  //注册vuex仓库:组件实例将增加$store属性
  store
}).$mount('#app')

// createApp(App).use(router)
