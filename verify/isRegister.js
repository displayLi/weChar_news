const validator = require('validator')
const isEmpty = require('./empty')

module.exports = data => {
    const err = {};

    // 名字
    if (!validator.isLength(data.name, { max: 30, min: 2 })) err.name = '名字输入有误！长度不能小于2位且不能大于30位';
    if (validator.isEmpty(data.name)) err.name = '名字不能为空!';

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