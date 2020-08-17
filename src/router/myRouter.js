import Vue from 'vue'
import myRouter from '../plugins/myRouter/install'

import Index from '../view/home'
import Home from '../view/myRouter/home'
import Cart from '../view/myRouter/cart'
import Classify from '../view/myRouter/classify'
import My from '../view/myRouter/my'

Vue.use(myRouter)

const routes = [

    { path: '/index',name: 'index',component: Index,meta:{title:'首页'} }, // 首页
    { path: '/home',name: 'home',component: Home,meta:{title:'首页'} }, // 首页
    { path: '/cart',name: 'cart',component: Cart,meta:{title:'首页'} }, // 购物车
    { path: '/classify',name: 'classify',component: Classify,meta:{title:'首页'} }, // 分类
    { path: '/my/:userId',name: 'my',component: My,meta:{title:'首页'} }, // 我的

    { path: '*', redirect: { name: 'index' } },
]

const router = new myRouter({
    mode:'hash',
    routes
})

export default router