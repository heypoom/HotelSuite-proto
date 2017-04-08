import feathers from "feathers"
import hooks from "feathers-hooks"
import rest from "feathers-rest"
import socketio from "feathers-socketio"
import sync from "feathers-sync"
import errorHandler from "feathers-errors/handler"

import {Logger, transports} from "winston"
import cors from "cors"
import path from "path"
import cookieParser from "cookie-parser"
import bodyParser from "body-parser"

export default function middlewares() {
  this.use(feathers.static(path.join(__dirname, "public")))
  this.use(cors())
  this.use(bodyParser.json())
  this.use(bodyParser.urlencoded({extended: true}))
  this.use(cookieParser())

  this.configure(hooks())
  this.configure(rest())
  this.configure(socketio())
}
