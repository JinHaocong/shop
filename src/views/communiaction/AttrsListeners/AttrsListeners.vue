<template>
  <div>
    <h2>自定义带Hover提示的按钮</h2>

    <!-- 当用户在使用我们封装的按钮的时候，需要向HintButten组件传递相应的参数 el-butten二次封装 -->
    <!-- @click 代表自定义事件-->
    <hint-butten
      type="success"
      icon="el-icon-delete"
      size="mini"
      title="提示按钮"
      @click="handler"
    ></hint-butten>
  </div>
</template>

<script>
import HintButten from "./HintButten/HintButten.vue";
export default {
  components: { HintButten },
  name: "AttrsListeners",
  methods: {
    handler() {
      alert("666");
    },
  },
};
</script>

