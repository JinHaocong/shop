/*
 * @Author: Jin Haocong
 * @Date: 2022-08-16 15:30:01
 * @LastEditTime: 2022-08-21 18:33:03
 */
/* 
当前模块: 所有的API 接口进行统一管理 */
import requests from "./request";
import mockRequests from './mockRequest'


//三级联动请求接口
//  /api/product/getBaseCategoryList  get 无参数
//发请求 axios发请求返回结果是Promise对象

export const reqCategoryList = () => requests({
    url: '/product/getBaseCategoryList',
    method: 'get',
})


//mock 请求 获取banner接口
export const reqGetBannerList = () => mockRequests({
    url: '/banner',
    method: 'get'
})

//mock请求 floor 接口数据
export const reqGetFloorList = () => mockRequests({
    url: '/floor',
    method: 'get'
})


//search模块请求 /api/list POST 需要传参
//当前接口给服务器传的参数至少是一个空对象
export const reqGetSearchInfo = (params) => requests({
    url: '/list',
    method: 'post',
    data: params
})

//获取商品详情接口
export const reqGetDetailInfo = (skuId) => requests({
    url: `/item/${skuId}`,
    method: 'get'
})

//将产品添加到购物车或者更新某个购物车中某个产品的个数
export const reqAddUpdateShopCar = (skuId, skuNum) => requests({
    url: `/cart/addToCart/${skuId}/${skuNum}`,
    method: 'post'
})

//获取购物车列表
export const reqGetShopCarInfo = () => requests({
    url: "/cart/cartList",
    method: 'get',
})

//删除购物车
export const reqDeleteCar = (skuId) => requests({
    url: `/cart/deleteCart/${skuId}`,
    method: 'delete'
})

//切换商品选中状态
export const reqChangeStatus = (skuId, isChecked) => requests({
    url: `/cart/checkCart/${skuId}/${isChecked}`,
    method: 'get'
})

//获取验证码
export const reqGetCode = (phoneNumber) => requests({
    url: `/user/passport/sendCode/${phoneNumber}`,
    method: 'get'
})

//注册
export const reqRegister = (data) => requests({
    url: '/user/passport/register',
    method: 'post',
    data
})

// //用户登录
export const reqLogin = (data) => requests({
    url: "/user/passport/login",
    method: 'post',
    data
})

//获取登陆后的信息 请求头里带这token
export const reqUserInfo = () => requests({
    url: "/user/passport/auth/getUserInfo",
    method: 'get',
})

//退出登录
export const reqLogout = () => requests({
    url: '/user/passport/logout',
    method: 'get'
})

//获取用户地址信息
export const reqAddress = () => requests({
    url: "/user/userAddress/auth/findUserAddressList",
    method: "get"
})

//获取交易也数据
export const reqTradeInfo = () => requests({
    url: '/order/auth/trade',
    method: "get"
})

//提交订单
export const reqSubmitOrder = (tradeNo, data) => requests({
    url: `/order/auth/submitOrder?tradeNo=${tradeNo}`,
    method: 'post',
    data
})

//获取订单支付信息
export const reqPayInfo = (orderId) => requests({
    url: `/payment/weixin/createNative/${orderId}`,
    method: "get"
})

//获取支付订单状态
export const reqPayStatus = (orderId) => requests({
    url: `/payment/weixin/queryPayStatus/${orderId}`,
    method: "get"
})

//获取我的订单接口
export const reqOrderList = (page, limit) => requests({
    url: `/order/auth/${page}/${limit}`,
    method: "get"
})