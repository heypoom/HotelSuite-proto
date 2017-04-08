import io from "socket.io-client"

import feathers from "feathers/client"
import hooks from "feathers-hooks"
import socketio from "feathers-socketio/client"
import authentication from "feathers-authentication-client"
import reduxifyServices from "feathers-reduxify-services"

const IS_CLIENT = (typeof window !== "undefined")
const TOKEN_KEY = "feathers-jwt"

const app = feathers()

const socketURI = IS_CLIENT ? `${location.protocol}//${location.hostname}:3001` : ""
const socket = io(socketURI, {transports: ["websocket"]})

app.configure(hooks())
app.configure(socketio(socket))

app.configure(authentication())

const servicesList = ["debug"]

export const services = reduxifyServices(app, servicesList)

export const reAuth = () => {
  if (localStorage.getItem(TOKEN_KEY)) {
    app.authenticate({
      strategy: "jwt",
      accessToken: localStorage.getItem(TOKEN_KEY)
    })
    .then(response => (app.passport.verifyJWT(response.accessToken)))
    .then(payload => {
      app.set("jwt", payload)
      return app.service("accounts").find()
    })
    .then(user => {
      console.info("Reauthentication Success.")
      app.set("user", user)
    })
    .catch(err => {
      console.error("Reauthentication Failure.", err)
    })
  }
}

export default app
