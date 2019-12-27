/**
 * 包含多个清洁接口的接口文档
 */
import ajax from './ajax'
const BASE = '/api'
// const BASE2 = '/ms'
 /**
  * ## 1、根据经纬度获取位置详情
  */
 export const reqAddress = (longitude,latitude) => ajax({
   method: "GET",
   url: BASE + `/position/${latitude},${longitude}`
 })

 /**
  * 2:获取食品分类
  */
 export const reqCategorys = () => ajax({
   method: "GET",
   url: BASE + '/index_category',
   headers:{
     needToken: true
   }
 })
 /**
  * 3:根据经纬度获取商户列表
  */
 export const reqShops = ({latitude,longitude}) => ajax({
  method: "GET",
  url: BASE +  '/shops',
  params:{
    latitude,
    longitude
  },
  headers:{
    needToken: true
  }
})
/**
 * 发送短信验证码
 */
export const reqSendCode = (phone) => ajax({
  method: "GET",
  url: BASE + '/sendcode',
  params: {
    phone
  }
})
/**
 * 5：用户名密码登录
 */
export const reqPwd = ({name,pwd,captcha}) =>ajax.post( BASE + '/login_pwd',{name,pwd,captcha})

 /**
  * 6：手机验证码登录
  */
 export const reqSmsLogin = ({phone,code}) => ajax({
   method: "POST",
   url: BASE + '/login_sms',
   params:{
     phone,
     code
   }
 })