/*
 * @Author: Jin Haocong
 * @Date: 2022-08-21 20:45:48
 * @LastEditTime: 2022-08-21 21:01:18
 */
let myPlugins = {}

//第一个参数是Vue 第二个是传的参数
myPlugins.install = function (Vue, options) {
    //Vue 挂载
    //Vue.prototype.$bus
    //Vue.directive();
    //Vue.component
    //Vue.filter.......
    //全局指令
    Vue.directive(options.name, (element, params) => {
        element.innerHTML = params.value.toUpperCase()
    })
}

export default myPlugins