/*
 * @Author: Jin Haocong
 * @Date: 2022-08-20 21:46:35
 * @LastEditTime: 2022-08-21 12:32:57
 */
import { reqAddress, reqTradeInfo } from "@/api/index"

const state = {
    address: [],
    tradeInfo: {}
}
const mutations = {
    GETADDRESS(state, address) {
        state.address = address
    },
    GETTRADEINFO(state, tradeInfo) {
        state.tradeInfo = tradeInfo
    }
}
const actions = {
    //获取用户地址信息
    async getAddress({ commit }) {
        let result = await reqAddress()
        if (result.code === 200) {
            commit('GETADDRESS', result.data)
        } else {
            console.log(result);
        }
    },

    //获取交易页信息
    async getTradeInfo({ commit }) {
        let result = await reqTradeInfo()
        if (result.code === 200) {
            commit('GETTRADEINFO', result.data)
        } else {
            console.log(result);
        }
    },

}
const getters = {
    address(state) {
        return state.address
    }
}



export default {
    state,
    mutations,
    actions,
    getters
}
