/*
 * @Author: Jin Haocong
 * @Date: 2022-08-16 11:41:25
 * @LastEditTime: 2022-08-17 08:44:17
 */
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter)

import Home from '@/views/home/IndexView'
import Search from '@/views/search/IndexView'
import Login from '@/views/login/IndexView'
import Register from '@/views/register/IndexView'

//先把VueRouter原型对象的push保存一份
let originPush = VueRouter.prototype.push
//重写push replace 注意重写的函数不能用箭头函数 箭头函数没有this
//第一个参数location 告诉原来的push方法往哪里调,以及传参
//第二个是成功的回调
//第三个是失败的回调
VueRouter.prototype.push = function (location, resolve, reject) {
    if (resolve && reject) {
        //call 和 apply 够可以调用函数一次,都可以改变this指向
        //不同 call传参要用逗号隔开 apply传参要传递数组
        //直接调用的话 指向是window 所以要用call或apply改变this的指向 当前this指向VueRouter的实例
        originPush.call(this, location, resolve, reject)
    } else {
        originPush.call(this, location, () => { }, () => { })
    }
}

//同理 replace重写
let originReplace = VueRouter.prototype.replace

VueRouter.prototype.replace = function (location, resolve, reject) {
    if (resolve && reject) {
        originReplace.call(this, location, resolve, reject)
    } else {
        originReplace.call(this, location, () => { }, () => { })
    }
}



export default new VueRouter({
    routes: [
        {
            path: '/home',
            component: Home,
            name: 'home',
            meta: {
                show: true
            }
        },
        {
            path: '/search/:keyword?',
            component: Search,
            name: 'search',
            meta: {
                show: true
            },
            // 面试题4: 路由组件能不能传递props数据  可以 有三种写法
            // 布尔值写法: 只能传params
            // props: true

            // 对象写法;额外的给路由组件传递一些props
            // props: {
            //     a: 1,
            //     b: 2
            // }

            // 函数写法: 可params参数,query参数, 通过props传给组件
            // props: ($route) => {
            //     return {
            //         keyword: $route.params.keyword,
            //         k: $route.query.k
            //     }
            // }

        },
        {
            path: '/login',
            component: Login,
            meta: {
                show: false
            }
        },
        {
            path: '/register',
            component: Register,
            meta: {
                show: false
            }
        },
        {
            //重定向
            path: '*',
            redirect: '/home'
        }
    ]


})