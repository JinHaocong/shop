/*
 * @Author: Jin Haocong
 * @Date: 2022-08-16 16:03:04
 * @LastEditTime: 2022-08-16 16:41:39
 */

import Vue from "vue";
import Vuex from 'vuex'
//使用插件一次
Vue.use(Vuex)

//引入小仓库
import home from './home'
import search from "./search";

/* //state:仓库存储数据
const state = {
    count: 1
}

//mutations:修改state的唯一手段
const mutations = {
    ADD(state) {
        state.count++
    }
}

//actions:处理action,可以书写业务逻辑,处理异步
const actions = {
    add({ commit }) {
        //可以书写逻辑但是不能直接修改state
        commit('ADD')
    }

    //等价写法 当前this指向为 Store 
    // add() {
    //     this.commit('ADD')
    // }
}

//getters:理解为计算属性,用于简化仓库数据,让组件获取仓库的数据更方便
const getters = {} */

//对外暴露 Store 类的实例
export default new Vuex.Store({
    // state,
    // mutations,
    // actions,
    // getters

    //模块化
    modules: {
        home,
        search
    }
})