<!--
 * @Author: Jin Haocong
 * @Date: 2022-08-18 20:45:49
 * @LastEditTime: 2022-08-19 09:05:24
-->
<template>
  <div class="swiper-container jhc" v-if="skuImageList.length">
    <div class="swiper-wrapper">
      <div
        class="swiper-slide"
        v-for="(slider, index) in skuImageList"
        :key="slider.id"
      >
        <img
          :src="slider.imgUrl"
          :class="{ active: currentIndex == index }"
          @click="changeCurrentIndex(index)"
        />
      </div>
    </div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  name: "ImageList",
  data() {
    return {
      currentIndex: 0,
    };
  },
  props: ["skuImageList"],
  methods: {
    changeCurrentIndex(index) {
      this.currentIndex = index;
      //通过全局事件总线通知兄弟组件当前点击的索引值
      this.$bus.$emit("getCurrentIndex", index);
    },
  },
  watch: {
    //watch监听能保证数据是一定会来的 但是不能保证 v-for循环结束
    skuImageList: {
      handler() {
        this.$nextTick(() => {
          new Swiper(".jhc", {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 10,
            centeredSlides: true,
            // 如果需要分页器
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },

            // 如果需要前进后退按钮
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
          });
        });
      },
    },
  },
};
</script>

<style lang="less" scoped>
.swiper-container {
  height: 56px;
  width: 412px;
  box-sizing: border-box;
  padding: 0 12px;

  .swiper-slide {
    width: 56px;
    height: 56px;

    img {
      width: 100%;
      height: 100%;
      border: 1px solid #ccc;
      padding: 2px;
      width: 50px;
      height: 50px;
      display: block;
      border-radius: 10px;

      &.active {
        border: 2px solid #f60;
        padding: 1px;
        border-radius: 10px;
        box-shadow: 1px 1px 2px 1px rgb(198, 198, 198);
      }
    }
  }

  .swiper-button-next {
    left: auto;
    right: 0;
  }

  .swiper-button-prev {
    left: 0;
    right: auto;
  }

  .swiper-button-next,
  .swiper-button-prev {
    box-sizing: border-box;
    width: 12px;
    height: 56px;
    background: rgb(235, 235, 235);
    border: 1px solid rgb(204, 204, 204);
    top: 0;
    margin-top: 0;
    &::after {
      font-size: 12px;
    }
  }
}
</style>