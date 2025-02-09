const express = require("express");
const userController = require("../controllers/userController");
const experienceController = require("../controllers/experienceController");
const educationController = require("../controllers/educationController");
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
router.get(
  "/get-single-expenses/:id",
  authVerification,
  experienceController.getSingleExperience
);
router.delete(
  "/delete-single-expenses/:id",
  authVerification,
  experienceController.deleteSingleExperience
);
router.post(
  "/update-single-expenses/:id",
  authVerification,
  experienceController.updateSingleExperience
);

// Education
router.post(
  "/create-education",
  authVerification,
  educationController.createEducation
);
router.get(
  "/get-all-education",
  authVerification,
  educationController.getAllEducation
);
router.get(
  "/get-single-education/:id",
  authVerification,
  educationController.getSingleEducation
);
router.delete(
  "/delete-single-education/:id",
  authVerification,
  educationController.deleteSingleEducation
);
router.post(
  "/update-single-education/:id",
  authVerification,
  educationController.updateSingleEducation
);

module.exports = router;
