<!--
 * @Author: Jin Haocong
 * @Date: 2022-08-22 09:38:13
 * @LastEditTime: 2022-08-22 10:07:59
-->
<template>
  <div class="main">
    <h1>儿子2；有存款{{ money }}</h1>
    <button @click="givemoney(100)">给爸爸前100</button>
  </div>
</template>

<script>
import MyMixin from "./mymixin/MyMixin";
export default {
  name: "SonTest1",
  mixins: [MyMixin],
  data() {
    return {
      money: 10000,
    };
  },
};
</script>

<style lang="less" scoped>
.main {
  width: 100%;
  height: 50px;
  background-color: gray;
}
</style>