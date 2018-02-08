// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Router from 'vue-router'
import App from './App'
import AppRouter from './routes/AppRouter'
import money from 'v-money'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'

Vue.config.productionTip = false

Vue.use(Router)
Vue.use(money, {precision: 4})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: AppRouter,
  components: { App },
  template: '<App/>'
})
