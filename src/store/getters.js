export default {
  /**
   * 每次加减都会从新计算
   */
  // cardFoods (state) {
  //   const {goods} = state
  //   const arr = []
  //   goods.forEach(good =>{
  //     good.foods.forEach(food =>{
  //       if(food.count>0) {
  //         arr.push(food)
  //       }
  //     })
  //   })
  //   return arr
  // }

  //总数量
  totalCount (state) {
    console.log(state.cardFood)
    return state.cardFood.reduce((pre,food)=>{
      pre+food.count
    },0)
  },
  //总价格
  totalPrice (state) {
    return state.cardFood.reduce((pre,food)=>{
      pre+food.count*food.price
    },0)
  }
}