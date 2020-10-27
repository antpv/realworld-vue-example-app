import BaseApiService from './BaseApiService'

export default {
  async getTopHeadlines(params) {
    const response = await BaseApiService.get('/top-headlines', { params })

    return response
  }
}
