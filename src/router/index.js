import { createRouter, createWebHistory } from 'vue-router'
import Layout from '../layout'
export const constantRoutes = [
  {
    path:'/',
    component:Layout,
    redirect:'index',
    name:'Index',
    meta:{
      title:'首页',
      affix:true
    }
  },
  {
    path:'/login',
    name:'login',
    component:()=>import('../views/login/Login.vue'),
    hidden:true
  }
]

export const asyncRoutes = [
  {
    path:'/error',
    name:'Error',
    component:Layout,
    redirect:'/error/403',
    meta:{
      title:'错误页',
      icon:'error-warning-line'
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes:constantRoutes
})

export default router
