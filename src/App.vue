<!--
 * @Author: Jin Haocong
 * @Date: 2022-08-16 10:37:40
 * @LastEditTime: 2022-09-23 17:37:49
-->
<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <!-- home,search显示 login,register隐藏 -->
    <Footer v-show="$route.meta.show" class="footer"></Footer>
  </div>
</template>

<script>
import Header from "@/components/header/IndexPage.vue";
import Footer from "@/components/footer/IndexPage.vue";
export default {
  name: "App",
  data() {
    return {
      msg: "asbdwda",
    };
  },
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

<style lang="less" scoped>
</style>