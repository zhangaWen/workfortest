/**
 * 包含n个间接更细状态数据的方法的对象
 */
import {reqAddress,reqCategorys,reqShops} from '../api'
import {RECEIVE_ADDRESS,RECEIVE_CATEGORYS,RECEIVE_SHOPS,RECEIVE_USER} from './mutation_types'
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
    commit(RECEIVE_USER,{user})
  }
}
