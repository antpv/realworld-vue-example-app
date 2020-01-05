import Vue from 'vue'
import Vuex from 'vuex'
import topHeadlines from '@/store/modules/topHeadlines'
import bookmarks from '@/store/modules/bookmarks'

Vue.use(Vuex)

const state = () => ({
  appLanguage: 'ru',
  contentLanguage: 'ru'
})

export default new Vuex.Store({
  state,
  modules: {
    topHeadlines,
    bookmarks
  }
})
