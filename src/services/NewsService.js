import BaseApiService from './BaseApiService'

export default {
  async getTopHeadlines(params) {
    // Fetch test
    const fetchResponse = await fetch(`${process.env.VUE_APP_API_URL}/top-headlines`)

    console.log(fetchResponse)
    console.log(fetchResponse.json())

    const response = await BaseApiService.get('/top-headlines', { params })

    return response
  }
}
