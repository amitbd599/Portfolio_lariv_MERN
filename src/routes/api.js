const express = require("express");
const userController = require("../controllers/userController.js");
const authVerification = require("../middlewares/authVerification.js");
const router = express.Router();

router.post("/registration", userController.registration);
router.post("/login", userController.login);
router.post("/user-update", authVerification, userController.userUpdate);

module.exports = router;
