<!--
 * @Author: Jin Haocong
 * @Date: 2022-08-21 23:07:48
 * @LastEditTime: 2022-08-22 08:39:52
-->
<template>
  <div>
    <div class="main">EventTest组件</div>

    <!-- 原生DOM绑定系统事件 -->
    <button @click="handler">原生DOM绑定原生事件</button>

    <!-- EvenTest1是非原生DOM节点，而绑定的click事件并非原生DOM事件，而是自定义事件  可以通过修饰符把自定义事件变成原生DOM事件
        @click.native 可以吧自定义事件转换为原生DOM事件
        当前原生DOM的click事件 其实是给子组件的 根节点  绑定了点击事件 利用到了时间的委托
    -->
    <event-test-1 @click.native="handler1"></event-test-1>

    <!-- 原生DOM 绑定自定义事件 是没有任何意义的 没有办法触发$emit函数 -->
    <button @xxx="handler2">原生DOM 绑定自定义事件</button>

    <!-- 组件标签 -->
    <event-test-2
      @click="handler3"
      @xxx="handler3"
      v-model="msg"
      :data="msg"
    ></event-test-2>
    <input type="text" name="" id="" v-model="msg" /><span>father</span>
  </div>
</template>

<script>
import EventTest1 from "./EventTest1.vue";
import EventTest2 from "./EventTest2.vue";
export default {
  components: { EventTest1, EventTest2 },
  data() {
    return {
      msg: "",
    };
  },
  name: "EventTest",
  methods: {
    //原生DOMbutton的事件回调
    handler(evt) {
      console.log("原生DOM 的单击事件", evt);
    },
    //EventTest1
    handler1() {
      console.log("EventTest1");
    },
    //EventTest 原生DOM 绑定自定义事件
    handler2() {
      console.log("原生DOM 绑定自定义事件");
    },
    //EventTest2自定义事件回调
    handler3(params) {
      console.log("event2自定义事件", params);
    },
  },
};
</script>

<style lang="less" scoped>
.main {
  text-align: center;
  font-size: 30px;
}
</style>