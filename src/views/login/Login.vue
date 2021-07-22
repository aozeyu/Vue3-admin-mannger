<template>
  <div class="login-container">
    <a-row>
      <a-col :xs="0" :md="0" :sm="12" :lg="14" :xl="16"></a-col>
      <a-col :xs="24" :sm="24" :md="12" :lg="10" :xl="6">
        <div class="login-container-form">
          <header>
            <img src="../../assets/logo.png" alt="" />
            <h1>Vue3-admin</h1>
          </header>
          <a-form :model="form" @submit="handleSubmit" @submit.prevent="">
            <a-form-item>
              <a-input
                v-model:value="form.username"
                size="large"
                placeholder="Username"
              >
                <template v-slot:prefix>
                  <lock-outlined type="user"></lock-outlined>
                </template>
              </a-input>
            </a-form-item>
            <a-form-item>
              <a-button type="primary" size="large" @click="handleSubmit" block
                >Login in</a-button
              >
            </a-form-item>
          </a-form>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs } from "vue";
import { UserOutlined, LockOutlined } from "@ant-design/icons-vue";
import {message} from 'ant-design-vue'
import {useRoute,useRouter} from 'vue-router'
import {useStore} from 'vuex'
export default defineComponent({
  name: "Login",
  setup() {
    const state = reactive({
      form: {
        username: "",
        password: "",
      },
    });
    const store =useStore()
    const router = useRouter() // 拿到路由实例
    const route = useRoute()
    return {
      ...toRefs(state),
    };
  },
  components:{
    UserOutlined,
    LockOutlined
  }
});
</script>
