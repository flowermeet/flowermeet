import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import sdetails from './components/sdetails.vue'
import sallflowers from './views/sallflowers.vue'
import sppf from './views/sppf.vue'
import scake from './views/scake.vue'
import sgift from './views/sgift.vue'
import sflowerbasket from './views/sflowerbasket.vue'
import splant from './views/splant.vue'

Vue.use(Router)
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/sallflowers',//鲜花
      component: sallflowers
    },
    {
      path: '/sppf',//永生花
      component: sppf
    },
    {
      path: '/scake',//蛋糕
      component: scake
    },
    {
      path: '/sgift',//礼品 
      component: sgift
    },
    {
      path: '/sflowerbasket',//礼篮
      component: sflowerbasket
    },
    {
      path: '/splant',//绿植
      component: splant
    }
  ]
})
