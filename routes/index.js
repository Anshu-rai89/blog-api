const express = require("express");
const Router = express.Router();
Router.use("/user", require("./user"));
Router.use("/api", require("./api"));

module.exports = Router;
