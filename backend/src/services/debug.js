import mqtt from "mqtt"

// const MQTT_URL = "mqtt://localhost:1883"

const client = mqtt.connect()

client.subscribe("control")

class DebugService {
  setup(app) {
    this.app = app
  }

  find = () => {
    // TODO: Do something
    console.log("INCOMING CHECK-IN REQUEST")
    // client.publish("control", "2")
    return Promise.resolve({
      status: 200,
      name: "Phoomparin Mano"
    })
  }

  create = ({device, state = false}) => {
    console.log(`DEVICE ${device} STATE CHANGE to ${state}`)

    if (state) {
      client.publish("control", "1")
    } else {
      client.publish("control", "3")
    }

    return Promise.resolve({
      status: 200,
      mode: state,
      of: device
    })
  }
}

export default function debug() {
  this.use("debug", new DebugService())
}
