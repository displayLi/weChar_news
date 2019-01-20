const express = require('express')
const passport = require('passport')
const multer = require('multer')
const path = require('path')
const fs = require('fs')
const connection = require('../config/mysql')
const { msg, success, error } = require('../config/config')

const router = express.Router();

// 实例multer上传 配置
const storage = multer.diskStorage({
    destination(req, file, cb) {
        //文件上传成功后会放入public下的upload文件夹
        cb(null, path.resolve(__dirname, '../public'))
    },
    filename(req, file, cb) {
        //设置文件的名字为其原本的名字，也可以添加其他字符，来区别相同文件，例如file.originalname+new Date().getTime();利用时间来区分
        cb(null, file.originalname)
    }
});

const upload = multer({ storage });


// upload 

router.post('/upload', passport.authenticate('jwt', { session: false }), upload.array('file', 9), (req, res) => {
    console.log(req.url);
    let fileItem = '';
    // 遍历添加图片路径
    for (let i = 0; i < req.files.length; i++) {
        fileItem += '//' + req.headers.host + '/public/' + req.files[i].originalname + ",";
    }

    fileItem = fileItem.substring(fileItem.lastIndexOf(','), -1);

    let base = {};
    base.userId = req.user[0].id;
    base.userName = req.user[0].name;
    base.avatar = req.user[0].avatar;
    base.imageUrl = fileItem;
    base.text = req.body.text;

    if (base.text || base.imageUrl) {

        // 存入数据库
        connection.query(`INSERT INTO base_url SET ?`, base, (err, result, field) => {
            if (err) throw err;

            connection.query(`SELECT * FROM base_url ORDER BY id DESC`, base, (err, result, field) => {
                if (err) throw err;
                return msg(res, success, '上传成功!', result, 200)
            })

        })

    } else {
        return msg(res, error, '文字和图片你都没有，发个球动态!', {}, 200)
    }

})

// 公开图片路径
router.get('/public/*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../') + '/' + req.url)
})


module.exports = router;