class DebugService {
  setup(app) {
    this.app = app
  }

  find = () => Promise.resolve({node: "OK"})
}

export default function debug() {
  this.use("debug", new DebugService())
}
