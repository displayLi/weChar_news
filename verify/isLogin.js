const validator = require('validator')
const isEmpty = require('./empty')

module.exports = data => {
    const err = {};

    // 邮箱
    if (!validator.isEmail(data.email)) err.email = '邮箱输入有误！';
    if (validator.isEmpty(data.email)) err.email = '邮箱不能为空！';

    // 密码
    if (!validator.isLength(data.password, { max: 16, min: 4 })) err.password = '密码输入有误！长度不能小于4位且不能大于16位';
    if (validator.isEmpty(data.password)) err.password = '密码不能为空！';

    return {
        err,
        empty: isEmpty(err)
    }
}