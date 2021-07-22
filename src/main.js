import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {setupAntd} from './ant-design-vue'
import '../mock/mock'
import './permission'
const app = createApp(App)
setupAntd(app) // 使得组件注入app中
app.use(store).use(router).mount('#app')
