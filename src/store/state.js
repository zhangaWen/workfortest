/**
 * 包含n个状态属性数据的对象
 */
export default {
  latitude:40.1003,//维度
  longitude:116.36867,//经度
  address: {},//地址信息对象
  categorys: [],//分类数组
  shops: [],//商家数组

  user: {},//当前登录用户
  token: localStorage.getItem('token_key'),//当前登录用户对应的token

  goods:[], //商品列表
  ratings:[],//商品评价列表
  info:{},//商家信息
}