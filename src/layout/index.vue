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
      <a-layout-content class="layout-content">
        <tabs-content></tabs-content>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
import AppLogo from "./logo/index.vue";
import TabsContent from "./tabs-content/tabs-content.vue";
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
    TabsContent,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
  },
};
</script>

<style lang="less">
.app-wapper {
  display: flex;
  overflow: hidden;
  height: 100vh;
  .app-header {
    padding: 0;
    background: #fff;
    .trigger {
      font-size: 18px;
      line-height: 64px;
      padding: 0 24px;
      cursor: pointer;
      transition: color 0.3s;
    }
    .ant-row {
      display: flex;
      justify-content: space-between;
      padding: 0 16px;
    }
  }
  .layout-content {
    flex: none;
  }
}
</style>
