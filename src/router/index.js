import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/view/home'

import VueRouter from '@/view/vueRouter/demo'
import VueFoo from '@/view/vueRouter/foo'
import VueBar from '@/view/vueRouter/bar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    // {
    //   path: '/vuerouter',
    //   name: 'vuerouter',
    //   component: VueRouter
    // },
    {
      path: '/foo',
      name: 'foo',
      component: VueFoo
    },
    {
      path: '/bar',
      name: 'bar',
      component: VueBar
    },
    // {path: '/hashRouter',name: 'hashRouter',component: HashRouter,meta:{title:'hash 路由'}},  // 手写路由 hash
  ]
})
