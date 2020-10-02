import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Europe from './views/Europe.vue'
import Vanguard from './views/Vanguard.vue'
import Tradewar from './views/Tradewar.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/europe',
      name: 'europe',
      component: Europe
    },
    {
      path: '/vanguard',
      name: 'vanguard',
      component: Vanguard
    },
    {
      path: '/tradewar',
      name: 'tradewar',
      component: Tradewar
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
