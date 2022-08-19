/*
 * @Author: Jin Haocong
 * @Date: 2022-08-16 10:37:40
 * @LastEditTime: 2022-08-18 15:46:29
 */
import Vue from 'vue'
import App from './App.vue'

//引入路由
import router from '@/router'

//引入仓库
import store from './store'

//全局组件
import TypeNav from '@/components/TypeNav/TypeNav.vue'
import CommonCarousel from '@/components/Carousel/CommonCarousel.vue'
import CommonPagination from '@/components/Pagination/CommonPagination.vue'

//引入mockServe.js
import '@/mock/mocksServe'

//引入swiper样式
import "swiper/swiper-bundle.min.css";

//第一个参数:全局组件的名字 第二个参数:哪一个组件
Vue.component(TypeNav.name, TypeNav)
Vue.component(CommonCarousel.name, CommonCarousel)
Vue.component(CommonPagination.name, CommonPagination)

Vue.config.productionTip = false

//此时的Vue 还没实例化 所以 undefined
// console.log(this);

new Vue({
  //注册路由信息 此时组件身上都有$router $route属性
  router,
  //注册仓库,组件身上多了一个$store的属性
  store,
  render: h => h(App),

  //全局事件总线  $bus 的配置 
  beforeCreate() {
    Vue.prototype.$bus = this

    //此时 this 就是 Vue  因为意境实例化了
    // console.log(this);
  }

}).$mount('#app')
