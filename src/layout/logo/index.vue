<template>
  <div class="logo">
    <img src="~@/assets/logo.png" alt="" />
    <h2 class="title" v-show="!collapsed">Vue3-admin</h2>
  </div>
</template>

<script>
export default {
  name: "index",
  props: {
    collapsed: {
      type: Boolean,
    },
  },
};
</script>

<style lang="less" scoped>
.logo {
  display: flex;
  align-items: center;
  padding-left: 24px;
  height: 64px;
  overflow: hidden;
  white-space: nowrap;
  img {
    height: 32px;
    margin-right: 8px;
  }
  .title {
    color: white;
    margin-bottom: 0;
  }
}
</style>
