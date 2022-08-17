/*
 * @Author: Jin Haocong
 * @Date: 2022-08-16 15:30:01
 * @LastEditTime: 2022-08-17 19:11:23
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
    method: 'get'
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