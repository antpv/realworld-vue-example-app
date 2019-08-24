import axios from 'axios'

const instance = axios.create()

class BaseService {
  static get axios() {
    return instance
  }
}

export default BaseService
