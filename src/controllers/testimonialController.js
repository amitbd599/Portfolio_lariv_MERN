const mongoose = require("mongoose");
const testimonialModel = require("../models/testimonialModel");
const ObjectId = mongoose.Types.ObjectId;

// create testimonial
exports.createTestimonial = async (req, res) => {
  try {
    const { clientName, address, img, reviewText } = req.body;
    const result = await testimonialModel.create({
      clientName,
      address,
      img,
      reviewText,
    });

    return res.status(201).json({
      success: true,
      data: result,
      message: "Testimonial add successful.",
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      // Mongoose validation errors
      const messages = Object.values(error.errors).map((err) => err.message);
      return res.status(400).json({ success: false, message: messages[0] });
    }

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.toString(),
    });
  }
};

// get all testimonial
exports.getAllTestimonial = async (req, res) => {
  try {
    let project = {
      $project: {
        _id: 1,
        clientName: 1,
        address: 1,
        img: 1,
        reviewText: 1,
        date: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } },
      },
    };
    const result = await testimonialModel.aggregate([project]);

    return res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.toString(),
    });
  }
};

// get single testimonial
exports.getSingleTestimonial = async (req, res) => {
  try {
    let id = new ObjectId(req.params.id);

    let match = {
      $match: { _id: id },
    };
    let project = {
      $project: {
        _id: 0,
        clientName: 1,
        address: 1,
        img: 1,
        reviewText: 1,
        date: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } },
      },
    };
    const result = await testimonialModel.aggregate([match, project]);

    return res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.toString(),
    });
  }
};

//  delete testimonial
exports.deleteSingleTestimonial = async (req, res) => {
  try {
    let id = new ObjectId(req.params.id);
    const result = await testimonialModel.deleteOne({ _id: id });

    if (result.deletedCount === 0) {
      return res.status(404).json({
        success: false,
        message: "Testimonial not found.",
      });
    }

    return res.status(200).json({
      success: true,
      data: result,
      message: "Testimonial delete successful.",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.toString(),
    });
  }
};

// get update testimonial
exports.updateSingleTestimonial = async (req, res) => {
  try {
    let id = new ObjectId(req.params.id);
    const { clientName, address, img, reviewText } = req.body;
    const result = await testimonialModel.findByIdAndUpdate(
      { _id: id },
      { clientName, address, img, reviewText },
      { new: true, runValidators: true } // Ensures validation is triggered
    );

    if (result.modifiedCount === 0) {
      return res.status(404).json({
        success: false,
        message: "Testimonial not update.",
      });
    }

    return res.status(200).json({
      success: true,
      data: result,
      message: "Testimonial update successful.",
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      // Mongoose validation errors
      const messages = Object.values(error.errors).map((err) => err.message);
      return res.status(400).json({ success: false, message: messages[0] });
    }

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.toString(),
    });
  }
};
