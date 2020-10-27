import axios from 'axios'

const instance = axios.create({
  baseURL: `${process.env.VUE_APP_API_URL}`,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
})

instance.interceptors.request.use(config => {
  config.params = config.params || {}
  config.params['token'] = process.env.VUE_APP_API_KEY

  return config
})

export default instance
