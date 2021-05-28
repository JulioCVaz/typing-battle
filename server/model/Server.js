import express from 'express'

class Server {
    constructor() {
        this.instance = () => new express()
    }

    addHook() {
        return express.static('public') 
    }
}

export default Server