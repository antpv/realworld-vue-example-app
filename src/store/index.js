import Vue from 'vue'
import Vuex from 'vuex'
import topHeadlines from '@/store/modules/topHeadlines'

Vue.use(Vuex)

const state = () => ({
  appLocale: 'ru',
  articleLocale: 'ru'
})

export default new Vuex.Store({
  state,
  modules: {
    topHeadlines
  }
})
