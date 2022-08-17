<!--
 * @Author: Jin Haocong
 * @Date: 2022-08-16 10:37:40
 * @LastEditTime: 2022-08-17 13:16:24
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
  mounted() {
    //通知Vuex发请求,获取数据,储存在仓库中
    this.$store.dispatch("categoryList");
  },
};
</script>

<style>
</style>