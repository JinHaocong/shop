/*
 * @Author: Jin Haocong
 * @Date: 2022-08-16 16:03:04
 * @LastEditTime: 2022-08-20 12:39:03
 */
//获取购物车数据

import { reqGetShopCarInfo, reqDeleteCar, reqChangeStatus } from '@/api/index'

const state = {
    shopCarList: []
}

const mutations = {
    GETSHOPCARLIST(state, shopCarList) {
        state.shopCarList = shopCarList
    },
    DELETESHOPCAR() {
        console.log('删除成功');
    },
    CHANGESTATUS() {
        console.log('修改成功');
    }
}

const actions = {
    //获取购物车列表
    async getShopCarList({ commit }) {
        let result = await reqGetShopCarInfo()
        if (result.code === 200) {
            commit('GETSHOPCARLIST', result.data)
        } else {
            console.log(result);
        }
    },


    //删除某一个产品
    async deleteShopCar({ commit }, skuId) {
        let result = await reqDeleteCar(skuId)
        if (result.code === 200) {
            commit('DELETESHOPCAR')
            return 'ok'
        } else {
            return Promise.reject(new Error('faile'))
        }
    },


    //修改选中状态
    async changeStatus({ commit }, checkInfo) {
        let result = await reqChangeStatus(checkInfo.skuId, checkInfo.isChecked)
        if (result.code === 200) {
            commit('CHANGESTATUS')
            return 'ok'
        } else {
            return Promise.reject(new Error('faile'))
        }
    },

    //删除全部选中商品
    //这里的形参 时整个 当前   store 分仓库
    //解构赋值出 
    deleteAllChecked({ dispatch, getters }) {
        let PromiseAll = []
        getters.carList.forEach(item => {
            //将每一次返回的Promis添加到数组中
            let promise = item.isChecked == 1 ? dispatch('deleteShopCar', item.skuId) : '';
            PromiseAll.push(promise)
        })
        //只要其中一个是失败 Promise.all就会返回失败，全部成功才会返回成功
        return Promise.all(PromiseAll)
    },

    //修改全部勾选的状态
    updateCheckAll({ dispatch, getters }, isChecked) {
        let PromiseAll = []
        getters.carList.forEach(item => {
            let result = dispatch('changeStatus', { skuId: item.skuId, isChecked })
            PromiseAll.push(result)
        })
        return Promise.all(PromiseAll)

    }
}

const getters = {
    carList(state) {
        return (state.shopCarList[0] || {}).cartInfoList || []
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}