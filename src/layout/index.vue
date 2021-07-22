<template>
  <a-layout class="app-wapper">
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
      <!-- logo部分 -->
      <app-logo :collapsed="collapsed"></app-logo>
      <!-- MenuList -->
      <app-menu :collapsed="collapsed"></app-menu>
    </a-layout-sider>
  </a-layout>
</template>

<script>
import AppLogo from "./logo/index.vue";
import AppMenu from "./menu/menu.vue";
import { ref } from "vue";
export default {
  setup() {
    const collapsed = ref(false);
    return {
      collapsed,
    };
  },
  components: {
    AppLogo,
    AppMenu,
  },
};
</script>
