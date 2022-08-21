/*
 * @Author: Jin Haocong
 * @Date: 2022-08-20 17:19:58
 * @LastEditTime: 2022-08-20 18:23:42
 */


//对外暴露
export const setToken = (token) => {
    localStorage.setItem('TOKEN', token)
}

export const getToken = () => {
    return localStorage.getItem('TOKEN')
}

export const removeToken = () => {
    return localStorage.removeItem('TOKEN')
}