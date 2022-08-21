/*
 * @Author: Jin Haocong
 * @Date: 2022-08-19 18:56:12
 * @LastEditTime: 2022-08-19 19:05:11
 */
import { v4 as uuidv4 } from 'uuid';
//生成一个随机的字符串 且每次执行不能发生变化 而且游客的身份要吃就存储
export const getUUID = () => {
    //先从本地存储获取uuid 判断是否存在 
    let uuid_token = localStorage.getItem('UUID')
    if (!uuid_token) {
        uuid_token = uuidv4()
        localStorage.setItem('UUID', uuid_token)
    }
    return uuid_token
}