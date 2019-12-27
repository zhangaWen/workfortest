/*
  能发送ajax的函数（axios），函数的返回值是promise
  1：处理post请求体参数：转换成urlencode模式（默认是json格式）
  2：让成功的结果不是response而是response.data :响应拦截器的成功回调
  3：统一处理请求错误   ：响应拦截器失败的回调
  4:对需要些带token的请求，从state中取出token
    4.1：没有token
    不发请求，直接进入失败流程
    4.2：有token
    添加到请求头中： Authorization = token
*/
import axios from 'axios'
import qs from 'qs'
import store from '../store';
import router from '../router';

// axios.defaults.baseURL = 'http://localhost:4000'

// 添加请求拦截器
axios.interceptors.request.use(config => {
  const {method,data} = config
  if (method.toUpperCase()==="POST" && data instanceof Object) {
    config.data = qs.stringify(data)
  }
  //判断请求是否需要token
  if (config.headers.needToken) {
    const token = store.state.token
    //没有
    if (!token) {
      const error = new Error('没有token，不能发请求')
      error.code = 401
      throw error
    }else{
      //有
      config.headers.Authorization = token
    }
  }
  return config
})
// 添加响应拦截器
axios.interceptors.response.use(response =>{
  return response.data
},error =>{
  const {response,code,message} = error
  //发请求前没有需要的token失败
  if (!response ) {
    if(code===401) {
      if(router.currentRoute.path!=='/login'){
        alert(message)
        router.replace('/login')
      }
    }
  }
  //发了请求token过期了
  if(code===401){
    // 推出登录
    store.dispatch('logout')
    //跳转到登录页面
    router.replace('/login')
  }else if(code===404){
    alert('不纯子啊')
  }else{
    alert('error'+message)
  }
  //请求资源不存在
  alert('请求异常'+ error.message)
  // 中断promise链
  return new Promise(() =>{})
})

export default axios