// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import './util/rem'

// my-vue-router
import myRouter from './router/myRouter'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  myRouter,
  components: { App },
  template: '<App/>'
})
