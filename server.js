const express = require('express')
const bodyParser = require('body-parser')
const passport = require('passport')
const path = require('path');
const app = express();
const users = require('./routes/user')
const upload = require('./routes/upload')
const news = require('./routes/news')

// bodyParser middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

// 设置passport登录验证
require('./config/passport')(passport);

// 允许跨域
app.all('*', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization")
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS")
    res.header("X-Powered-By", ' 3.2.1')
    next();
});

// 设置静态文件文件夹
app.use(express.static(path.join(__dirname, 'public')))

// 配置路由
app.use('/', users)
app.use('/', upload)
app.use('/news', news)

// 监听服务器
const port = 8080;
app.listen(port, '0.0.0.0', (req, res) => {
    console.log(`Server is runing, Address http://0.0.0.0:${port}`);
})