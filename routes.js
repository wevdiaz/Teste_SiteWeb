const express = require("express")
const route = express.Router()

route.get("/", (req, res) => {
  console.log("Falta renderizar a index!")
  return res.render("index.html")
})

route.get("/teste", (req, res) => {
  return res.send("Será que foi?")
})

module.exports = route
