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
    },
    children:[
      {
        path:'index',
        name:'Index',
        component: () => import('@/views/index/Index.vue'),
        meta:{
          title:'首页',
          affix:true
        }
      }
    ]
  },
  {
    path:'/login',
    name:'login',
    component:()=>import('../views/login/Login.vue'),
    hidden:true
  },
  {
    path:'/demo',
    component:Layout, //Layout里头部和侧边栏是共有的布局只是tabs-content内容不同
    name: 'Demo',
    redirect:'/demo/table', // 重定向到/demo/table
    meta:{
      title:'组件',
      icon:'apps-line',
      roles:['admin','editor']
    },
    children:[
      {
        path:'table',
        name:'Table',
        component:()=>import('@/views/demo/table/index.vue'),
        meta:{
          title:'表格',
          icon:'table-2'
        }
      },
      {
        path:'icon',
        name:'Icon',
        component:()=>import('@/views/demo/icon/index.vue'),
        meta:{
          title:'图标',
          icon:'remixicon-line'
        }
      }
    ]
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
