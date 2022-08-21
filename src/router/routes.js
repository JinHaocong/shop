/*
 * @Author: Jin Haocong
 * @Date: 2022-08-18 21:11:37
 * @LastEditTime: 2022-08-21 22:12:59
 */


//路由配置信息

// import Home from '@/views/home/IndexView'
// import Search from '@/views/search/IndexView'
// import Login from '@/views/login/IndexView'
// import Register from '@/views/register/IndexView'
// import Detail from '@/views/Detail/IndexView'
// import AddCarSuccess from '@/views/AddCartSuccess/IndexView'
// import ShopCar from "@/views/ShopCar/IndexView"
// import Trade from '@/views/Trade/IndexView'
// import Pay from '@/views/Pay/IndexView'
// import PaySuccess from "@/views/PaySuccess/IndexView"
// import PersonalInformation from '@/views/Center/IndexView'

//二级路由
// import MyOrder from '@/views/Center/myOrder/MyOrder'
// import GroupOrder from '@/views/Center/groupOrder/GroupOrder'

export default [
    {
        path: '/home',
        //路由懒加载
        component: () => import('@/views/home/IndexView'),
        name: 'home',
        meta: {
            show: true
        }
    },
    {
        path: '/search/:keyword?',
        component: () => import('@/views/search/IndexView'),
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
        component: () => import('@/views/Detail/IndexView'),
        name: 'detail',
        meta: {
            show: true
        }

    },
    {
        path: "/addcarsuccess",
        component: () => import('@/views/AddCartSuccess/IndexView'),
        name: "addcarsuccess",
        meta: {
            show: true
        }
    },
    {
        path: "/shopcar",
        component: () => import("@/views/ShopCar/IndexView"),
        name: 'shopcar',
        meta: {
            show: true
        }
    },
    {
        path: '/login',
        component: () => import('@/views/login/IndexView'),
        meta: {
            show: false
        }
    },
    {
        path: '/register',
        component: () => import('@/views/register/IndexView'),
        meta: {
            show: false
        }
    },
    {
        path: '/trade',
        component: () => import('@/views/Trade/IndexView'),
        meta: {
            //控制底部是否显示
            show: true
        },
        //路由都享守卫
        beforeEnter: (to, from, next) => {
            //去交易页面必须是从购物车来 起其他路径必须停留在当前
            if (from.path == '/shopcar') {
                next()
            } else {
                next(false)
            }
        }
    },
    {
        path: '/pay',
        component: () => import('@/views/Pay/IndexView'),
        name: 'pat',
        meta: {
            show: true
        },
        beforeEnter: (to, from, next) => {
            if (from.path == '/trade') {
                next()
            } else {
                next(false)
            }
        }
    },
    {
        path: "/paysuccess",
        component: () => import("@/views/PaySuccess/IndexView"),
        name: 'paysuccess',
        meta: {
            show: true
        },
        // beforeEnter: (to, from, next) => {
        //     if (from.path == '/pay') {
        //         next()
        //     } else {
        //         next(false)
        //     }
        // }
    },
    {
        path: '/center',
        component: () => import('@/views/Center/IndexView'),
        name: 'center',
        meta: {
            show: true
        },
        //二级路由
        children: [
            {
                path: '/center/myorder',
                component: () => import('@/views/Center/myOrder/MyOrder'),
                name: 'myorder'
            },
            {
                path: '/center/grouporder',
                component: () => import('@/views/Center/groupOrder/GroupOrder'),
                name: 'grouporder'
            },
            {
                //重定向
                path: "/center",
                redirect: '/center/myorder'
            }
        ]
    },
    {
        //重定向
        path: '*',
        redirect: '/home'
    }
]