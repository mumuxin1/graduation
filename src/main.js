// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
// mint-ui vue移动端组件库
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import 'amfe-flexible' // 自适应布局
import store from './store/index'
Vue.use(MintUI)
Vue.use(Vuex)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
