// IMPORTS
const express = require("express")
const app = express()
const drinks = require("./models/drinks")
// ROUTES
app.get("/", (req, res) => {
    res.send("Welcome to the Gitpub App!")
})
app.get("/drinks", (req, res) => {
    const capitalDrinks = drinks
    capitalDrinks.forEach((drink) => {
        let unCapDrink = drink.name.split(' ')
        for(let i =0; i< unCapDrink.length; i++){
            unCapDrink[i] = unCapDrink[i].charAt(0).toUpperCase() + unCapDrink[i].slice(1)
            // console.log("uncap for each", unCapDrink[i])
        }
        // console.log("FOR EACH CONSOLE LOG", unCapDrink)
        drink.name = unCapDrink.join(' ')
    })
    // console.log("ROUTE CONSOLE LOG",capitalDrinks)
    res.render("index.ejs", {drinks:capitalDrinks})
})
app.get("/drinks/:id", (req, res) => {
    res.send(req.params.id)
})
// HEY, LISTEN!!
app.listen(3000, () => {
    console.log("Listening on Port 3000")
})