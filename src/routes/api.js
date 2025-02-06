const express = require("express");
const userController = require("../controllers/userController.js");
const router = express.Router();

router.post("/registration", userController.registration);

module.exports = router;
