<template>
  <div>
    <!-- 商品分类三级列表 -->
    <type-nav></type-nav>
    <div class="main">
      <div class="py-container">
        <!--面包屑-->
        <div class="bread">
          <ul class="fl sui-breadcrumb">
            <li>
              <a href="#">全部结果</a>
            </li>
          </ul>
          <ul class="fl sui-tag">
            <!-- 分类面包屑 -->
            <li class="with-x" v-if="searchParams.categoryName">
              {{ searchParams.categoryName
              }}<i @click="removeCategoryName">×</i>
            </li>
            <!-- 关键字面包屑 -->
            <li class="with-x" v-if="searchParams.keyword">
              {{ searchParams.keyword }}<i @click="removeKeyword">×</i>
            </li>
            <!-- 品牌面包屑 -->
            <li class="with-x" v-if="searchParams.trademark">
              {{ searchParams.trademark.split(":")[1]
              }}<i @click="removeTrademark">×</i>
            </li>
            <!-- 平台属性面包屑 -->
            <li
              class="with-x"
              v-for="(attrValue, index) in searchParams.props"
              :key="index"
            >
              {{ attrValue.split(":")[1] }} <i @click="removeAttr(index)">×</i>
            </li>
          </ul>
        </div>

        <!--selector-->
        <search-selector
          @getTrademarkInfo="TrademarkInfo"
          @getAttrInfo="attrInfo"
        ></search-selector>

        <!--details-->
        <div class="details clearfix">
          <div class="sui-navbar">
            <div class="navbar-inner filter">
              <!-- 排序解构 -->
              <ul class="sui-nav">
                <!-- 动态添加class -->
                <li :class="{ active: isOne }" @click="changeOrder('1')">
                  <a
                    >综合<span
                      v-show="isOne"
                      class="iconfont"
                      :class="{
                        'icon-xiangshangjiantoucuxiao': isAsc,
                        'icon-xiangxiajiantoucuxiao': isDesc,
                      }"
                    ></span
                  ></a>
                </li>
                <li :class="{ active: isTwo }" @click="changeOrder('2')">
                  <a
                    >价格<span
                      v-show="isTwo"
                      class="iconfont"
                      :class="{
                        'icon-xiangshangjiantoucuxiao': isAsc,
                        'icon-xiangxiajiantoucuxiao': isDesc,
                      }"
                    ></span
                  ></a>
                </li>
              </ul>
            </div>
          </div>
          <!-- 产品列表 -->
          <div class="goods-list">
            <ul class="yui3-g">
              <li class="yui3-u-1-5" v-for="good in goodsList" :key="good.id">
                <div class="list-wrap">
                  <div class="p-img">
                    <!-- 路由跳转时别忘记带id -->
                    <router-link :to="`/detail/${good.id}`"
                      ><img v-lazy="good.defaultImg"
                    /></router-link>
                  </div>
                  <div class="price">
                    <strong>
                      <em>¥</em>
                      <i>{{ good.price }}</i>
                    </strong>
                  </div>
                  <div class="attr">
                    <router-link
                      :to="`/detail/${good.id}`"
                      title="促销信息，下单即赠送三个月CIBN视频会员卡！【小米电视新品4A 58 火爆预约中】"
                      >{{ good.title }}</router-link
                    >
                  </div>
                  <div class="commit">
                    <i class="command">已有<span>2000</span>人评价</i>
                  </div>
                  <div class="operate">
                    <a
                      href="success-cart.html"
                      target="_blank"
                      class="sui-btn btn-bordered btn-danger"
                      >加入购物车</a
                    >
                    <a href="javascript:void(0);" class="sui-btn btn-bordered"
                      >收藏</a
                    >
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <!-- 分页器 -->
          <common-pagination
            :pageNo="searchParams.pageNo"
            :pageSize="searchParams.pageSize"
            :total="total"
            :continues="5"
            @getPage="getPageNumber"
          ></common-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CommonPagination from "@/components/Pagination/CommonPagination.vue";
import { mapGetters, mapState } from "vuex";
import SearchSelector from "./SearchSelector/SearchSelector";

export default {
  name: "SearchView",
  data() {
    return {
      //带给服务器的参数
      searchParams: {
        //一级分类id
        category1Id: "",
        //二级分类id
        category2Id: "",
        //三级分类id
        category3Id: "",
        //分类的名称
        categoryName: "",
        //关键字
        keyword: "",
        //排序 初始状态因该是综合降序
        order: "1:desc",
        //分页器 当前页数
        pageNo: 1,
        //分页器 一页几个
        pageSize: 12,
        //平台售卖属性操作所带的属性
        props: [],
        //品牌
        trademark: "",
      },
    };
  },
  components: {
    SearchSelector,
    CommonPagination,
  },
  //组件挂在之前执行一次，比mounted早 在这里进行对searchParams数据更改
  beforeMount() {
    // Object.assign es6合并对象
    // Object.assign(this.searchParams, this.$route.params, this.$route.query);
    // console.log(this.searchParams);

    //在给服务器发请求之前，把参数整理好
    //解构赋值法
    this.searchParams = {
      ...this.searchParams,
      ...this.$route.query,
      ...this.$route.params,
    };
  },
  mounted() {
    this.getData();
    // this.$store.dispatch("userLoginInfo");
  },
  computed: {
    //mapGetters 里面的写法 传递的是数组
    ...mapGetters(["goodsList"]),

    //判断排序是1 还是 2
    isOne() {
      return this.searchParams.order.indexOf("1") !== -1;
    },

    isTwo() {
      return this.searchParams.order.indexOf("2") !== -1;
    },

    //判断升序还是降序
    isAsc() {
      return this.searchParams.order.indexOf("asc") !== -1;
    },

    isDesc() {
      return this.searchParams.order.indexOf("desc") !== -1;
    },

    ...mapState({
      total: (state) => state.search.searchList.total,
    }),
  },
  methods: {
    //向服务器发请求获取search模块的数据
    getData() {
      this.$store.dispatch("getSearchLise", this.searchParams);
    },

    //删除分类的名字
    removeCategoryName() {
      //把带给服务器的参数置空
      //undefined字段不会带给服务器 性能更好一些
      this.searchParams.categoryName = undefined;
      //再次发送请求
      this.searchParams.category1Id = undefined;
      this.searchParams.category2Id = undefined;
      this.searchParams.category3Id = undefined;
      this.getData();

      //地址栏也需要修改  通过跳转路由到自己
      //判断路径中是否有params参数 如果有 保留
      if (this.$route.params) {
        this.$router.push({
          name: "search",
          params: this.$route.params,
        });
      }
    },

    //删除关键字
    removeKeyword() {
      this.searchParams.keyword = undefined;
      this.getData();

      //通过 this.$bus.emit 来通知兄弟组件组件 清除Header的 keyword
      this.$bus.$emit("clearKeyword");

      //路由重新跳转
      //地址栏也需要修改  通过跳转路由到自己
      //判断路径中是否有 querry 参数 如果有 保留
      if (this.$route.query) {
        this.$router.push({
          name: "search",
          query: this.$route.query,
        });
      }
    },

    //自定义事件 子给父通信
    TrademarkInfo(mark) {
      //整理字段
      this.searchParams.trademark = `${mark.tmId}:${mark.tmName}`;
      this.getData();
    },

    //移除品牌
    removeTrademark() {
      this.searchParams.trademark = undefined;
      this.getData();
    },

    //收集平台属性 的自定义事件
    attrInfo(attr, attrValue) {
      //整理参数格式
      let props = `${attr.attrId}:${attrValue}:${attr.attrName}`;

      //数组去重
      if (this.searchParams.props.indexOf(props) === -1) {
        this.searchParams.props.push(props);
      }

      //再次发送请求
      this.getData();
    },

    //移除面包屑 平台属性
    removeAttr(index) {
      this.searchParams.props.splice(index, 1);
      this.getData();
      console.log(typeof this.searchParams.order);
    },

    //点击排序操作 flag 代表 你点击的是综合还是价格
    changeOrder(flag) {
      let originFlag = this.searchParams.order.split(":")[0];
      let originSort = this.searchParams.order.split(":")[1];

      //准备一个新order属性
      let newOrder = "";
      //确定点击的是综合
      if (flag === originFlag) {
        newOrder = `${originFlag}:${originSort == "desc" ? "asc" : "desc"}`;
      } else {
        //点击的是价格
        newOrder = `${flag}:${"desc"}`;
      }

      this.searchParams.order = newOrder;
      this.getData();
    },

    //自定义事件 子给父通信
    getPageNumber(pageNo) {
      //整理参数 发请求
      this.searchParams.pageNo = pageNo;
      this.getData();
    },
  },
  watch: {
    //监听 $route 发生变化时 再次发生请求
    $route: {
      handler() {
        //同样也要进行参数整理 合并params参数
        this.searchParams = {
          ...this.searchParams,
          ...this.$route.query,
          ...this.$route.params,
        };
        this.getData();
        //每一次请求完毕，应该把相应的1，2，3集分类的id置空
        this.searchParams.category1Id = undefined;
        this.searchParams.category2Id = undefined;
        this.searchParams.category3Id = undefined;
      },
    },
  },
};
</script>


<style lang="less" scoped>
.main {
  margin: 10px 0;

  .py-container {
    width: 1200px;
    margin: 0 auto;

    .bread {
      margin-bottom: 5px;
      overflow: hidden;

      .sui-breadcrumb {
        padding: 3px 15px;
        margin: 0;
        font-weight: 400;
        border-radius: 3px;
        float: left;

        li {
          display: inline-block;
          line-height: 18px;

          a {
            color: #666;
            text-decoration: none;

            &:hover {
              color: #4cb9fc;
            }
          }
        }
      }

      .sui-tag {
        margin-top: -5px;
        list-style: none;
        font-size: 0;
        line-height: 0;
        padding: 5px 0 0;
        margin-bottom: 18px;
        float: left;

        .with-x {
          font-size: 12px;
          margin: 0 5px 5px 0;
          display: inline-block;
          overflow: hidden;
          color: #000;
          background: #f7f7f7;
          padding: 0 7px;
          height: 20px;
          line-height: 20px;
          border: 1px solid #dedede;
          white-space: nowrap;
          transition: color 400ms;
          border-radius: 5px;
          transition: all 0.1s linear;
          cursor: pointer;
          i {
            margin-left: 10px;
            cursor: pointer;
            font: 400 14px tahoma;
            display: inline-block;
            height: 100%;
            vertical-align: middle;
          }

          &:hover {
            color: #28a3ef;
          }
        }
        .with-x:hover {
          border-radius: 10px;
        }
      }
    }

    .details {
      margin-bottom: 5px;

      .sui-navbar {
        overflow: visible;
        margin-bottom: 0;

        .filter {
          min-height: 40px;
          padding-right: 20px;
          background: #fbfbfb;
          border: 1px solid #e2e2e2;
          padding-left: 0;
          border-radius: 20px;
          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.065);

          .sui-nav {
            position: relative;
            left: 0;
            display: block;
            float: left;
            margin: 0 10px 0 0;
            img {
              height: 10px;
              width: 10px;
            }

            li {
              float: left;
              line-height: 18px;

              a {
                display: block;
                cursor: pointer;
                padding: 11px 15px;
                color: #777;
                text-decoration: none;
              }

              &.active {
                a {
                  background: #e1251b;
                  color: #fff;
                  border-radius: 20px;
                }
              }
            }
          }
        }
      }

      .goods-list {
        margin: 20px 0;

        ul {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;

          li {
            height: 100%;
            width: 25%;
            margin: 25px 10px;
            line-height: 28px;
            text-align: center;

            .list-wrap {
              background-color: #f4f4f4;
              border-radius: 40px;
              box-sizing: border-box;
              transition: all 0.3s linear;
              .p-img {
                margin: 0 auto;
                width: 215px;
                height: 240px;
                line-height: 240px;
                text-align: center;
                a {
                  color: #666;

                  img {
                    width: 200px;
                    height: 200px;
                    vertical-align: middle;
                    border-radius: 40px;
                  }
                }
              }

              .price {
                padding-left: 15px;
                font-size: 18px;
                color: #c81623;

                strong {
                  font-weight: 700;

                  i {
                    margin-left: -5px;
                  }
                }
              }

              .attr {
                padding-left: 15px;
                width: 85%;
                overflow: hidden;
                margin-bottom: 8px;
                min-height: 38px;
                cursor: pointer;
                line-height: 1.8;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;

                a {
                  color: #333;
                  text-decoration: none;
                }
              }

              .commit {
                padding-left: 15px;
                height: 22px;
                font-size: 13px;
                color: #a7a7a7;

                span {
                  font-weight: 700;
                  color: #646fb0;
                }
              }

              .operate {
                padding: 12px 15px;

                .sui-btn {
                  display: inline-block;
                  padding: 2px 14px;
                  box-sizing: border-box;
                  margin-bottom: 0;
                  font-size: 12px;
                  line-height: 18px;
                  text-align: center;
                  vertical-align: middle;
                  cursor: pointer;
                  border-radius: 0;
                  background-color: transparent;
                  margin-right: 15px;
                }

                .btn-bordered {
                  min-width: 85px;
                  background-color: transparent;
                  border: 1px solid #8c8c8c;
                  color: #8c8c8c;

                  &:hover {
                    border: 1px solid #666;
                    color: #fff !important;
                    background-color: #666;
                    text-decoration: none;
                  }
                }

                .btn-danger {
                  border: 1px solid #e1251b;
                  color: #e1251b;

                  &:hover {
                    border: 1px solid #e1251b;
                    background-color: #e1251b;
                    color: white !important;
                    text-decoration: none;
                  }
                }
              }
            }
            .list-wrap:hover {
              background-color: white;
              box-sizing: border-box;
              /* x 偏移量 | y 偏移量 | 阴影模糊半径 | 阴影扩散半径 | 阴影颜色 */
              box-shadow: 3px 3px 4px 5px rgb(163, 163, 163);
            }
          }
        }
      }

      .page {
        width: 733px;
        height: 66px;
        overflow: hidden;
        float: right;

        .sui-pagination {
          margin: 18px 0;

          ul {
            margin-left: 0;
            margin-bottom: 0;
            vertical-align: middle;
            width: 490px;
            float: left;

            li {
              line-height: 18px;
              display: inline-block;

              a {
                position: relative;
                float: left;
                line-height: 18px;
                text-decoration: none;
                background-color: #fff;
                border: 1px solid #e0e9ee;
                margin-left: -1px;
                font-size: 14px;
                padding: 9px 18px;
                color: #333;
              }

              &.active {
                a {
                  background-color: #fff;
                  color: #e1251b;
                  border-color: #fff;
                  cursor: default;
                }
              }

              &.prev {
                a {
                  background-color: #fafafa;
                }
              }

              &.disabled {
                a {
                  color: #999;
                  cursor: default;
                }
              }

              &.dotted {
                span {
                  margin-left: -1px;
                  position: relative;
                  float: left;
                  line-height: 18px;
                  text-decoration: none;
                  background-color: #fff;
                  font-size: 14px;
                  border: 0;
                  padding: 9px 18px;
                  color: #333;
                }
              }

              &.next {
                a {
                  background-color: #fafafa;
                }
              }
            }
          }

          div {
            color: #333;
            font-size: 14px;
            float: right;
            width: 241px;
          }
        }
      }
    }
  }
}
</style>      