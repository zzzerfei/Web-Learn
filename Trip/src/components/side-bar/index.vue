<template>
  <div class="side-bar">
    <div class="side-menu">
      <van-sidebar v-model="active">
        <van-sidebar-item title="标签名称" />
        <van-sidebar-item title="标签名称" disabled />
        <van-sidebar-item title="标签名称" />
      </van-sidebar>
    </div>
    <div class="content"></div>
  </div>
</template>

<script setup></script>

<style scoped lang="less">
@popupHeight: 500px;
.side-bar :deep(.van-sidebar) {
  height: calc(@popupHeight - 60px);
}
.side-bar {
  display: flex;
  flex-direction: row;
  .content {
    flex: 1;
    overflow-y: auto;
    height: calc(@popupHeight - 60px);
    background-color: white;

    .list-item {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 55px;

      padding: 0 20px 0 10px;
      margin-right: 20px;
      margin-left: 12px;

      font-size: 14px;
      .name {
        // max-width: 200px;
        padding-bottom: 6px;
      }

      .desp {
        font-size: 12px;
        color: #999;
      }
    }
  }
}

.active {
  background-color: #fffcf5;
  .name {
    color: var(--primary-color);
  }
}
.sub-side-panel {
  display: flex;
  flex-direction: row;
  .sub-side-bar {
    border-right: 1px solid #f8f8f8;
  }
  .sub-side-bar :deep(.van-sidebar) {
    .van-sidebar-item {
      background-color: white !important;
    }
  }
  .sub-content {
    flex: 1;
    overflow-x: hidden;
    overflow-y: scroll;
    height: calc(@popupHeight - 60px);
  }
}
</style>
