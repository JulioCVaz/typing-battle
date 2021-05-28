class Routes {
    constructor({ instance: server }){
        this.server = server
    }

    Router() {
        this.server.get('/', (_, res) => {
            res.sendFile(__dirname + '/public/index.html')
        })
        
        this.server.get('/teste', (_, res) => {
            res.send('teste')
        })
    }
}

export default Routes