import Vue from 'vue'
import  './mock/mock-server.js'
import App from './App.vue'
import router from './router'
import Header from 'components/Header/Header.vue'
import Star from 'components/Star/Star.vue'
import CartControl from 'components/CartControl/CartControl.vue'
import store from './store'
import './api'
import VueLazyLoad from 'vue-lazyload'
//引入图片
import loading from './common/images/loading.gif'
Vue.config.productionTip = false
//注册全局组件
Vue.component('Header',Header)
Vue.component('Star',Star)
Vue.component('CartControl',CartControl)
//声明使用vue插件 ==》全局指令lazy
Vue.use(VueLazyLoad,{
  loading
})
new Vue({
  render: h => h(App),
  router,//配置路由
  store   //配置vuex的store对象
}).$mount('#app')
