// 配置路由
import Vue from 'vue'
// import { createApp } from 'vue'
import VueRouter from 'vue-router'

// 使用插件
Vue.use(VueRouter)
// createApp().use(VueRouter)

// 引入路由组件
import routes from '@/router/routes.js'

// 引入vuex仓库 store
import store from '@/store'

// 保存VueRouter原型对象的push
let originPush = VueRouter.prototype.push
let originReplace = VueRouter.prototype.replace

// 重写push|replace方法
VueRouter.prototype.push = function (location, resolve, reject) {
  if (resolve && reject) {
    originPush.call(this, location, resolve, reject)
  } else {
    originPush.call(
      this,
      location,
      () => {},
      () => {}
    )
  }
}
VueRouter.prototype.replace = function (location, resolve, reject) {
  if (resolve && reject) {
    originReplace.call(this, location, resolve, reject)
  } else {
    originReplace.call(
      this,
      location,
      () => {},
      () => {}
    )
  }
}

// 配置路由
let router = new VueRouter({
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { y: 0 }
  }
})

// 全局守卫
router.beforeEach(async (to, from, next) => {
  // to 跳转目的地路由
  // from 跳转前的路由
  // next 代表放行，是一个函数
  let token = store.state.user.token
  let name = store.state.user.userinfo.name

  if (token) {
    // 如果有token 代表用户已经登录 禁止访问login/register 停留在首页
    if (to.path == '/login' || to.path == '/register') {
      next('/home')
    } else {
      // 用户已登录 去往的路由不是login
      if (name) {
        next()
      } else {
        // 获取用户登陆信息
        try {
          // 登陆但没有获取到用户信息
          // 在路由跳转之前获取用户信息
          await store.dispatch('getUserInfo')
          next()
        } catch (error) {
          // 获取用户信息失败 token过期,需要清空本地存储token 并跳转到登录页面
          await store.dispatch('userLogOut')
          next('/login')
        }
      }
      next()
    }
  } else {
    // 未登录 无token
    // 不能去交易相关pay pauseccess trade center
    let toPath = to.path
    if (toPath.indexOf('/trade') != -1 || toPath.indexOf('/pay') != -1 || toPath.indexOf('/center') != -1) {
      next('/login?redirect=' + toPath)
    } else {
      next()
    }
  }
})

export default router
