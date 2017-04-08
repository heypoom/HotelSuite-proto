class DebugService {
  setup(app) {
    this.app = app
  }

  find = () => {
    // TODO: Do something
    console.log("INCOMING CHECK-IN REQUEST")
    return Promise.resolve({
      status: 200,
      name: "Phoomparin Mano"
    })
  }

  create = ({device, state}) => {
    console.log(`DEVICE ${device} STATE CHANGE to ${state}`)
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
