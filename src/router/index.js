import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


import Search from '@/views/Search.vue'
import WishList from '@/views/WishList.vue'
import Home from '@/views/Home.vue'
import StoreList from '@/views/StoreList.vue'
import History from '@/views/History.vue'
import MyPage from '@/views/MyPage.vue'
// import StorePage from '@/views/StorePage.vue'
import RegisterStore from '@/views/RegisterStore.vue'
import Manage from '@/views/Manage.vue'

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/search",
    component: Search,
  },
  {
    path: "/wishList",
    component: WishList,
  },
  {
    path: "/storeList",
    component: StoreList,
  },
  {
    path: "/history",
    component: History,
  },
  {
    path: "/myPage",
    component: MyPage,
  },
  {
    path: "/registerStore",
    component: RegisterStore,
  },
  {
    path: "/manage",
    component: Manage,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
