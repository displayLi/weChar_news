const express = require('express')
const passport = require('passport')
const connection = require('../config/mysql')
const { msg, success, error } = require('../config/config')
const router = express.Router()

// 下拉刷新
router.get('/downRefresh', passport.authenticate('jwt', { session: false }), (req, res) => {
    connection.query(`SELECT * FROM base_url ORDER BY id DESC`, (err, result, field) => {
        if (err) throw err;

        if (result) {
            let newArr = [];
            for (let i = 0; i < 3; i++) {
                newArr.push(result[i]);
            }
            return msg(res, success, '刷新成功！', newArr, 200)
        }
        return msg(res, success, '暂无数据!', {}, 200)
    })
})


// 上拉加载
router.post('/upLazyload', passport.authenticate('jwt', { session: false }), (req, res) => {

    let currentPage = req.body.page,
        size = req.body.size;

    if (currentPage !== '' && currentPage !== '0' && size !== '' && size !== '0') {

        connection.query(`SELECT * FROM base_url ORDER BY id DESC`, (err, result, field) => {

            if (err) throw err;

            if (result) {
                let index = size * (currentPage - 1);
                let newArr = [];
                let flag = false;
                for (let i = index; i < size * currentPage; i++) {
                    if (result[i] !== null) {

                        newArr.push(result[i]);
                    }
                }

                return msg(res, success, '加载成功！', newArr, 200)

            }
        })
    }
    else {
        return msg(res, error, '数据格式错误请检查', {}, 200)
    }

})


module.exports = router;