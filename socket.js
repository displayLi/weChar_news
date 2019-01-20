// webSocket
const webSocket = require('ws')
const port = 8089;
const socket = new webSocket.Server({ host: '0.0.0.0', port })
let socketSet = []

socket.on('connection', (ws, req, res) => {

    console.log('websocket 链接成功!')

    let userId = req.url.split("/");
    let isCurrentUser = true;

    socketSet.forEach(item => {
        if (item.userId == userId[2]) isCurrentUser = false
    })


    if (isCurrentUser) {
        socketSet.push({
            webSocket: ws,
            userId: userId[1]
        })
    }

    ws.on("message", data => {
        const datas = JSON.parse(data)
        socketSet.forEach(item => {
            if (item.webSocket.readyState == 1) {
                if (item.userId == datas.targetId) {
                    item.webSocket.send(
                        JSON.stringify({
                            msg: datas.msg,
                            from: datas.targetId
                        })
                    )
                }
            }
        })
    })

    ws.on("close", (code, reason) => console.log('正常关闭', code))

    ws.on('error', err => console.log('异常关闭', err))

})

console.log(`WebSocket is runing, Address ws://127.0.0.1:${port}`);