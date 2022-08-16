<!--
 * @Author: Jin Haocong
 * @Date: 2022-08-16 10:37:40
 * @LastEditTime: 2022-08-16 12:17:18
-->
<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <!-- home,search显示 login,register隐藏 -->
    <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>
import Header from "@/components/header/IndexPage.vue";
import Footer from "@/components/footer/IndexPage.vue";
export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
</style>