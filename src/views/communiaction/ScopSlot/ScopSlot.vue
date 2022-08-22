<!--
 * @Author: Jin Haocong
 * @Date: 2022-08-22 10:11:30
 * @LastEditTime: 2022-08-22 10:35:13
-->
<template>
  <div>
    <h1>效果一；显示todo列表时，已完成的为绿色</h1>
    <!-- 子组件 数据是来源于父组件 -->
    <todo-list :todos="todos">
      <!-- 子组件决定不了结构与外观 -->
      <template slot-scope="todos">
        <span :style="{ color: todos.todo.isComplete ? 'green' : 'red' }">
          {{ todos.todo.text }}</span
        >
      </template>
    </todo-list>
    <br />
    <h1>效果二；显示todo列表时，带序号todo的颜色为蓝绿搭配</h1>
    <todo-list-1 :todos="todos">
      <template slot-scope="{ todo, index }">
        <span :style="{ color: todo.isComplete ? 'red' : 'purple' }"
          >{{ index }}--{{ todo.text }}</span
        >
      </template>
    </todo-list-1>
  </div>
</template>

<script>
import TodoList from "./TodoList.vue";
import TodoList1 from "./TodoList1.vue";
export default {
  components: { TodoList, TodoList1 },
  name: "ScopeSlot",
  data() {
    return {
      todos: [
        { id: 1, text: "AAA", isComplete: false },
        { id: 1, text: "BBB", isComplete: true },
        { id: 1, text: "CCC", isComplete: false },
        { id: 1, text: "DDD", isComplete: false },
      ],
    };
  },
};
</script>

<style>
</style>