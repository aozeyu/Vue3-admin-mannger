const getters = {
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  username: state => state.user.username,
  roles: state => state.user.roles,
  menus: state => state.user.menus  // 拿到menus
} // Vuex 允许我们在 store 中定义“getter”（可以认为是 store 的计算属性）

export default getters
