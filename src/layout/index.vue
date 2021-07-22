<template>
  <a-layout class="app-wapper">
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
      <!-- logo部分 -->
      <app-logo :collapsed="collapsed"></app-logo>
      <!-- MenuList -->
      <app-menu :collapsed="collapsed"></app-menu>
    </a-layout-sider>
    <!-- 右main区域 -->
    <a-layout>
      <a-layout-header class="app-header">
        <a-row>
          <a-col>
            <menu-unfold-outlined
              v-if="collapsed"
              class="trigger"
              @click="() => (collapsed = !collapsed)"
            >
            </menu-unfold-outlined>
            <menu-fold-outlined
              v-else
              class="trigger"
              @click="() => (collapsed = !collapsed)"
            ></menu-fold-outlined>
          </a-col>
          <a-col>
            <app-header />
          </a-col>
        </a-row>
      </a-layout-header>
    </a-layout>
  </a-layout>
</template>

<script>
import AppLogo from "./logo/index.vue";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons-vue";
import AppMenu from "./menu/menu.vue";
import AppHeader from "./header";
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
    AppHeader,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
  },
};
</script>
