// infraestructure
// import Routes from './infrastructure/routes'
import SocketHub from './infrastructure/sockethub'
// models
import Cors from './model/Cors'
import Server from './model/Server'
import Socket from './model/Socket'

const server = new Server()
const instance = server.instance()
const httpServer = server.http.createServer(instance)
const cors = new Cors()
const io = new Socket().io(httpServer)

instance.use(cors)
instance.use(server.addHook())


// new Routes({ instance }).Router()
new SocketHub({ io }).Broadcast()

httpServer.listen('3333')