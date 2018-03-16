import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

var router = new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: ()=>import('@/components/HelloWorld')
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
    }
    // ,
    // {
    //   path: '/product/:fid',
    //   name: 'Product',
    //   component: ()=>import('@/components/Product')
    // }
  ]
})

router.beforeEach( (to,from,next)=>{
	next()
})

export default router