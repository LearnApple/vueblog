<template>
  <div class="header">
    <!--<img src="../../assets/logo.png">-->
    <nav>
      <li><router-link to="/">vue参考文档</router-link></li>
      <li><router-link to="/blogList">叶子的博客</router-link></li>
      <li><router-link to="/admin">博客管理</router-link></li>
      <li><router-link to="/login">登录</router-link></li>
      <li><router-link to="/writeblog">写博客</router-link></li>
    </nav>
  </div>
</template>

<script>
  module.exports = {}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .header {
    text-align: center;
    padding: 0 60px;
  }
  nav {
    overflow: auto;
  }
  nav li{
    float: left;
    text-align: center;
    list-style-type: none;
  }
  li a {
    display: block;
    text-decoration: none;
    padding:0 20px;
  }
</style>
