const express = require("express");
const userController = require("../controllers/userController");
const authVerification = require("../middlewares/authVerification");
const router = express.Router();

router.post("/registration", userController.registration);
router.post("/login", userController.login);
router.post("/user-update", authVerification, userController.userUpdate);
router.get("/user-read", authVerification, userController.userRead);

module.exports = router;
