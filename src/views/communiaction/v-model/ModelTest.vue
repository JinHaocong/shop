<!--
 * @Author: Jin Haocong
 * @Date: 2022-08-21 23:53:11
 * @LastEditTime: 2022-08-22 00:44:12
-->
<template>
  <div>
    <h1>深入v-model</h1>
    <input type="text" v-model="msg" /><span>{{ msg }}</span>
    <br />
    <hr />
    <h1>v-model实现的原理(vue2)</h1>
    <!-- 
        原生DOM中石油 oninput 事件 经常结合表单元素一起使用，当表单元素文本内容发生变化时会触发一次回调
        可以通过value 和input事件 事件 v-model 的功能
     -->
    <input type="text" name="" id="" :value="msg" @input="handler" />
    <span>{{ msg }}</span>

    <!-- 深入学习 v-model 实现父子组件数据同步 -->
    <h2>子组件</h2>
    <!-- 
        :value 到底是什么？  这是props
        @input 到底是什么？  并非是原生DOM的input事件 数以自定义事件
     -->
    <custom-input :value="msg" @input="handler1"></custom-input>
    <custom-input v-model="msg"></custom-input>
  </div>
</template>

<script>
import CustomInput from "./CustomInput.vue";
export default {
  components: { CustomInput },
  name: "ModelTest",
  data() {
    return {
      msg: "我爱你xxx",
    };
  },
  methods: {
    handler(evt) {
      this.msg = evt.target.value;
    },
    handler1(value) {
      this.msg = value;
    },
  },
};
</script>

<style>
</style>