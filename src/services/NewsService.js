import BaseService from './BaseService'

export default class NewsService extends BaseService {
  static async topHeadlines(params) {
    const response = await this.axios.get('/top-headlines', params)

    return response
  }
}
