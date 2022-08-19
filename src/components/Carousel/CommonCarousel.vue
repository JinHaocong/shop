<!--
 * @Author: Jin Haocong
 * @Date: 2022-08-17 15:39:03
 * @LastEditTime: 2022-08-19 08:37:59
-->
<template>
  <!-- v-if 来解决多次初始化swiper问题 -->
  <div class="swiper-container" :class="el" v-if="list.length">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="carouse in list" :key="carouse.id">
        <img :src="carouse.imgUrl" />
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  name: "CommonCarousel",
  props: ["list", "watchNow", "el"],
  watch: {
    list: {
      //不管有没有数据 立即监听
      immediate: true,
      handler() {
        this.$nextTick(() => {
          new Swiper(`.${this.el}`, {
            loop: true, // 循环模式选项
            autoplay: {
              delay: 2500,
              disableOnInteraction: false,
            },
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

<style>
</style>