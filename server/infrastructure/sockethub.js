class SocketHub {
    constructor({ io }) {
        this.io = io
    }

    Broadcast() {
        this.io.on('connect', socket => {
            console.log('io: ', socket.id)
            this.io.send("Hello!")
        })
    }
}

export default SocketHub