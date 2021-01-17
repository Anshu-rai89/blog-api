const express = require("express");
const port = 8000;

const app = express();

const db = require("./config/mongoose");
const passport = require("passport");
const passportjwt = require("./config/passport-jwt");
//Middlewares
app.use(express.json());

app.use("/", require("./routes"));

//listening to server

app.listen(port, function (err) {
  if (err) {
    console.log("error in running the server");
    return;
  }
  console.log("server is up and running on port:", port);
  return;
});
