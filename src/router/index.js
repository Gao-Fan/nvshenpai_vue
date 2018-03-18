import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

var router = new Router({
  routes: [
  // 下边作者耿劲腾
    {
      path: '/Shop',
      name: 'Shop',
      component: ()=>import('@/components/Shop')
    },
    {
      path: '/Carefree',
      name: 'Carefree',
      component: ()=>import('@/components/Carefree')
    },
    {
      path: '/Mine',
      name: 'Mine',
      component: ()=>import('@/components/Mine')
    },
    // 上边作者耿劲腾
    {
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
    },
    {
      path: '/trademark',
      name: 'TradeMark',
      component: ()=>import('@/components/TradeMark')
    },
    {
      path: '/showphoto',
      name: 'ShowPhoto',
      component: ()=>import('@/components/ShowPhoto')
    },
    {
      path: '/shopcar',
      name: 'ShopCar',
      component: ()=>import('@/components/ShopCar')
    }
  ]
})

router.beforeEach( (to,from,next)=>{
	next()
})

export default router