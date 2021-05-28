import express from 'express'
import http from 'http'
class Server {
    constructor() {
        this.instance = () => new express()
        this.http = http
    }

    addHook() {
        return express.static('public')
    }
}

export default Server