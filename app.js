const express = require("express");
const path = require("path");
const app = express();
const sequelize = require("sequelize");
const db = require("./database/models");
require("dotenv").config();

// const db = require("./models");
// require("dotenv").config();

// allows for rich objects and arrays to be encoded into the URL-encoded format,
// /allowing for a JSON-like experience with URL-encoded.
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// app.listen(3000, (req, res) => {
//   console.log("listening on port 3000");
// });

// app.get("/", (req, res) => {
//   res.send("route /");
// });
// for future storage using aws and pg
db.sequelize.sync().then(() => {
  app.listen(3000, (req, res) => {
    console.log("listening on port 3000");
  });

  require("./bootfiles/db")();
  require("./bootfiles/routes")(app);
  app.get("/", (req, res) => {
    res.send("welcome to home page");
  });
});
