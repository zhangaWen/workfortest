/**
 * 包含n个间接更细状态数据的方法的对象
 */
import {reqAddress,reqCategorys,reqShops,reqGoods,reqInfo,reqRatings} from '../api'
import {RECEIVE_ADDRESS,RECEIVE_CATEGORYS,RECEIVE_SHOPS,RECEIVE_USER,RESET_USER,RECEIVE_TOKEN,
  RESET_TOKEN,RECEIVE_RATINGS,RECEIVE_INFO,RECEIVE_GOODS,ADD_FOOD_COUNT,REDUCE_FOOD_COUNT
} from './mutation_types'
export default {
  /**
   * 1:获取当前地址信息的异步action
   */
  async getAddress ({commit,state}) {
    //调用接口请求函数
    const {longitude,latitude} = state
    const result = await reqAddress(longitude,latitude)
    //有了结果提交mutation
    if (result.code===0) {
      const address = result.data
      commit(RECEIVE_ADDRESS,address)
    }
  },
  /**
   * 2:获取当分类列表
   */
  async getCategorys ({commit}) {
    //调用接口请求函数
    const result = await reqCategorys()
    //有了结果提交mutation
    if (result.code===0) {
      const categorys = result.data
      commit(RECEIVE_CATEGORYS,categorys)
    }
  },
  /**
   *3: 获取商家liebiap
   */
  async getShops ({commit,state}) {
    //调用接口请求函数
    const {longitude,latitude} = state
    const result = await reqShops({longitude,latitude})
    //有了结果提交mutation
    if (result.code===0) {
      const shops = result.data
      commit(RECEIVE_SHOPS,shops)
    }
  },
  /**
   * 保存user当前用户的同步action
   */
  saveUser ({commit},user) {
    const {token} = user
    //将token保存到localstorage
    localStorage.setItem('token_key',token)
    //将token保存到state里面
    commit(RECEIVE_TOKEN,{token})
    //删除user中的token
    delete user.token
    commit(RECEIVE_USER,{user})
  },
  /**
   * 退出登录
   */
  logout ({commit}) {
    commit(RESET_USER)
    commit(RESET_TOKEN)
    localStorage.removeItem('token_key')
  },
  //商品详情页
  // 异步获取商家信息
  async getInfo({commit}, cb) {
    const result = await reqInfo()
    if(result.code===0) {
      const info = result.data
      info.score = 3.5
      commit(RECEIVE_INFO, {info})

      typeof cb === 'function' && cb()
    }
  },

  // 异步获取商家评价列表
  async getRatings({commit}, cb) {
    const result = await reqRatings()
    if(result.code===0) {
      const ratings = result.data
      commit(RECEIVE_RATINGS, {ratings})

      typeof cb === 'function' && cb()
    }
  },

  // 异步获取商家商品列表
  async getGoods({commit}, cb) {
    const result = await reqGoods()
    if(result.code===0) {
      const goods = result.data
      commit(RECEIVE_GOODS, {goods})
      // 如果组件中传递了接收消息的回调函数, 数据更新后, 调用回调通知调用的组件
      typeof cb === 'function' && cb()
    }
  },



  //对购物操作的加减
  updateFoodCount ({commit},{isAdd,food}) {
    if (isAdd) {
      commit(ADD_FOOD_COUNT,{food})
      // console.log(food.count)
    }else{
      commit(REDUCE_FOOD_COUNT,{food})
    }
  }
}


