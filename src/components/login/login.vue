<template>
  <div>
    <label for="username">用户名</label>
    <input class="form-control" type="text" id="username" v-model="username">
    <label for="password">密码</label>
    <input class="form-control" type="password" id="password" v-model="password">
    <button type="submit" class="btn btn-default" @click="login">登录</button>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      login () {
        let user = {
          username: this.username,
          password: this.password
        }
       /* this.$http.post('/login', {user: user})
       .then(response => {
       this.someData = response.body
       }, response => {
       })
       } */
        // 获取已有账号密码
        /* this.$http.get('/api/login/getAccount')
        .then((response) => {
          // 响应成功回调
          console.log(response)
          let user = {
            account: this.username,
            password: this.password
          }
          // 创建一个账号密码
          return this.$http.post('/api/login/createAccount', user)
        })
          .then((response) => {
            console.log(response)
          })
          .catch((reject) => {
            console.log(reject)
          }) */
        this.$http.post('/api/login', user).then((response) => {
          if (response.data.code === 200) {
            // 响应成功回调
            // this.$message(response.data.message)
            this.$alert(response.data.message, '提示', {
              confirmButtonText: '确定',
              callback: action => {
                this.$message({
                  type: 'success',
                  message: response.data.message
                })
                this.$router.push({
                  name: 'admin'
                })
              }
            })
          } else {
            this.$alert(response.data.message, '提示', {
              confirmButtonText: '确定',
              callback: action => {
                this.$message({
                  type: 'error',
                  message: response.data.message
                })
                this.$router.push({
                  name: 'loign'
                })
              }
            })
          }
        }, response => {
          // error callback
        })
      }
    }
  }
</script>
<style>
</style>
