<template>
  <div class="search">
    <div class="search-nav-bar">
      <nav-bar :border="false" :isLeftIconClick="true">
        <template #title>
          <search-bar
            :title="routeQuery.address"
            :start-date="routeQuery.startDate"
            :end-date="routeQuery.endDate"
            :key-word="keyWord"
            :cancel-icon="showCancelIcon"
            @cancel-click="handleCancelClick"
            @searchClick="handleSearchClick"
          ></search-bar>
        </template>
      </nav-bar>
      <dropdown-select :items-data="searchConditions" />
      <div class="tab-wrapper">
        <tab-select :items-data="searchHouse.hotFilters"></tab-select>
      </div>
    </div>
    <div class="list">
      <template v-for="(item, index) in searchHouse.items">
        <search-list-item :item-data="item"></search-list-item>
      </template>
    </div>

    <!-- 点击搜索显示搜索面板 -->
    <search-panel
      v-if="showSearchPanel"
      :searchPanelDatas="guessulike.groups"
      @cancel="handleCancel"
      @search="handleSearch"
      @tag-click="handleTagClick"
      @result-item-click="handleResultItemClick"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { getSearchHouse, getSearchConditions, getGuessulike } from "@/service";

import SearchBar from "@/components/search-bar/index.vue";
import TabSelect from "@/components/tab-select/index.vue";
import DropdownSelect from "@/components/dropdown-select/index.vue";
import SearchPanel from "./cpns/search-panel/index.vue";

const route = useRoute();
const router = useRouter();
const routeQuery = ref(route.query);

const PLACEHOLDER = "搜索博尔塔拉的景点、地标、房源";
// 定义变量
const showSearchPanel = ref(false);
const searchHouse = ref([]);
const searchConditions = ref([]);
const guessulike = ref([]);

// 网络请求
getSearchConditions().then((res) => {
  console.log(res);
  searchConditions.value = res.data.data.allConditions;
});
getSearchHouse().then((res) => {
  searchHouse.value = res.data.data;
});
getGuessulike().then((res) => {
  console.log(res);
  guessulike.value = res.data;
});

const handleSearchClick = () => {
  showSearchPanel.value = true;
};
</script>

<style scoped lang="less">
:deep(.van-sticky--fixed .guide-login) {
  margin-left: 0;
  margin-right: 0;
}
.search {
  overflow: hidden;
  width: 100%;
  height: 100%;
  .search-nav-bar {
    position: fixed;
    width: 100%;
    z-index: 100;
  }
  .search-conditions {
    padding-top: 46px;
  }
  .tab-wrapper {
    padding: 12px 0 10px 20px;
    background-color: #f7f8fb;
  }
  .list {
    padding: 141px 20px 0 20px;
    z-index: -1;
    position: relative;
  }
}
</style>
