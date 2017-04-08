import React, {Component} from "react"

import api from "../../client/api"

import stopwatchIcon from "./soccer.svg"
import arrowDownIcon from "./arrowdown.svg"
import closeIcon from "./close.svg"

import monitorIcon from "./monitor.png"
import lampIcon from "./lamp.png"
import cloudIcon from "./cloud.png"
import dropIcon from "./dropper.png"

import phoneIcon from "./phone.svg"
import wifiIcon from "./wifi.svg"
import wineIcon from "./wine.svg"
import heartIcon from "./heart.svg"

import creditIcon from "./credit.svg"

import loginIcon from "./login.svg"
import logoutIcon from "./logout.svg"

// import roomImg from "./room.jpg"

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

const RoomCard = () => (
  <div className="card roomCard grayscale">
    <div className="row full">
      {[wifiIcon, wineIcon, phoneIcon, creditIcon].map(e => (
        <div className="col-xs-3">
          <div className="iconFlex">
            <img className="roomIcon" src={e} />
          </div>
        </div>
      ))}
    </div>
  </div>
)

const InfoCard = ({icon, children}) => (
  <Card s="wifi">
    <div className="row full">
      <div className="col-xs-3">
        <img className="roomIconFlat wifiIcon" src={icon} />
      </div>
      <div className="col-xs-9">
        {children}
      </div>
    </div>
  </Card>
)

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      checked: false,
      on0: true,
      on2: true
    }
  }

  checkIn = () => {
    this.setState({checked: true})
    api.service("debug").create({device: 0, state: true})
    api.service("debug").create({device: 2, state: true})
  }

  checkOut = () => {
    this.setState({checked: false})
    for (let i = 0; i <= 4; i++) {
      api.service("debug").create({device: i, state: false}).then(console.log)
    }

  }

  on = i => {
    this.setState({[`on${i}`]: !this.state[`on${i}`]})
    api.service("debug").create({device: i, state: !this.state[`on${i}`]}).then(console.log)
  }

  pay = () => this.setState({pay: !this.state.pay})

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
                  src={logoutIcon}
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
            {/* <RoomControl /> */}
            <InfoCard icon={wifiIcon}>
              <p>
                Wi-Fi Name is: <b>Poseidon Wi-Fi</b> <br />
                Wi-Fi Password is: <b>12345678</b>
              </p>
            </InfoCard>
            <InfoCard icon={phoneIcon}>
              <p>
                Contact us at: <b>081-239-0813</b>
              </p>
            </InfoCard>
          </div>
        ) : (
          <div>
            <Card s="accent main" onClick={this.checkIn}>
              <div>
                <h2 className="roomNo">
                  ROOM 404
                </h2>
                <h3 className="roomNo">
                  TAP TO CHECK IN
                </h3>
                <img className="icon shadow pos" src={loginIcon} />
                <img className="icon shadow fab" src={arrowDownIcon} />
              </div>
            </Card>
            {/* <Card s="roomImage" /> */}
            <RoomCard />
            <div onClick={this.pay}>
              <InfoCard icon={creditIcon}>
                <h2 className="tapPay">
                  Payment Information
                </h2>
              </InfoCard>
            </div>
            <InfoCard icon={loginIcon}>
              <h2 className="tapPay">
                Room is Available
              </h2>
            </InfoCard>
          </div>
        )}
      </div>
      {this.state.pay && (
        <div>
          <div className="black" />
          <div onClick={this.pay} className="paymentMockup" />
        </div>
      )}
    </div>
  )
}

export default Main
