<!--
 * @Author: Jin Haocong
 * @Date: 2022-08-16 11:39:10
 * @LastEditTime: 2022-08-20 20:18:59
-->
<template>
  <!-- home主页面 -->
  <div>
    <!-- 三级联动全局组件 -->
    <type-nav></type-nav>
    <list-container></list-container>
    <today-recommend></today-recommend>
    <commodity-rank></commodity-rank>
    <you-like></you-like>
    <floor-content
      v-for="floor in floorList"
      :key="floor.id"
      :list="floor"
    ></floor-content>
    <brand-content></brand-content>
  </div>
</template>

<script>
import { mapState } from "vuex";
//引入其余组件
import BrandContent from "./BrandContent/BrandContent.vue";
import CommodityRank from "./CommodityRank/CommodityRank.vue";
import FloorContent from "./FloorContent/FloorContent.vue";
import ListContainer from "./ListContainer/ListContainer.vue";
import TodayRecommend from "./TodaRecommend/TodayRecommend.vue";

import YouLike from "./YouLike/YouLike.vue";
export default {
  name: "HomeView",
  components: {
    ListContainer,
    TodayRecommend,
    CommodityRank,
    YouLike,
    FloorContent,
    BrandContent,
  },
  //派发action获取floor的数据
  mounted() {
    this.$store.dispatch("getFloorList");
  },

  computed: {
    ...mapState({
      floorList: (state) => state.home.getFloorList,
    }),
  },
};
</script>,
