import axios from 'axios'
const instance = axios.create({
  baseURL:'/api' // 一般会加在url前面
})
// instance 是一个axios实例对象 axios.create()返回一个promise

export default instance