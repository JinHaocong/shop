/*
 * @Author: Jin Haocong
 * @Date: 2022-08-18 21:24:26
 * @LastEditTime: 2022-08-19 11:38:07
 */

import { reqGetDetailInfo, reqAddUpdateShopCar } from '@/api/index'

const state = {
    goodInfo: {},
    shopCarResultInfo: {}
};
const mutations = {
    GETGOODINFO(state, goodInfo) {
        state.goodInfo = goodInfo
    },
    ADDUPDATESHOPCAR(state, resInfo) {
        state.shopCarResultInfo = resInfo
        console.log('加入成功');
    }
};
const actions = {
    async getGoodInfo({ commit }, skuId) {
        let result = await reqGetDetailInfo(skuId)
        if (result.code === 200) {
            commit('GETGOODINFO', result.data)
        } else {
            console.log(result);
        }
    },

    //这个函数返回值是个promise
    async addUpdateShopCar({ commit }, addInfo) {
        let result = await reqAddUpdateShopCar(addInfo.skuId, addInfo.skuNumber)
        if (result.code === 200) {
            commit('ADDUPDATESHOPCAR', result)
            return 'ok'
        } else {
            alert('添加失败')
            console.log(result);
            return Promise.reject(new Error('faile'))
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
    },
}




export default {
    state,
    mutations,
    actions,
    getters
}
