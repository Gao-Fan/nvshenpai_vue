import Vue from 'vue'
import Router from 'vue-router'
import Shop from '@/components/Shop'
import Carefree from '@/components/Carefree'
import Mine from '@/components/Mine'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Shop',
      name: 'Shop',
      component: Shop
    },
    {
      path: '/Carefree',
      name: 'Carefree',
      component: Carefree
    },
    {
    	path: '/Mine',
      name: 'Mine',
      component: Mine
    }
  ]
})
