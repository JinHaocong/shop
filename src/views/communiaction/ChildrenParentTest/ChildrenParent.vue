<!--
 * @Author: Jin Haocong
 * @Date: 2022-08-22 09:34:13
 * @LastEditTime: 2022-08-22 10:00:55
-->
<template>
  <div>
    <h2>爸爸有存款：{{ money }}</h2>
    <button @click="jieqianfromson1">找儿子1借100</button><br />
    <button @click="jieqianfromson2">找儿子2借150</button><br />
    <button @click="jieqianfromall">找所有儿子每人借200</button><br />
    <br />
    <!-- ref 可以获取到节点  也可以获取到子组件标签 操作子组件的数据与方法-->
    <son-test-1 ref="son1"></son-test-1>
    <br />
    <son-test-2 ref="son2"></son-test-2>
  </div>
</template>

<script>
import SonTest1 from "./SonTest1.vue";
import SonTest2 from "./SonTest2.vue";
export default {
  components: { SonTest1, SonTest2 },
  name: "ChildrenParent",
  data() {
    return {
      money: 8888,
    };
  },
  methods: {
    //向儿子1借钱
    jieqianfromson1() {
      this.money += 100;
      this.$refs.son1.money -= 100;
    },
    //向儿子2借钱
    jieqianfromson2() {
      this.money += 150;
      this.$refs.son2.money -= 150;
    },
    //向所有儿子借钱
    jieqianfromall() {
      this.money += 400;
      //组件实例自身拥有一个属性$children，可以获取到当前组件中全部的子组件
      this.$children.forEach((item) => (item.money -= 200));

      //切记别这么书写 如果子组件过多 这个第0项 可能不是你想要的
      //   console.log(this.$children[0].money);
    },
  },
};
</script>

<style>
</style>