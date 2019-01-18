const express = require('express');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const connection = require('../config/mysql')
const { msg, success, error } = require('../config/config')
const isRegister = require('../verify/isRegister')
const isLogin = require('../verify/isLogin')
const router = express.Router()

// register 

router.post('/register', (req, res) => {

    let { err, empty } = isRegister(req.body);
    if (!empty) return msg(res, error, '出现错误!', err, 200);

    connection.query(`SELECT * FROM users WHERE email='${req.body.email}'`, (err, result, field) => {
        if (err) throw err;
        if (result.length > 0) return msg(res, error, '该邮箱已被注册请更换邮箱再试!', {}, 200);

        bcrypt.genSalt(10, (err, salt) => {
            if (err) throw err;
            bcrypt.hash(req.body.password, salt, (err, hash) => {

                if (err) throw err;
                req.body.password = hash;
                req.body.avatar = `http://q1.qlogo.cn/g?b=qq&nk=${req.body.email}&s=100`
                connection.query(`INSERT INTO users SET ?`, req.body, (err, result, field) => {
                    if (err) throw err;

                    req.body.password = "******";
                    return msg(res, success, '注册成功!', req.body, 200);
                })
            });
        });

    })
})


// login

router.post('/login', (req, res) => {
    let { err, empty } = isLogin(req.body);
    if (!empty) return msg(res, error, '出现错误!', err, 200);

    connection.query(`SELECT * FROM users WHERE email='${req.body.email}'`, (err, [result], field) => {
        if (!result) return msg(res, error, '该用户不存在请去注册!', {}, 200);
        bcrypt.compare(req.body.password, result.password, (err, isMath) => {
            if (isMath) {

                const rolu = {
                    name: result.name,
                    id: result.id,
                    email: result.email,
                    avatar: result.avatar
                }

                const token = 'Bearer ' + jwt.sign(rolu, 'secret', { expiresIn: 3600 });

                result.password = "******";
                result.token = token;
                msg(res, success, '登录成功!', result, 200);

            } else {
                msg(res, error, '密码输入错误!', {}, 200);
            }
        });
    })
})

// 获取所有用户接口
router.get('/getAllUser', (req, res) => {

    connection.query(`SELECT * FROM users`, (err, result, field) => {

        if (result.length !== 0) {
            return msg(res, success, '查询成功!', result, 200);
        } else {
            return msg(res, error, '查询失败!', {}, 200);
        }
    })
})

module.exports = router;