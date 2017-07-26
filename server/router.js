/**
 * Created by zhangting on 2017/7/19.
 */
var express = require('express')
var router = express.Router()
var Models = require('./db.js')
const jwt = require('jsonwebtoken')

router.post('/api/login', (req, res) => {
  // var user = findUser(, req.body.password)
  let username = req.body.username
  Models.User.find({'username': username},
    function (err, result) {
      if (err) {
        res.json({
          'code': 500,
          'message': '内部服务器错误'
        })
        return
      }
      if (result.length === 0) {
        res.json({
          'code': 401,
          'message': '找不到用户名'
        })
        return
      }
      // console.log(result);
      let dbPassword = result[0].password
      if (dbPassword === req.body.password) {
        let token = jwt.sign({ username }, 'vueblog', { expiresIn: 60 * 60 * 24 * 30 })
        res.cookie('token', token, { maxAge: 60 * 60 * 24 * 30 * 1000 })
        res.cookie('username', username, { maxAge: 60 * 60 * 24 * 30 * 1000 })
        res.json({
          'code': 200,
          'message': '登录成功'
        })
        return
      } else {
        res.json({
          'code': 401,
          'message': '密码错误'
        })
        return
      }
    })
  /* if (user) {
    res.json({
      'code': 200,
      'message': '登录成功'
    })
  } else {
    res.json({'code': 500, 'message': '用户名或密码错误！'})
  } */
})
// 创建账号接口
router.post('/api/saveBlog', (req, res) => {
  // 这里的req.body能够使用就在index.js中引入了const bodyParser = require('body-parser')
  let newBlog = new Models.Blog({
    title: req.body.title,
    content: req.body.content
  })
  // 保存数据newBlog数据进mongoDB
  newBlog.save((err, data) => {
    if (err) {
      res.send(err)
    } else {
      res.send('saveBlog successed')
    }
  })
})
// 获取已有账号接口
router.get('/api/getBlogs', (req, res) => {
  // 通过模型去查找数据库
  Models.Blog.find((err, data) => {
    if (err) {
      res.send(err)
    } else {
      res.send(data)
    }
  })
})

// 根据id获取博客
router.get('/api/getBlogById/:id', (req, res) => {
  // 通过模型去查找数据库
  Models.Blog.findOne({_id: req.params.id}, (err, data) => {
    console.log('id', req.params.id)
    if (err) {
      res.send(err)
    } else {
      console.log(data)
      res.send(data)
    }
  })
})
module.exports = router
