const express = require("express");
const route = express.Router();

route.get("/", (req, res) => {
  return res.render("index.html");
});

module.exports = route;