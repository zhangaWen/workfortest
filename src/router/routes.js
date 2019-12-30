import Msite from 'pages/Msite/Msite.vue'
import Search from 'pages/Search/Search.vue'
import Order from 'pages/Order/Order.vue'
import Profile from 'pages/Profile/Profile.vue'
import Login from 'pages/Login/Login.vue'
import Shop from 'pages/Shop/shop.vue'
import Goods from 'pages/Shop/goods/goods.vue'
import Rating from 'pages/Shop/rating/rating.vue'
import Info from 'pages/Shop/info/info.vue'

export default [
  {
    path: '/msite',
    component: Msite
  },
  {
    path: '/search',
    component: Search
  },
  {
    path: '/order',
    component: Order
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/shop',
    component: Shop,
    children:[
      {
        path: '/shop/goods',
        component:Goods
      },
      {
        path: '/shop/rating',
        component:Rating
      },
      {
        path: '/shop/info',
        component:Info
      },
      {
        path: '',
        redirect:'/shop/goods'
      }
    ]
  },
  {
    path: '/',
    redirect: '/msite' 
  }
]