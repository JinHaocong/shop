<!--
 * @Author: Jin Haocong
 * @Date: 2022-08-22 00:03:58
 * @LastEditTime: 2022-08-22 00:14:42
-->
<template>
  <div class="main">
    <h2>input包装组件</h2>
    <input type="text" :value="value" @input="handler" />
  </div>
</template>

<script>
export default {
  name: "CustomInput",
  props: ["value"],
  methods: {
    handler(evt) {
      this.$emit("input", evt.target.value);
    },
  },
};
</script>

<style lang="less" scoped>
.main {
  width: 100%;
  height: 100px;
  background-color: gray;
}
</style>