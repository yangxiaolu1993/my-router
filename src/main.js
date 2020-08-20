// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import router from './router'
import myRouter from './router/myRouter'
// import routerDemo from './router/demo'
import './util/rem'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  myRouter,
  components: { App },
  template: '<App/>'
})
