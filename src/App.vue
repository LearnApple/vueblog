<template>
  <div id="app" class="well">
    <v-header></v-header>
    <!--<router-link to="/">叶子的博客</router-link>
    <router-link to="/">博文</router-link>
    <router-link to="/">管理</router-link>-->
    <div class="container">
      <router-view></router-view>
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script>
  import header from './components/header/header.vue'
  import footer from './components/footer/footer.vue'

  export default {
    name: 'app',
    components: {
      'v-header': header,
      'v-footer': footer
    }
}
</script>

<style>
  body {
    background-color: beige;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  margin-top: 60px;
}
  .container {
    /*background-color: aquamarine;*/
    padding: 0px 60px;
  }
</style>
