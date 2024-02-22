
const express = require("express")
const mongoose = require('mongoose')
require("dotenv").config({ path: "./.env" })
const core = require("cors")
const path = require("path")

mongoose.connect(process.env.MONGO_URL)
const app = express()
app.use(express.json())

app.use(express.static(path.join(__dirname, "dist"))) //nanter hi line add
app.use(core())


app.use("/api/test", require("./routes/emailRoutes"))

app.use("*", (req, res) => {
    req.sendFile(path.join(__dirname, "dist", "index.html"))
    res.status(404).json({ message: "Resource Not Found" })
})


// last ha path 404
app.use((err, req, res) => {
    res.status(500).json({ message: err.message || "Something went wrong" })
})
mongoose.connection.once("open", () => {
    console.log("MONGOOSe CONNECTED")

    app.listen(process.env.PORT, console.log("SERVER RUNNINg"))
})