export default {
    ws: null,
    init(config, onMessage, onError) {
        if (!this.ws) {
            this.ws = new WebSocket(`ws://localhost:8089/${config}`);
        }
        this.ws.onmessage = event => onMessage(event.data)

        this.ws.onerror = err => onError(err)

        this.ws.onclose = _ => this.ws = null
    },
    send(text) {
        if (text !== null) {
            this.ws.send(text)
        }
    }
}