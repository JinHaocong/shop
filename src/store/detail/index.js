/*
 * @Author: Jin Haocong
 * @Date: 2022-08-18 21:24:26
 * @LastEditTime: 2022-08-18 23:53:42
 */

import { reqGetDetailInfo } from '@/api/index'

const state = {
    goodInfo: {}
};
const mutations = {
    GETGOODINFO(state, goodInfo) {
        state.goodInfo = goodInfo
    }
};
const actions = {
    async getGoodInfo({ commit }, skuId) {
        let result = await reqGetDetailInfo(skuId)
        if (result.code === 200) {
            commit('GETGOODINFO', result.data)
        }
    }

};
const getters = {
    categoryView(state) {
        //state.goodInfo 的初始状态是一个空对象 所以再 .categoryView 是个undefined
        return state.goodInfo.categoryView || {}
    },

    skuInfo(state) {
        return state.goodInfo.skuInfo || {}
    },

    spuSaleAttrList(state) {
        return state.goodInfo.spuSaleAttrList
    }

}




export default {
    state,
    mutations,
    actions,
    getters
}
