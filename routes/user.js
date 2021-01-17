const express = require("express");
const router = express.Router();
const userControoler = require("../controllers/api/v1/userController");
router.post("/register", userControoler.register);
router.post("/login", userControoler.login);

module.exports = router;
