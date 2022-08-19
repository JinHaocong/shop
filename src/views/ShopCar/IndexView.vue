<template>
  <div class="cart">
    <h4>全部商品</h4>
    <div class="cart-main">
      <div class="cart-th">
        <div class="cart-th1">全部</div>
        <div class="cart-th2">商品</div>
        <div class="cart-th3">颜色</div>
        <div class="cart-th4">版本</div>
        <div class="cart-th5">单价（元）</div>
        <div class="cart-th6">数量</div>
        <div class="cart-th7">小计（元）</div>
        <div class="cart-th8">操作</div>
      </div>
      <div class="cart-body">
        <ul class="cart-list">
          <li class="cart-list-con1">
            <input type="checkbox" name="chk_list" class="con1box" />
          </li>
          <li class="cart-list-con2">
            <img src="./images/goods1.png" />
            <div class="item-msg">
              米家（MIJIA） 小米小白智能摄像机增强版
              1080p高清360度全景拍摄AI增强
            </div>
          </li>
          <li class="cart-list-con3">
            <div class="item-txt">YANSE</div>
          </li>
          <li class="cart-list-con4">
            <div class="item-txt">语音升级款</div>
          </li>
          <li class="cart-list-con5">
            <span class="price">399.00</span>
          </li>
          <li class="cart-list-con6">
            <a href="javascript:void(0)" class="mins">-</a>
            <input
              autocomplete="off"
              type="text"
              value="1"
              minnum="1"
              class="itxt"
            />
            <a href="javascript:void(0)" class="plus">+</a>
          </li>
          <li class="cart-list-con7">
            <span class="sum">399</span>
          </li>
          <li class="cart-list-con8">
            <div class="right">
              <button class="sindelet">移到收藏</button>
              <button class="favorite">删除</button>
            </div>
          </li>
        </ul>
        <ul class="cart-list">
          <li class="cart-list-con1">
            <input type="checkbox" name="chk_list" class="con1box" />
          </li>
          <li class="cart-list-con2">
            <img src="./images/goods1.png" />
            <div class="item-msg">
              米家（MIJIA） 小米小白智能摄像机增强版
              1080p高清360度全景拍摄AI增强
            </div>
          </li>
          <li class="cart-list-con3">
            <div class="item-txt">YANSE</div>
          </li>
          <li class="cart-list-con4">
            <div class="item-txt">语音升级款</div>
          </li>
          <li class="cart-list-con5">
            <span class="price">399.00</span>
          </li>
          <li class="cart-list-con6">
            <a href="javascript:void(0)" class="mins">-</a>
            <input
              autocomplete="off"
              type="text"
              value="1"
              minnum="1"
              class="itxt"
            />
            <a href="javascript:void(0)" class="plus">+</a>
          </li>
          <li class="cart-list-con7">
            <span class="sum">399</span>
          </li>
          <li class="cart-list-con8">
            <div class="right">
              <button class="sindelet">移到收藏</button>
              <button class="favorite">删除</button>
            </div>
          </li>
        </ul>
        <ul class="cart-list">
          <li class="cart-list-con1">
            <input type="checkbox" name="chk_list" class="con1box" />
          </li>
          <li class="cart-list-con2">
            <img src="./images/goods1.png" />
            <div class="item-msg">
              米家（MIJIA） 小米小白智能摄像机增强版
              1080p高清360度全景拍摄AI增强
            </div>
          </li>
          <li class="cart-list-con3">
            <div class="item-txt">YANSE</div>
          </li>
          <li class="cart-list-con4">
            <div class="item-txt">语音升级款</div>
          </li>
          <li class="cart-list-con5">
            <span class="price">399.00</span>
          </li>
          <li class="cart-list-con6">
            <a href="javascript:void(0)" class="mins">-</a>
            <input
              autocomplete="off"
              type="text"
              value="1"
              minnum="1"
              class="itxt"
            />
            <a href="javascript:void(0)" class="plus">+</a>
          </li>
          <li class="cart-list-con7">
            <span class="sum">399</span>
          </li>
          <li class="cart-list-con8">
            <div class="right">
              <button class="sindelet">移到收藏</button>
              <button class="favorite">删除</button>
            </div>
          </li>
        </ul>
        <ul class="cart-list">
          <li class="cart-list-con1">
            <input type="checkbox" name="chk_list" class="con1box" />
          </li>
          <li class="cart-list-con2">
            <img src="./images/goods1.png" />
            <div class="item-msg">
              米家（MIJIA） 小米小白智能摄像机增强版
              1080p高清360度全景拍摄AI增强
            </div>
          </li>
          <li class="cart-list-con3">
            <div class="item-txt">YANSE</div>
          </li>
          <li class="cart-list-con4">
            <div class="item-txt">语音升级款</div>
          </li>
          <li class="cart-list-con5">
            <span class="price">399.00</span>
          </li>
          <li class="cart-list-con6">
            <a href="javascript:void(0)" class="mins">-</a>
            <input
              autocomplete="off"
              type="text"
              value="1"
              minnum="1"
              class="itxt"
            />
            <a href="javascript:void(0)" class="plus">+</a>
          </li>
          <li class="cart-list-con7">
            <span class="sum">399</span>
          </li>
          <li class="cart-list-con8">
            <div class="right">
              <button class="sindelet">移到收藏</button>
              <button class="favorite">删除</button>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="cart-tool">
      <div class="select-all">
        <input class="chooseAll" type="checkbox" />
        <span>全选</span>
      </div>
      <div class="option">
        <a href="#none">删除选中的商品</a>
        <a href="#none">移到我的关注</a>
        <a href="#none">清除下柜商品</a>
      </div>
      <div class="money-box">
        <div class="chosed">已选择 <span>0</span>件商品</div>
        <div class="sumprice">
          <em>总价（不含运费） ：</em>
          <i class="summoney">0</i>
        </div>
        <div class="sumbtn">
          <button class="sum">结算</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShopCar",
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