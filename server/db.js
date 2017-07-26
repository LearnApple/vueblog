/**
 * Created by zhangting on 2017/7/17.
 */
var mongoose = require('mongoose')
// var db = mongoose.createConnection('mongodb://127.0.0.1:27017/NodeJS')
var DB_URL = 'mongodb://127.0.0.1:27017/blog'
var moment = require('moment')

/**
 * 连接
 */
mongoose.connect(DB_URL)

/**
 * 连接成功
 */
mongoose.connection.on('connected', function () {
  console.log('Mongoose connection open to ' + DB_URL)
})

/**
 * 连接异常
 */
mongoose.connection.on('error', function (err) {
  console.log('Mongoose connection error: ' + err)
})

/**
 * 连接断开
 */
mongoose.connection.on('disconnected', function () {
  console.log('Mongoose connection disconnected')
})

const UserSchema = new mongoose.Schema({
  username: String,
  password: String
})
const BlogSchema = new mongoose.Schema({
  title: { type: String },
  content: {type: String},
  createTime: {type: Date,
    default: moment().format('YYYY-MM-DD HH:mm:ss')}
})
/** ************ 定义模型Model ************ **/
const Models = {
  User: mongoose.model('User', UserSchema),
  Blog: mongoose.model('Blog', BlogSchema)
}

module.exports = Models
