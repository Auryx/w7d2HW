// IMPORTS
const express = require("express")
const app = express()
const drinks = require("./models/drinks")
// ROUTES
app.get("/", (req, res) => {
    res.send("Welcome to the Gitpub App!")
})
app.get("/drinks", (req, res) => {
    res.send(drinks)
})
// HEY, LISTEN!!
app.listen(3000, () => {
    console.log("Listening on Port 3000")
})