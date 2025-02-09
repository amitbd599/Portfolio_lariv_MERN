const express = require("express");
const userController = require("../controllers/userController");
const experienceController = require("../controllers/experienceController");
const authVerification = require("../middlewares/authVerification");
const router = express.Router();

// user controller
router.post("/registration", userController.registration);
router.post("/login", userController.login);
router.post("/user-update", authVerification, userController.userUpdate);
router.get("/user-read", authVerification, userController.userRead);
router.get("/logout", authVerification, userController.logout);

// Expenses
router.post(
  "/create-expenses",
  authVerification,
  experienceController.createExperience
);
router.get(
  "/get-all-expenses",
  authVerification,
  experienceController.getAllExperience
);

module.exports = router;
