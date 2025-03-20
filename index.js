const server = require("./server")
require("dotenv").config()
const port = process.env.PORT || 3030




server.listen(port, (err) => {
    err ? console.log(`Error: ${err}`) : console.log(`Corriendo en http://localhost:${port}`)
})


