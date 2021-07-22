<template>
  <div class="tabs-content">
    <div>
      <a-tabs
        v-model:activeKey="activeKey"
        hideAdd
        type="editabale-card"
        @change="changePage"
        @edit="removeTab"
      >
        <a-tab-pane
          v-for="item in visitedRoutes"
          :key="item.fullPath"
          :tab="item.name"
        ></a-tab-pane>
      </a-tabs>
    </div>
    <div>
      <!-- 嵌套路由 -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { useRoute, useRouter } from "vue-router";
import { watch, reactive, toRefs } from "vue";
import { message } from "ant-design-vue";
export default {
  setup() {
    const route = useRoute();
    const router = useRouter();
    const state = reactive({
      activeKey: route.fullPath,
      visitedRoutes: [],
    });
    watch(
      () => route.fullPath,
      (to) => {
        if (!state.visitedRoutes.find((item) => item.fullPath == to)) {
          const { fullPath, name, path } = route;
          const routes = { fullPath, name, path };
          state.visitedRoutes.push(routes);
          state.activeKey = to;
        } else {
          state.activeKey = to;
        }
      }
    );
    //切换tab
    const changePage = (key) => {
      state.activeKey = key;
      router.push(key);
    };

    const removeTab = (fullPath) => {
      if (state.visitedRoutes.length === 1) {
        return message.warning("已经到最后一页,不能再删除了!");
      }
      const routePath = state.visitedRoutes.find((item) => {
        return fullPath === item.fullPath;
      }); // find() 方法返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined
      state.visitedRoutes.forEach((item, index) => {
        if (item.fullPath === routePath.fullPath) {
          state.visitedRoutes.splice(index, 1);
        }
      });
    };

    return {
      ...toRefs(state),
      changePage,
      removeTab,
    };
  },
};
</script>
