import React, {Component} from "react"

import api from "../../client/api"

import stopwatchIcon from "./soccer.svg"
import unlockIcon from "./door.svg"
import arrowDownIcon from "./arrowdown.svg"
import closeIcon from "./close.svg"

import monitorIcon from "./monitor.png"
import lampIcon from "./lamp.png"
import cloudIcon from "./cloud.png"
import dropIcon from "./dropper.png"

import "./App.css"

const Card = ({s = "", children, onClick}) => (
  <div className={`card ${s}`} onClick={onClick}>
    {children}
  </div>
)

const ActionBar = ({title}) => (
  <div className="navbar">
    Poseidon Hotel
  </div>
)

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      checked: false,
      on: [...Array(4)].map(e => true)
    }
  }

  checkIn = () => {
    api.service("debug").find().then(console.log)
    this.setState({checked: true})
  }

  checkOut = () => {
    this.setState({checked: false})
  }

  on = i => {
    this.setState({[`on${i}`]: !this.state[`on${i}`]})
    api.service("debug").create({device: i, state: this.state[`on${i}`]}).then(console.log)
  }

  render = () => (
    <div className="root">
      <ActionBar />
      <div className="container">
        {this.state.checked ? (
          <div>
            <Card s="accentIn main">
              <div>
                <h2 className="roomNo">
                  Have a Great Time!
                </h2>
                <img
                  src={unlockIcon}
                  onClick={this.checkOut}
                  className="icon shadow pos"
                />
                <img
                  src={closeIcon}
                  onClick={this.checkOut}
                  className="icon shadow fab"
                />
              </div>
            </Card>
            <div className="row">
              {[{i: lampIcon}, {i: monitorIcon}, {i: cloudIcon}, {i: dropIcon}].map((item, i) => (
                <div className="col-xs-6" key={i}>
                  <Card s="withIcon" onClick={() => this.on(i)}>
                    <h3 className="roomNo">
                      <img className={`icon ${!this.state[`on${i}`] && "off"}`} src={item.i} />
                    </h3>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div>
            <Card s="accent main" onClick={this.checkIn}>
              <div>
                <h2 className="roomNo">
                  ROOM 502
                </h2>
                <h3 className="roomNo">
                  TAP TO CHECK IN
                </h3>
                <img className="icon shadow pos" src={unlockIcon} />
                <img className="icon shadow fab" src={arrowDownIcon} />
              </div>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}

export default Main
