import feathers from "feathers"

import middleware from "./middleware"
import services from "./services"

const app = feathers()

app.configure(middleware)
app.configure(services)

app.listen(3001)
