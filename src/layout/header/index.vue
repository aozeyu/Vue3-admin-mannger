<template>
  <div class="app-avatar">
    <a-dropdown>
      <span class="ant-dropdown-link">
        <a-avatar :src="avatar"></a-avatar>
        {{ username }}
        <DownOutlined />
      </span>
      <template #overlay>
        <a-menu>
          <a-menu-item @click="Logout">退出登陆</a-menu-item>
        </a-menu>
      </template>
    </a-dropdown>
  </div>
</template>

<script>
import { DownOutlined } from "@ant-design/icons-vue";
import { reactive, toRefs } from "vue";
//...toRefs 将一组refs 展开这样模版就不要.value
import { useStore } from "vuex";
import { message, Modal } from "ant-design-vue";
import { useRouter, useRoute } from "vue-router";
export default {
  setup() {
    const store = useStore();
    const router = useRouter();
    const route = useRoute();
    const state = reactive({
      avatar: store.getters.avatar,
      username: store.getters.usename,
    });
    const Logout = () => {
      Modal.confirm({
        title: "您确定要推出登陆吗?",
        onOk() {
          store.dispatch("user/LogoutResult").then(() => {
            message.success("退出登陆成功!");
            router.replace({
              name: "login",
              query: {
                redirect: route.fullPath,
              },
            });
          });
        },
      });
    };
    return {
      ...toRefs(state),
      Logout,
    };
  },
  components: {
    DownOutlined,
  },
};
</script>

<style lang="less" scoped>
.app-avatar {
  .ant-dropdown-link {
    display: block;
    min-height: 64px;
    cursor: pointer;
  }
}
</style>
