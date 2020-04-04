import { Message } from 'element-ui'
import axios from 'axios'

const _axios = axios.create({
  timeout: 20000 // request timeout
})

_axios.interceptors.request.use(
  (request) => {
    return request
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

_axios.interceptors.response.use(
  (response) => {
    if (response.data.status !== 0) {
      Message.error(response.data.msg)
    }
    return response
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

export default _axios
