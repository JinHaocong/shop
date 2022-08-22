<!--
 * @Author: Jin Haocong
 * @Date: 2022-08-21 23:24:15
 * @LastEditTime: 2022-08-22 08:38:22
-->
<template>
  <div>
    <div class="main">
      <h1>EventTest2</h1>
      <button @click="handler">分发自定义click事件</button>
      <button @click="handler1">分发xxx事件</button>
    </div>
    <input type="text" @input="handler2" :value="data" />
  </div>
</template>

<script>
export default {
  name: "EventTest2",
  props: ["data"],
  methods: {
    handler() {
      this.$emit("click", "自定义事件click");
    },
    handler1() {
      this.$emit("xxx", "触发xxx自定义事件");
    },
    handler2(evt) {
      this.$emit("input", evt.target.value);
    },
  },
};
</script>

<style lang="less" scoped>
.main {
  width: 100%;
  height: 200px;
  background-color: antiquewhite;
}
</style>