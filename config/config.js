const url = {
    host: 'localhost',
    user: 'root',
    password: 'lizhuang5211314',
    database: 'wechar_news'
}

const msg = (res, code, msg, data, status) => {
    return res.status(status).json({ code, msg, data, status })
}

const success = 0, error = -1;


module.exports = {
    url,
    msg,
    success,
    error
}