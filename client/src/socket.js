export default {
    ws: null,
    init(config, onMessage, onError) {
        if (!this.ws) {
            this.ws = new WebSocket(`ws://0.0.0.0:8089/${config}`);
        }
        this.ws.onmessage = event => onMessage(event.data)

        this.ws.onerror = err => onError(err)

        this.ws.onclose = _ => this.ws = null
    },
    send(text) {
        this.ws.send(text)
    }
}