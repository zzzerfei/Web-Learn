<template>
  <div class="home">
    <van-nav-bar title=" Trip"></van-nav-bar>

    <!-- 顶部轮播图 -->
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="" />
    </div>

    <search-box :hot-suggests="hotSuggests"></search-box>
    <div class="content">
      <category-list :categories="categories"></category-list>
      <house-area :houselist="houselist"></house-area>
    </div>

    <div v-show="showSearchBar" class="home-top">
      <search-bar
        start-date="07.25"
        end-date="07.26"
        height="45px"
        key-word-font-size="14px"
        :search-icon="true"
        key-word="关键字/位置/民宿"
        @search-click="handleSearchClick"
      ></search-bar>
    </div>
  </div>
</template>

<script setup>
import SearchBox from "./cpn/search-box.vue";
import CategoryList from "./cpn/category-list.vue";
import HouseArea from "./cpn/house-area.vue";
import SearchBar from "@/components/search-bar/index.vue";

import useReachBottom from "@/hooks/useReachBottom";
import useScroll from "@/hooks/useScroll";

import {
  getHomeHotSuggests,
  getHomeCategories,
  getHomeHouselist,
} from "@/service";
import { ref } from "@vue/reactivity";
import { computed } from "@vue/runtime-core";

// 获取热门关键词
const hotSuggests = ref([]);
getHomeHotSuggests().then((res) => {
  hotSuggests.value = res.data;
});

// 获取分类
const categories = ref([]);
getHomeCategories().then((res) => {
  categories.value = res.data;
});

// 获取房源
let currentPage = 1;
const houselist = ref([]);
fetchHouseListData();
function fetchHouseListData() {
  getHomeHouselist(currentPage).then((res) => {
    houselist.value.push(...res.data);
    console.log(res);
    currentPage++;
  });
}

// 监听到达底部 接收数据
useReachBottom(() => {
  fetchHouseListData();
});

// 滚动后显示顶部搜索框
const { scrollTop } = useScroll();
const showSearchBar = computed(() => {
  return scrollTop.value >= 350;
});
</script>

<style lang="less" scoped>
.home {
  padding-bottom: 50px;
}

.banner {
  img {
    width: 100%;
  }
}

.content {
  margin-top: 20px;
  background-color: #f5f7f9;
}

.home-top {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 16px 16px 10px 16px;
  background-color: white;
  z-index: 100;
}
</style>
