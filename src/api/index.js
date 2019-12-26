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
   url: BASE + '/index_category'
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
  }
})