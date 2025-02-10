const express = require("express");
const userController = require("../controllers/userController");
const experienceController = require("../controllers/experienceController");
const educationController = require("../controllers/educationController");
const advantagesController = require("../controllers/advantagesController");
const portfolioController = require("../controllers/portfolioController");
const serviceController = require("../controllers/serviceController");
const testimonialController = require("../controllers/testimonialController");
const blogController = require("../controllers/blogController");
const commentController = require("../controllers/commentController");
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

// Advantages
router.post(
  "/create-advantages",
  authVerification,
  advantagesController.createAdvantages
);
router.get(
  "/get-all-advantages",
  authVerification,
  advantagesController.getAllAdvantages
);
router.get(
  "/get-single-advantages/:id",
  authVerification,
  advantagesController.getSingleAdvantages
);
router.delete(
  "/delete-single-advantages/:id",
  authVerification,
  advantagesController.deleteSingleAdvantages
);
router.post(
  "/update-single-advantages/:id",
  authVerification,
  advantagesController.updateSingleAdvantages
);

// Portfolio
router.post(
  "/create-service",
  authVerification,
  serviceController.createService
);
router.get(
  "/get-all-service",
  authVerification,
  serviceController.getAllService
);
router.get(
  "/get-single-service/:id",
  authVerification,
  serviceController.getSingleService
);
router.delete(
  "/delete-single-service/:id",
  authVerification,
  serviceController.deleteSingleService
);
router.post(
  "/update-single-service/:id",
  authVerification,
  serviceController.updateSingleService
);

// Service
router.post(
  "/create-portfolio",
  authVerification,
  portfolioController.createPortfolio
);
router.get(
  "/get-all-portfolio",
  authVerification,
  portfolioController.getAllPortfolio
);
router.get(
  "/get-single-portfolio/:id",
  authVerification,
  portfolioController.getSinglePortfolio
);
router.delete(
  "/delete-single-portfolio/:id",
  authVerification,
  portfolioController.deleteSinglePortfolio
);
router.post(
  "/update-single-portfolio/:id",
  authVerification,
  portfolioController.updateSinglePortfolio
);

// Testimonial
router.post(
  "/create-testimonial",
  authVerification,
  testimonialController.createTestimonial
);
router.get(
  "/get-all-testimonial",
  authVerification,
  testimonialController.getAllTestimonial
);
router.get(
  "/get-single-testimonial/:id",
  authVerification,
  testimonialController.getSingleTestimonial
);
router.delete(
  "/delete-single-testimonial/:id",
  authVerification,
  testimonialController.deleteSingleTestimonial
);
router.post(
  "/update-single-testimonial/:id",
  authVerification,
  testimonialController.updateSingleTestimonial
);

// Blog
router.post("/create-blog", authVerification, blogController.createBlog);
router.get(
  "/get-all-blog/:limit/:pageNo",
  authVerification,
  blogController.getAllBlog
);
router.get(
  "/get-single-blog/:id",
  authVerification,
  blogController.getSingleBlog
);
router.delete(
  "/delete-single-blog/:id",
  authVerification,
  blogController.deleteSingleBlog
);
router.post(
  "/update-single-blog/:id",
  authVerification,
  blogController.updateSingleBlog
);

// Comment
router.post(
  "/create-comment",
  authVerification,
  commentController.createComment
);
router.get(
  "/get-comment-by-blog/:blogId",
  authVerification,
  commentController.getCommentsByBlog
);

module.exports = router;
