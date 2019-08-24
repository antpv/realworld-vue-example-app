import BaseService from './BaseService'

export default class NewsService extends BaseService {
  static async topHeadlines(params) {
    return await this.axios.get('/top-headlines', params)
  }
}
