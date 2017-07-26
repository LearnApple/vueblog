<template>
  <div id="editor">
    <div class="title">
      <el-input v-model="title"id="blog-title" placeholder="请输入文章标题！"></el-input>
      <el-button type="primary" @click="publish">发布</el-button>
      <el-button type="primary" @click="publish">存草稿</el-button>
    </div>
    <mavonEditor v-model="content" @change=""/>
  </div>
</template>
<script>
  import { mavonEditor } from 'mavon-editor'
  import 'mavon-editor/dist/css/index.css'

  export default {
    data () {
      return {
        title: '',
        content: ''
      }
    },
    components: {
      mavonEditor
    },
    methods: {
      publish () {
        let blog = {
          title: this.title,
          content: this.content
        }
        this.$http.post('/api/saveBlog', blog).then((response) => {
          console.log(response.data)
        }, response => {
          // error callback
        })
      }
    }
  }
</script>
<style>
  #editor {
    margin: 20px auto;
    width: 100%;
  }
  .title {
    font-size: larger;
    overflow: auto;
  }
  .title #blog-title{
    display: inline-block;
    line-height: 30px;
    margin: 20px 10px ;
    width: 500px;

  }

</style>
