import {RECEIVE_ADDRESS,RECEIVE_CATEGORYS,RECEIVE_SHOPS,RECEIVE_USER,RESET_USER,RECEIVE_TOKEN,
  RESET_TOKEN,RECEIVE_GOODS,RECEIVE_INFO,RECEIVE_RATINGS,ADD_FOOD_COUNT,REDUCE_FOOD_COUNT} from './mutation_types'
import Vue from 'vue'
  export default {
  [RECEIVE_ADDRESS] (state,address) {
    state.address = address
  },
  [RECEIVE_CATEGORYS] (state,categorys) {
    state.categorys = categorys
  },
  [RECEIVE_SHOPS] (state,shops) {
    state.shops = shops
  },
  [RECEIVE_USER] (state,{user}) {
    state.user = user
  },
  [RECEIVE_TOKEN] (state,{token}) {
    state.token = token
  },
  [RESET_USER] (state) {
    state.user = {}
  },
  [RESET_TOKEN] (state) {
    state.token = ''
  },


  //商品详细信息
  [RECEIVE_INFO](state, {info}) {
    state.info = info
  },
  
  [RECEIVE_RATINGS](state, {ratings}) {
    state.ratings = ratings
  },
  
  [RECEIVE_GOODS](state, {goods}) {
    state.goods = goods
  },


  //食物数量
  [ADD_FOOD_COUNT] (state,{food}) {
    if(food.count) {
      food.count++
    }else{
      //给food添加一个新的属性，属性名是count ===>   没有数据绑定
      // food.count = 1
      Vue.set(food,'count',1)
      //添加到购物车
      state.cardFood.push(food)
    }
    
  },
  [REDUCE_FOOD_COUNT] (state,{food}) {
    if(food.count) {
      food.count--
      //一旦数量减为0从购物车中删除
      if (food.count===0) {
        state.cardFood.splice(state.cardFood.indexOf(food),1)
      }
    }
  }
}