import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'

Vue.use(Vuex)

// 定义变量
const state = {
    name: 'zll'
}

export default new Vuex.Store({
  state,
  mutations
});
