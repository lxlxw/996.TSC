// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueProgressBar from 'vue-progressbar'
import App from './App'
import router from './router'
import { Button, Dialog, Icon, Card, Upload, Slider } from 'element-ui'
import '@/assets/vue.css'
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: '/static/logo.png',
  loading: '/static/loading.gif',
  attempt: 1
})
Vue.use(Button)
Vue.use(Dialog)
Vue.use(Icon)
Vue.use(Card)
Vue.use(Upload)
Vue.use(Slider)
Vue.use(VueProgressBar)

Vue.config.productionTip = false

/* eslint-disable no-new */
window.app = new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
