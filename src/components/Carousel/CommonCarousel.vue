<!--
 * @Author: Jin Haocong
 * @Date: 2022-08-17 15:39:03
 * @LastEditTime: 2022-08-18 08:52:32
-->
<template>
  <div class="swiper-container" ref="myswiper">
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
  props: ["list", "watchNow"],
  watch: {
    list: {
      //不管有没有数据 立即监听
      immediate: "watchNow",
      handler() {
        this.$nextTick(() => {
          new Swiper(this.$refs.myswiper, {
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