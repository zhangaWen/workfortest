/*
  能发送ajax的函数（axios），函数的返回值是promise
  1：处理post请求体参数：转换成urlencode模式（默认是json格式）
  2：让成功的结果不是response而是response.data :响应拦截器的成功回调
  3：统一处理请求错误   ：响应拦截器失败的回调
*/
import axios from 'axios'
import qs from 'qs'


// axios.defaults.baseURL = 'http://localhost:4000'

// 添加请求拦截器
axios.interceptors.request.use(config => {
  const {method,data} = config
  if (method.toUpperCase()==="POST" && data instanceof Object) {
    config.data = qs.stringify(data)
  }
  return config
})
// 添加响应拦截器
axios.interceptors.response.use(response =>{
  return response.data
},error =>{
  alert('请求异常'+ error.message)
  // 中断promise链
  return new Promise(() =>{})
})

export default axios