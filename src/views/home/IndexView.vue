<!--
 * @Author: Jin Haocong
 * @Date: 2022-08-16 11:39:10
 * @LastEditTime: 2022-08-16 16:49:12
-->
<template>
  <div>
    <!-- 三级联动全局组件 -->
    <type-nav></type-nav>
    <list-container></list-container>
    <today-recommend></today-recommend>
    <commodity-rank></commodity-rank>
    <you-like></you-like>
    <floor-content></floor-content>
    <floor-content></floor-content>
    <brand-content></brand-content>
  </div>
</template>

<script>
//引入其余组件
import BrandContent from "./BrandContent/BrandContent.vue";
import CommodityRank from "./CommodityRank/CommodityRank.vue";
import FloorContent from "./FloorContent/FloorContent.vue";
import ListContainer from "./ListContainer/ListContainer.vue";
import TodayRecommend from "./TodaRecommend/TodayRecommend.vue";

import YouLike from "./YouLike/YouLike.vue";
export default {
  name: "IndexView",
  components: {
    ListContainer,
    TodayRecommend,
    CommodityRank,
    YouLike,
    FloorContent,
    BrandContent,
  },
};
</script>,
