import {asyncRoutes,constantRoutes} from '../../router'
function hasPermission(roles,route) {
  if (route.meta && route.meta.roles) {
    return roles.some(role => route.meta.roles.includes(role)) // 有一个包含就返回true
  }else {
    return true
  }
}
export function filterAsyncRoutes(routes,roles) {
  const res = []
  routes.forEach(route => {
    const tmp = {...route} // 每一个路由对象用扩展运算符展开
    if (hasPermission(roles,tmp)) {
      if (tmp.children) {
        tmp.children = filterAsyncRoutes(tmp.children,roles) // 递归调用
      }
      res.push(tmp)
    }
  })
  return res
}
const asyncRouter = {
  namespaced:true,
  state:{
    routes:[],
    addRoutes:[]
  },
  mutations:{
    SET_ROUTES:(state,routes)=>{
      state.addRoutes = routes
      state.routes  = constantRoutes.concat(routes)
    }
  },
  actions:{
    generateRoutes({commit},roles){
      return new Promise(resolve => {
        let accessedRoutes = []
        if (roles.includes('admin')) {
          accessedRoutes = asyncRoutes
        }else{
          accessedRoutes = filterAsyncRoutes(asyncRoutes,roles) // accessedRoutes也是一个数组
        }
        commit('SET_ROUTES',accessedRoutes)
        resolve(accessedRoutes) // resolve 返回一个解析后的promise
      })
    }
  }
}
export default asyncRouter