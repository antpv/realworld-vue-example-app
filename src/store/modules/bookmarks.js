import { ADD_BOOKMARK } from '@/store/mutationTypes'

const state = {
  bookmarks: []
}

const mutations = {
  [ADD_BOOKMARK](state, bookmark) {
    state.bookmarks.push(bookmark)
  }
}

export default {
  namespaced: true,
  state,
  mutations
}
