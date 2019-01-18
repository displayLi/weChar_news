const mysql = require('mysql')
const address = require('./config')

// mysql connect
const connection = mysql.createConnection(address.url);

// 连接数据库
connection.connect(err => {
    if (err) throw err;
    console.log('MySQL is Connected...');
})

module.exports = connection