<template>
  <div class="order-item">
    <order-item-title :item-data="getTitleData"></order-item-title>
    <order-item-info :item-data="getInfoData"></order-item-info>
    <order-item-btn :item-data="getFooterBtnData"></order-item-btn>
  </div>
</template>

<script setup>
import OrderItemTitle from "../order-item-title/index.vue";
import OrderItemInfo from "../order-item-info/index.vue";
import OrderItemBtn from "../order-item-btn/index.vue";
import { computed } from "vue";

const props = defineProps({
  itemData: {
    type: Object,
    default: () => {},
  },
});

const getTitleData = computed(() => {
  let data = props.itemData;
  return {
    unitName: data.unitName, // 名称
    orderStatusDesc: data.orderStatusDesc, // 支付状态
    cancelReasonDesc: data.cancelReasonDesc, // 取消原因
    orderStatus: data.orderStatus, // 1 待支付  0 取消
    orderStatusDescColor: data.orderStatusDescColor, // 状态颜色
  };
});
const getInfoData = computed(() => {
  let data = props.itemData;
  return {
    checkInDate: data.checkInDate, // 开始日期
    checkOutDate: data.checkOutDate, // 结束日期
    checkInLatestTime: data.checkInLatestTime, // 开始时间
    checkOutLatestTime: data.checkOutLatestTime, // 结束时间
    prepayAmount: data.prepayAmount, // 金额
    unitPicture: data.unitPicture, // 图片
  };
});
const getFooterBtnData = computed(() => {
  let data = props.itemData;
  return {
    countdown: data.countdown, // 剩余支付秒
    orderStatusDesc: data.orderStatusDesc,
    orderStatus: data.orderStatus, // 1 待支付  0 取消
  };
});
</script>

<style lang="less" scoped>
.order-item {
  padding: 0 20px;
  margin-top: 10px;
  background-color: white;
  // padding-bottom: 50px;
}
</style>
