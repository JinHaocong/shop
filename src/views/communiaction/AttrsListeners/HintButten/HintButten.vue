<!--
 * @Author: Jin Haocong
 * @Date: 2022-08-22 09:15:42
 * @LastEditTime: 2022-08-22 09:32:52
-->
<template>
  <div>
    <!-- title a标签的提示功能
    v-bind="$attrs" 可以把$attrs 所有接收到的数据作为el-butten的属性 这种写法不能用:必须要用v-bind
    v-on="$listeners" 也不能用@ 替换
     -->
    <a :title="title">
      <el-button v-bind="$attrs" v-on="$listeners"></el-button
    ></a>
  </div>
</template>

<script>
export default {
  name: "HintButten",
  props: ["title"],
  mounted() {
    //$attrs 属于组件的一个属性 可以获取父组件传递过来的属性
    //对于组组件而言 父组件给的数据可以利用props接受 但是需要注意 如果子组件通过props接受的属性 在$attrs 中是获取不到的
    console.log(this.$attrs);

    //$listeners 也是组件实例自身的一个属性 可以获取到父组件给子组件传递的自定义事件
    console.log(this.$listeners);
  },
};
</script>

<style>
</style>