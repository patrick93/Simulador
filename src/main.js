// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Router from 'vue-router'
import Vuelidate from 'vuelidate'
import money from 'v-money'
import VueResource from 'vue-resource'

import App from './App'
import AppRouter from './routes/AppRouter'
import { createStore } from './utils/store'

import 'bootstrap/dist/css/bootstrap.css'

const store = createStore()

Vue.config.productionTip = false

Vue.use(Router)
Vue.use(Vuelidate)
Vue.use(VueResource)
Vue.use(money, {precision: 4})

Vue.mixin({
  beforeCreate () {
    const options = this.$options
    if (options.store) {
      this.$store = options.store
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: AppRouter,
  store,
  components: { App },
  template: '<App/>'
})
