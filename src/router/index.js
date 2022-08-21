/*
 * @Author: Jin Haocong
 * @Date: 2022-08-16 11:41:25
 * @LastEditTime: 2022-08-21 19:42:12
 */
import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store";

//重新引入模块化的路由
import routes from './routes'
Vue.use(VueRouter)

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

let router = new VueRouter({

    routes,

    //路由 滚动行为
    scrollBehavior() {
        //返回的 y=0 表示滚动到最上面
        return { y: 0 };
    }

})

//全局前置守卫
//to;   可以获取到你要跳转到的那个路由的信息
//from; 可以获取到你从哪个路由而来的信息
//next； 放行
router.beforeEach(async (to, from, next) => {
    // next()
    //netx('/shopcar') 放行到指定路由
    //next(false) 终端当前的导航，如果浏览器的URL改变了，那么URL地址会重置到 from‘路由对应的地址
    let token = store.state.user.token
    let name = store.state.user.userInfo.name
    if (token) {
        //用户已经登陆 禁止再次跳到登陆界面
        if (to.path == '/login') {
            next(false)
        } else {
            //这里是除了登录界面的所有界面
            if (name) {
                //有用户信息 放行 
                next()
            } else {
                //没有用户信息 要派发action 让仓库进行存储
                try {
                    //没有用户信息,派发action让仓库存储信息  等待异步完成 放行
                    await store.dispatch('userLoginInfo')
                    next()
                } catch (error) {
                    //token过期 获取不到用户信息  先清除本地token 
                    await store.dispatch('userLogout')
                    next('/login')
                }
            }
            next()
        }
    } else {
        //未登录 ；不能去交易相关的，不能去支付相关的 pay paysuccess
        if (to.path == '/trade' || to.path.includes('/pay') || to.path.includes('/center')) {
            //把未登录的时候想去而没有去成的信息存储在路由中
            next('/login?redirect=' + to.path)
        } else {
            next()
        }
    }
})

export default router