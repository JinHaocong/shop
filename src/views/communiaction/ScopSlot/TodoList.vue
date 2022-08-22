<!--
 * @Author: Jin Haocong
 * @Date: 2022-08-22 10:14:17
 * @LastEditTime: 2022-08-22 10:25:21
-->
<template>
  <div>
    <ul>
      <li v-for="(item, index) in todos" :key="index">
        <!-- 作用于插槽  子组件把数据回传-->
        <slot :todo="item"></slot>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TodoList",
  props: {
    todos: Array,
  },
};
</script>

<style>
</style>