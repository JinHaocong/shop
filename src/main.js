/*
 * @Author: Jin Haocong
 * @Date: 2022-08-16 10:37:40
 * @LastEditTime: 2022-08-16 16:49:37
 */
import Vue from 'vue'
import App from './App.vue'

//引入路由
import router from '@/router'

//引入仓库
import store from './store'
//三级联动 全局组件
import TypeNav from '@/components/TypeNav/TypeNav.vue'
//第一个参数:全局组件的名字
//第二个参数:哪一个组件
Vue.component(TypeNav.name, TypeNav)

Vue.config.productionTip = false

new Vue({
  //注册路由信息 此时组件身上都有$router $route属性
  router,
  //注册仓库,组件身上多了一个$store的属性
  store,
  render: h => h(App),
}).$mount('#app')
