<template>
  <div class="cart-complete-wrap">
    <h3><i class="iconfont icon-gouwucheman"></i>商品已成功加入购物车！</h3>
    <div class="cart-complete">
      <div class="goods">
        <div class="left-good">
          <div class="left-pic">
            <img :src="skuInfo.skuDefaultImg" />
          </div>
          <div class="right-info">
            <p class="title">
              {{ skuInfo.skuName }}
            </p>
            <p class="attr">描述：{{ skuInfo.skuDesc }}</p>
            <p class="attr">数量：{{ $route.query.skuNumber }}</p>
            <p class="attr">单价：{{ skuInfo.price }}</p>
            <p class="attr">
              颜色：{{ skuInfo.skuSaleAttrValueList[0].saleAttrValueName }}
            </p>
            <p class="attr">
              版本：{{ skuInfo.skuSaleAttrValueList[1].saleAttrValueName }}
            </p>
            <p class="attr">
              总价格：￥{{ $route.query.skuNumber * skuInfo.price }}
            </p>
          </div>
        </div>
        <div class="right">
          <router-link :to="`/detail/${skuInfo.id}`">
            <button class="button1">查看商品详情</button>
          </router-link>
          <router-link to="/shopcar">
            <button class="button2">去购物车结算 ></button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddCartSuccess",
  mounted() {},
  computed: {
    skuInfo() {
      return JSON.parse(sessionStorage.getItem("SUKINFO"));
    },
  },
};
</script>

<style lang="less" scoped>
.cart-complete-wrap {
  h3 {
    text-align: center;
    color: rgb(0, 210, 0);
    font-size: 16px;
    .icon-gouwucheman {
      margin: 0 10px;
    }
  }
  .cart-complete {
    .goods {
      display: flex;
      width: 1200px;
      height: 180px;
      margin: 30px auto;
      background-color: #f4f4f4;
      border-radius: 40px;
      border-bottom: 1px solid rgb(213, 213, 213);
      border-radius: 40px;
      box-shadow: 1px 1px 5px 1px rgb(213, 213, 213);
      .left-good {
        flex: 8;
        display: flex;
        height: 130px;
        padding: 25px 0;
        width: 900px;
        padding: auto;

        .left-pic {
          border-radius: 10px;
          width: 130px;
          flex: 2;
          img {
            width: 130px;
            height: 130px;
            border-radius: 10px;
            margin: 0 30px;
          }
        }

        .right-info {
          color: #444;
          float: right;
          margin-left: 10px;
          flex: 8;

          .title {
            width: 100%;
            line-height: 28px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            font-size: 14px;
          }

          .attr {
            color: #aaa;
          }
        }
      }
      .right {
        flex: 2;
        display: flex;
        height: 180px;
        border-radius: 40px;
        align-items: center;
        justify-content: space-around;
        button {
          height: 30px;
          border-radius: 10px;
          background-color: #ea4a36;
          color: white;
          border: none;
          width: 100px;
          transition: all 0.2s linear;
        }
        button:hover {
          background-color: white;
          color: #ea4a36;
          box-shadow: 1px 1px 2px 1.5px rgb(199, 199, 199);
          cursor: pointer;
        }
      }
    }
  }
}
</style>