/*
 * @Author: Jin Haocong
 * @Date: 2022-08-16 15:30:01
 * @LastEditTime: 2022-08-16 15:35:30
 */

//当前模块: 所有的API 接口进行统一管理
import requests from "./request";

//三级联动请求接口
//  /api/product/getBaseCategoryList  get 无参数

//发请求 axios发请求返回结果是Promise对象
export const reqCategoryList = () => requests({ url: '/product/getBaseCategoryList', method: 'get' })
