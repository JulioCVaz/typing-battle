import Routes from './infrastructure/routes'
import Cors from './model/Cors'
import Server from './model/Server'

const server = new Server()
const instance = server.instance()
const cors = new Cors()

instance.use(cors)
instance.use(server.addHook())

new Routes({ instance }).Router()

instance.listen('3333')