<template>
  <div class="house-area">
    <h2 class="title">热门精选</h2>
    <div class="house-list">
      <template v-for="(item, index) in houselist">
        <house-item-v1
          :key="index"
          v-if="item.discoveryContentType === 3"
          :item-data="item.data"
        />
        <house-item-v2
          v-else-if="item.discoveryContentType === 9"
          :item-data="item.data"
          :key="item.cityId"
        />
      </template>
    </div>
  </div>
</template>
<script setup>
import HouseItemV1 from "@/components/house-item-v1/index.vue";
import HouseItemV2 from "@/components/house-item-v2/index.vue";
defineProps({
  houselist: {
    type: Array,
    default: () => [],
  },
});
</script>
<style lang="less" scoped>
.house-area {
  .title {
    margin: 20px 0 0 20px;
  }

  .house-list {
    display: flex;
    flex-wrap: wrap;
    // margin-top: 8px;
    padding: 8px;
  }
}
</style>
