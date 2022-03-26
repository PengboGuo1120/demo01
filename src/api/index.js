// 该模块统一管理所有项目API接口
import requests from './request'
// 引入mock发送请求
import mockRequests from './mockRequest'
//三级联动接口
// /api/product/getBaseCategoryList GET请求，无参数

//发送请求:axios发送请求返回promise对象
export const reqCategoryList = () => requests({ url: '/product/getBaseCategoryList', method: 'get' })

// 获取banner
export const reqBannerList = () => mockRequests.get('/banner')

//获取floor数据
export const reqFloorList = () => mockRequests.get('/floor')

// 获取搜索模块的数据 :/list POST 需要参数
// 当前接口给服务器传递的参数至少为1个空对象,传递1个默认参数 至少为1个空对象
export const reqGetSearchInfo = params => requests({ url: '/list', method: 'post', data: params })

//获取产品详情信息接口 /api/item/{ skuId } GET
export const reqGoodsInfo = skuId => requests({ url: `/item/${skuId}`, method: 'get' })

// 把产品添加到购物车
export const reqAddOrUpdateShopCart = (skuId, skuNum) => requests({ url: `/cart/addToCart/${skuId}/${skuNum}`, method: 'post' })

// /api/cart/cartList GET
export const reqCartList = () => requests({ url: '/cart/cartList', method: 'get' })

//删除商品接口 /cart/deleteCart/{skuId}
export const reqDeleteCartById = skuId => requests({ url: `/cart/deleteCart/${skuId}`, method: 'delete' })

// 修改商品选中状态 cart/checkCart/{skuId}/{isChecked} get
export const reqUpdateCheckedById = (skuId, isChecked) => requests({ url: `cart/checkCart/${skuId}/${isChecked}`, method: 'get' })

// 获取注册验证码 /api/user/passport/sendCode/{phone} get
export const reqGetCode = phone => requests({ url: `/user/passport/sendCode/${phone}`, method: 'get' })

// 完成注册 /user/passport/register post phone password	code
export const reqUserRegister = data => requests({ url: `/user/passport/register`, data, method: 'post' })

// 用户登录 /user/passport/login post {phone,password}
export const reqUserLogin = data => requests({ url: `/user/passport/login`, data, method: 'post' })

// 登陆成功后，获取用户信息（based on  user token）http://182.92.128.115/api/user/passport/auth/getUserInfo
export const reqUserInfo = () => requests({ url: '/user/passport/auth/getUserInfo', method: 'get' })

// 退出登录 /user/passport/logout get
export const reqLogOut = () => requests({ url: '/user/passport/logout', method: 'get' })

// 获取用户地址信息
export const reqAddressInfo = () => requests({ url: '/user/userAddress/auth/findUserAddressList', method: 'get' })

// 获取用户交易页面数据
export const reqOrderInfo = () => requests({ url: '/order/auth/trade', method: 'get' })

// 提交订单 进行支付 /order/auth/submitOrder?tradeNo={tradeNo} post (本次不用vuex仓库)
export const reqSubmitOrder = (tradeNo, data) => requests({ url: `/order/auth/submitOrder?tradeNo=${tradeNo}`, data, method: 'post' })

// 获取支付信息 /payment/weixin/createNative/{orderId} get (本次不用vuex仓库)
export const reqPayInfo = orderId => requests({ url: `/payment/weixin/createNative/${orderId}`, method: 'get' })

// 获取支付状态 /payment/weixin/queryPayStatus/{orderId} get
export const reqPayStatus = orderId => requests({ url: `/payment/weixin/queryPayStatus/${orderId}`, method: 'get' })

// 获取我的订单信息 /order/auth/{page}/{limit} get
export const reqMyOrderList = (page, limit) => requests({ url: `/order/auth/${page}/${limit}`, method: 'get' })
