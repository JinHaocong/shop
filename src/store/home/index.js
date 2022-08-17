/*
 * @Author: Jin Haocong
 * @Date: 2022-08-16 16:41:06
 * @LastEditTime: 2022-08-17 14:05:32
 */
//home模块的小仓库

//注意要解构  引入请求函数
import { reqCategoryList, reqGetBannerList, reqGetFloorList } from '@/api/index'


const state = {
    //state默认初始值别瞎写,服务器返回类型是什么,初始值就是什么类型
    categoryList: [],
    getBannerList: [],
    getFloorList: []
}
const mutations = {
    CATEGORYLIST(state, categoryList) {
        state.categoryList = categoryList
    },
    BANNERLIST(state, getBannerList) {
        state.getBannerList = getBannerList
    },
    FLOORLIST(state, getFloorList) {
        state.getFloorList = getFloorList
    }
}
const actions = {
    //通过api文件夹里的接口函数调用,向服务器发起诉请求.
    async categoryList({ commit }) {
        let result = await reqCategoryList()
        // console.log(result)
        if (result.code === 200) {
            commit('CATEGORYLIST', result.data)
        }
    },

    //获取首页轮播数据
    async getBannerList({ commit }) {
        let result = await reqGetBannerList();
        if (result.code === 200) {
            commit('BANNERLIST', result.data)
        }
    },

    //获取floo数据
    async getFloorList({ commit }) {
        let result = await reqGetFloorList();
        if (result.code === 200) {
            commit('FLOORLIST', result.data)
        }
    }
}
const getters = {}


export default {
    state,
    actions,
    mutations,
    getters
}
