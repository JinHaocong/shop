<!--
 * @Author: Jin Haocong
 * @Date: 2022-08-18 15:43:57
 * @LastEditTime: 2022-08-18 23:24:15
-->
<template>
  <div class="pagination">
    <button :disabled="pageNo == 1" @click="$emit('getPage', pageNo - 1)">
      上一页
    </button>
    <button
      v-if="startAndEndNumber.start > 1"
      @click="$emit('getPage', 1)"
      :class="{ atcive: pageNo == 1 }"
    >
      1
    </button>
    <button v-if="startAndEndNumber.start > 2">···</button>

    <!-- 中间部分 -->
    <button
      v-for="(page, index) in currentPages"
      :key="index"
      @click="$emit('getPage', page)"
      :class="{ active: pageNo == page }"
    >
      {{ page }}
    </button>

    <button v-if="startAndEndNumber.end < totalPage - 1">···</button>
    <button
      v-if="startAndEndNumber.end < totalPage"
      @click="$emit('getPage', totalPage)"
      :class="{ active: pageNo == totalPage }"
    >
      {{ totalPage }}
    </button>
    <button
      :disabled="pageNo == totalPage"
      @click="$emit('getPage', pageNo + 1)"
    >
      下一页
    </button>
    <button style="margin-left: 30px">共 {{ this.total }} 条</button>
  </div>
</template>

<script>
export default {
  name: "CommonPagination",
  props: ["pageNo", "pageSize", "total", "continues"],
  computed: {
    //计算出总共多少页
    totalPage() {
      //向上取整
      return Math.ceil(this.total / this.pageSize);
    },

    //计算出连续页码的起始数字和结束数字
    startAndEndNumber() {
      //解构出所有属性
      const { continues, pageNo, totalPage } = this;
      //定义变量来接收起始和结束页码
      let start = 0;
      let end = 0;
      //连续的页数 continues为5  所以至少要有五页
      if (continues > totalPage) {
        start = 1;
        end = totalPage;
      } else {
        //正常现象 totalPage 大于五
        //注意 如果当前为第一页 要展示1，2，3，4，5  当前为第二页  也展示1，2，3，4，5
        start = pageNo - (continues - 1) / 2;
        end = pageNo + (continues - 1) / 2;
        if (start < 1) {
          start = 1;
          end = continues;
        }

        if (end > totalPage) {
          start = totalPage - continues + 1;
          end = totalPage;
        }
      }
      return { start, end };
    },

    currentPages() {
      let pages = [];
      for (
        var i = this.startAndEndNumber.start;
        i <= this.startAndEndNumber.end;
        i++
      ) {
        pages.push(i);
      }
      return pages;
    },
  },
};
</script>

<style lang="less" scoped>
.pagination {
  text-align: center;
  button {
    margin: 0 5px;
    background-color: #f4f4f5;
    color: #606266;
    outline: none;
    border-radius: 10px;
    padding: 0 4px;
    vertical-align: top;
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: 0;

    &[disabled] {
      color: #c0c4cc;
      cursor: not-allowed;
    }
    &.active {
      cursor: not-allowed;
      background-color: #409eff;
      color: #fff;
      width: 40px;
      height: 33px;
    }
  }
}
.active {
  background-color: skyblue;
}
button:hover {
  box-shadow: 1px 1px 1px 1px rgb(182, 182, 182);
}
</style>
