const express = require("express");
const router = express.Router();
const blogControoler = require("../../../controllers/api/v1/blogController");
router.get("/getBlog", blogControoler.getBlog);
router.post("/create", blogControoler.create);
module.exports = router;
