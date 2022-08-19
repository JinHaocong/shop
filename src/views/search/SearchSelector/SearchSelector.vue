<template>
  <div class="clearfix selector">
    <div class="type-wrap logo">
      <div class="fl key brand">品牌</div>
      <div class="value logos">
        <ul class="logo-list">
          <li
            style="cursor: pointer"
            v-for="mark in trademarkList"
            :key="mark.tmId"
            @click="handleClick(mark)"
          >
            {{ mark.tmName }}
          </li>
        </ul>
      </div>
      <div class="ext">
        <a href="javascript:void(0);" class="sui-btn">多选</a>
        <a href="javascript:void(0);">更多</a>
      </div>
    </div>
    <!-- 平台售卖属性的地方 -->
    <div class="type-wrap" v-for="attr in attrsList" :key="attr.attrId">
      <div class="fl key">{{ attr.attrName }}</div>
      <div class="fl value">
        <ul class="type-list">
          <!-- 平台售卖的属性值 -->
          <li
            v-for="(attrValue, index) in attr.attrValueList"
            :key="index"
            @click="attrClick(attr, attrValue)"
          >
            <a style="cursor: pointer">{{ attrValue }}</a>
          </li>
        </ul>
      </div>
      <div class="fl ext"></div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "SearchSelector",
  computed: {
    ...mapGetters(["trademarkList", "attrsList"]),
  },
  methods: {
    //品牌的处理函数
    handleClick(mark) {
      //点击了品牌，需要整理参数，向服务器发请求获取相应数据
      //点击后要在父组件进行发送请求 ，子组件需要把点击的信息传给父组件  用自定义事件
      this.$emit("getTrademarkInfo", mark);
    },
    attrClick(attr, attrValue) {
      //平台售卖属性值的点击事件
      this.$emit("getAttrInfo", attr, attrValue);
    },
  },
};
</script>

<style lang="less" scoped>
.selector {
  border: 1px solid #ddd;
  margin-bottom: 5px;
  overflow: hidden;
  border-radius: 30px;

  .logo {
    border-top: 0;
    margin: 0;
    position: relative;
    overflow: hidden;

    .key {
      padding-bottom: 87px !important;
    }
  }

  .type-wrap {
    margin: 0;
    position: relative;
    border-top: 1px solid #ddd;
    overflow: hidden;

    .key {
      width: 100px;
      height: 40px;
      background: #f1f1f1;
      line-height: 30px;
      text-align: center;
      padding: 10px 10px 0 15px;
      float: left;
    }

    .value {
      overflow: hidden;
      padding: 10px 0 0 15px;
      color: #333;
      margin-left: 120px;
      padding-right: 90px;

      .logo-list {
        li {
          float: left;
          border: 1px solid #e4e4e4;
          margin: -1px -1px 0 0;
          margin-right: 10px;
          margin-bottom: 10px;
          border-radius: 10px;
          width: 105px;
          height: 52px;
          text-align: center;
          line-height: 52px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          font-weight: 700;
          color: #e1251b;
          font-style: italic;
          font-size: 14px;
          transition: all 0.3s linear;

          img {
            max-width: 100%;
            vertical-align: middle;
          }
        }
        li:hover {
          border-radius: 50px;
          box-shadow: 2px 2px 3px 1px rgb(194, 194, 194);
        }
      }

      .type-list {
        li {
          float: left;
          display: block;
          margin-right: 30px;
          line-height: 26px;

          a {
            text-decoration: none;
            color: #666;
            transition: all 0.3s linear;
            border-radius: 5px;
          }
          a:hover {
            box-shadow: 2px 2px 3px 1px rgb(171, 171, 171);
          }
        }
      }
    }

    .ext {
      position: absolute;
      top: 10px;
      right: 10px;

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
        padding: 0 10px;
        background: #fff;
        border: 1px solid #d5d5d5;
      }

      a {
        color: #666;
      }
    }
  }
}
</style>