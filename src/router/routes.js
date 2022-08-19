/*
 * @Author: Jin Haocong
 * @Date: 2022-08-18 21:11:37
 * @LastEditTime: 2022-08-18 21:46:00
 */


//路由配置信息

import Home from '@/views/home/IndexView'
import Search from '@/views/search/IndexView'
import Login from '@/views/login/IndexView'
import Register from '@/views/register/IndexView'
import Detail from '@/views/Detail/IndexView'

export default [
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
        path: '/detail/:skuId',
        component: Detail,
        name: 'detail',
        meta: {
            show: true
        }

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