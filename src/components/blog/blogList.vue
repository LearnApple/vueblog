<template>
  <div id="content">
    <div id="blog-list">
      <!--博文列表 -->
      <ul class="blog-list" v-if="blogs.length !== 0">
        <li v-for="(item,index) in blogs" class="item" :key="index">
          <router-link class="title" :to="{path: '/detail/' +item._id}">{{item.title}}</router-link>
          <!--<article class="content">{{item.content}}</article>-->
        </li>
      </ul>
      <div v-else="blogs.length === 0">
        暂时没有博客！！
      </div>
    </div>
    <div id="tags">
      <h3>标签/tags</h3>
      <ul>
        <li>h</li>
        <li>s</li>
        <li>s</li>
      </ul>
    </div>
  </div>

</template>
<script>
  export default {
    name: 'blogList',
    data: function () {
      return {blogs: []}
    },
    mounted () {
      this.getBlogs()
    },
    methods: {
      getBlogs () {
        this.$http.get('/api/getBlogs').then((response) => {
          // 响应成功回调
          console.log(response.data)
          this.blogs = response.data
        })
      }
    }
  }
</script>
<style scoped>
  #content {
    display: -webkit-flex; /* Safari */
    display: flex;
    flex-direction: row
  }
  #blog-list,#tags {
    background-color: bisque;
  }

  #blog-list {
    flex: 3;
    margin-right: 20px;
    padding: 20px 10px;
  }

  #tags {
    flex: 1;
    padding: 10px;
  }

  #tags h3 {

  }
</style>
