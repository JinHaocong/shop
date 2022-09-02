/*
 * @Author: Jin Haocong
 * @Date: 2022-08-16 15:16:48
 * @LastEditTime: 2022-09-01 21:29:32
 */

/* 对于 axios 进行二次封装 */
import axios from "axios";

//在当前模块中引入store
import store from "@/store";

//引入进度条
import nprogress from 'nprogress'
//引入进度条样式
import 'nprogress/nprogress.css'


//1.利用axios对象的方法创建 axios的实例
//2.request其实就是axios 我们进行稍加配置
const requests = axios.create({
    //配置对象
    //基础路径 发请求时路径会出现api
    baseURL: '/api',
    //代表请求超时时间
    timeout: 5000,
})

//请求拦截器:再发请求之前,请求拦截器可以监测到,可以在请求发出前处理业务
requests.interceptors.request.use((config) => {
    //config : 配置对象,里面有一个属性很重要 headers请求头
    //进度条开始
    nprogress.start()
    // console.log(config)
    if (store.state.detail.uuid_token) {
        //给请求头加一个字段 和后台约定好的
        config.headers.userTempId = store.state.detail.uuid_token
    } else {
        console.log('无UUID');
    }

    //携带token
    if (store.state.user.token) {
        config.headers.token = store.state.user.token
    } else {
        console.log('无token');
    }

    return config
})

//响应拦截器
requests.interceptors.response.use((res) => {
    //成功的回调函数,服务器响应数据回来之后,相应拦截器可以做一些事情
    //进度条结束
    nprogress.done()
    return res.data
}, () => {
    //服务器相应失败的回调函数
    //终止promise链
    return Promise.reject(new Error('faile'))
})

//对外暴露
export default requests