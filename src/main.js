// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'vuetify/dist/vuetify.min.css'
import 'simplemde/dist/simplemde.min.css'

import Vue from 'vue'
import Vuetify from 'vuetify'
import Vuex from 'vuex'
import VueSimplemde from 'vue-simplemde'
import hljs from 'highlight.js';

import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false

window.hljs = hljs;

Vue.use(Vuetify)
Vue.use(VueSimplemde)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})

