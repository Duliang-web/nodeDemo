import { createAPI } from '@/common'

export default {
  postLogin: config => createAPI('/apis/login', 'post', config)
}
