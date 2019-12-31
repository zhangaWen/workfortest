// import Msite from 'pages/Msite/Msite.vue'
// import Search from 'pages/Search/Search.vue'
// import Order from 'pages/Order/Order.vue'
// import Profile from 'pages/Profile/Profile.vue'
// import Login from 'pages/Login/Login.vue'
// import Shop from 'pages/Shop/shop.vue'
// import Goods from 'pages/Shop/goods/goods.vue'
// import Rating from 'pages/Shop/rating/rating.vue'
// import Info from 'pages/Shop/info/info.vue'
const Msite = () => import ('pages/Msite/Msite.vue')
const Search = () => import ('pages/Search/Search.vue')
const Order = () => import ('pages/Order/Order.vue')
const Profile = () => import ('pages/Profile/Profile.vue')
const Login = () => import ('pages/Login/Login.vue')
const Shop = () => import ('pages/Shop/shop.vue')
const Goods = () => import ('pages/Shop/goods/goods.vue')
const Rating = () => import ('pages/Shop/rating/rating.vue')
const Info = () => import ('pages/Shop/info/info.vue')

export default [
  {
    path: '/msite',
    component: Msite,
    meta: {
      ShowFooter: true
    },
  },
  {
    path: '/search',
    component: Search,
    meta: {
      ShowFooter: true
    },
  },
  {
    path: '/order',
    component: Order,
    meta: {
      ShowFooter: true
    },
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      ShowFooter: true
    },
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