import NewsService from '@/services/NewsService'
import { GET_TOP_HEADLINES } from '@/store/actionTypes'
import {
  GET_TOP_HEADLINES_REQUEST,
  GET_TOP_HEADLINES_SUCCESS,
  GET_TOP_HEADLINES_FAILURE
} from '@/store/mutationTypes'

const state = {
  request: false,
  articles: [],
  totalResults: 0
}

const mutations = {
  [GET_TOP_HEADLINES_REQUEST](state) {
    state.request = true
  },

  [GET_TOP_HEADLINES_SUCCESS](state, payload) {
    const { articles, totalResults } = payload

    state.articles = articles
    state.totalResults = totalResults
    state.request = false
  },

  [GET_TOP_HEADLINES_FAILURE](state) {
    state.request = false
  }
}

const actions = {
  async [GET_TOP_HEADLINES]({ rootState, commit }, params = {}) {
    try {
      const { articleLocale } = rootState
      const response = await NewsService.getTopHeadlines({ ...params, country: articleLocale })

      commit(GET_TOP_HEADLINES_SUCCESS, response.data)
    } catch (err) {
      commit(GET_TOP_HEADLINES_FAILURE)
    }
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
