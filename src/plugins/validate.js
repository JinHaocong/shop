/*
 * @Author: Jin Haocong
 * @Date: 2022-08-21 21:14:13
 * @LastEditTime: 2022-08-21 21:54:48
 */

import Vue from 'vue'

//引入表单验证插件 vee-validate
import VeeValidate from 'vee-validate'

//引入中文 提示信息
import zh_CN from 'vee-validate/dist/locale/zh_CN'

Vue.use(VeeValidate)

//表单验证
VeeValidate.Validator.localize('zh_CN', {
    messages: {
        ...zh_CN.messages,
        is: (field) => `${field}必须与密码相同`
    },
    attributes: {
        phone: '手机号',
        code: '验证码',
        passwordUp: '密码',
        passwordDown: '确认密码',
        agree: '协议'

    }
})

//自定义校验规则
VeeValidate.Validator.extend('agree', {
    validate: value => {
        return value
    },
    getMessage: field => field + '必须同意'
})