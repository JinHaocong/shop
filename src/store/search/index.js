/*
 * @Author: Jin Haocong
 * @Date: 2022-08-16 16:39:09
 * @LastEditTime: 2022-08-17 20:55:51
 */

import { reqGetSearchInfo } from "@/api"

//search模块的小仓库

const state = {
    searchList: {}
}
const mutations = {
    SEARCHLIST(state, searchList) {
        state.searchList = searchList
    }
}
const actions = {
    //params 使用户派发action时穿的 而且至少是一个空对象
    async getSearchLise({ commit }, params = {}) {
        let result = await reqGetSearchInfo(params)
        if (result.code === 200) {
            commit('SEARCHLIST', result.data)
        }
    }
}

//计算属性 ；在项目当中 是为了简化仓库中的数据为生 
//可以把我们将在组件当中用的数据进行简化，
const getters = {
    //当前形参  是当前仓库的state  并非大仓库中的state
    goodsList(state) {
        //这样写是有问题的 可能返回值是undefined 如果是undefined 返回一个空数组
        return state.searchList.goodsList || []
    },

    trademarkList(state) {
        return state.searchList.trademarkList
    },

    attrsList(state) {
        return state.searchList.attrsList
    }

}

export default {
    state,
    actions,
    mutations,
    getters
}
