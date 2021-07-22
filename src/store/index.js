import { createStore } from 'vuex'
import user from './modules/user'
import asyncRouter from './modules/async-router'
import getters from './getters'
export default createStore({
  modules:{
    user,
    asyncRouter, // 将这两个模块组合在一起
  },
  getters
})
