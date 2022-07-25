const express = require("express");
const routes = require("./routes");
const nunjucks = require("nunjucks");
const app = express();

app.use(express.static("public"));

nunjucks.configure("views", {
  express: app,
  autoescape: true,
  noCache: true
});

app.use(routes);

app.listen(3000, () => {
  console.log("http://localhost:3000");
  console.log("Server is working!");
});