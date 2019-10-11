import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import cart from './views/cart.vue'
import sflower from './views/sflower.vue'
import detail from './views/detail.vue'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/cart',
      component: cart
    },
    {
      path: '/sflower',
      component: sflower
    },
     {
      path: '/detail',
      component: detail
    },
  ]
})
