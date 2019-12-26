import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Header from 'components/Header/Header.vue'
import Star from 'components/Star/Star.vue'
import store from './store'
import './api'
Vue.config.productionTip = false
//注册全局组件
Vue.component('Header',Header)
Vue.component('Star',Star)
new Vue({
  render: h => h(App),
  router,//配置路由
  store   //配置vuex的store对象
}).$mount('#app')
