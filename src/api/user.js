import instance from "./request";

export const Login = (res) => {
  return instance({
    url: "/login",
    method: "POST",
    data: res, //data属性是作为请求主体被发送的数据
  }); // axios.create() 返回一个promise
};

export const UserInfo = (res) => {
  return instance({
    url: "/getInfo",
    method: "POST",
    data: res,
  });
};
