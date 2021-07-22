import { Login, UserInfo } from "../../../src/api/user";
import router,{asyncRoutes} from  '../../router'
const user = {
  namespaced: true,
  state: {
    token: localStorage.getItem("token"),
    avatar: "",
    username: "",
    roles: [],
    menus: [],
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token;
    }, // 由于设置了namespaced:true commit 变为 commit('user/SET_TOKEN')
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar;
    },
    SET_USERNAME: (state, username) => {
      state.username = username;
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles;
    },
    SET_MENUS: (state, menus) => {
      state.menus = menus;
    },
  },
  //异步请求
  actons: {
    //login
    LoginResult({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        Login(userInfo)
          .then((response) => {
            const { code, token } = response.data;
            if (code == 200) {
              localStorage.setItem("token", token); // 将token 存入
              commit("SET_TOKEN", token);
            }
            resolve(response.data);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    /* getUserInfo*/
    GetInfo({ commit }, token) {
      return new Promise((resolve, reject) => {
        UserInfo(token)
          .then((response) => {
            const { code, data } = response.data;
            if (code == 200) {
              commit("SET_AVATAR", data.avatar);
              commit("SET_USERNAME", data.username);
              commit("SET_ROLES", data.roles);
              commit("SET_MENUS", data.menus);
              resolve(response.data);
            }
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    //用户登出
    LogoutResult({commit}){
      commit('SET_TOKEN','')
      commit("SET_AVATAR",'');
      commit("SET_USERNAME", '');
      commit("SET_ROLES", '');
      commit("SET_MENUS", '');
      const Routes = router.getRoutes()
       /** 清楚动态路由 */
       asyncRoutes.forEach((item) => {
         router.removeRoute(item.name)
       })
       console.log(Routes);
       localStorage.removeItem('token')
    }
  },
};

export default user
