<!--
 * @Author: Jin Haocong
 * @Date: 2022-08-21 23:09:48
 * @LastEditTime: 2022-08-22 10:12:40
-->
<template>
  <div>
    <div>
      <h1>组件通信高级</h1>
    </div>
    <div class="test">
      <router-link to="/communication/event"> Event深入 </router-link>
      <router-link to="/communication/model"> V-model深入 </router-link>
      <router-link to="/communication/sync"> Sync </router-link>
      <router-link to="/communication/attrs-listeners">
        $attrs与$listeners
      </router-link>
      <router-link to="/communication/children-parent">
        $children与$parent
      </router-link>
      <router-link to="/communication/scopeslot"> 作用域插槽 </router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
h1 {
  text-align: center;
  font-size: 40px;
}
.test {
  text-align: center;
  font-size: 30px;
}
</style>