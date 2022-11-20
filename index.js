const express = require("express")

const app = express()
const port = process.env.port || 3002

app.get("/", (req, res) => {
    return res.send("Hello world")
})

app.listen(port, () => {
    console.log("Server serve in port " + port)
})