/*
 * @Author: Jin Haocong
 * @Date: 2022-08-16 16:41:06
 * @LastEditTime: 2022-08-16 19:25:24
 */
//home模块的小仓库

//注意要解构  引入请求函数
import { reqCategoryList } from '@/api/index'

const state = {
    //state默认初始值别瞎写,服务器返回类型是什么,初始值就是什么类型
    categoryList: []
}
const mutations = {
    CATEGORYLIST(state, categoryList) {
        state.categoryList = categoryList
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
    }
}
const getters = {}


export default {
    state,
    actions,
    mutations,
    getters
}
