<template>
  <div class="order">
    <van-sticky>
      <nav-bar title="订单列表" />
      <van-tabs
        v-model:active="currentOrder"
        title-active-color="#ff9854"
        :line-height="2"
      >
        <template v-for="(item, index) in orderTitles" :key="item">
          <van-tab :title="item" :name="index"></van-tab>
        </template>
      </van-tabs>
    </van-sticky>
    <div class="content">
      <div v-if="orderlist.length">
        <template v-for="(item, index) in orderlist" :key="item">
          <order-item :item-data="item"></order-item>
        </template>
      </div>
      <div v-else="!orderlist.length" class="tips">
        <img src="@/assets/img/order/icon-order.png" alt="" />
        <div class="title">近期暂无订单</div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { getOrderList } from "@/service";
import { ref, watch } from "vue";
import OrderItem from "./cpns/order-item/index.vue";
import NavBar from "@/components/nav-bar/index.vue";

// 订单列表
const orderlist = ref([0]);
getOrderList().then((res) => {
  console.log(res.data.data.orders);
  orderlist.value = res.data.data.orders;
});
const orderTitles = ["全部订单", "近期订单", "待支付"];
const orderTitleType = ["all", "recent", "pend"];
const currentOrder = ref(0);
watch(currentOrder, (newValue, oldValue) => {
  if (newValue != undefined) {
    getOrderList(orderTitleType[newValue]).then((res) => {
      orderlist.value = res.data.data.orders || [];
    });
  }
});
</script>
<style scoped lang="less"></style>
