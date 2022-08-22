/*
 * @Author: Jin Haocong
 * @Date: 2022-08-22 10:05:11
 * @LastEditTime: 2022-08-22 10:09:20
 */

export default {
    //对外暴露的对象，可以放置重复的js业务逻辑
    methods: {
        givemoney(money) {
            this.money -= money;
            //this.$parent 可以获取到某个自组建的父组件
            this.$parent.money += money;
        },
    },
    mounted() {
        console.log('mounted');
    }
}