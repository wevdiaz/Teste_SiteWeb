const express = require("express")
const route = express.Router()

route.get("/", (req, res) => {
  return res.json({
    message: "Backend On",
    answer: "Enviar dados",
  })

  // return res.render("index.html")
})

route.get("/teste", (req, res) => {
  return res.send("Será que foi?")
})

route.get("/filme", (req, res) => {
  return res.render("index.html")
})

module.exports = route
