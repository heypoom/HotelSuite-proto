import feathers from "feathers"

import middleware from "./middleware"
import services from "./services"

const app = feathers()

app.configure(middleware)
app.configure(services)

console.log("info", process.env.NODE_ENV)

app.listen(3001)
