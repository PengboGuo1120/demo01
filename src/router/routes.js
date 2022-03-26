// import Home from '@/pages/Home'
// import Search from '@/pages/Search'
// import Login from '@/pages/Login'
// import Register from '@/pages/Register'
// import Detail from '@/pages/Detail'
// import AddCartSuccess from '@/pages/AddCartSuccess'
// import ShopCart from '@/pages/ShopCart'
// import Trade from '@/pages/Trade'
// import Pay from '@/pages/Pay'
// import PaySuccess from '@/pages/PaySuccess'
// import Center from '@/pages/Center'

// 路由懒加载的引入方法代替上面的传统引入全部路由

// 引入二级路由组件
import MyOrder from '@/pages/Center/myOrder'
import GroupOrder from '@/pages/Center/groupOrder'

export default [
  {
    path: '/shopcart',
    component: () => import('@/pages/ShopCart'),
    meta: { show: true }
  },
  {
    path: '/home',
    component: () => import('@/pages/Home'),
    meta: { show: true }
  },
  {
    path: '/search/:keyword?',
    component: () => import('@/pages/Search'),
    meta: { show: true },
    name: 'search'
  },
  {
    path: '/login',
    component: () => import('@/pages/Login'),
    meta: { show: false }
  },
  {
    path: '/register',
    component: () => import('@/pages/Register'),
    meta: { show: false }
  },
  {
    //重定向
    path: '/',
    redirect: '/home'
  },
  {
    // center重定向
    path: '/center',
    redirect: '/center/myorder'
  },
  {
    path: '/detail/:skuId',
    component: () => import('@/pages/Detail'),
    meta: { show: true }
  },
  {
    path: '/addcartsuccess',
    name: 'addcartsuccess',
    component: () => import('@/pages/AddCartSuccess'),
    meta: { show: true }
  },
  {
    path: '/trade',
    component: () => import('@/pages/Trade'),
    meta: { show: true },
    // 路由独享守卫
    beforeEnter: (to, from, next) => {
      // 去交易页面 必须来自购物车(或者登陆页面)
      if (from.path == '/shopcart' || from.path == '/login') {
        next()
      } else {
        next(false)
      }
    }
  },
  {
    path: '/pay',
    component: () => import('@/pages/Pay'),
    meta: { show: true },
    beforeEnter: (to, from, next) => {
      // 去pay页面 必须来自购物车
      if (from.path == '/trade') {
        next()
      } else {
        next(false)
      }
    }
  },
  {
    path: '/paysuccess',
    component: () => import('@/pages/PaySuccess'),
    meta: { show: true }
  },
  {
    path: '/center',
    component: () => import('@/pages/Center'),
    meta: { show: true },
    // 二级路由组件
    children: [
      { path: 'myOrder', component: MyOrder },
      { path: 'groupOrder', component: GroupOrder }
    ]
  }
]
