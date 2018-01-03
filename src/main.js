// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import filters from './filters.js'
import router from './router'
import './plugins/plugins.js'
import store from './store/store'

const SOCKET_URL = 'http://localhost:3003'
import VueSocketio from 'vue-socket.io'
import socketio from 'socket.io-client'
Vue.use(VueSocketio, socketio(SOCKET_URL), store);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  filters,
  template: '<App/>',
  components: { App }
})
