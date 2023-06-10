// IMPORTS
const express = require("express")
const app = express()

// ROUTES
app.get("/", (req, res) => {
    res.send("Welcome to the Gitpub App!")
})

// HEY, LISTEN!!
app.listen(3000, () => {
    console.log("Listening on Port 3000")
})