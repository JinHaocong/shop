<!--
 * @Author: Jin Haocong
 * @Date: 2022-08-22 08:20:47
 * @LastEditTime: 2022-08-22 09:04:40
-->
<template>
  <div>
    小明的爸有{{ money }}元
    <h2>不使用sync修饰符</h2>
    <!-- 
      :Fathermoney 父组件给子组件穿的值
       @update:money="handler1" 自定义事件
     -->
    <child-test-1 :Fathermoney="money" @update:money="handler1"></child-test-1>
    <h2>使用sync修饰符</h2>
    <!-- 
      :money1.sync="money" 父组件给子组件传递了一个props money1
      第二 给当前子组件绑定了一个自定义事件，而且事件的名称为 update:money
      money为data里的money
      省略写法
     -->
    <child-test-2 :money1.sync="money"></child-test-2>
  </div>
</template>

<script>
import ChildTest1 from "./ChildTest1.vue";
import ChildTest2 from "./ChildTest2.vue";
export default {
  components: { ChildTest1, ChildTest2 },
  data() {
    return {
      money: 88888,
    };
  },
  name: "SyncTest",
  methods: {
    handler1(data) {
      this.money = data;
    },
  },
};
</script>

<style>
</style>