<template>
  <div>
    <h3>{{blog.title}}</h3>
    <!--<article>{{blog.content}}</article>-->
    <div v-html="compiledMarkdown"></div>
  </div>

</template>
<script>
  import marked from 'marked'

  export default {
    data () {
      return {
        blog: ''
      }
    },
    mounted () {
      this.getBlogById()
    },
    computed: {
      compiledMarkdown: function () {
        return marked(this.blog.content || '', { sanitize: true })
      }
    },
    methods: {
      getBlogById () {
        let id = this.$route.params.id
        this.$http.get('/api/getBlogById/' + id).then(
          res => {
            this.blog = res.data
            console.log(res.data)
          },
          res => console.log('错误' + res)
        )
      }
    }
  }
</script>
<style scoped>
  h3 {
    text-align: center;
  }
</style>
