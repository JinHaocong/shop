<template>
  <div class="trade-container">
    <h3 class="title">填写并核对订单信息</h3>
    <div class="content">
      <h5 class="receive">收件人信息</h5>
      <div class="address clearFix" v-for="item in myaddress" :key="item.id">
        <span class="username" :class="{ selected: item.isDefault == 1 }">{{
          item.consignee
        }}</span>
        <p @click="checkAddress(item, address)">
          <span class="s1">{{ item.fullAddress }}</span>
          <span class="s2">{{ item.phoneNum }}</span>
          <span class="s3" v-if="item.isDefault == 1">默认地址</span>
        </p>
      </div>
      <div class="line"></div>
      <h5 class="pay">支付方式</h5>
      <div class="address clearFix">
        <span class="username selected">在线支付</span>
        <span class="username" style="margin-left: 5px">货到付款</span>
      </div>
      <div class="line"></div>
      <h5 class="pay">送货清单</h5>
      <div class="way">
        <h5>配送方式</h5>
        <div class="info clearFix">
          <span class="s1">天天快递</span>
          <p>配送时间：预计8月10日（周三）09:00-15:00送达</p>
        </div>
      </div>
      <div class="detail">
        <h5>商品清单</h5>
        <ul
          class="list clearFix"
          v-for="item in tradeInfo.detailArrayList"
          :key="item.skuId"
        >
          <li style="flex: 2">
            <img
              :src="item.imgUrl"
              alt=""
              style="height: 100px; width: 100px"
            />
          </li>
          <li style="flex: 4">
            <p>
              {{ item.skuName }}
            </p>
            <h4>7天无理由退货</h4>
          </li>
          <li style="flex: 2">
            <h3>￥{{ item.orderPrice }}</h3>
          </li>
          <li style="flex: 1">X{{ item.skuNum }}</li>
          <li style="flex: 1">有货</li>
        </ul>
      </div>
      <div class="bbs">
        <h5>买家留言：</h5>
        <textarea
          placeholder="建议留言前先与商家沟通确认"
          class="remarks-cont"
          v-model="massage"
        ></textarea>
      </div>
      <div class="line"></div>
      <div class="bill">
        <h5>发票信息：</h5>
        <div>普通发票（电子） 个人 明细</div>
        <h5>使用优惠/抵用</h5>
      </div>
    </div>
    <div class="money clearFix">
      <ul>
        <li>
          <b
            ><i>{{ teotalNumber }}</i
            >件商品，总商品金额</b
          >
          <span>¥{{ tradeInfo.totalAmount }}</span>
        </li>
        <li>
          <b>返现：</b>
          <span>{{ parseInt(tradeInfo.totalAmount * 0.015) }}</span>
        </li>
        <li>
          <b>运费：</b>
          <span>{{ parseInt(tradeInfo.totalAmount * 0.02) }}</span>
        </li>
      </ul>
    </div>
    <div class="trade">
      <div class="price">
        应付金额:
        <span
          >¥{{
            tradeInfo.totalAmount +
            parseInt(tradeInfo.totalAmount * 0.015) +
            parseInt(tradeInfo.totalAmount * 0.02)
          }}</span
        >
      </div>
      <div class="receiveInfo">
        寄送至:
        <span>{{ chosenAddress.fullAddress }}</span>
        收货人：<span>{{ chosenAddress.consignee }}</span>
        <span>{{ chosenAddress.phoneNum }}</span>
      </div>
    </div>
    <div class="sub clearFix">
      <button class="subBtn" @click="submitOrder">提交订单</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  name: "TradeView",
  data() {
    return {
      //买家留言
      massage: "",
      //订单编号
      orderId: "",
      myOwnAddress: [
        {
          consignee: "Congcong",
          fullAddress:
            "江西省南昌市青山湖区南京东路235号南昌大学北区学生宿舍九栋",
          id: 1,
          isDefault: "1",
          phoneNum: "15246330601",
          provinceId: 1,
          regionId: 1,
          userAddress:
            "江西省南昌市青山湖区南京东路235号南昌大学北区学生宿舍九栋",
          userId: 2,
        },
      ],
    };
  },
  mounted() {
    this.$store.dispatch("getAddress");
    this.$store.dispatch("getTradeInfo");
  },
  computed: {
    ...mapGetters(["address"]),
    ...mapState({
      tradeInfo: (state) => state.trade.tradeInfo,
    }),

    //自己账号没address情况下的
    myaddress() {
      return this.address.length == 0 ? this.myOwnAddress : this.address;
    },

    //最终选中地址
    chosenAddress() {
      return this.address.find((item) => item.isDefault == 1) || {};
    },
    teotalNumber() {
      var sum = 0;
      this.tradeInfo.detailArrayList
        ? this.tradeInfo.detailArrayList.forEach(
            (item) => (sum = sum + item.skuNum)
          )
        : "";
      return sum;
    },
  },

  methods: {
    checkAddress(item, address) {
      address.forEach((item) => (item.isDefault = 0));
      item.isDefault = 1;
    },

    //提交订单
    async submitOrder() {
      let { tradeNo } = this.tradeInfo;
      let data = {
        consignee: this.chosenAddress.consignee, //收件人姓名
        consigneeTel: this.chosenAddress.phoneNum, //收件人电话
        deliveryAddress: this.chosenAddress.fullAddress, //收件人地址
        paymentWay: "ONLINE", //微信支付
        orderComment: this.massage || "卖家暂无留言", //买家留言
        orderDetailList: this.tradeInfo.detailArrayList, //订单数组
      };
      await this.$API.reqSubmitOrder(tradeNo, data).then((res) => {
        this.orderId = res.data;
        this.$router.push(`/pay?orderId=${this.orderId}`);
      });
    },
  },
};
</script>

<style lang="less" scoped>
.trade-container {
  .title {
    width: 1200px;
    margin: 0 auto;
    font-size: 14px;
    line-height: 21px;
  }

  .content {
    width: 1200px;
    margin: 10px auto 0;
    border: 1px solid rgb(221, 221, 221);
    padding: 25px;
    box-sizing: border-box;

    .receive,
    .pay {
      line-height: 36px;
      margin: 18px 0;
    }

    .address {
      padding-left: 20px;
      margin-bottom: 15px;

      .username {
        float: left;
        width: 100px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        border: 1px solid #ddd;
        position: relative;
      }

      .username::after {
        content: "";
        display: none;
        width: 13px;
        height: 13px;
        position: absolute;
        right: 0;
        bottom: 0;
        background: url(./images/choosed.png) no-repeat;
      }

      .username.selected {
        border-color: #e1251b;
      }

      .username.selected::after {
        display: block;
      }

      p {
        width: 610px;
        float: left;
        line-height: 30px;
        margin-left: 10px;
        padding-left: 5px;
        cursor: pointer;

        .s1 {
          float: left;
        }

        .s2 {
          float: left;
          margin: 0 5px;
        }

        .s3 {
          float: left;
          width: 56px;
          height: 24px;
          line-height: 24px;
          margin-left: 10px;
          background-color: #878787;
          color: #fff;
          margin-top: 3px;
          text-align: center;
        }
      }

      p:hover {
        background-color: #ddd;
      }
    }

    .line {
      height: 1px;
      background-color: #ddd;
    }

    .way {
      width: 1080px;
      height: 110px;
      background: #f4f4f4;
      padding: 15px;
      margin: 0 auto;

      h5 {
        line-height: 50px;
      }

      .info {
        margin-top: 20px;

        .s1 {
          float: left;
          border: 1px solid #ddd;
          width: 120px;
          height: 30px;
          line-height: 30px;
          text-align: center;
          margin-right: 10px;
        }

        p {
          line-height: 30px;
        }
      }
    }

    .detail {
      width: 1080px;

      background: #feedef;
      padding: 15px;
      margin: 2px auto 0;

      h5 {
        line-height: 50px;
      }

      .list {
        display: flex;
        justify-content: space-between;

        li {
          line-height: 30px;

          p {
            margin-bottom: 20px;
          }

          h4 {
            color: #c81623;
            font-weight: 400;
          }

          h3 {
            color: #e12228;
          }
        }
      }
    }

    .bbs {
      margin-bottom: 15px;

      h5 {
        line-height: 50px;
      }

      textarea {
        width: 100%;
        border-color: #e4e2e2;
        line-height: 1.8;
        outline: none;
        resize: none;
      }
    }

    .bill {
      h5 {
        line-height: 50px;
      }

      div {
        padding-left: 15px;
      }
    }
  }

  .money {
    width: 1200px;
    margin: 20px auto;

    ul {
      width: 220px;
      float: right;

      li {
        line-height: 30px;
        display: flex;
        justify-content: space-between;

        i {
          color: red;
        }
      }
    }
  }

  .trade {
    box-sizing: border-box;
    width: 1200px;
    padding: 10px;
    margin: 10px auto;
    text-align: right;
    background-color: #f4f4f4;
    border: 1px solid #ddd;

    div {
      line-height: 30px;
    }

    .price span {
      color: #e12228;
      font-weight: 700;
      font-size: 14px;
    }

    .receiveInfo {
      color: #999;
    }
  }

  .sub {
    width: 1200px;
    margin: 0 auto 10px;

    .subBtn {
      float: right;
      width: 164px;
      height: 56px;
      font: 700 18px "微软雅黑";
      line-height: 56px;
      text-align: center;
      color: #fff;
      background-color: #e1251b;
      border: none;
      cursor: pointer;
    }
  }
}
</style>