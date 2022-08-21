/*
 * @Author: Jin Haocong
 * @Date: 2022-08-20 13:14:45
 * @LastEditTime: 2022-08-20 20:39:49
 */

//登陆与注册的模块
import { reqGetCode, reqRegister, reqLogin, reqUserInfo, reqLogout } from '@/api/index'
import { getToken, setToken, removeToken } from '@/utils/token'

const state = {
    code: '',
    token: getToken(),
    userInfo: {}
}

const mutations = {
    GETCODE(state, code) {
        state.code = code
    },
    USERREGISTER() {
        alert('注册成功')
    },
    LOGIN(state, token) {
        state.token = token
        alert('登录成功')
    },
    USERLOGININFO(state, userInfo) {
        state.userInfo = userInfo
    },
    CLEARUSERINFO(state) {
        state.token = ''
        state.userInfo = {}
        removeToken()
    }
}

const actions = {

    //获取验证码
    async getCode({ commit }, phoneNumber) {
        let result = await reqGetCode(phoneNumber)
        if (result.code === 200) {
            commit('GETCODE', result.data)
            return 'ok'
        } else {
            console.log(result);
            return Promise.reject(new Error('获取验证码失败'))
        }
    },

    //用户注册
    async userRrgister({ commit }, userInfo) {
        let result = await reqRegister(userInfo)
        if (result.code === 200) {
            commit('USERREGISTER')
            return 'ok'
        } else {
            return Promise.reject(new Error('注册失败'))
        }
    },

    //用户登录
    async useLogin({ commit }, loginInfo) {
        let result = await reqLogin(loginInfo)
        //服务器下发token 用户表唯一标识
        if (result.code === 200) {
            commit('LOGIN', result.data.token)
            //持久化存储token
            setToken(result.data.token)
            return 'ok'
        } else {
            return Promise.reject(new Error('登陆失败'))
        }
    },

    //获取用户登陆信息
    async userLoginInfo({ commit }) {
        let result = await reqUserInfo()
        if (result.code === 200) {
            commit('USERLOGININFO', result.data)
            return 'ok'
        } else {
            console.log(result);
            return Promise.reject(new Error('获取信息失败'))
        }
    },

    //退出登录
    async userLogout({ commit }) {
        let result = await reqLogout()
        if (result.code === 200) {
            commit('CLEARUSERINFO')
            return 'ok'
        } else {
            console.log(result);
            return Promise.reject(new Error('推出失败'))
        }
    }
}

const getters = {}



export default {
    state,
    mutations,
    actions,
    getters
}