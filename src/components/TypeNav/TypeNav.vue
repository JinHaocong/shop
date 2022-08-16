<!--
 * @Author: Jin Haocong
 * @Date: 2022-08-16 14:24:47
 * @LastEditTime: 2022-08-16 23:38:48
-->
<template>
  <!-- 商品分类导航 -->
  <div class="type-nav">
    <div class="container">
      <!-- 时间委派 -->
      <div @mouseleave="cleanIndex">
        <h2 class="all">全部商品分类</h2>
        <!-- 三级联动 -->
        <div class="sort">
          <!-- 利用事物委托和编程式导航进行路由跳转 -->
          <div class="all-sort-list2" @click="goSearch">
            <!-- 遍历一级分类 -->
            <div
              class="item"
              v-for="(c1, index) in categoryList"
              :key="c1.categoryId"
              :class="currentIndex === index ? 'cur' : ''"
            >
              <h3 @mouseenter="changeIndex(index)">
                <a
                  :data-categoryName="c1.categoryName"
                  :data-category1Id="c1.categoryId"
                  >{{ c1.categoryName }}</a
                >
              </h3>
              <!-- 三级分类 -->
              <div
                class="item-list clearfix"
                :style="{ display: currentIndex === index ? 'block' : 'none' }"
              >
                <!-- 遍历二级分类 -->
                <div
                  class="subitem"
                  v-for="c2 in c1.categoryChild"
                  :key="c2.categoryId"
                >
                  <dl class="fore">
                    <!-- 遍历三级分类  -->
                    <dt>
                      <a
                        :data-categoryName="c2.categoryName"
                        :data-category2Id="c2.categoryId"
                        >{{ c2.categoryName }}</a
                      >
                    </dt>
                    <dd>
                      <em v-for="c3 in c2.categoryChild" :key="c3.categoryId">
                        <a
                          :data-categoryName="c3.categoryName"
                          :data-category3Id="c3.categoryId"
                          >{{ c3.categoryName }}</a
                        >
                      </em>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

//这种引入方式是把lodash全部功能函数引入
//最好的引入方式是按需加载
// import _ from "lodash";
//按需加载
import throttle from "lodash/throttle";
export default {
  name: "TypeNav",
  data() {
    return {
      //存储用户鼠标移上哪一个一级分类
      currentIndex: -1,
    };
  },

  //组件挂载完毕,向服务器发起请求
  mounted() {
    //通知Vuex发请求,获取数据,储存在仓库中
    this.$store.dispatch("categoryList");
  },
  computed: {
    //对象写法
    ...mapState({
      //右侧需要的是一个函数,当使用计算属性的时候,右侧会立即执行一次
      //这个state为大仓库的数据
      categoryList: (state) => state.home.categoryList,
    }),
  },
  methods: {
    //鼠标移入，修改响应式数据currentIndex
    // lodash插件 节流 回调函数别用箭头函数
    changeIndex: throttle(function (index) {
      this.currentIndex = index;
    }, 100),

    cleanIndex() {
      this.currentIndex = -1;
    },

    //进行路由跳转的方法
    goSearch(event) {
      //最好的解决的方案，编程时导航+事件委托
      //事件委托存在一些问题，1.如何确定当前点击的标签 2.如何获取参数
      let element = event.target;
      //子节点 a 标签 加上自定义属性 data-categoryName
      // 获取到当前事件触发的节点，需要带有 data-categoryName
      //节点有一个 dataset属性 可以获取节点的自定义属性和值
      console.log(element.dataset);
      //解构赋值 注意 驼峰要小写
      let { categoryname, category1id, category2id, category3id } =
        element.dataset;
      //如果有categoryName这个属性 那么一定是a标签
      if (categoryname) {
        //整理路由跳转的参数
        let location = { name: "search" };
        let query = { categoryName: categoryname };
        //如何知道是 一级分类还是二级分类还是三级分类的a标签  同样也是添加自定义属性来区别
        //判断是一级二级还是三级 a标签
        if (category1id) {
          query.category1Id = category1id;
        } else if (category2id) {
          query.category2Id = category2id;
        } else if (category3id) {
          query.category3Id = category3id;
        }
        //整理完参数 进行合并
        // console.log({ query, ...location });
        let Location = { query, ...location };
        this.$router.push(Location);
      }
    },
  },
};
</script>

<style lang="less" scoped>
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
        text-decoration: none;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      .all-sort-list2::-webkit-scrollbar {
        width: 20px;
        background-color: #fff;
      }
      .all-sort-list2 {
        overflow-y: scroll;
        height: 462px;
        .cur {
          background-color: skyblue;
          border-radius: 20px;
        }
        .item {
          display: inline-block;
          transition: all 0.7s;
          width: 180px;
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
              text-decoration: none;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>