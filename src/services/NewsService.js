import BaseApiService from './BaseApiService'

export default {
  async topHeadlines(params) {
    const response = await BaseApiService.get('/top-headlines', params)

    return response
  }
}
