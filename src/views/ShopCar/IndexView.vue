<template>
  <div class="cart">
    <h4>全部商品</h4>
    <div class="cart-main">
      <div class="cart-th">
        <div class="cart-th1">全部</div>
        <div class="cart-th2">商品</div>
        <div class="cart-th3">型号</div>
        <div class="cart-th4">版本</div>
        <div class="cart-th5">单价（元）</div>
        <div class="cart-th6">数量</div>
        <div class="cart-th7">小计（元）</div>
        <div class="cart-th8">操作</div>
      </div>
      <div class="cart-body">
        <ul class="cart-list" v-for="car in carList" :key="car.id">
          <li class="cart-list-con1">
            <input
              type="checkbox"
              name="chk_list"
              class="con1box"
              :checked="car.isChecked == 1"
              @change="handleChange(car.skuId, $event.target.checked)"
            />
          </li>
          <li class="cart-list-con2">
            <img :src="car.imgUrl" />
            <div class="item-msg">
              {{ car.skuName }}
            </div>
          </li>
          <li class="cart-list-con3">
            <div class="item-txt">{{ goodsInfo(car).style }}</div>
          </li>
          <li class="cart-list-con4">
            <div class="item-txt">{{ goodsInfo(car).type }}</div>
          </li>
          <li class="cart-list-con5">
            <span class="price">{{ car.skuPrice }}</span>
          </li>
          <!-- 数量 -->
          <li class="cart-list-con6">
            <a
              href="javascript:void(0)"
              class="mins"
              @click="handler('minus', -1, car)"
              >-</a
            >
            <input
              autocomplete="off"
              type="text"
              :value="car.skuNum"
              minnum="1"
              class="itxt"
              @change="handler('change', $event.target.value * 1, car)"
            />
            <a
              href="javascript:void(0)"
              class="plus"
              @click="handler('add', +1, car)"
              >+</a
            >
          </li>
          <li class="cart-list-con7">
            <span class="sum">{{ car.skuNum * car.skuPrice }}</span>
          </li>
          <li class="cart-list-con8">
            <div class="right">
              <button class="sindelet">移到收藏</button>
              <button class="favorite" @click="handleDelete(car.skuId)">
                删除
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="cart-tool">
      <div class="select-all">
        <input
          class="chooseAll"
          type="checkbox"
          :checked="isAllChecked && carList.length > 0"
          @click="allChecked"
        />
        <span>全选</span>
      </div>
      <div class="option">
        <a @click="deleteAllChecked">删除选中的商品</a>
        <a>移到我的关注</a>
        <a>清除下柜商品</a>
      </div>
      <div class="money-box">
        <div class="chosed">已选择 <span>0</span>件商品</div>
        <div class="sumprice">
          <em>总价（不含运费） ：</em>
          <i class="summoney">{{ totalPrice }}</i>
        </div>
        <div class="sumbtn">
          <button class="sum" @click="$router.push('/trade')">结算</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import throttle from "lodash/throttle";
import { mapGetters } from "vuex";
// import throttle from "lodash/throttle";
export default {
  name: "ShopCar",
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      this.$store.dispatch("getShopCarList");
    },

    goodsInfo(car) {
      let style = car.skuName.split(" ")[0];
      let type = car.skuName.split(" ")[1];

      return { style, type };
    },

    //修改数量 addUpdateShopCar 并实现节流
    //disNumber 代表的是 $event.target.value * 1  type代表的时 add  还是minus 还是 change
    handler: throttle(async function (type, disNumber, car) {
      let changeNum = 0;
      switch (type) {
        //加号
        case "add":
          changeNum = 1;
          break;
        case "minus":
          //判断当前产品数是否大于 1
          changeNum = car.skuNum > 1 ? -1 : 0;
          break;
        case "change":
          //判断是否带有非法数字 是否有小数 是由小于零
          // if (isNaN(disNumber) || disNumber < 1) {
          //   changeNum = 0;
          // } else {
          //   changeNum = parseInt(disNumber) - car.skuNum;
          // }

          //三目表达式写法
          changeNum =
            isNaN(disNumber) || disNumber < 1
              ? 0
              : parseInt(disNumber) - car.skuNum;

          break;
      }
      //派发action
      try {
        await this.$store.dispatch("addUpdateShopCar", {
          skuId: car.skuId,
          skuNumber: changeNum,
        });
        //修改成功后再次获得最新数据
        this.getData();
      } catch (error) {
        console.log(error);
      }
    }, 1000),

    //删除产品
    async handleDelete(skuId) {
      try {
        await this.$store.dispatch("deleteShopCar", skuId);
      } catch (error) {
        alert(error.message);
      }
      this.getData();
    },

    //修改选中状态
    async handleChange(skuId, isChecked) {
      try {
        //带给服务器的参数 isChecked 不应该是布尔值 应该是 0 或 1
        isChecked = Number(isChecked);
        await this.$store.dispatch("changeStatus", { skuId, isChecked });

        //修改数据成功 再次获得购物车数据
        this.getData();
      } catch (error) {
        alert(error.message);
      }
    },

    //删除全部选中的商品
    async deleteAllChecked() {
      try {
        //派发action
        await this.$store.dispatch("deleteAllChecked");
        this.getData();
      } catch (error) {
        alert(error.message);
      }
    },

    //修改产品全选状态
    async allChecked(evt) {
      console.log(evt);
      try {
        let checked = (await evt.target.checked) ? "1" : "0";
        //派发action
        await this.$store.dispatch("updateCheckAll", checked);
        this.getData();
      } catch (error) {
        alert(error.message);
      }
    },
  },
  computed: {
    ...mapGetters(["carList"]),

    //计算购买产品总价
    totalPrice() {
      let sum = 0;
      this.carList.forEach((item) => {
        var count = item.skuPrice * item.skuNum;
        sum = sum + count;
      });
      return sum;
    },

    //判断底部复选框是否勾选
    isAllChecked() {
      //全部满足条件才返回真 有一个假就返回假
      return this.carList.every((item) => item.isChecked === 1);
    },
  },
};
</script>

<style lang="less" scoped>
.cart {
  width: 1200px;
  margin: 0 auto;
  a {
    text-decoration: none;
  }

  h4 {
    margin: 9px 0;
    font-size: 14px;
    line-height: 21px;
  }

  .cart-main {
    .cart-th {
      background: #f5f5f5;
      border: 1px solid #ddd;
      padding: 10px;
      overflow: hidden;
      text-align: center;
      border-radius: 20px;

      & > div {
        float: left;
      }

      .cart-th1 {
        width: 4%;

        input {
          vertical-align: middle;
        }

        span {
          vertical-align: middle;
        }
      }

      .cart-th2 {
        width: 26%;
      }

      .cart-th3 {
        width: 10%;
      }
      .cart-th4 {
        width: 10%;
      }
      .cart-th5 {
        width: 15%;
      }
      .cart-th6 {
        width: 10%;
      }
      .cart-th7 {
        width: 15%;
      }
      .cart-th8 {
        width: 10%;
      }
    }

    .cart-body {
      margin: 15px 0;

      border-radius: 40px;
      // border: 1px solid #ddd;

      .cart-list {
        padding: 10px;
        overflow: hidden;
        height: 120px;
        box-sizing: border-box;
        border-bottom: 1px solid rgb(213, 213, 213);
        border-radius: 40px;
        box-shadow: 1px 1px 5px 1px rgb(213, 213, 213);
        background-color: #f5f5f5;
        margin-bottom: 30px;
        li {
          text-align: center;
        }

        & > li {
          float: left;
        }

        .cart-list-con1 {
          width: 4%;
          line-height: 102px;
        }

        .cart-list-con2 {
          width: 26%;
          height: 102px;

          img {
            width: 82px;
            height: 82px;
            float: left;
          }

          .item-msg {
            float: left;
            width: 150px;
            margin: 0 10px;
            line-height: 18px;
          }
        }
        .cart-list-con3 {
          width: 10%;
        }

        .cart-list-con4 {
          width: 10%;

          .item-txt {
            text-align: center;
          }
        }

        .cart-list-con5 {
          width: 15%;
        }

        .cart-list-con6 {
          width: 8.7%;
          margin-left: 14px;

          .mins {
            border: 1px solid #ddd;
            float: left;
            color: #666;
            width: 6px;
            text-align: center;
            padding: 8px;
            border-radius: 15px;
            text-decoration: none;
            transition: all 0.1s linear;
            width: 9px;
          }

          input {
            border: 1px solid #ddd;
            width: 40px;
            height: 32px;
            float: left;
            text-align: center;
            font-size: 14px;
            border-radius: 10px;
            outline: none;
            margin: 0 3px;
          }

          .plus {
            border: 1px solid #ddd;
            float: left;
            color: #666;
            width: 6px;
            text-align: center;
            padding: 8px;
            border-radius: 15px;
            text-decoration: none;
            transition: all 0.1s linear;
            width: 9px;
          }
          .mins:hover {
            box-shadow: 1px 1px 2px 1px rgb(161, 161, 161);
            background-color: white;
          }
          .plus:hover {
            box-shadow: 1px 1px 2px 1px rgb(161, 161, 161);
            background-color: white;
          }
        }

        .cart-list-con7 {
          width: 15%;

          .sum {
            font-size: 16px;
          }
        }

        .cart-list-con8 {
          width: 10%;
          .right {
            .sindelet {
              width: 70px;
              height: 30px;
              margin-bottom: 30px;
              border: none;
              background-color: #ea4a36;
              border-radius: 15px;
              color: white;
              cursor: pointer;
              transition: all 0.2s linear;
            }
            .favorite {
              width: 70px;
              height: 30px;
              border: none;
              background-color: #ddd;

              border-radius: 15px;
              color: white;
              cursor: pointer;
              transition: all 0.2s linear;
            }
            .favorite:hover {
              background-color: #ea4a36;
              box-shadow: 1px 1px 1px 1px #ddd;
            }
            .sindelet:hover {
              background-color: white;
              color: #ea4a36;
              box-shadow: 1px 1px 3px 1px rgb(195, 195, 195);
            }
          }

          a {
            color: #666;
          }
        }
      }
    }
  }

  .cart-tool {
    overflow: hidden;
    border: 1px solid #ddd;
    border-radius: 40px;
    height: 50px;
    line-height: 50px;
    margin-bottom: 20px;
    background-color: #f5f5f5;

    .select-all {
      overflow: hidden;
      float: left;
      margin-left: 15px;

      span {
        vertical-align: middle;
      }

      input {
        vertical-align: middle;
      }
    }

    .option {
      overflow: hidden;
      float: left;

      a {
        float: left;
        padding: 0 10px;
        color: #666;
      }
    }

    .money-box {
      float: right;

      .chosed {
        line-height: 26px;
        float: left;
        padding: 0 10px;
      }

      .sumprice {
        width: 200px;
        line-height: 22px;
        float: left;
        padding: 0 10px;

        .summoney {
          color: #c81623;
          font-size: 16px;
        }
      }

      .sumbtn {
        float: right;
        margin-right: 40px;
        .sum {
          border: none;
          width: 80px;
          height: 40px;
          color: white;
          background-color: #ea4a36;
          border-radius: 20px;
          cursor: pointer;
          transition: all 0.1s linear;
        }
        .sum:hover {
          box-shadow: 1px 1px 2px 1px gray;
        }

        a {
          display: block;
          position: relative;
          width: 96px;
          height: 52px;
          line-height: 52px;
          color: #fff;
          text-align: center;
          font-size: 18px;
          font-family: "Microsoft YaHei";
          background: #e1251b;
          overflow: hidden;
        }
      }
    }
  }
}
</style>