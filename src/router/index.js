import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import blog from '@/components/blog/blogList'
import login from '@/components/login/login'
import admin from '@/components/admin/admin'
import writeBlog from '@/components/blog/writeBlog'
import blogDetail from '@/components/blog/blogDetail'
Vue.use(Router)

export default new Router({

  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/bloglist',
      name: 'blog',
      component: blog
    },
    {
      path: '/detail/:id',
      name: 'blogDetail',
      component: blogDetail
    },
    {
      path: '/admin',
      name: 'admin',
      meta: {
        requiresAuth: true // 需要登录
      },
      component: admin
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/writeblog',
      name: 'write',
      component: writeBlog
    }
  ]
})
