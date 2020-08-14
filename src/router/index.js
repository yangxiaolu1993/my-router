import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/view/home'
import HashRouter from '@/view/myRouter/hashRouter.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {path: '/hashRouter',name: 'hashRouter',component: HashRouter,meta:{title:'hash 路由'}},  // 手写路由 hash
  ]
})
