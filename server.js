// IMPORTS
const express = require("express")
const app = express()
const drinks = require("./models/drinks")
const food = require("./models/food")
// ROUTES
app.get("/", (req, res) => {
    res.send("Welcome to the Gitpub App!")
})
app.get("/menu", (req, res) => {
    // DRINKS
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

    // FOOD
    const capFood = food
    capFood.forEach((food) => {
        let unCapFood = food.name.split(' ')
        for(let i =0; i< unCapFood.length; i++){
            unCapFood[i] = unCapFood[i].charAt(0).toUpperCase() + unCapFood[i].slice(1)
            // console.log("uncap for each", unCapDrink[i])
        }
        // console.log("FOR EACH CONSOLE LOG", unCapDrink)
        food.name = unCapFood.join(' ')
    })
    res.render("index.ejs", {drinks:capitalDrinks, food:capFood})
})
app.get("/drinks/:id", (req, res) => {
    const id = req.params.id
    drinks[id].image = drinks[id].image + '.png'
    // console.log(drinks[id].image)
    let consumable = drinks
    res.render("show.ejs", {consumable, id})
})

app.get("/food/:id", (req, res) => {
    const id = req.params.id
    food[id].image = food[id].image + '.png'
    // console.log(drinks[id].image)
    let consumable = food
    res.render("show.ejs", {consumable, id})
})

// HEY, LISTEN!!
app.listen(3000, () => {
    console.log("Listening on Port 3000")
})