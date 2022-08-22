<!--
 * @Author: Jin Haocong
 * @Date: 2022-08-22 08:43:06
 * @LastEditTime: 2022-08-22 09:01:26
-->
<template>
  <div class="main">
    <h1>小明每次花100块钱，爸爸还剩{{ money1 }}元</h1>
    <button @click="handler">花钱</button>
  </div>
</template>

<script>
export default {
  name: "ChildeTest2",
  props: ["money1"],
  methods: {
    handler() {
      this.$emit("update:money1", this.money1 - 100);
    },
  },
};
</script>

<style lang="less" scoped>
.main {
  width: 100%;
  height: 200px;
  background-color: gray;
}
</style>