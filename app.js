const express = require("express");
const routes = require("./routes");
const nunjucks = require("nunjucks");
const app = express();
const cors = require("cors");

app.use(express.static("public"));

nunjucks.configure("views", {
  express: app,
  autoescape: true,
  noCache: true
});

app.use(cors());
app.use(routes);

app.listen(process.env.PORT || 3000, () => {
  console.log("http://localhost:3000");
  console.log("Server is working!");
});