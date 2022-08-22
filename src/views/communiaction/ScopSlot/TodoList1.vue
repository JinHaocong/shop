<!--
 * @Author: Jin Haocong
 * @Date: 2022-08-22 10:14:17
 * @LastEditTime: 2022-08-22 10:33:09
-->
<template>
  <div>
    <ul>
      <li v-for="(item, index) in todos" :key="index">
        <!-- 作用于插槽  子组件把数据回传-->
        <slot :todo="item" :index="index"></slot>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TodoList1",
  props: {
    todos: Array,
  },
};
</script>

<style>
</style>