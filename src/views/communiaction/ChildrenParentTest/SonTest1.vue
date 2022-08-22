<!--
 * @Author: Jin Haocong
 * @Date: 2022-08-22 09:38:00
 * @LastEditTime: 2022-08-22 10:07:43
-->
<template>
  <div class="main">
    <h1>儿子1；有存款{{ money }}</h1>
    <button @click="givemoney(50)">给爸爸钱 50</button>
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