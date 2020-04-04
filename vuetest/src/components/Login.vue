<!-- Login -->
<template>
  <div class="login">
    <el-form
      ref="form"
      :model="form"
      :rules="rules"
      label-width="80px">
      <el-form-item
        label="账号"
        prop="account">
        <el-input
          v-model="form.account"
          placeholder="请输入用户名或手机号码"/>
      </el-form-item>
      <el-form-item
        label="密码"
        prop="password">
        <el-input
          type="password"
          v-model="form.password"
          placeholder="请输入密码"/>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          @click="handleLogin('form')">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import * as apis from '@/apis'

export default {
  name: 'Login',
  data () {
    let validateSpace = (rule, value, callback) => {
      if (value.trim() === '') {
        callback(new Error('输入内容不能全为空格'))
      } else {
        callback()
      }
    }
    return {
      form: {
        account: '',
        password: ''
      },
      rules: {
        account: [
          {required: true, message: '请输入用户名', trigger: ['change', 'blur']},
          { validator: validateSpace, trigger: 'blur' }
        ],
        password: [
          {required: true, message: '请输入密码', trigger: ['change', 'blur']},
          { validator: validateSpace, trigger: 'blur' }
        ]
      }
    }
  },
  components: {},
  computed: {},
  mounted () {},
  methods: {
    async postLogin () {
      let data = {
        account: this.form.account,
        user_password: this.form.password
      }
      // 调用登录接口
      let res = await apis.Common.postLogin({
        data: data
      })
      if (res.data.status === 0) {
        this.$router.push('/content')
      }
    },
    handleLogin (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.postLogin()
        }
      })
    }
  }
}
</script>

<style lang='scss' scoped>
.login{
  .el-form{
    width:400px;
  }
}
</style>
