/*
 * @Author: Jin Haocong
 * @Date: 2022-08-18 21:24:26
 * @LastEditTime: 2022-08-20 23:05:52
 */

import { reqGetDetailInfo, reqAddUpdateShopCar } from '@/api/index'
//生成uuid的模块
import { getUUID } from '@/utils/uuid_token'
const state = {
    goodInfo: {},
    shopCarResultInfo: {},
    //游客临时身份
    uuid_token: getUUID()
};
const mutations = {
    GETGOODINFO(state, goodInfo) {
        state.goodInfo = goodInfo
    },
    ADDUPDATESHOPCAR(state, resInfo) {
        state.shopCarResultInfo = resInfo
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
