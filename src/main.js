// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
// mint-ui vue移动端组件库
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import 'amfe-flexible' // 自适应布局
import Store from './store/index' 
Vue.use(MintUI)
Vue.use(Vuex)
Vue.config.productionTip = false
const state = {
  name: 'zll'
}

export default new Vuex.Store({
  state
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  Store,
  components: { App },
  template: '<App/>'
})
