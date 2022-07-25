const express = require("express");
const route = express.Router();

route.get("/", (req, res) => {
  return res.send("página no servidor diaz");
});

module.exports = route;