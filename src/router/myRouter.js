import Vue from 'vue'
import myRouter from '../plugins/myRouter/install'

import Home from '../view/myRouter/home'
import Cart from '../view/myRouter/cart'
import Classify from '../view/myRouter/classify'
import My from '../view/myRouter/my'

Vue.use(myRouter)

const routes = [
    { path: '/',name: 'index',component: Home,meta:{title:'myRouter'} }, 
    // 首页
    { 
        path: '/home',
        name: 'home',
        component: Home,
        children:[
            { path: '/my',name: 'my',component: My,meta:{title:'首页-子页面'} }
        ],
        meta:{title:'首页'} 
    }, 
    // 购物车
    { path: '/cart',name: 'cart',component: Cart,meta:{title:'首页'} }, 
    // 分类
    { path: '/classify',name: 'classify',component: Classify,meta:{title:'首页'} }, 
]

const router = new myRouter({
    mode:'history',
    routes
})

/** 
 * 路由导航守卫
 */
router.beforeEach((to,from,next)=>{
    console.log('全局导航守卫  beforeEach')
    next()
})

export default router