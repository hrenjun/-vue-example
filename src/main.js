// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/common.css'
import './assets/css/media50px.min.css'
import './assets/scripts/index.js'
import echarts from '../node_modules/echarts'
Vue.prototype.$echarts = echarts;
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }

})
