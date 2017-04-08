import React from "react"
import ReactDOM from "react-dom"

import App from "./components/App"
import "./components/root.css"

import api from "./client/api"

if (module.hot)
  module.hot.accept()

window.api = api

// alert(`${location.protocol}//${location.hostname}:3001`)

ReactDOM.render(
  <App />,
  document.getElementById("root")
)
