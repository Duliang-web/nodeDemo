import axios from './axios'

/**
 * 创建异步请求
 * @param url           除base url外的部分
 * @param method        method: get, post, delete, input
 * @param config        参数相关
 */
const createAPI = (url, method, config = {}) => {
  return axios({
    url,
    method,
    ...config
  })
}

export {
  createAPI
}
