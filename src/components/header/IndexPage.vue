<!--
 * @Author: Jin Haocong
 * @Date: 2022-08-16 11:12:59
 * @LastEditTime: 2022-08-21 19:25:42
-->
<template>
  <header class="header">
    <!-- 头部的第一行 -->
    <div class="top">
      <div class="container">
        <div class="loginList">
          <p>聪聪商城欢迎您！</p>
          <p v-if="!userName">
            <span>请 </span>
            <!-- 声明式导航，务必要有 to -->
            <router-link to="/login">登录 |</router-link>
            <router-link to="/register"> 免费注册</router-link>
          </p>
          <p v-else>
            <a
              >当前用户：<span style="color: red">{{ userName }}</span></a
            >
            <a class="register" @click="logout" style="cursor: pointer"
              >退出登录</a
            >
          </p>
        </div>
        <div class="typeList">
          <router-link to="/center/myorder">我的订单</router-link>
          <router-link to="/shopcar">我的购物车</router-link>
          <a>我的尚品汇</a>
          <a>尚品汇会员</a>
          <a>企业采购</a>
          <a>关注尚品汇</a>
          <a>合作招商</a>
          <a>商家后台</a>
        </div>
      </div>
    </div>
    <!--头部第二行 搜索区域-->
    <div class="bottom">
      <h1 class="logoArea">
        <router-link to="/home" class="logo">
          <img src="./images/logo.png" alt="" />
        </router-link>
      </h1>
      <div class="searchArea">
        <form action="###" class="searchForm">
          <input
            type="text"
            id="autocomplete"
            class="input-error input-xxlarge"
            v-model="keyword"
          />
          <button
            class="sui-btn btn-xlarge btn-danger"
            type="button"
            @click="goSearch"
          >
            搜索
          </button>
        </form>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  data() {
    return {
      keyword: "",
    };
  },
  methods: {
    goSearch() {
      //搜索按钮的回调函数 向/search跳转
      // this.$router.push("/search");

      // 路由传参
      // 1.字符串形式
      // this.$router.push(
      //   "/search/" + this.keyword + "?k=" + this.keyword.toUpperCase()
      // );

      // 2.字符串模板
      // this.$router.push(
      //   `/search/${this.keyword}?k=${this.keyword.toUpperCase()}`
      // );

      // 3.对象写法
      // this.$router.push({
      //   name: "search",
      //   params: {
      //     keyword: this.keyword,
      //   },
      //   query: {
      //     k: this.keyword.toUpperCase(),
      //   },
      // });
      /* ****************************************************************** */
      //面试题1；路由传递参数（对象写法）path是否可以结合params参数一起使用 不可以
      // this.$router.push({
      //   path: "/search",
      //   params: {
      //     keyword: this.keyword,
      //   },
      //   query: {
      //     k: this.keyword.toUpperCase(),
      //   },
      // });

      //面试题2；如何指定params参数可传可不传
      // this.$router.push({
      //   name: "search",
      //   query: {
      //     k: this.keyword.toUpperCase(),
      //   },
      // });

      //面试题3；params可以传递也可以不传递,但是如果传递的是空字符串串,如何解决
      // this.$router.push({
      //   name: "search",
      //   params: {
      //     keyword: "" || undefined,
      //   },
      //   query: {
      //     k: this.keyword.toUpperCase(),
      //   },
      // });

      //面试题4: 路由组件能不能传递props数据  可以 有三种写法
      // this.$router.push({
      //   name: "search",
      //   params: {
      //     keyword: this.keyword || undefined,
      //   },
      //   query: {
      //     big: this.keyword.toUpperCase(),
      //   },
      // });

      //如果有query参数 也带进去
      if (this.$route.query) {
        let Location = {
          name: "search",
          params: {
            keyword: this.keyword || undefined,
          },
          query: this.$route.query,
        };
        this.$router.push(Location);
      }
    },

    //退出登录
    async logout() {
      try {
        //退出登录需要发请求 清除本地token
        await this.$store.dispatch("userLogout");
        //如果推出成功 回到首页
        this.$router.push("/home");
      } catch (error) {
        alert(error.message);
      }
    },
  },
  mounted() {
    //通过 this.$bus.on 清除关键字
    this.$bus.$on("clearKeyword", () => {
      this.keyword = "";
    });
  },
  computed: {
    //用户信息
    userName() {
      return this.$store.state.user.userInfo.name;
    },
  },
};
</script>
<style lang="less" scoped>
.header {
  & > .top {
    background-color: #eaeaea;
    height: 30px;
    line-height: 30px;

    .container {
      width: 1200px;
      margin: 0 auto;
      overflow: hidden;

      .loginList {
        float: left;

        p {
          float: left;
          margin-right: 10px;

          .register {
            border-left: 1px solid #b3aeae;
            padding: 0 5px;
            margin-left: 5px;
          }
        }
      }

      .typeList {
        float: right;

        a {
          padding: 0 10px;

          & + a {
            border-left: 1px solid #b3aeae;
          }
        }
      }
    }
  }

  & > .bottom {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;

    .logoArea {
      float: left;

      .logo {
        img {
          width: 100px;
          margin: 25px 45px;
        }
      }
    }

    .searchArea {
      float: right;
      margin-top: 70px;
      border-radius: 16px;
      border: 2px solid #ea4a36;

      .searchForm {
        overflow: hidden;

        input {
          box-sizing: border-box;
          width: 490px;
          height: 32px;
          padding: 0px 4px;
          border: 2px solid white;
          float: left;
          border-radius: 16px;

          &:focus {
            outline: none;
          }
        }

        button {
          height: 28px;
          width: 68px;
          background-color: #ea4a36;
          margin-top: 2px;
          margin-right: 2px;
          border: none;
          color: #fff;
          float: left;
          cursor: pointer;
          border-radius: 16px;

          &:focus {
            outline: none;
          }
        }
      }
    }
  }
}
</style>