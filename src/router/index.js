import Vue from 'vue'
import Router from 'vue-router'
import Shop from '@/components/Shop'
import Carefree from '@/components/Carefree'
import Mine from '@/components/Mine'
Vue.use(Router)

export default new Router({
  routes: [
    {
<<<<<<< HEAD
      path: '/',
      name: 'Home',
      component: ()=>import('@/components/Home')
    },
    {
      path: '/home',
      name: 'Home',
      component: ()=>import('@/components/Home'),
    },
    {
      path: '/product/:fid',
      name: 'Product',
      component: ()=>import('@/components/Product')
    },
    {
      path: '/special',
      name: 'Special',
      component: ()=>import('@/components/Special')
=======
      path: '/Shop',
      name: 'Shop',
      component: Shop
>>>>>>> vue_a
    },
    {
      path: '/Carefree',
      name: 'Carefree',
      component: Carefree
    },
    {
<<<<<<< HEAD
      path: '/showphoto',
      name: 'ShowPhoto',
      component: ()=>import('@/components/ShowPhoto')
<<<<<<< HEAD
    },
    {
      path: '/shopcar',
      name: 'ShopCar',
      component: ()=>import('@/components/ShopCar')
=======
=======
    	path: '/Mine',
      name: 'Mine',
      component: Mine
>>>>>>> vue_a
>>>>>>> d315cfa9a0fd55bc0c3eb239c2c547f46f1e3c4a
    }
  ]
})
