<!--
 * @Author: Jin Haocong
 * @Date: 2022-08-16 11:40:22
 * @LastEditTime: 2022-08-16 13:09:33
-->
<template>
  <div>params--{{ $route.params.keyword }} query--{{ $route.query.k }}</div>
</template>

<script>
export default {
  //路由组件可以传递props
  props: ["keyword", "a", "b", "k"],
};
</script>

<style>
</style>