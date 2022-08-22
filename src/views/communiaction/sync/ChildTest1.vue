<!--
 * @Author: Jin Haocong
 * @Date: 2022-08-22 08:42:03
 * @LastEditTime: 2022-08-22 08:49:58
-->
<template>
  <div class="main">
    <h1>小明每次花100块钱，爸爸还剩{{ Fathermoney }}元</h1>
    <button @click="handler">花钱</button>
  </div>
</template>

<script>
export default {
  name: "ChildTest1",
  props: ["Fathermoney"],
  methods: {
    handler() {
      this.$emit("update:money", this.Fathermoney - 100);
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