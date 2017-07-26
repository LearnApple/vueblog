// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import Vuex from 'vuex'
import ElementUI from 'element-ui'
import axios from 'axios'
import 'element-ui/lib/theme-default/index.css'
// import mavonEditor from 'mavon-editor'

// use
// Vue.use(mavonEditor)
Vue.prototype.$http = axios
Vue.use(VueResource)
Vue.use(Vuex)
Vue.use(ElementUI)
// import { createStore } from './store/index.js'

Vue.config.productionTip = false
// const store = createStore()
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
